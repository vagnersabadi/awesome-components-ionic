import { DrawerState, FivSearchbar, FivDialog } from '@fivethree/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-any',
  templateUrl: './any.page.html',
  styleUrls: ['./any.page.scss'],
})
export class AnyPage implements OnInit {

  // Search
  searchInput: string;
  small = true;
  states = DrawerState;
  state: DrawerState = DrawerState.Bottom;
  @ViewChild('search', { static: true }) search: FivSearchbar;

  // Dialog
  @ViewChild('dialog', { static: true }) dialog: FivDialog;
  backdrop = true;
  pull = true;
  verticalAlign = 'top';
  horizontalAlign = 'left';
  shape = 'card';
  duration = 3600;
  inDuration = '220';
  outDuration = '180';

  // Fab
  pulse = false;
  vertical = 'bottom';
  horizontal = 'end';
  extended = true;
  visible = true;
  scroll = true;
  mode = 'normal';

  // Icons
  icon = 'md-notifications';
  indicatorValue = 0;
  off = false;
  dot = false;

  // Loading
  modeLoading = 'determinate';
  value = 0;

  constructor() { }

  ngOnInit() {
  }

  // Search
  onSearchInputChanged(event) {
    this.searchInput = event.detail.value;
  }
  closeSearch() {
    this.searchInput = '';
  }
  bottomSheetClose(search: FivSearchbar) {
    search.closeSearchbar();
  }
  checkChanged(event) {
    this.small = event.detail.checked;
  }

  // Dialog
  close() { }
  over() { }

  // Icons
  decrement() {
    if (this.indicatorValue > 0) {
      this.indicatorValue--;
    }
  }
  increment() {
    this.indicatorValue++;
  }

  // Loading
  fabComplete() { }
  buttonComplete() { }
  showHint(refresher) {
    refresher.showHint();
  }
  onRefresh(refresher) {
    setTimeout(() => {
      refresher.completeRefresh();
    }, 2000);
  }
  complete() { }

}
