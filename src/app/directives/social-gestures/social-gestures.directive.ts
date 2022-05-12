/**
 * By
 * https://medium.com/@JordanBenge/ionic-4-gestures-made-easy-5ce30aa82b7b
 */

import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { GestureController } from '@ionic/angular';

export type gestureNames = 'tap' | 'doubleTap' | 'press' | 'swipe';

export type directionNames = 'up' | 'down' | 'left' | 'right';

export type reportInterval = 'start' | 'live' | 'end';

export interface Gesture {
  name: gestureNames; // The gestureName that you want to use. Defined above.
  interval?: number; // Maximum time in ms between multiple taps
  enabled?: boolean; // Whether the gesture is enabled or not.
  direction?: directionNames[]; // Direction - used to Swipe
  threshold?: number; // the minimum distance before reporting a swipe.
  reportInterval?: reportInterval;
}

/**
 * In component.ts
 *
 * gestureOpts: Gesture[] = [
 * {name: 'tap'},
 * {name: 'doubleTap'},
 * {name: 'press'},
 * {name: 'swipe'},
 *  ];
 */

/**
 * In component.html
 *
 * < ion-card
 * appSocialGestures
 * [gestureOpts]="gestureOpts"
 * (tap)="onTap($event) "
 * (doubleTap)="onDoubleTap($event) "
 * (press)="onPress($event)"
 * (swipe)="onSwipe($event)"
 * (swipeMoveed)="onMoveed($event)"
 * > ... </ ion-card
 */

@Directive({
  selector: '[appSocialGestures]',
})

export class SocialGestureDirective implements OnInit {

  @Input() gestureOpts: Gesture[];
  @Input() debugMode = false;


  // Events we can listen to.
  @Output() tap = new EventEmitter();
  @Output() doubleTap = new EventEmitter();
  @Output() pressStart = new EventEmitter();
  @Output() pressEnd = new EventEmitter();
  @Output() swipe = new EventEmitter();
  @Output() swipeEnd = new EventEmitter();

  tapGesture: Gesture = {
    name: 'tap',
    enabled: false,
    interval: 250,
  };
  doubleTapGesture: Gesture = {
    name: 'doubleTap',
    enabled: false,
    interval: 300,
  };
  pressGesture: Gesture = {
    name: 'press',
    enabled: false,
    interval: 251,

  };
  swipeGesture: Gesture = {
    name: 'swipe',
    enabled: false,
    interval: 250,
    threshold: 15,
    reportInterval: undefined,
    direction: ['right', 'left'],
  };
  DIRECTIVE_GESTURES = [this.tapGesture, this.doubleTapGesture, this.pressGesture, this.swipeGesture];
  GESTURE_CREATED = false;
  lastTap = 0;
  tapCount = 0;
  tapTimeout = null;
  pressTimeout = null;
  isPressing: boolean = false;
  moveTimeout = null;
  isMoving: boolean = false;
  lastSwipeReport = null;

  constructor(private gestureCtrl: GestureController, private el: ElementRef) { }

