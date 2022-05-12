import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SocialGestureDirective } from './social-gestures.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [SocialGestureDirective],
    exports: [SocialGestureDirective]
})
export class SocialGestureModule { }