  ngOnInit() {
    this.initSetupGestures();
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  onPress(touch: TouchEvent) {
    if (!this.pressGesture.enabled) {
      return;
    } // Press is not enabled, don't do anything.
    this.handlePressing(touch.type);
  }

  @HostListener('click', ['$event'])
  handleTaps(e: MouseEvent) {
    const tapTimestamp = Math.floor(e.timeStamp);
    const isDoubleTap = this.lastTap + this.tapGesture.interval > tapTimestamp;
    if ((!this.tapGesture.enabled && !this.doubleTapGesture.enabled) || this.isPressing || this.isMoving) {
      return this.resetTaps();
    }
    this.tapCount++;
    if (isDoubleTap && this.doubleTapGesture.enabled) {
      this.emitTaps();
    } else if (!isDoubleTap) {
      this.tapTimeout = setTimeout(() => this.emitTaps(), this.tapGesture.interval);
    }
    this.lastTap = tapTimestamp;
  }

  /**
   * This will setup the gestures that the user has provided in their Gesture Options.
   */
  private initSetupGestures() {
    this.DIRECTIVE_GESTURES.filter((dGesture: Gesture) => {
      this.gestureOpts.find((gestureOpt: Gesture) => {
        if (dGesture.name === gestureOpt.name) {
          // get values gestureOpts param
          dGesture.enabled = true;

          if (dGesture.name === 'swipe') {
            this.swipeGesture.reportInterval = gestureOpt.reportInterval || dGesture.reportInterval;
            this.swipeGesture.direction = gestureOpt.direction || dGesture.direction;
            this.createGesture();
          } else {
            dGesture.interval = gestureOpt.interval || dGesture.interval;
            dGesture.threshold = gestureOpt.threshold || dGesture.threshold;
          }
        }
      });
    });
  }

  private handleMoving(moveType: string, $event: any) {
    if (this.moveTimeout !== null) {
      clearTimeout(this.moveTimeout);
      this.moveTimeout = null;
    }
    const deltaX = $event.deltaX;
    const deltaY = $event.deltaY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    const reportItvl = this.swipeGesture.reportInterval || 'live';
    const threshold = this.swipeGesture.threshold;
    if (absDeltaX < threshold && absDeltaY < threshold) {  // We haven't moved enough to consider it a swipe.
      return;
    }
    const shouldReport = this.isMoving &&
      (
        (reportItvl === 'start' && this.lastSwipeReport === null) ||
        (reportItvl === 'live') ||
        (reportItvl === 'end' && moveType === 'moveend')
      );
    this.lastSwipeReport = $event.timeStamp;
    if (shouldReport) {
      const emitObj = {
        dirX: undefined,
        dirY: undefined,
        swipeType: moveType,
        ...$event,
      };
      if (absDeltaX > threshold) {
        if (deltaX > 0) {
          emitObj.dirX = 'right';
        } else if (deltaX < 0) {
          emitObj.dirX = 'left';
        }
      }
      if (absDeltaY > threshold) {
        if (deltaY > 0) {
          emitObj.dirY = 'down';
        } else if (deltaY < 0) {
          emitObj.dirY = 'up';
        }
      }
      const dirArray = this.swipeGesture.direction;
      if (dirArray.includes(emitObj.dirX) || dirArray.includes(emitObj.dirY)) {

        if (this.debugMode) {
          console.log(`Swipe`);
        }
        this.swipe.emit(emitObj);
      }
    }
    if ((moveType === 'moveend' && this.lastSwipeReport !== null)) {
      this.isMoving = false;
      this.lastSwipeReport = null;
      this.swipeEnd.emit();

    }
  }

  /**
   * Touch event
   * @param type touchend or touchstart
   */
  private handlePressing(type: string) {
    if (type === 'touchstart') {
      this.pressTimeout = setTimeout(() => {
        this.isPressing = true;
        if (this.debugMode) {
          console.log('PressStart');
        }
        this.pressStart.emit('start');

      }, this.pressGesture.interval); // Considered a press if it's longer than interval (default: 251).
    } else if (type === 'touchend') {
      clearTimeout(this.pressTimeout);
      if (this.isPressing) {
        if (this.debugMode) {
          console.log('PressEnd');
        }
        this.pressEnd.emit('end');
        this.resetTaps(); // Just incase this gets passed as a tap event too.
      }
      // Clicks have a natural delay of 300ms, so we have to account for that, before resetting isPressing.
      // Otherwise a tap event is emitted.
      setTimeout(() => this.isPressing = false, 150);
    }
  }

  /**
   * Observe element gestures
   */
  private createGesture() {
    if (this.GESTURE_CREATED) {
      return;
    }
    const gesture = this.gestureCtrl.create({
      gestureName: 'socialGesture',
      el: this.el.nativeElement,
      onStart: () => {
        if (this.swipeGesture.enabled) {
          this.isMoving = true;
          this.moveTimeout = setInterval(() => {
            this.isMoving = false;
          }, 249);
        }
      },
      onMove: ($event) => {
        if (this.swipeGesture.enabled) {
          this.handleMoving('moving', $event);
        }
      },
      onEnd: ($event) => {
        if (this.swipeGesture.enabled) {
          this.handleMoving('moveend', $event);
        }
      },
    }, true);
    gesture.enable();
    this.GESTURE_CREATED = true;
  }

  /**
   * Send emit tags for clicks
   */
  private emitTaps() {
    if (this.tapCount === 1 && this.tapGesture.enabled) {
      if (this.debugMode) {
        console.log('1 Tap ');
      }
      this.tap.emit();
    } else if (this.tapCount === 2 && this.doubleTapGesture.enabled) {
      if (this.debugMode) {
        console.log('2 Tap');
      }
      this.doubleTap.emit();
    }
    this.resetTaps();
  }

  /**
   * Clear counters and timeouts for taps
   */
  private resetTaps() {
    clearTimeout(this.tapTimeout); // clear the old timeout
    this.tapCount = 0;
    this.tapTimeout = null;
    this.lastTap = 0;
  }
}
