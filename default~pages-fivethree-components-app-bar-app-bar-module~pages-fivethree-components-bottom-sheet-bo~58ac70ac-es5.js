var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-fivethree-components-app-bar-app-bar-module~pages-fivethree-components-bottom-sheet-bo~58ac70ac"], {
        /***/ "./node_modules/@fivethree/core/fesm2015/fivethree-core.js": 
        /*!*****************************************************************!*\
          !*** ./node_modules/@fivethree/core/fesm2015/fivethree-core.js ***!
          \*****************************************************************/
        /*! exports provided: CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, DrawerState, FabState, FivAppBar, FivAppBarModule, FivAppBarTab, FivAppBarTabContent, FivBackButton, FivBackButtonModule, FivBottomSheet, FivBottomSheetContent, FivBottomSheetModule, FivButton, FivButtonModule, FivButtons, FivButtonsModule, FivCenterModule, FivCollapsableMenuButton, FivCollapsableModule, FivDialog, FivDialogModule, FivDialogService, FivEditableLabel, FivEditableLabelModule, FivExpandable, FivExpandableIndicator, FivExpandableModule, FivFab, FivFabModule, FivFeature, FivFeatureDiscoveryModule, FivGallery, FivGalleryImage, FivGalleryModule, FivIconModule, FivIfModule, FivLazyImage, FivLazyImageModule, FivLoadingContent, FivLoadingContentModule, FivLoadingProgressBar, FivLoadingProgressBarModule, FivLoadingService, FivLoadingSpinnerModule, FivNetworkStatus, FivNetworkStatusModule, FivOverlay, FivOverlayModule, FivOverlayService, FivPasswordInput, FivPasswordInputModule, FivPermissionsModule, FivPopoverModule, FivPullModule, FivRippleModule, FivRouterItem, FivRouterItemModule, FivRoutingStateService, FivSearchbar, FivSearchbarModule, FivStep, FivStepContent, FivStepHeader, FivStepper, FivStepperHorizontal, FivStepperModule, FivViewportModule, FivethreeCoreModule, ImageService, Position, after, before, beforeStyle, colorStyles, easeInBack, easeInBounce, easeInCirc, easeInCubic, easeInElastic, easeInExpo, easeInOutBack, easeInOutBounce, easeInOutCirc, easeInOutCubic, easeInOutElastic, easeInOutExpo, easeInOutQuad, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInQuad, easeInQuart, easeInQuint, easeInSine, easeOutBack, easeOutBounce, easeOutCirc, easeOutCubic, easeOutElastic, easeOutExpo, easeOutQuad, easeOutQuart, easeOutQuint, easeOutSine, elementStyles, fade, fadeIn, fadeOut, fontStyles, fps, fromTo, fromToColor, fromToElement, fromToPadding, fromToPosition, fromToStylePixels, getPosition, getStylePixels, isNavigateable, linear, morph, morphText, paddingStyles, positionStyles, removeStyle, removeStyles, reverse, scale, scaleX, scaleY, scaleYOut, setPosition, slideInDown, slideInLeft, slideInRight, slideInUp, slideOutDown, slideOutLeft, slideOutRight, slideOutUp, transform, transformF, translate, translateX, translateY, translateZ, tween, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR", function () { return CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function () { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerState", function () { return DrawerState; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabState", function () { return FabState; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivAppBar", function () { return FivAppBar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivAppBarModule", function () { return FivAppBarModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivAppBarTab", function () { return FivAppBarTab; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivAppBarTabContent", function () { return FivAppBarTabContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivBackButton", function () { return FivBackButton; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivBackButtonModule", function () { return FivBackButtonModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivBottomSheet", function () { return FivBottomSheet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivBottomSheetContent", function () { return FivBottomSheetContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivBottomSheetModule", function () { return FivBottomSheetModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivButton", function () { return FivButton; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivButtonModule", function () { return FivButtonModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivButtons", function () { return FivButtons; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivButtonsModule", function () { return FivButtonsModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivCenterModule", function () { return FivCenterModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivCollapsableMenuButton", function () { return FivCollapsableMenuButton; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivCollapsableModule", function () { return FivCollapsableModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivDialog", function () { return FivDialog; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivDialogModule", function () { return FivDialogModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivDialogService", function () { return FivDialogService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivEditableLabel", function () { return FivEditableLabel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivEditableLabelModule", function () { return FivEditableLabelModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivExpandable", function () { return FivExpandable; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivExpandableIndicator", function () { return FivExpandableIndicator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivExpandableModule", function () { return FivExpandableModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivFab", function () { return FivFab; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivFabModule", function () { return FivFabModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivFeature", function () { return FivFeature; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivFeatureDiscoveryModule", function () { return FivFeatureDiscoveryModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivGallery", function () { return FivGallery; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivGalleryImage", function () { return FivGalleryImage; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivGalleryModule", function () { return FivGalleryModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivIconModule", function () { return FivIconModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivIfModule", function () { return FivIfModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLazyImage", function () { return FivLazyImage; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLazyImageModule", function () { return FivLazyImageModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLoadingContent", function () { return FivLoadingContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLoadingContentModule", function () { return FivLoadingContentModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLoadingProgressBar", function () { return FivLoadingProgressBar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLoadingProgressBarModule", function () { return FivLoadingProgressBarModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLoadingService", function () { return FivLoadingService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivLoadingSpinnerModule", function () { return FivLoadingSpinnerModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivNetworkStatus", function () { return FivNetworkStatus; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivNetworkStatusModule", function () { return FivNetworkStatusModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivOverlay", function () { return FivOverlay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivOverlayModule", function () { return FivOverlayModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivOverlayService", function () { return FivOverlayService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivPasswordInput", function () { return FivPasswordInput; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivPasswordInputModule", function () { return FivPasswordInputModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivPermissionsModule", function () { return FivPermissionsModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivPopoverModule", function () { return FivPopoverModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivPullModule", function () { return FivPullModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivRippleModule", function () { return FivRippleModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivRouterItem", function () { return FivRouterItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivRouterItemModule", function () { return FivRouterItemModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivRoutingStateService", function () { return FivRoutingStateService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivSearchbar", function () { return FivSearchbar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivSearchbarModule", function () { return FivSearchbarModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStep", function () { return FivStep; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepContent", function () { return FivStepContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepHeader", function () { return FivStepHeader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepper", function () { return FivStepper; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepperHorizontal", function () { return FivStepperHorizontal; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivStepperModule", function () { return FivStepperModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivViewportModule", function () { return FivViewportModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivethreeCoreModule", function () { return FivethreeCoreModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function () { return ImageService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function () { return Position; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function () { return after; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function () { return before; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeStyle", function () { return beforeStyle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyles", function () { return colorStyles; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInBack", function () { return easeInBack; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInBounce", function () { return easeInBounce; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCirc", function () { return easeInCirc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function () { return easeInCubic; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInElastic", function () { return easeInElastic; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInExpo", function () { return easeInExpo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutBack", function () { return easeInOutBack; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutBounce", function () { return easeInOutBounce; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCirc", function () { return easeInOutCirc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function () { return easeInOutCubic; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutElastic", function () { return easeInOutElastic; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutExpo", function () { return easeInOutExpo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function () { return easeInOutQuad; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function () { return easeInOutQuart; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuint", function () { return easeInOutQuint; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutSine", function () { return easeInOutSine; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuad", function () { return easeInQuad; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuart", function () { return easeInQuart; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuint", function () { return easeInQuint; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInSine", function () { return easeInSine; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutBack", function () { return easeOutBack; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutBounce", function () { return easeOutBounce; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCirc", function () { return easeOutCirc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCubic", function () { return easeOutCubic; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutElastic", function () { return easeOutElastic; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutExpo", function () { return easeOutExpo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuad", function () { return easeOutQuad; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuart", function () { return easeOutQuart; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuint", function () { return easeOutQuint; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutSine", function () { return easeOutSine; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementStyles", function () { return elementStyles; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function () { return fade; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function () { return fadeIn; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function () { return fadeOut; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontStyles", function () { return fontStyles; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fps", function () { return fps; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTo", function () { return fromTo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromToColor", function () { return fromToColor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromToElement", function () { return fromToElement; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromToPadding", function () { return fromToPadding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromToPosition", function () { return fromToPosition; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromToStylePixels", function () { return fromToStylePixels; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function () { return getPosition; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStylePixels", function () { return getStylePixels; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavigateable", function () { return isNavigateable; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function () { return linear; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "morph", function () { return morph; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "morphText", function () { return morphText; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingStyles", function () { return paddingStyles; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionStyles", function () { return positionStyles; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStyle", function () { return removeStyle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function () { return removeStyles; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function () { return reverse; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function () { return scale; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleX", function () { return scaleX; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleY", function () { return scaleY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleYOut", function () { return scaleYOut; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPosition", function () { return setPosition; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInDown", function () { return slideInDown; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInLeft", function () { return slideInLeft; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInRight", function () { return slideInRight; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInUp", function () { return slideInUp; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutDown", function () { return slideOutDown; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutLeft", function () { return slideOutLeft; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutRight", function () { return slideOutRight; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutUp", function () { return slideOutUp; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function () { return transform; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformF", function () { return transformF; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function () { return translate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateX", function () { return translateX; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateY", function () { return translateY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateZ", function () { return translateZ; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function () { return tween; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function () { return FivIcon; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function () { return FivCenter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function () { return FivFeatureDiscovery; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function () { return FivRipple; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function () { return FivLoadingSpinner; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function () { return FivCollapsableMenu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function () { return FivOverlayContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function () { return FivPull; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function () { return FivGalleryToolbar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function () { return FivGalleryToolbarContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function () { return FivIfPlatform; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function () { return FivLoadingRefresherContent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function () { return FivPopover; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function () { return FivPermissions; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function () { return FivViewport; });
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @enum {number} */
            var DrawerState = {
                Bottom: 0,
                Docked: 1,
                Top: 2,
            };
            DrawerState[DrawerState.Bottom] = 'Bottom';
            DrawerState[DrawerState.Docked] = 'Docked';
            DrawerState[DrawerState.Top] = 'Top';
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivBottomSheetContent = /** @class */ (function () {
                /**
                 * @param {?} sanitizer
                 */
                function FivBottomSheetContent(sanitizer) {
                    this.sanitizer = sanitizer;
                    this.rounded = true;
                    this.handle = true;
                    this.float = true;
                    this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.states = DrawerState;
                    this.shouldBounce = true;
                    this.panning = false;
                }
                Object.defineProperty(FivBottomSheetContent.prototype, "isRounded", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        switch (this.currentState) {
                            case DrawerState.Top:
                                return false;
                            case DrawerState.Docked:
                                return this.rounded;
                            case DrawerState.Bottom:
                                return this.rounded && !this.float;
                        }
                        return true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivBottomSheetContent.prototype, "styles", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        if (!(this.float && this.currentState === DrawerState.Bottom)) {
                            return this.sanitizer
                                .bypassSecurityTrustStyle("box-shadow: 0 4px 16px rgba(0, 0, 0, .12);\n                                                      border-top: 1px solid var(--ion-color-light);");
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivBottomSheetContent.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivBottomSheetContent.prototype.ngAfterViewInit = function () {
                    this.content.scrollEvents = true;
                };
                /**
                 * @param {?} state
                 * @return {?}
                 */
                FivBottomSheetContent.prototype.updateState = function (state) {
                    this.currentState = state;
                };
                /**
                 * @return {?}
                 */
                FivBottomSheetContent.prototype.click = function () {
                    this.fivClick.emit();
                };
                return FivBottomSheetContent;
            }());
            FivBottomSheetContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-bottom-sheet-content',
                            template: "<div class=\"bsc-wrapper\">\n  <span (click)=\"click()\" *ngIf=\"currentState !== states.Top && handle\"\n    [fivCenter]=\"{vertical: false, horizontal: true}\" class=\"handle\"></span>\n  <div [ngClass]=\"{'margin': handle}\" class=\"content\">\n    <ion-content [scrollY]=\"currentState === 2 && shouldBounce && !panning\">\n      <ng-content>\n\n      </ng-content>\n    </ion-content>\n\n  </div>\n</div>",
                            styles: [":host{display:block;width:100%;height:100%;--fiv-border-radius:12px;--fiv-padding:20px;padding-top:var(--fiv-padding)}.bsc-wrapper{width:100%;height:100%}:host.rounded{border-top-left-radius:var(--fiv-border-radius);border-top-right-radius:var(--fiv-border-radius)}.handle{display:block;background:var(--ion-color-light);border-radius:12px;top:8px;width:32px;height:8px;position:absolute}.content{height:100%}"]
                        }] }
            ];
            /** @nocollapse */
            FivBottomSheetContent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
            ]; };
            FivBottomSheetContent.propDecorators = {
                rounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                handle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                float: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"],] }],
                isRounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.rounded',] }],
                styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['style',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @record
             */
            function PanEvent() { }
            if (false) { }
            var FivBottomSheet = /** @class */ (function () {
                /**
                 * @param {?} _element
                 * @param {?} _renderer
                 * @param {?} _domCtrl
                 * @param {?} _platform
                 */
                function FivBottomSheet(_element, _renderer, _domCtrl, _platform) {
                    this._element = _element;
                    this._renderer = _renderer;
                    this._domCtrl = _domCtrl;
                    this._platform = _platform;
                    this.dockedHeight = 80;
                    this.shouldBounce = true;
                    this.distanceTop = 56;
                    this.transition = '0.25s';
                    this.state = DrawerState.Bottom;
                    this.bounceThreshold = 40;
                    this.panThreshold = 20;
                    this.panEnabled = true;
                    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivDocked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.scrollTop = 0;
                    this.$onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                }
                /**
                 * @return {?}
                 */
                FivBottomSheet.prototype.ngOnDestroy = function () {
                    this.$onDestroy.next();
                };
                /**
                 * @return {?}
                 */
                FivBottomSheet.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this._setDrawerState(this.state);
                    this.content.shouldBounce = this.shouldBounce;
                    /** @type {?} */
                    var touchmove = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._element.nativeElement, 'touchmove', {
                        passive: true
                    });
                    /** @type {?} */
                    var touchend = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._element.nativeElement, 'touchend', {
                        passive: true
                    }), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._element.nativeElement, 'touchcancel', {
                        passive: true
                    }));
                    /** @type {?} */
                    var getScrollContent = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.content.content.getScrollElement());
                    /** @type {?} */
                    var scroll = this.content.content.ionScroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                     * @param {?} el
                     * @return {?}
                     */function (/**
                     * @param {?} el
                     * @return {?}
                     */ el) { return (_this.scrollTop = el.detail.scrollTop); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.$onDestroy));
                    scroll.subscribe();
                    this.content.content.ionScrollEnd
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                 * @param {?} el
                 * @return {?}
                 */function (/**
                 * @param {?} el
                 * @return {?}
                 */ el) { return _this.scrollTop === 0 && _this.state === DrawerState.Top; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                     * @return {?}
                     */function () { return _this.content.content.scrollByPoint(0, 1, 0); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.$onDestroy))
                        .subscribe();
                    /** @type {?} */
                    var canStart = touchmove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @return {?}
                     */function () { return _this.scrollTop === 0; })));
                    /** @type {?} */
                    var start = canStart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                     * @param {?} s
                     * @return {?}
                     */function (s) { return _this._handlePanStart(s); })));
                    /** @type {?} */
                    var pan = start.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @return {?}
                     */function () { return _this.panEnabled; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(( /**
                     * @return {?}
                     */function () { return touchmove; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                     * @param {?} tm
                     * @return {?}
                     */function (tm) { return _this.calculatePanEvent(tm); })));
                    /** @type {?} */
                    var handlePan = pan.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} p
                     * @return {?}
                     */function (/**
                     * @param {?} p
                     * @return {?}
                     */ p) { return Math.abs(p.distance) > _this.panThreshold; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                     * @param {?} tm
                     * @return {?}
                     */function (/**
                     * @param {?} tm
                     * @return {?}
                     */ tm) { return _this._handlePan(tm); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(touchend), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["repeat"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.$onDestroy));
                    /** @type {?} */
                    var handleBackPan = pan
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                 * @param {?} p
                 * @return {?}
                 */function (/**
                 * @param {?} p
                 * @return {?}
                 */ p) { return Math.abs(p.distance) <= _this.panThreshold && _this.content.panning; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                     * @param {?} tm
                     * @return {?}
                     */function (/**
                     * @param {?} tm
                     * @return {?}
                     */ tm) { return _this._handlePan(tm); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(touchend), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["repeat"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.$onDestroy))
                        .subscribe();
                    handlePan
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                 * @return {?}
                 */function () { return (_this.content.panning = true); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["repeatWhen"])(( /**
                     * @return {?}
                     */function () { return touchend; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.$onDestroy))
                        .subscribe();
                    handlePan
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(( /**
                 * @return {?}
                 */function () { return touchend; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(pan), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                     * @return {?}
                     */function () { return _this.content.content.scrollByPoint(0, 1, 0); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                     * @return {?}
                     */function () { return (_this.content.panning = false); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                     * @param {?} ev
                     * @return {?}
                     */function (/**
                     * @param {?} ev
                     * @return {?}
                     */ ev) { return ev[1]; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["repeat"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.$onDestroy))
                        .subscribe(( /**
                 * @param {?} ev
                 * @return {?}
                 */function (/**
                 * @param {?} ev
                 * @return {?}
                 */ ev) { return _this._handlePanEnd(ev); }));
                };
                /**
                 * @param {?} changes
                 * @return {?}
                 */
                FivBottomSheet.prototype.ngOnChanges = function (changes) {
                    if (!changes.state) {
                        return;
                    }
                    this._setDrawerState(changes.state.currentValue);
                    this.updateContent(changes.state.currentValue);
                };
                /**
                 * @param {?} state
                 * @return {?}
                 */
                FivBottomSheet.prototype.updateContent = function (state) {
                    if (this.content) {
                        this.content.updateState(state);
                    }
                };
                /**
                 * @private
                 * @param {?} state
                 * @return {?}
                 */
                FivBottomSheet.prototype._setDrawerState = function (state) {
                    this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
                    switch (state) {
                        case DrawerState.Bottom:
                            this.content.content.scrollToTop(0);
                            this._setTranslateY('100vh');
                            break;
                        case DrawerState.Docked:
                            this.content.content.scrollToTop(0);
                            this._setTranslateY(this._platform.height() - this.dockedHeight + 'px');
                            break;
                        default:
                            this._setTranslateY(this.distanceTop + 'px');
                    }
                };
                /**
                 * @private
                 * @param {?} event
                 * @return {?}
                 */
                FivBottomSheet.prototype._handlePanStart = function (event) {
                    this._startPositionTop = this.getCurrentTop();
                    this._startPositionOffset = event.touches[0].pageY;
                };
                /**
                 * @return {?}
                 */
                FivBottomSheet.prototype.getCurrentTop = function () {
                    return this._element.nativeElement.getBoundingClientRect().top;
                };
                /**
                 * @private
                 * @param {?} ev
                 * @return {?}
                 */
                FivBottomSheet.prototype._handlePanEnd = function (ev) {
                    if (this.shouldBounce) {
                        this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
                        switch (this.state) {
                            case DrawerState.Docked:
                                this._handleDockedPanEnd(ev);
                                break;
                            case DrawerState.Top:
                                this._handleTopPanEnd(ev);
                                break;
                            default:
                                this._handleBottomPanEnd(ev);
                        }
                    }
                    this.stateChange.emit(this.state);
                };
                /**
                 * @private
                 * @param {?} ev
                 * @return {?}
                 */
                FivBottomSheet.prototype._handleTopPanEnd = function (ev) {
                    if (ev.distance > this.bounceThreshold) {
                        if (this.state !== DrawerState.Docked) {
                            this.state = DrawerState.Docked;
                            this.fivDocked.emit(this);
                        }
                    }
                    else {
                        this._setTranslateY(this.distanceTop + 'px');
                    }
                };
                /**
                 * @private
                 * @param {?} ev
                 * @return {?}
                 */
                FivBottomSheet.prototype._handleDockedPanEnd = function (ev) {
                    /** @type {?} */
                    var absDeltaY = Math.abs(ev.distance);
                    if (absDeltaY > this.bounceThreshold && ev.distance < 0) {
                        if (this.state !== DrawerState.Top) {
                            this.state = DrawerState.Top;
                            this.fivOpen.emit();
                        }
                    }
                    else if (absDeltaY > this.bounceThreshold && ev.distance > 0) {
                        if (this.state !== DrawerState.Bottom) {
                            this.state = DrawerState.Bottom;
                            this.fivClose.emit();
                        }
                    }
                    else {
                        this._setTranslateY(this._platform.height() - this.dockedHeight + 'px');
                    }
                };
                /**
                 * @private
                 * @param {?} ev
                 * @return {?}
                 */
                FivBottomSheet.prototype._handleBottomPanEnd = function (ev) {
                    if (-ev.distance > this.bounceThreshold) {
                        if (this.state !== DrawerState.Docked) {
                            this.state = DrawerState.Docked;
                            this.fivDocked.emit();
                        }
                    }
                    else {
                        this._setTranslateY('100vh');
                    }
                };
                /**
                 * @param {?} ev
                 * @return {?}
                 */
                FivBottomSheet.prototype.calculatePanEvent = function (ev) {
                    return {
                        currentOffset: ev.touches[0].pageY,
                        startOffset: this._startPositionOffset,
                        startTop: this._startPositionTop,
                        currentTop: this.getCurrentTop(),
                        distance: ev.touches[0].pageY - this._startPositionOffset,
                        touch: ev
                    };
                };
                /**
                 * @private
                 * @param {?} event
                 * @return {?}
                 */
                FivBottomSheet.prototype._handlePan = function (event) {
                    this._renderer.setStyle(this._element.nativeElement, 'transition', 'none');
                    if (event.currentTop >= 0 && event.currentTop <= this._platform.height()) {
                        /** @type {?} */
                        var newTop = this._startPositionTop + event.distance;
                        if (newTop >= this.distanceTop) {
                            this._setTranslateY(newTop + 'px');
                        }
                        else if (newTop <= this.distanceTop && this.content.panning) {
                            this._setTranslateY(this.distanceTop + 'px');
                            this.content.content.scrollToPoint(0, 0 - newTop, 0);
                        }
                        return event;
                    }
                };
                /**
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                FivBottomSheet.prototype._setTranslateY = function (value) {
                    var _this = this;
                    this._domCtrl.write(( /**
                     * @return {?}
                     */function () {
                        _this._renderer.setStyle(_this._element.nativeElement, 'transform', 'translateY(' + value + ')');
                    }));
                };
                /**
                 * @return {?}
                 */
                FivBottomSheet.prototype.open = function () {
                    this.state = DrawerState.Top;
                    this._setDrawerState(this.state);
                    this.updateContent(this.state);
                };
                /**
                 * @return {?}
                 */
                FivBottomSheet.prototype.close = function () {
                    this.state = DrawerState.Bottom;
                    this._setDrawerState(this.state);
                    this.updateContent(this.state);
                };
                /**
                 * @return {?}
                 */
                FivBottomSheet.prototype.dock = function () {
                    this.state = DrawerState.Docked;
                    this._setDrawerState(this.state);
                    this.updateContent(this.state);
                };
                return FivBottomSheet;
            }());
            FivBottomSheet.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-bottom-sheet',
                            template: "<div class=\"fiv-bottom-drawer-scrollable-content\" no-bounce>\n  <ng-content></ng-content>\n</div>",
                            styles: [":host{width:100%;height:100%;position:absolute;left:0;z-index:11!important;background-color:#fff;-webkit-transform:translateY(100vh);transform:translateY(100vh)}.fiv-bottom-drawer-scrollable-content{width:100%;height:100%}"]
                        }] }
            ];
            /** @nocollapse */
            FivBottomSheet.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["DomController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"] }
            ]; };
            FivBottomSheet.propDecorators = {
                dockedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                shouldBounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                distanceTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                transition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                bounceThreshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                panThreshold: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                panEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivDocked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [FivBottomSheetContent,] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivCenter = /** @class */ (function () {
                /**
                 * @param {?} sanitizer
                 */
                function FivCenter(sanitizer) {
                    this.sanitizer = sanitizer;
                    this.vertical = true;
                    this.horizontal = true;
                }
                Object.defineProperty(FivCenter.prototype, "myStyle", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        // tslint:disable-next-line:max-line-length
                        /** @type {?} */
                        var style = "position: absolute; " + (this.vertical && this.horizontal
                            ? 'top: 50%; left: 50%; transform: translateY(-50%) translateX(-50%);'
                            : this.vertical
                                ? 'top: 50%; transform: translateY(-50%);'
                                : 'left: 50%; transform: translateX(-50%);');
                        return this.sanitizer.bypassSecurityTrustStyle(style);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivCenter.prototype, "fivCenter", {
                    /**
                     * @param {?} center
                     * @return {?}
                     */
                    set: function (center) {
                        if (center) {
                            this.vertical = center.vertical;
                            this.horizontal = center.horizontal;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivCenter.prototype.ngOnInit = function () { };
                return FivCenter;
            }());
            FivCenter.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                            selector: '[fivCenter]'
                        },] }
            ];
            /** @nocollapse */
            FivCenter.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
            ]; };
            FivCenter.propDecorators = {
                myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['style',] }],
                fivCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivCenterModule = /** @class */ (function () {
                function FivCenterModule() {
                }
                return FivCenterModule;
            }());
            FivCenterModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivCenter],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [FivCenter]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivBottomSheetModule = /** @class */ (function () {
                function FivBottomSheetModule() {
                }
                return FivBottomSheetModule;
            }());
            FivBottomSheetModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivBottomSheet, FivBottomSheetContent],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], FivCenterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivBottomSheet, FivBottomSheetContent]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivButton = /** @class */ (function () {
                function FivButton() {
                    this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                FivButton.prototype.ngOnInit = function () { };
                return FivButton;
            }());
            FivButton.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-button',
                            template: "<ion-button [color]=\"color\" [disabled]=\"disabled\">\n  <fiv-icon [name]=\"icon\"></fiv-icon>\n  {{text}}\n</ion-button>",
                            styles: [""]
                        }] }
            ];
            /** @nocollapse */
            FivButton.ctorParameters = function () { return []; };
            FivButton.propDecorators = {
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivIcon = /** @class */ (function () {
                function FivIcon() {
                    this._indicatorValue = 0;
                    this.state = 'normal';
                    this.off = false;
                    this.transitionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.indicatorState = 'scale';
                    this.indicatorValueState = 'scale';
                }
                Object.defineProperty(FivIcon.prototype, "name", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._name;
                    },
                    /**
                     * @param {?} name
                     * @return {?}
                     */
                    set: function (name) {
                        if (this._name) {
                            this.transform(name);
                        }
                        else {
                            this._name = name;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivIcon.prototype, "indicatorValue", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._indicatorValue;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this.transformIndicator(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivIcon.prototype, "dotVisible", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._dotVisible;
                    },
                    /**
                     * @param {?} dotVisible
                     * @return {?}
                     */
                    set: function (dotVisible) {
                        this._dotVisible = dotVisible;
                        if (dotVisible) {
                            this.indicatorState = 'normal';
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivIcon.prototype.ngOnInit = function () { };
                /**
                 * @param {?} name
                 * @return {?}
                 */
                FivIcon.prototype.transform = function (name) {
                    this.temp = name;
                    this.state = 'rotate';
                };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                FivIcon.prototype.transformIndicator = function (value) {
                    if (this.dotVisible) {
                        this._indicatorValue = value;
                        return;
                    }
                    if (value === 0) {
                        this._indicatorValue = value;
                        this.indicatorState = 'normal';
                        this.indicatorValueState = 'scale';
                    }
                    else {
                        this.indicatorState = 'scale';
                        if (this.indicatorValueState === 'scale') {
                            this.indicatorValueState = 'normal';
                            this._indicatorValue = value;
                        }
                        else {
                            this.tempValue = value;
                            this.indicatorValueState = 'scale';
                        }
                    }
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivIcon.prototype.rotateAnimDone = function (event) {
                    if (event.fromState === 'normal' && event.toState === 'rotate') {
                        this._name = this.temp;
                        this.state = 'normal';
                    }
                    if (event.fromState === 'rotate' && event.toState === 'normal') {
                        this.transitionDone.emit(this._name);
                    }
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivIcon.prototype.incrementDone = function (event) {
                    if (event.fromState === 'normal' && event.toState === 'scale') {
                        if (this.tempValue > 0) {
                            this.indicatorValueState = 'normal';
                            this._indicatorValue = this.tempValue;
                        }
                        else {
                            this._indicatorValue = this.tempValue;
                        }
                    }
                };
                return FivIcon;
            }());
            FivIcon.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-icon',
                            template: "<ion-icon [slot]=\"slot\" [@rotateAnim]=\"state\" (@rotateAnim.done)=\"rotateAnimDone($event)\" [name]=\"_name\"\n    [color]=\"color\"></ion-icon>\n<span [@scaleAnim]=\"indicatorState\" *ngIf=\"dotVisible\" class=\"indicator\"></span>\n<span *ngIf=\"_indicatorValue > 0 || dotVisible\" class=\"indicator-background\"></span>\n<span class=\"off-background\" *ngIf=\"off\"></span>\n<span class=\"off\" *ngIf=\"off\"></span>\n<span *ngIf=\"smallIcon && indicatorValue == 0 && !dotVisible\"\n    class=\"indicator-icon\">\n    <ion-icon [color]=\"color\" slot=\"icon-only\" [name]=\"smallIcon\"></ion-icon>\n</span>\n<span *ngIf=\"indicatorValue > 0 && !dotVisible\" [@scaleAnim]=\"indicatorValueState\"\n    (@scaleAnim.done)=\"incrementDone($event)\" class=\"indicator-value\">\n    <span *ngIf=\"indicatorValue <= 9\">{{indicatorValue}}</span>\n    <span *ngIf=\"indicatorValue > 9\">9+</span>\n</span>",
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('rotateAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('normal => rotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-out')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('rotate => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-in')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0', transform: 'scale(0) rotateZ(45deg)' })),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '1', transform: 'scale(1) rotateZ(0deg)' }))
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('scaleAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => normal', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0', transform: 'scale(0)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '1', transform: 'scale(1)' }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('normal => scale', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-out')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('scale => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-in')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('scale', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0', transform: 'scale(0)' })),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '1', transform: 'scale(1)' }))
                                ])
                            ],
                            styles: [":host{--fiv-padding-end:0;--fiv-padding-start:0;--fiv-dot-right:-6px;--fiv-dot-top:-2px;--fiv-color-icon:inherit;--fiv-icon-height:inherit;--fiv-icon-width:inherit;position:relative;display:inline-block}ion-icon{margin:0;font-size:1.8em;color:var(--fiv-color-icon);padding-right:var(--fiv-padding-end);padding-left:var(--fiv-padding-start);height:var(--fiv-icon-height,28px);width:var(--fiv-icon-width,28px)}.indicator{position:absolute;width:var(--fiv-dot-width,8px);height:var(--fiv-dot-height,8px);background-color:var(--fiv-dot-color,var(--fiv-color-indicator,--ion-color-primary));top:calc(var(--fiv-dot-top,0px) + 3px);border-radius:100%;right:calc(var(--fiv-dot-right,4px) + 3px);z-index:12}.indicator-value{position:absolute;min-width:var(--fiv-dot-width,14px);height:var(--fiv-dot-height,14px);background-color:var(--fiv-dot-color,var(--ion-color-primary));color:var(--fiv-dot-color-background,var(--ion-color-light));top:var(--fiv-dot-top,0);border-radius:14px;right:var(--fiv-dot-right,4px);z-index:13}.indicator-value *{position:absolute;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);left:50%;top:50%;font-size:.6em}.indicator-icon{position:absolute;min-width:var(--fiv-dot-width,14px);height:var(--fiv-dot-height,14px);background-color:var(--fiv-dot-color-background,#fff);top:0;border-radius:14px;right:0;z-index:13}.indicator-icon *{position:absolute;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);left:50%;top:50%;font-size:1em}.indicator-background{position:absolute;width:var(--fiv-dot-width,18px);height:var(--fiv-dot-height,18px);background-color:var(--fiv-dot-color-background,var(--ion-color-light));top:calc(var(--fiv-dot-top,0px) - 2px);border-radius:100%;right:calc(var(--fiv-dot-right,4px) - 2px);z-index:11}.off{width:120%;height:2px;background:var(--fiv-color-icon);position:absolute;left:0;-webkit-transform:rotateZ(45deg) translateY(10px) translateX(6px);transform:rotateZ(45deg) translateY(10px) translateX(6px)}.off-background{width:120%;height:2px;background:#000;position:absolute;background-color:var(--fiv-dot-color-background,var(--ion-color-light));left:2px;-webkit-transform:rotateZ(45deg) translateY(10px) translateX(6px);transform:rotateZ(45deg) translateY(10px) translateX(6px)}"]
                        }] }
            ];
            /** @nocollapse */
            FivIcon.ctorParameters = function () { return []; };
            FivIcon.propDecorators = {
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                smallIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                off: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                transitionDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                indicatorValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                dotVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivIconModule = /** @class */ (function () {
                function FivIconModule() {
                }
                return FivIconModule;
            }());
            FivIconModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivIcon],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivIcon]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivButtonModule = /** @class */ (function () {
                function FivButtonModule() {
                }
                return FivButtonModule;
            }());
            FivButtonModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivButton],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], FivIconModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivButton]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivRipple = /** @class */ (function () {
                /**
                 * @param {?} el
                 * @param {?} renderer
                 */
                function FivRipple(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    this.rippleAnimationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.round = false;
                    this.hover = false;
                    this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.rippleAnimationEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(750)).subscribe(( /**
                     * @return {?}
                     */function () {
                        renderer.removeClass(el.nativeElement.querySelector('.ripple'), 'show');
                        renderer.removeClass(el.nativeElement.querySelector('.rippleWrapper'), 'show');
                    }));
                }
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivRipple.prototype.clickEvent = function (event) {
                    this.ripple(event);
                    this.fivClick.emit(event);
                };
                Object.defineProperty(FivRipple.prototype, "isRound", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return !!this.round;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivRipple.prototype, "canHover", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return !!this.hover;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param {?=} event
                 * @return {?}
                 */
                FivRipple.prototype.ripple = function (event) {
                    /** @type {?} */
                    var ripple = this.el.nativeElement.querySelector('.ripple');
                    if (!ripple) {
                        this.rippleFactory();
                    }
                    if (!event) {
                        /** @type {?} */
                        var target = this.el.nativeElement;
                        /** @type {?} */
                        var rect = target.getBoundingClientRect();
                        /** @type {?} */
                        var centerY = rect.top + rect.height / 2;
                        /** @type {?} */
                        var centerX = rect.left + rect.width / 2;
                        event = { pageX: centerX, pageY: centerY };
                    }
                    this.rippleAnimation({ pageX: event.pageX, pageY: event.pageY });
                    return;
                };
                /**
                 * @return {?}
                 */
                FivRipple.prototype.rippleFactory = function () {
                    /** @type {?} */
                    var target = this.el.nativeElement;
                    /** @type {?} */
                    var rect = target.getBoundingClientRect();
                    /** @type {?} */
                    var radius = Math.max(rect.width, rect.height) + 'px';
                    /** @type {?} */
                    var rippleWrapper = this.renderer.createElement('div');
                    this.renderer.addClass(rippleWrapper, 'rippleWrapper');
                    /** @type {?} */
                    var ripple = this.renderer.createElement('span');
                    this.renderer.addClass(ripple, 'ripple');
                    this.renderer.setStyle(ripple, 'height', radius);
                    this.renderer.setStyle(ripple, 'width', radius);
                    this.renderer.appendChild(rippleWrapper, ripple);
                    this.renderer.appendChild(target, rippleWrapper);
                };
                /**
                 * @param {?} __0
                 * @return {?}
                 */
                FivRipple.prototype.rippleAnimation = function (_a) {
                    var pageX = _a.pageX, pageY = _a.pageY;
                    /** @type {?} */
                    var target = this.el.nativeElement;
                    /** @type {?} */
                    var rect = target.getBoundingClientRect();
                    /** @type {?} */
                    var ripple = target.querySelector('.ripple');
                    /** @type {?} */
                    var rippleWrapper = target.querySelector('.rippleWrapper');
                    this.renderer.removeClass(rippleWrapper, 'show');
                    this.renderer.removeClass(ripple, 'show');
                    /** @type {?} */
                    var left = pageX -
                        rect.left -
                        ripple.offsetWidth / 2 -
                        document.body.scrollLeft +
                        'px';
                    /** @type {?} */
                    var top = pageY -
                        rect.top -
                        ripple.offsetHeight / 2 -
                        document.body.scrollTop +
                        'px';
                    this.renderer.setStyle(ripple, 'top', top);
                    this.renderer.setStyle(ripple, 'left', left);
                    this.renderer.addClass(rippleWrapper, 'show');
                    this.renderer.addClass(ripple, 'show');
                    this.rippleAnimationEvent.emit();
                };
                return FivRipple;
            }());
            FivRipple.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            // tslint:disable-next-line:component-selector
                            selector: 'fiv-ripple, [fivRipple]',
                            template: "<ng-content></ng-content>",
                            styles: [":host{display:block;position:relative;--fiv-color-ripple:rgba(0, 0, 0, 0.1)}:host:hover{cursor:pointer}:host.hover:hover{background-color:var(--fiv-color-ripple,rgba(0,0,0,.1))}:host.round{border-radius:100%}.rippleWrapper{position:absolute;top:0;bottom:0;left:0;width:100%;overflow:hidden;border-radius:inherit}.rippleWrapper::before{content:\"\";display:block;height:100%;width:100%;-webkit-transform:scale(0);transform:scale(0)}.rippleWrapper.show::before{transition:opacity 1.5s;-webkit-transform:scale(2);transform:scale(2);opacity:0}.ripple{position:absolute;background:var(--fiv-color-ripple,rgba(0,0,0,.1));border-radius:100%;-webkit-transform:scale(0);transform:scale(0)}.ripple.show{-webkit-animation:.75s ease-out ripple;animation:.75s ease-out ripple}@-webkit-keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}@keyframes ripple{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}"]
                        }] }
            ];
            /** @nocollapse */
            FivRipple.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
            ]; };
            FivRipple.propDecorators = {
                round: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                clickEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['click', ['$event'],] }],
                isRound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.round',] }],
                canHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.hover',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivRippleModule = /** @class */ (function () {
                function FivRippleModule() {
                }
                return FivRippleModule;
            }());
            FivRippleModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivRipple],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [FivRipple]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivGalleryToolbar = /** @class */ (function () {
                function FivGalleryToolbar() {
                    this.position = 'top';
                }
                /**
                 * @return {?}
                 */
                FivGalleryToolbar.prototype.ngOnInit = function () { };
                return FivGalleryToolbar;
            }());
            FivGalleryToolbar.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-gallery-toolbar',
                            template: "<ng-template #ref>\n  <ng-content></ng-content>\n</ng-template>",
                            styles: [""]
                        }] }
            ];
            /** @nocollapse */
            FivGalleryToolbar.ctorParameters = function () { return []; };
            FivGalleryToolbar.propDecorators = {
                content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"],] }],
                position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivOverlayContent = /** @class */ (function () {
                /**
                 * @param {?} sanitizer
                 */
                function FivOverlayContent(sanitizer) {
                    this.sanitizer = sanitizer;
                }
                Object.defineProperty(FivOverlayContent.prototype, "myStyle", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this.priority
                            ? this.sanitizer.bypassSecurityTrustStyle("z-index: " + this.priority)
                            : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivOverlayContent.prototype.ngOnInit = function () { };
                return FivOverlayContent;
            }());
            FivOverlayContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-overlay-content',
                            template: "<ng-content #content></ng-content>",
                            styles: [""]
                        }] }
            ];
            /** @nocollapse */
            FivOverlayContent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
            ]; };
            FivOverlayContent.propDecorators = {
                myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['style',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivOverlayService = /** @class */ (function () {
                /**
                 * @param {?} componentFactoryResolver
                 * @param {?} rendererFactory
                 * @param {?} appRef
                 * @param {?} injector
                 */
                function FivOverlayService(componentFactoryResolver, rendererFactory, appRef, injector) {
                    this.componentFactoryResolver = componentFactoryResolver;
                    this.appRef = appRef;
                    this.injector = injector;
                    this.renderer = rendererFactory.createRenderer(null, null);
                }
                /**
                 * @template T
                 * @param {?} view
                 * @param {?} component
                 * @param {?=} content
                 * @return {?}
                 */
                FivOverlayService.prototype.createOverlay = function (view, component, content) {
                    /** @type {?} */
                    var resolvedContent = this.resolveNgContent(view, content);
                    /** @type {?} */
                    var componentRef = this.componentFactoryResolver
                        .resolveComponentFactory(component)
                        .create(this.injector, resolvedContent);
                    this.appRef.attachView(componentRef.hostView);
                    /** @type {?} */
                    var domElem = ( /** @type {?} */((( /** @type {?} */(componentRef.hostView)))
                        .rootNodes[0]));
                    document.body.appendChild(domElem);
                    return componentRef;
                };
                /**
                 * @private
                 * @template T
                 * @param {?} viewContainerRef
                 * @param {?} content
                 * @return {?}
                 */
                FivOverlayService.prototype.resolveNgContent = function (viewContainerRef, content) {
                    if (!content) {
                        return;
                    }
                    if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
                        /** @type {?} */
                        var viewRef = viewContainerRef.createEmbeddedView(content);
                        return [viewRef.rootNodes];
                    }
                    /** @type {?} */
                    var factory = this.componentFactoryResolver.resolveComponentFactory(content);
                    /** @type {?} */
                    var componentRef = factory.create(this.injector);
                    return [[componentRef.location.nativeElement]];
                };
                return FivOverlayService;
            }());
            FivOverlayService.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                            providedIn: 'root'
                        },] }
            ];
            /** @nocollapse */
            FivOverlayService.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
            ]; };
            /** @nocollapse */ FivOverlayService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function FivOverlayService_Factory() { return new FivOverlayService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["RendererFactory2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["INJECTOR"])); }, token: FivOverlayService, providedIn: "root" });
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivOverlay = /** @class */ (function () {
                /**
                 * @param {?} viewContainer
                 * @param {?} overlay
                 */
                function FivOverlay(viewContainer, overlay) {
                    this.viewContainer = viewContainer;
                    this.overlay = overlay;
                    this.afterInit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this._open = false;
                }
                /**
                 * @param {?=} priority
                 * @param {?=} data
                 * @return {?}
                 */
                FivOverlay.prototype.show = function (priority, data) {
                    var _this = this;
                    if (!this.componentRef) {
                        this.componentRef = this.overlay.createOverlay(this.viewContainer, FivOverlayContent, this.ngContent);
                        this._open = true;
                        this.componentRef.instance.priority = priority;
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.afterInit.emit(data);
                        }), 0);
                        return this.componentRef.instance;
                    }
                };
                /**
                 * @return {?}
                 */
                FivOverlay.prototype.hide = function () {
                    if (this.componentRef) {
                        this.componentRef.destroy();
                        this.componentRef = null;
                        this._open = false;
                    }
                };
                Object.defineProperty(FivOverlay.prototype, "open", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._open;
                    },
                    enumerable: true,
                    configurable: true
                });
                return FivOverlay;
            }());
            FivOverlay.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-overlay',
                            template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>",
                            styles: [""]
                        }] }
            ];
            /** @nocollapse */
            FivOverlay.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
                { type: FivOverlayService }
            ]; };
            FivOverlay.propDecorators = {
                ngContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['content',] }],
                priority: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                afterInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @enum {number} */
            var Key = {
                Backspace: 8,
                Tab: 9,
                Enter: 13,
                Shift: 16,
                Ctrl: 17,
                Alt: 18,
                PauseBreak: 19,
                CapsLock: 20,
                Escape: 27,
                Space: 32,
                PageUp: 33,
                PageDown: 34,
                End: 35,
                Home: 36,
                LeftArrow: 37,
                UpArrow: 38,
                RightArrow: 39,
                DownArrow: 40,
                Insert: 45,
                Delete: 46,
                Zero: 48,
                ClosedParen: 48,
                One: 49,
                ExclamationMark: 49,
                Two: 50,
                AtSign: 50,
                Three: 51,
                PoundSign: 51,
                Hash: 51,
                Four: 52,
                DollarSign: 52,
                Five: 53,
                PercentSign: 53,
                Six: 54,
                Caret: 54,
                Hat: 54,
                Seven: 55,
                Ampersand: 55,
                Eight: 56,
                Star: 56,
                Asterik: 56,
                Nine: 57,
                OpenParen: 57,
                A: 65,
                B: 66,
                C: 67,
                D: 68,
                E: 69,
                F: 70,
                G: 71,
                H: 72,
                I: 73,
                J: 74,
                K: 75,
                L: 76,
                M: 77,
                N: 78,
                O: 79,
                P: 80,
                Q: 81,
                R: 82,
                S: 83,
                T: 84,
                U: 85,
                V: 86,
                W: 87,
                X: 88,
                Y: 89,
                Z: 90,
                LeftWindowKey: 91,
                RightWindowKey: 92,
                SelectKey: 93,
                Numpad0: 96,
                Numpad1: 97,
                Numpad2: 98,
                Numpad3: 99,
                Numpad4: 100,
                Numpad5: 101,
                Numpad6: 102,
                Numpad7: 103,
                Numpad8: 104,
                Numpad9: 105,
                Multiply: 106,
                Add: 107,
                Subtract: 109,
                DecimalPoint: 110,
                Divide: 111,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                NumLock: 144,
                ScrollLock: 145,
                SemiColon: 186,
                Equals: 187,
                Comma: 188,
                Dash: 189,
                Period: 190,
                UnderScore: 189,
                PlusSign: 187,
                ForwardSlash: 191,
                Tilde: 192,
                GraveAccent: 192,
                OpenBracket: 219,
                ClosedBracket: 221,
                Quote: 222,
            };
            Key[Key.Backspace] = 'Backspace';
            Key[Key.Tab] = 'Tab';
            Key[Key.Enter] = 'Enter';
            Key[Key.Shift] = 'Shift';
            Key[Key.Ctrl] = 'Ctrl';
            Key[Key.Alt] = 'Alt';
            Key[Key.PauseBreak] = 'PauseBreak';
            Key[Key.CapsLock] = 'CapsLock';
            Key[Key.Escape] = 'Escape';
            Key[Key.Space] = 'Space';
            Key[Key.PageUp] = 'PageUp';
            Key[Key.PageDown] = 'PageDown';
            Key[Key.End] = 'End';
            Key[Key.Home] = 'Home';
            Key[Key.LeftArrow] = 'LeftArrow';
            Key[Key.UpArrow] = 'UpArrow';
            Key[Key.RightArrow] = 'RightArrow';
            Key[Key.DownArrow] = 'DownArrow';
            Key[Key.Insert] = 'Insert';
            Key[Key.Delete] = 'Delete';
            Key[Key.Zero] = 'Zero';
            Key[Key.ClosedParen] = 'ClosedParen';
            Key[Key.One] = 'One';
            Key[Key.ExclamationMark] = 'ExclamationMark';
            Key[Key.Two] = 'Two';
            Key[Key.AtSign] = 'AtSign';
            Key[Key.Three] = 'Three';
            Key[Key.PoundSign] = 'PoundSign';
            Key[Key.Hash] = 'Hash';
            Key[Key.Four] = 'Four';
            Key[Key.DollarSign] = 'DollarSign';
            Key[Key.Five] = 'Five';
            Key[Key.PercentSign] = 'PercentSign';
            Key[Key.Six] = 'Six';
            Key[Key.Caret] = 'Caret';
            Key[Key.Hat] = 'Hat';
            Key[Key.Seven] = 'Seven';
            Key[Key.Ampersand] = 'Ampersand';
            Key[Key.Eight] = 'Eight';
            Key[Key.Star] = 'Star';
            Key[Key.Asterik] = 'Asterik';
            Key[Key.Nine] = 'Nine';
            Key[Key.OpenParen] = 'OpenParen';
            Key[Key.A] = 'A';
            Key[Key.B] = 'B';
            Key[Key.C] = 'C';
            Key[Key.D] = 'D';
            Key[Key.E] = 'E';
            Key[Key.F] = 'F';
            Key[Key.G] = 'G';
            Key[Key.H] = 'H';
            Key[Key.I] = 'I';
            Key[Key.J] = 'J';
            Key[Key.K] = 'K';
            Key[Key.L] = 'L';
            Key[Key.M] = 'M';
            Key[Key.N] = 'N';
            Key[Key.O] = 'O';
            Key[Key.P] = 'P';
            Key[Key.Q] = 'Q';
            Key[Key.R] = 'R';
            Key[Key.S] = 'S';
            Key[Key.T] = 'T';
            Key[Key.U] = 'U';
            Key[Key.V] = 'V';
            Key[Key.W] = 'W';
            Key[Key.X] = 'X';
            Key[Key.Y] = 'Y';
            Key[Key.Z] = 'Z';
            Key[Key.LeftWindowKey] = 'LeftWindowKey';
            Key[Key.RightWindowKey] = 'RightWindowKey';
            Key[Key.SelectKey] = 'SelectKey';
            Key[Key.Numpad0] = 'Numpad0';
            Key[Key.Numpad1] = 'Numpad1';
            Key[Key.Numpad2] = 'Numpad2';
            Key[Key.Numpad3] = 'Numpad3';
            Key[Key.Numpad4] = 'Numpad4';
            Key[Key.Numpad5] = 'Numpad5';
            Key[Key.Numpad6] = 'Numpad6';
            Key[Key.Numpad7] = 'Numpad7';
            Key[Key.Numpad8] = 'Numpad8';
            Key[Key.Numpad9] = 'Numpad9';
            Key[Key.Multiply] = 'Multiply';
            Key[Key.Add] = 'Add';
            Key[Key.Subtract] = 'Subtract';
            Key[Key.DecimalPoint] = 'DecimalPoint';
            Key[Key.Divide] = 'Divide';
            Key[Key.F1] = 'F1';
            Key[Key.F2] = 'F2';
            Key[Key.F3] = 'F3';
            Key[Key.F4] = 'F4';
            Key[Key.F5] = 'F5';
            Key[Key.F6] = 'F6';
            Key[Key.F7] = 'F7';
            Key[Key.F8] = 'F8';
            Key[Key.F9] = 'F9';
            Key[Key.F10] = 'F10';
            Key[Key.F11] = 'F11';
            Key[Key.F12] = 'F12';
            Key[Key.NumLock] = 'NumLock';
            Key[Key.ScrollLock] = 'ScrollLock';
            Key[Key.SemiColon] = 'SemiColon';
            Key[Key.Equals] = 'Equals';
            Key[Key.Comma] = 'Comma';
            Key[Key.Dash] = 'Dash';
            Key[Key.Period] = 'Period';
            Key[Key.UnderScore] = 'UnderScore';
            Key[Key.PlusSign] = 'PlusSign';
            Key[Key.ForwardSlash] = 'ForwardSlash';
            Key[Key.Tilde] = 'Tilde';
            Key[Key.GraveAccent] = 'GraveAccent';
            Key[Key.OpenBracket] = 'OpenBracket';
            Key[Key.ClosedBracket] = 'ClosedBracket';
            Key[Key.Quote] = 'Quote';
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivGalleryImage = /** @class */ (function () {
                function FivGalleryImage() {
                    this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                FivGalleryImage.prototype.open = function () {
                    this.click.emit(this);
                };
                /**
                 * @return {?}
                 */
                FivGalleryImage.prototype.ngOnInit = function () { };
                return FivGalleryImage;
            }());
            FivGalleryImage.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-gallery-image',
                            template: "<ng-container *ngIf=\"!src\">\n  <ng-content></ng-content>\n</ng-container>\n<fiv-ripple (fivClick)=\"open()\">\n  <img #thumbnail class=\"thumbnail\" [src]=\"src\">\n</fiv-ripple>",
                            styles: [":host{display:block;--max-height:100%;--border-radius:0px;min-height:var(--max-height);--background:var(--ion-color-light);background:var(--background)}.thumbnail{-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;display:block;height:var(--height,auto);max-height:var(--max-height);width:var(--width,100%);border-radius:var(--border-radius)}fiv-ripple{--fiv-color-ripple:rgba(0, 0, 0, 0.5)}"]
                        }] }
            ];
            /** @nocollapse */
            FivGalleryImage.ctorParameters = function () { return []; };
            FivGalleryImage.propDecorators = {
                src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                thumbnail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['thumbnail',] }],
                click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} c
             * @return {?}
             */
            function toRGB(c) {
                /** @type {?} */
                var r = Math.floor(c / (256 * 256));
                /** @type {?} */
                var g = Math.floor(c / 256) % 256;
                /** @type {?} */
                var b = c % 256;
                return "rgb(" + r + "," + g + "," + b + ")";
            }
            /**
             * @param {?} orig
             * @return {?}
             */
            function rgbToHex(orig) {
                /** @type {?} */
                var rgb = parseRgb(orig);
                return rgb && rgb.length === 4
                    ? '#' +
                        ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
                        ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
                        ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
                    : orig;
            }
            /**
             * @param {?} orig
             * @return {?}
             */
            function parseRgb(orig) {
                return orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var positionStyles = ['position', 'top', 'left', 'height', 'width'];
            /** @type {?} */
            var elementStyles = ['border-radius', 'box-shadow'];
            /** @type {?} */
            var fontStyles = ['font-size', 'font-weight'];
            /** @type {?} */
            var colorStyles = ['color', 'background-color', 'border-color'];
            /** @type {?} */
            var paddingStyles = [
                'padding-top',
                'padding-bottom',
                'padding-left',
                'padding-right'
            ];
            /**
             * @param {?} easingFunction
             * @param {?} duration
             * @return {?}
             */
            function tween(easingFunction, duration) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](( /**
                 * @param {?} observer
                 * @return {?}
                 */function (/**
                 * @param {?} observer
                 * @return {?}
                 */ observer) {
                    /** @type {?} */
                    var startTime;
                    /** @type {?} */
                    var id = requestAnimationFrame(( /**
                     * @param {?} time
                     * @return {?}
                     */function sample(time) {
                        startTime = startTime || time;
                        /** @type {?} */
                        var t = time - startTime;
                        if (t < duration) {
                            observer.next(easingFunction(t, 0, 1, duration));
                            id = requestAnimationFrame(sample);
                        }
                        else {
                            observer.next(easingFunction(duration, 0, 1, duration));
                            id = requestAnimationFrame(( /**
                             * @return {?}
                             */function () {
                                observer.complete();
                            }));
                        }
                    }));
                    return ( /**
                     * @return {?}
                     */function () {
                        if (id) {
                            cancelAnimationFrame(id);
                        }
                    });
                }));
            }
            /** @type {?} */
            var fromTo = ( /**
             * @param {?} el
             * @param {?} style
             * @param {?} from
             * @param {?} to
             * @param {?=} m
             * @return {?}
             */function (el, style, from, to, m) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) { return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
             * @param {?} t
             * @return {?}
             */function (/**
             * @param {?} t
             * @return {?}
             */ t) {
                /** @type {?} */
                var te = t * (to - from) + from;
                /** @type {?} */
                var value = m ? m(te) : te + 'px';
                el.nativeElement.style[style] = value;
            }))); }); });
            /** @type {?} */
            var reverse = ( /**
             * @return {?}
             */function () { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) { return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
             * @param {?} t
             * @return {?}
             */function (/**
             * @param {?} t
             * @return {?}
             */ t) { return 1 - t; }))); }); });
            /** @type {?} */
            var before = ( /**
             * @param {?} next
             * @return {?}
             */function (next) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                source
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
             * @return {?}
             */function () { return next(); })))
                    .subscribe();
                return source;
            }); });
            /** @type {?} */
            var beforeStyle = ( /**
             * @param {?} target
             * @param {?} style
             * @param {?} value
             * @return {?}
             */function (target, style, value) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                source
                    .pipe(before(( /**
             * @return {?}
             */function () { return (target.nativeElement.style[style] = value); })))
                    .subscribe();
                return source;
            }); });
            /** @type {?} */
            var after = ( /**
             * @param {?} next
             * @return {?}
             */function (next) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                source
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
             * @return {?}
             */function () { return next(); })))
                    .subscribe();
                return source;
            }); });
            /** @type {?} */
            var removeStyle = ( /**
             * @param {?} el
             * @param {?} style
             * @return {?}
             */function (el, style) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                source.pipe(after(( /**
                 * @return {?}
                 */function () { return (el.nativeElement.style[style] = ''); }))).subscribe();
                return source;
            }); });
            /** @type {?} */
            var removeStyles = ( /**
             * @param {?} el
             * @param {?} style
             * @return {?}
             */function (el, style) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                source
                    .pipe(after(( /**
             * @return {?}
             */function () { return style.forEach(( /**
                 * @param {?} s
                 * @return {?}
                 */function (/**
                 * @param {?} s
                 * @return {?}
                 */ s) { return (el.nativeElement.style[s] = ''); })); })))
                    .subscribe();
                return source;
            }); });
            /** @type {?} */
            var fromToStylePixels = ( /**
             * @param {?} target
             * @param {?} fromEl
             * @param {?} style
             * @return {?}
             */function (target, fromEl, style) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) { return source.pipe(fromTo(target, style, getStylePixels(fromEl, style), getStylePixels(target, style))); }); });
            /** @type {?} */
            var fromToPadding = ( /**
             * @param {?} target
             * @param {?} fromEl
             * @return {?}
             */function (target, fromEl) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                return source.pipe(fromToStylePixels(target, fromEl, 'padding-left'), fromToStylePixels(target, fromEl, 'padding-right'), fromToStylePixels(target, fromEl, 'padding-top'), fromToStylePixels(target, fromEl, 'padding-bottom'), removeStyles(target, paddingStyles));
            }); });
            /** @type {?} */
            var fromToPosition = ( /**
             * @param {?} target
             * @param {?} from
             * @param {?} to
             * @return {?}
             */function (target, from, to) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                target.nativeElement.style.position = 'fixed';
                return source.pipe(fromTo(target, 'top', from.top, to.top), fromTo(target, 'left', from.left, to.left), fromTo(target, 'height', from.height, to.height), fromTo(target, 'width', from.width, to.width), removeStyles(target, positionStyles));
            }); });
            /** @type {?} */
            var fromToElement = ( /**
             * @param {?} target
             * @param {?} fromEl
             * @return {?}
             */function (target, fromEl) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                /** @type {?} */
                var from = getPosition(fromEl);
                /** @type {?} */
                var to = getPosition(target);
                target.nativeElement.style.position = 'fixed';
                target.nativeElement.style.boxShadow = getComputedStyle(fromEl.nativeElement).boxShadow;
                return source.pipe(fromToPosition(target, from, to), fromToStylePixels(target, fromEl, 'border-radius'), removeStyles(target, elementStyles));
            }); });
            /** @type {?} */
            var fromToColor = ( /**
             * @param {?} target
             * @param {?} fromEl
             * @param {?=} style
             * @return {?}
             */function (target, fromEl, style) {
                if (style === void 0) { style = 'color'; }
                return ( /**
                 * @template T
                 * @param {?} source
                 * @return {?}
                 */function (source) {
                    /** @type {?} */
                    var targetColor = getComputedStyle(target.nativeElement).getPropertyValue(style);
                    /** @type {?} */
                    var fromColor = getComputedStyle(fromEl.nativeElement).getPropertyValue(style);
                    /** @type {?} */
                    var tRGB = parseRgb(targetColor).map(( /**
                     * @param {?} v
                     * @return {?}
                     */function (/**
                     * @param {?} v
                     * @return {?}
                     */ v) { return +v; }));
                    /** @type {?} */
                    var fRGB = parseRgb(fromColor).map(( /**
                     * @param {?} v
                     * @return {?}
                     */function (/**
                     * @param {?} v
                     * @return {?}
                     */ v) { return +v; }));
                    return source.pipe(fromTo(target, style, 0, 1, ( /**
                     * @param {?} t
                     * @return {?}
                     */function (/**
                     * @param {?} t
                     * @return {?}
                     */ t) {
                        /** @type {?} */
                        var rgb = "rgb(" + (t * (tRGB[1] - fRGB[1]) + fRGB[1]) + "," + (t *
                            (tRGB[2] - fRGB[2]) +
                            fRGB[2]) + "," + (t * (tRGB[3] - fRGB[3]) + fRGB[3]) + ")";
                        return rgb;
                    })), removeStyles(target, colorStyles));
                });
            });
            /** @type {?} */
            var morph = ( /**
             * @param {?} target
             * @param {?} fromEl
             * @return {?}
             */function (target, fromEl) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                return source.pipe(fromToElement(target, fromEl), fromToPadding(target, fromEl), fromToColor(target, fromEl, 'background-color'));
            }); });
            /** @type {?} */
            var fps = ( /**
             * @return {?}
             */function () { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                /** @type {?} */
                var lastTime = 0;
                /** @type {?} */
                var startTime = 0;
                /** @type {?} */
                var frames = [];
                return source.pipe(before(( /**
                 * @return {?}
                 */function () {
                    lastTime = performance.now();
                    startTime = lastTime;
                })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                 * @return {?}
                 */function () { return frames.push(1000 / (performance.now() - lastTime)); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                 * @return {?}
                 */function () { return (lastTime = performance.now()); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log), after(( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var duration = performance.now() - startTime;
                    /** @type {?} */
                    var f = frames.filter(( /**
                     * @param {?} item
                     * @param {?} pos
                     * @return {?}
                     */function (item, pos) {
                        return frames.indexOf(item) === pos;
                    }));
                    console.log("Total duration: " + duration + "ms");
                    console.log("FRAMES: " + f.length);
                    console.log("MIN: " + Math.min.apply(Math, f));
                    console.log("MAX: " + Math.max.apply(Math, f));
                })));
            }); });
            /** @type {?} */
            var morphText = ( /**
             * @param {?} target
             * @param {?} fromEl
             * @return {?}
             */function (target, fromEl) { return ( /**
             * @template T
             * @param {?} source
             * @return {?}
             */function (source) {
                return source.pipe(fromToElement(target, fromEl), fromToPadding(target, fromEl), fromToColor(target, fromEl), fromToStylePixels(target, fromEl, 'font-size'), fromToStylePixels(target, fromEl, 'font-weight'));
            }); });
            /**
             * @param {?} el
             * @return {?}
             */
            function getPosition(el) {
                /** @type {?} */
                var bounds = el.nativeElement.getBoundingClientRect();
                return {
                    top: bounds.top,
                    left: bounds.left,
                    height: el.nativeElement.clientHeight,
                    width: el.nativeElement.clientWidth
                };
            }
            /**
             * @param {?} el
             * @param {?} r
             * @return {?}
             */
            function setPosition(el, r) {
                el.nativeElement.style.top = r.top + 'px';
                el.nativeElement.style.left = r.left + 'px';
                el.nativeElement.style.height = r.height + 'px';
                el.nativeElement.style.width = r.width + 'px';
                return el;
            }
            /**
             * @param {?} el
             * @param {?} style
             * @return {?}
             */
            function getStylePixels(el, style) {
                return +getComputedStyle(el.nativeElement)
                    .getPropertyValue(style)
                    .match(/\d+/)[0];
            }
            /**
             * @record
             */
            function RectPosition() { }
            if (false) { }
            /** @type {?} */
            var transformF = ( /**
             * @param {?} from
             * @param {?} to
             * @param {?=} m
             * @return {?}
             */function (from, to, m) { return ( /**
             * @template T
             * @param {?} t
             * @return {?}
             */function (t) {
                /** @type {?} */
                var te = t * (to - from) + from;
                return m ? m(te) : "" + te;
            }); });
            /** @type {?} */
            var translateY = ( /**
             * @param {?} from
             * @param {?} to
             * @return {?}
             */function (from, to) {
                return transformF(from, to, ( /**
                 * @param {?} t
                 * @return {?}
                 */function (/**
                 * @param {?} t
                 * @return {?}
                 */ t) { return "translateY(" + t + "%)"; }));
            });
            /** @type {?} */
            var translateX = ( /**
             * @param {?} from
             * @param {?} to
             * @return {?}
             */function (from, to) {
                return transformF(from, to, ( /**
                 * @param {?} t
                 * @return {?}
                 */function (/**
                 * @param {?} t
                 * @return {?}
                 */ t) { return "translateX(" + t + "%)"; }));
            });
            /** @type {?} */
            var translateZ = ( /**
             * @param {?} from
             * @param {?} to
             * @return {?}
             */function (from, to) {
                return transformF(from, to, ( /**
                 * @param {?} t
                 * @return {?}
                 */function (/**
                 * @param {?} t
                 * @return {?}
                 */ t) { return "translateZ(" + t + "%)"; }));
            });
            /** @type {?} */
            var scale = ( /**
             * @param {?} from
             * @param {?} to
             * @return {?}
             */function (from, to) {
                return transformF(from, to, ( /**
                 * @param {?} t
                 * @return {?}
                 */function (/**
                 * @param {?} t
                 * @return {?}
                 */ t) { return "scale(" + t + ")"; }));
            });
            /** @type {?} */
            var scaleX = ( /**
             * @param {?} from
             * @param {?} to
             * @return {?}
             */function (from, to) {
                return transformF(from, to, ( /**
                 * @param {?} t
                 * @return {?}
                 */function (/**
                 * @param {?} t
                 * @return {?}
                 */ t) { return "scaleX(" + t + ")"; }));
            });
            /** @type {?} */
            var scaleY = ( /**
             * @param {?} from
             * @param {?} to
             * @return {?}
             */function (from, to) {
                return transformF(from, to, ( /**
                 * @param {?} t
                 * @return {?}
                 */function (/**
                 * @param {?} t
                 * @return {?}
                 */ t) { return "scaleY(" + t + ")"; }));
            });
            /** @type {?} */
            var transform = ( /**
             * @param {?} target
             * @param {...?} ts
             * @return {?}
             */function (target) {
                var ts = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    ts[_i - 1] = arguments[_i];
                }
                return ( /**
                 * @template T
                 * @param {?} source
                 * @return {?}
                 */function (source) {
                    return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                     * @param {?} t
                     * @return {?}
                     */function (/**
                     * @param {?} t
                     * @return {?}
                     */ t) {
                        /** @type {?} */
                        var styles = ts.map(( /**
                         * @param {?} s
                         * @return {?}
                         */function (/**
                         * @param {?} s
                         * @return {?}
                         */ s) { return s(t); })).join(' ');
                        target.nativeElement.style.transform = styles;
                    })));
                });
            });
            /** @type {?} */
            var slideOutDown = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(transform(target, translateY(0, 100))); });
            /** @type {?} */
            var slideOutUp = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(transform(target, translateY(0, -100))); });
            /** @type {?} */
            var slideOutLeft = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(transform(target, translateX(0, -100))); });
            /** @type {?} */
            var slideOutRight = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(transform(target, translateX(0, 100))); });
            /** @type {?} */
            var slideInDown = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(transform(target, translateY(-100, 0))); });
            /** @type {?} */
            var slideInUp = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(transform(target, translateY(100, 0))); });
            /** @type {?} */
            var slideInLeft = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(transform(target, translateX(-100, 0))); });
            /** @type {?} */
            var slideInRight = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(transform(target, translateX(100, 0))); });
            /** @type {?} */
            var fadeIn = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(fromTo(target, 'opacity', 0, 1, ( /**
             * @param {?} t
             * @return {?}
             */function (/**
             * @param {?} t
             * @return {?}
             */ t) { return "" + t; }))); });
            /** @type {?} */
            var fadeOut = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(fromTo(target, 'opacity', 1, 0, ( /**
             * @param {?} t
             * @return {?}
             */function (/**
             * @param {?} t
             * @return {?}
             */ t) { return "" + t; }))); });
            /** @type {?} */
            var scaleYOut = ( /**
             * @param {?} target
             * @param {?} easing
             * @param {?} duration
             * @return {?}
             */function (target, easing, duration) { return tween(easing, duration).pipe(transform(target, scaleY(1, 0))); });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function linear(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return (c * t) / d + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInQuad(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return c * (t /= d) * t + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeOutQuad(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return -c * (t /= d) * (t - 2) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInOutQuad(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                if ((t /= d / 2) < 1) {
                    return (c / 2) * t * t + b;
                }
                else {
                    return (-c / 2) * (--t * (t - 2) - 1) + b;
                }
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInCubic(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return c * (t /= d) * t * t + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeOutCubic(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return c * ((t = t / d - 1) * t * t + 1) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInOutCubic(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                if ((t /= d / 2) < 1) {
                    return (c / 2) * t * t * t + b;
                }
                else {
                    return (c / 2) * ((t -= 2) * t * t + 2) + b;
                }
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInQuart(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return c * (t /= d) * t * t * t + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeOutQuart(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInOutQuart(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                if ((t /= d / 2) < 1) {
                    return (c / 2) * t * t * t * t + b;
                }
                else {
                    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
                }
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInQuint(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return c * (t /= d) * t * t * t * t + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeOutQuint(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInOutQuint(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                if ((t /= d / 2) < 1) {
                    return (c / 2) * t * t * t * t * t + b;
                }
                else {
                    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
                }
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInSine(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeOutSine(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return c * Math.sin((t / d) * (Math.PI / 2)) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInOutSine(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInExpo(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeOutExpo(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInOutExpo(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                if (t === 0) {
                    return b;
                }
                if (t === d) {
                    return b + c;
                }
                if ((t /= d / 2) < 1) {
                    return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
                }
                else {
                    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
                }
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInCirc(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeOutCirc(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInOutCirc(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                if ((t /= d / 2) < 1) {
                    return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
                }
                else {
                    return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
                }
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInElastic(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                /** @type {?} */
                var a;
                /** @type {?} */
                var p;
                /** @type {?} */
                var s;
                s = 1.70158;
                p = 0;
                a = c;
                if (t === 0) {
                    return b;
                }
                else if ((t /= d) === 1) {
                    return b + c;
                }
                if (!p) {
                    p = d * 0.3;
                }
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                }
                else {
                    s = (p / (2 * Math.PI)) * Math.asin(c / a);
                }
                return (-(a *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b);
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeOutElastic(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                /** @type {?} */
                var a;
                /** @type {?} */
                var p;
                /** @type {?} */
                var s;
                s = 1.70158;
                p = 0;
                a = c;
                if (t === 0) {
                    return b;
                }
                else if ((t /= d) === 1) {
                    return b + c;
                }
                if (!p) {
                    p = d * 0.3;
                }
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                }
                else {
                    s = (p / (2 * Math.PI)) * Math.asin(c / a);
                }
                return (a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
                    c +
                    b);
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInOutElastic(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                /** @type {?} */
                var a;
                /** @type {?} */
                var p;
                /** @type {?} */
                var s;
                s = 1.70158;
                p = 0;
                a = c;
                if (t === 0) {
                    return b;
                }
                else if ((t /= d / 2) === 2) {
                    return b + c;
                }
                if (!p) {
                    p = d * (0.3 * 1.5);
                }
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                }
                else {
                    s = (p / (2 * Math.PI)) * Math.asin(c / a);
                }
                if (t < 1) {
                    return (-0.5 *
                        (a *
                            Math.pow(2, 10 * (t -= 1)) *
                            Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
                        b);
                }
                else {
                    return (a *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
                        0.5 +
                        c +
                        b);
                }
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @param {?} s
             * @return {?}
             */
            function easeInBack(t, b, _c, d, s) {
                /** @type {?} */
                var c = _c - b;
                if (s === void 0) {
                    s = 1.70158;
                }
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @param {?} s
             * @return {?}
             */
            function easeOutBack(t, b, _c, d, s) {
                /** @type {?} */
                var c = _c - b;
                if (s === void 0) {
                    s = 1.70158;
                }
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @param {?} s
             * @return {?}
             */
            function easeInOutBack(t, b, _c, d, s) {
                /** @type {?} */
                var c = _c - b;
                if (s === void 0) {
                    s = 1.70158;
                }
                if ((t /= d / 2) < 1) {
                    return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
                }
                else {
                    return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
                }
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInBounce(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                /** @type {?} */
                var v;
                v = easeOutBounce(d - t, 0, c, d);
                return c - v + b;
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeOutBounce(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                if ((t /= d) < 1 / 2.75) {
                    return c * (7.5625 * t * t) + b;
                }
                else if (t < 2 / 2.75) {
                    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
                }
                else if (t < 2.5 / 2.75) {
                    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
                }
                else {
                    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
                }
            }
            /**
             * @param {?} t
             * @param {?} b
             * @param {?} _c
             * @param {?} d
             * @return {?}
             */
            function easeInOutBounce(t, b, _c, d) {
                /** @type {?} */
                var c = _c - b;
                /** @type {?} */
                var v;
                if (t < d / 2) {
                    v = easeInBounce(t * 2, 0, c, d);
                    return v * 0.5 + b;
                }
                else {
                    v = easeOutBounce(t * 2 - d, 0, c, d);
                    return v * 0.5 + c * 0.5 + b;
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                    opacity: '{{ fromOpacity }}'
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                    opacity: '{{ toOpacity }}'
                }))
            ]);
            /** @type {?} */
            var translate = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animation"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                    transform: 'translate({{toX}},{{toY}})'
                }))
            ]);
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var ImageService = /** @class */ (function () {
                function ImageService() {
                }
                /**
                 * @param {?} imgEl
                 * @return {?}
                 */
                ImageService.prototype.getAverageRGB = function (imgEl) {
                    /** @type {?} */
                    var blockSize = 5;
                    /** @type {?} */
                    var // only visit every 5 pixels
                    defaultRGB = { r: 0, g: 0, b: 0 };
                    /** @type {?} */
                    var // for non-supporting envs
                    canvas = document.createElement('canvas');
                    /** @type {?} */
                    var context = canvas.getContext && canvas.getContext('2d');
                    /** @type {?} */
                    var rgb = { r: 0, g: 0, b: 0 };
                    /** @type {?} */
                    var data;
                    /** @type {?} */
                    var width;
                    /** @type {?} */
                    var height;
                    /** @type {?} */
                    var length;
                    /** @type {?} */
                    var i = -4;
                    /** @type {?} */
                    var count = 0;
                    if (!context) {
                        return "rgb(" + defaultRGB.r + "," + defaultRGB.g + "," + defaultRGB.b + ")";
                    }
                    height = canvas.height =
                        imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
                    width = canvas.width =
                        imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
                    context.drawImage(imgEl, 0, 0);
                    try {
                        data = context.getImageData(0, 0, width, height);
                    }
                    catch (e) {
                        /* security error, img on diff domain */
                        return "rgb(" + defaultRGB.r + "," + defaultRGB.g + "," + defaultRGB.b + ")";
                    }
                    length = data.data.length;
                    while ((i += blockSize * 4) < length) {
                        ++count;
                        rgb.r += data.data[i];
                        rgb.g += data.data[i + 1];
                        rgb.b += data.data[i + 2];
                    }
                    // ~~ used to floor values
                    rgb.r = Math.floor(rgb.r / count);
                    rgb.g = Math.floor(rgb.g / count);
                    rgb.b = Math.floor(rgb.b / count);
                    return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
                };
                return ImageService;
            }());
            ImageService.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                            providedIn: 'root'
                        },] }
            ];
            /** @nocollapse */
            ImageService.ctorParameters = function () { return []; };
            /** @nocollapse */ ImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function ImageService_Factory() { return new ImageService(); }, token: ImageService, providedIn: "root" });
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivGallery = /** @class */ (function () {
                /**
                 * @param {?} domCtrl
                 * @param {?} renderer
                 * @param {?} animation
                 * @param {?} change
                 * @param {?} platform
                 * @param {?} imageService
                 * @param {?} document
                 */
                function FivGallery(domCtrl, renderer, animation, change, platform, imageService, document) {
                    this.domCtrl = domCtrl;
                    this.renderer = renderer;
                    this.animation = animation;
                    this.change = change;
                    this.platform = platform;
                    this.imageService = imageService;
                    this.document = document;
                    this.activeIndex = 0;
                    this.inFullscreen = false;
                    this.zoomedIn = false;
                    this.controlsVisible = true;
                    this.slidesLoaded = false;
                    this.morphing = false;
                    this.backdrop = false;
                    this.backdropColor = '#000000ee';
                    this.pagerVisible = true;
                    this.ambient = false;
                    this.willOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.willClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.didOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.didClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.backdropChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.$onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                }
                /**
                 * @return {?}
                 */
                FivGallery.prototype.ngAfterContentInit = function () {
                    this.updateImagesIndex();
                    this.setupToolbars();
                    this.subscribeToImageEvents();
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.ngOnDestroy = function () {
                    this.$onDestroy.next();
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.subscribeToImageEvents = function () {
                    var _this = this;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.images.map(( /**
                     * @param {?} image
                     * @return {?}
                     */function (/**
                     * @param {?} image
                     * @return {?}
                     */ image) { return image.click; })))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) { return value; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.$onDestroy))
                        .subscribe(( /**
                 * @param {?} image
                 * @return {?}
                 */function (/**
                 * @param {?} image
                 * @return {?}
                 */ image) {
                        _this.open(image);
                    }));
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.updateImagesIndex = function () {
                    this.images.forEach(( /**
                     * @param {?} img
                     * @param {?} i
                     * @return {?}
                     */function (img, i) {
                        img.index = i;
                    }));
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.setupToolbars = function () {
                    var _this = this;
                    this.toolbars.forEach(( /**
                     * @param {?} toolbar
                     * @return {?}
                     */function (/**
                     * @param {?} toolbar
                     * @return {?}
                     */ toolbar) {
                        if (toolbar.position === 'top') {
                            _this.topToolbar = toolbar.content;
                        }
                        else {
                            _this.bottomToolbar = toolbar.content;
                        }
                    }));
                };
                /**
                 * @param {?} initial
                 * @return {?}
                 */
                FivGallery.prototype.open = function (initial) {
                    var _this = this;
                    this.willOpen.emit(initial);
                    this.activeIndex = initial.index;
                    this.morphing = true;
                    this.overlay.show(50000);
                    this.initialImage = initial;
                    this.updateBackdrop(this.activeIndex);
                    this.initialImage.originalSrc = initial.src;
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        //wait a little for ripple
                        _this.backdrop = true;
                        _this.showControls();
                        _this.morphIn();
                    }), 300);
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.morphIn = function () {
                    var _this = this;
                    this.morphOverlay.show(49999);
                    /** @type {?} */
                    var f = getPosition(this.initialImage.thumbnail);
                    /** @type {?} */
                    var t = this.calculateImagePosition();
                    /** @type {?} */
                    var tweenDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    tween(easeOutSine, 320)
                        .pipe(fromTo(this.morphImage, 'top', f.top, t.top), fromTo(this.morphImage, 'left', f.left, t.left), fromTo(this.morphImage, 'height', f.height, t.height), fromTo(this.morphImage, 'width', f.width, t.width))
                        .subscribe({
                        complete: ( /**
                         * @return {?}
                         */function () {
                            tweenDone.next();
                        })
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(tweenDone, !this.slidesLoaded ? this.slides.ionSlidesDidLoad : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                 * @return {?}
                 */function () {
                        _this.morphing = false;
                        _this.morphOverlay.hide();
                        _this.didOpen.emit(_this.initialImage);
                        _this.swiper.nativeElement.swiper.on('click', ( /**
                         * @return {?}
                         */function () {
                            _this.handleSingleTap();
                        }));
                    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.$onDestroy))
                        .subscribe();
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.dismiss = function () {
                    this.close(false);
                };
                /**
                 * @param {?=} emit
                 * @return {?}
                 */
                FivGallery.prototype.close = function (emit) {
                    if (emit === void 0) { emit = true; }
                    if (emit) {
                        this.willClose.emit(this.initialImage);
                    }
                    this.backdrop = false;
                    /** @type {?} */
                    var sameAsInitial = this.images.toArray()[this.activeIndex].index === this.initialImage.index;
                    if (sameAsInitial) {
                        this.morphBack();
                    }
                    else {
                        this.slideOut();
                    }
                    this.resetSlides(0);
                    if (this.inFullscreen) {
                        this.closeFullscreen();
                    }
                    this.slidesLoaded = false;
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.morphBack = function () {
                    var _this = this;
                    /** @type {?} */
                    var f = getPosition(this.getActiveImage());
                    /** @type {?} */
                    var t = getPosition(this.initialImage.thumbnail);
                    this.overlay.hide();
                    this.morphOverlay.show();
                    tween(easeOutSine, 240)
                        .pipe(fromTo(this.morphImage, 'top', f.top, t.top), fromTo(this.morphImage, 'left', f.left, t.left), fromTo(this.morphImage, 'height', f.height, t.height), fromTo(this.morphImage, 'width', f.width, t.width))
                        .subscribe({
                        complete: ( /**
                         * @return {?}
                         */function () {
                            _this.morphOverlay.hide();
                            _this.didClose.emit(_this.initialImage);
                            _this.initialImage = null;
                        })
                    });
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.slideOut = function () {
                    var _this = this;
                    this.overlay.hide();
                    this.morphOverlay.show();
                    this.morphImage.nativeElement.src = this.getActiveImage().nativeElement.src;
                    setPosition(this.morphImage, getPosition(this.getActiveImage()));
                    tween(easeOutSine, 240)
                        .pipe(fromTo(this.morphImage, 'transform', 0, 100, ( /**
                 * @param {?} t
                 * @return {?}
                 */function (t) { return "translateY(" + t + "%)"; })))
                        .subscribe({
                        complete: ( /**
                         * @return {?}
                         */function () {
                            _this.morphImage.nativeElement.style.transform = '';
                            _this.morphOverlay.hide();
                            _this.didClose.emit(_this.initialImage);
                            _this.initialImage = null;
                        })
                    });
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.getActiveImage = function () {
                    return this.slideImages.toArray()[this.activeIndex];
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivGallery.prototype.transformSlides = function (progress) {
                    var _this = this;
                    if (this.controlsVisible) {
                        this.hideControls();
                    }
                    this.domCtrl.write(( /**
                     * @return {?}
                     */function () {
                        _this.renderer.setStyle(_this.viewer.nativeElement, 'transform', "translateY(" + progress * 120 + "px)");
                    }));
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivGallery.prototype.resetSlides = function (progress) {
                    var _this = this;
                    /** @type {?} */
                    var reset = this.animation.build([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: "translateY(" + progress * 120 + "px)" }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: "translateY(0px)" }))
                    ]);
                    /** @type {?} */
                    var animation = reset.create(this.viewer.nativeElement);
                    animation.play();
                    animation.onDone(( /**
                     * @return {?}
                     */function () {
                        animation.destroy();
                        _this.transformSlides(0);
                        _this.showControls();
                    }));
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.slideDidChange = function () {
                    this.activeIndex = this.swiper.nativeElement.swiper.activeIndex;
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.ionSlideNextStart = function () {
                    if (this.slidesLoaded) {
                        this.updateBackdrop(this.activeIndex + 1);
                    }
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.ionSlidePrevStart = function () {
                    if (this.slidesLoaded) {
                        this.updateBackdrop(this.activeIndex - 1);
                    }
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                FivGallery.prototype.updateBackdrop = function (index) {
                    this.backdropColor = this.ambient
                        ? this.imageService.getAverageRGB(this.images.toArray()[index].thumbnail.nativeElement)
                        : '#000000ee';
                    this.backdropChange.emit();
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.onSlidesLoad = function () {
                    this.slidesLoaded = true;
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.calculateImagePosition = function () {
                    /** @type {?} */
                    var nH = this.initialImage.thumbnail.nativeElement.naturalHeight;
                    /** @type {?} */
                    var nW = this.initialImage.thumbnail.nativeElement.naturalWidth;
                    /** @type {?} */
                    var height = Math.min(nH, this.platform.height());
                    /** @type {?} */
                    var width = Math.min(nW, this.platform.width());
                    /** @type {?} */
                    var ratio = nW / nH;
                    if (ratio * height < width) {
                        width = height * ratio;
                    }
                    else {
                        height = width / ratio;
                    }
                    /** @type {?} */
                    var top = this.platform.height() / 2 - height / 2;
                    /** @type {?} */
                    var left = this.platform.width() / 2 - width / 2;
                    /** @type {?} */
                    var p = {
                        height: height,
                        width: width,
                        left: left,
                        top: top
                    };
                    return p;
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.fullscreen = function () {
                    if (this.inFullscreen) {
                        this.closeFullscreen();
                    }
                    else {
                        this.openFullscreen();
                    }
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.openFullscreen = function () {
                    /** @type {?} */
                    var elem = document.documentElement;
                    if (elem.requestFullscreen) {
                        elem.requestFullscreen();
                    }
                    else if (elem['mozRequestFullScreen']) {
                        /* Firefox */
                        elem['mozRequestFullScreen']();
                    }
                    else if (elem['webkitRequestFullscreen']) {
                        /* Chrome, Safari and Opera */
                        elem['webkitRequestFullscreen']();
                    }
                    else if (elem['msRequestFullscreen']) {
                        /* IE/Edge */
                        elem['msRequestFullscreen']();
                    }
                    this.inFullscreen = true;
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.closeFullscreen = function () {
                    this.inFullscreen = false;
                    if (this.document.exitFullscreen) {
                        this.document.exitFullscreen();
                    }
                    else if (this.document.mozCancelFullScreen) {
                        /* Firefox */
                        this.document.mozCancelFullScreen();
                    }
                    else if (this.document.webkitExitFullscreen) {
                        /* Chrome, Safari and Opera */
                        this.document.webkitExitFullscreen();
                    }
                    else if (this.document.msExitFullscreen) {
                        /* IE/Edge */
                        this.document.msExitFullscreen();
                    }
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.zoom = function () {
                    if (this.zoomedIn) {
                        this.zoomOut();
                    }
                    else {
                        this.zoomIn();
                    }
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.zoomIn = function () {
                    this.swiper.nativeElement.swiper.zoom.in();
                    this.zoomedIn = true;
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.zoomOut = function () {
                    this.swiper.nativeElement.swiper.zoom.out();
                    this.zoomedIn = false;
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.handleSingleTap = function () {
                    this.controlsVisible = !this.controlsVisible;
                    this.change.detectChanges();
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.hideControls = function () {
                    this.controlsVisible = false;
                    this.change.detectChanges();
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.showControls = function () {
                    this.controlsVisible = true;
                    this.change.detectChanges();
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivGallery.prototype.keyEvent = function (event) {
                    if (this.slidesLoaded && !this.morphing) {
                        this.handleKeyboardEvents(event);
                    }
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivGallery.prototype.handleKeyboardEvents = function (event) {
                    if (event.keyCode === Key.RightArrow) {
                        this.next();
                        return;
                    }
                    if (event.keyCode === Key.LeftArrow) {
                        this.prev();
                        return;
                    }
                    if (event.keyCode === Key.DownArrow || event.keyCode === Key.Escape) {
                        this.close();
                        return;
                    }
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.next = function () {
                    if (this.slides && this.slidesLoaded) {
                        this.slides.slideNext();
                    }
                };
                /**
                 * @return {?}
                 */
                FivGallery.prototype.prev = function () {
                    if (this.slides && this.slidesLoaded) {
                        this.slides.slidePrev();
                    }
                };
                return FivGallery;
            }());
            FivGallery.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-gallery',
                            template: "<ng-content></ng-content>\n<fiv-overlay #overlay>\n  <div [style.background]=\"backdropColor\" [@fade] class=\"backdrop\" *ngIf=\"overlay.open && backdrop\"></div>\n\n  <div [style.visibility]=\"!morphing ? 'visible' : 'hidden'\">\n    <div [@slideDown] *ngIf=\"controlsVisible && topToolbar\" class=\"gallery-toolbar header\" color=\"transparent\">\n      <ng-container [ngTemplateOutlet]=\"topToolbar\">\n      </ng-container>\n    </div>\n\n    <ng-container *fivIf=\"['desktop']\">\n      <ion-fab [@scale] *ngIf=\"controlsVisible && images?.length > 0 && pagerVisible\" vertical=\"center\"\n        horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button color=\"light\" (click)=\"prev()\" [disabled]=\"activeIndex === 0\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ng-container>\n\n    <div #viewer class=\"viewer\" fivPull [maxPullHeight]=\"160\" [minPullHeight]=\"120\" (fivPull)=\"transformSlides($event)\"\n      (fivRefresh)=\"close()\" (fivCancel)=\"resetSlides($event)\" [enableScroll]=\"true\">\n      <ion-slides #slider *ngIf=\"overlay.open\" (ionSlideDidChange)=\"slideDidChange()\"\n        (ionSlideNextStart)=\"ionSlideNextStart()\" (ionSlidePrevStart)=\"ionSlidePrevStart()\"\n        (ionSlidesDidLoad)=\"onSlidesLoad()\" [options]=\"{ zoom: true, initialSlide: initialImage?.index}\">\n        <ion-slide *ngFor=\"let image of images; let i = index\">\n          <div class=\"swiper-zoom-container\">\n            <img #slideImage [ngClass]=\"{'instant': activeIndex !== i}\" [src]=\"image.src\">\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <ng-container *fivIf=\"['desktop']\">\n      <ion-fab [@scale] *ngIf=\"controlsVisible && pagerVisible\" vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"light\" (click)=\"next()\" [disabled]=\"activeIndex === images.length - 1\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ng-container>\n\n    <div [@slideUp] *ngIf=\"controlsVisible && bottomToolbar\" class=\"gallery-toolbar footer\" color=\"transparent\">\n      <ng-container [ngTemplateOutlet]=\"bottomToolbar\">\n      </ng-container>\n    </div>\n  </div>\n\n\n\n\n</fiv-overlay>\n<fiv-overlay #morphOverlay>\n  <img #morph class=\"morph\" *ngIf=\"initialImage\" [src]=\"initialImage.src\">\n</fiv-overlay>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('scale', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'scale(0)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'scale(1)' }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'scale(1)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'scale(0)' }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('slideUp', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'translateY(100%)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('75ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateY(0%)' }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateY(0%)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('75ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'translateY(100%)' }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('slideDown', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'translateY(0%)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('75ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateY(-100%)' }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1, transform: 'translateY(-100%)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('75ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0, transform: 'translateY(0%)' }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fade', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["useAnimation"])(fade, {
                                        params: {
                                            fromOpacity: 1,
                                            toOpacity: 0,
                                            time: '240ms'
                                        }
                                    })),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["useAnimation"])(fade, {
                                        params: {
                                            fromOpacity: 0,
                                            toOpacity: 1,
                                            time: '240ms'
                                        }
                                    }))
                                ])
                            ],
                            styles: [".viewer{width:100vw;height:100vh}.viewer ion-slides{height:100%}.viewer img{height:auto;max-height:100%;width:auto;max-width:100%}.viewer img.instant{transition-duration:0s!important}.gallery-toolbar{width:100%;--fiv-gallery-toolbar-color:#fff;position:absolute;color:var(--fiv-gallery-toolbar-color)}.gallery-toolbar.header{top:env(safe-area-inset-top)}.gallery-toolbar.footer{bottom:env(safe-area-inset-bottom)}.morph{position:absolute;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;display:block}.backdrop{height:100vh;width:100vw;position:absolute;transition:background-color .2s}"]
                        }] }
            ];
            /** @nocollapse */
            FivGallery.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["DomController"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
                { type: _angular_animations__WEBPACK_IMPORTED_MODULE_6__["AnimationBuilder"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
                { type: ImageService },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
            ]; };
            FivGallery.propDecorators = {
                overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['overlay',] }],
                morphOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['morphOverlay',] }],
                viewer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['viewer',] }],
                morphImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['morph',] }],
                swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['slider', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },] }],
                slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['slider',] }],
                slideImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: ['slideImage',] }],
                images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(( /**
                                         * @return {?}
                                         */function () { return FivGalleryImage; })), { descendants: true },] }],
                toolbars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [FivGalleryToolbar,] }],
                pagerVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                ambient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                willOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                willClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                didOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                didClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                backdropChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                keyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:keyup', ['$event'],] }]
            };
            if (false) { }
            var Position = /** @class */ (function () {
                function Position() {
                }
                return Position;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivOverlayModule = /** @class */ (function () {
                function FivOverlayModule() {
                }
                return FivOverlayModule;
            }());
            FivOverlayModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivOverlay, FivOverlayContent],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [FivOverlay, FivOverlayContent],
                            entryComponents: [FivOverlayContent],
                            providers: [FivOverlayService]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivIfPlatform = /** @class */ (function () {
                /**
                 * @param {?} platform
                 * @param {?} viewContainer
                 * @param {?} templateRef
                 */
                function FivIfPlatform(platform, viewContainer, templateRef) {
                    this.platform = platform;
                    this.viewContainer = viewContainer;
                    this.templateRef = templateRef;
                }
                Object.defineProperty(FivIfPlatform.prototype, "fivIf", {
                    /**
                     * @param {?} platforms
                     * @return {?}
                     */
                    set: function (platforms) {
                        var _this = this;
                        /** @type {?} */
                        var show = true;
                        platforms.forEach(( /**
                         * @param {?} p
                         * @return {?}
                         */function (/**
                         * @param {?} p
                         * @return {?}
                         */ p) {
                            if (!_this.platform.is(p)) {
                                show = false;
                            }
                        }));
                        if (show) {
                            this.viewContainer.createEmbeddedView(this.templateRef);
                        }
                        else {
                            this.viewContainer.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return FivIfPlatform;
            }());
            FivIfPlatform.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                            selector: '[fivIf]'
                        },] }
            ];
            /** @nocollapse */
            FivIfPlatform.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
            ]; };
            FivIfPlatform.propDecorators = {
                fivIf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivIfModule = /** @class */ (function () {
                function FivIfModule() {
                }
                return FivIfModule;
            }());
            FivIfModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivIfPlatform],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [FivIfPlatform]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivPull = /** @class */ (function () {
                /**
                 * @param {?} element
                 * @param {?} platform
                 * @param {?} content
                 */
                function FivPull(element, platform, content) {
                    this.element = element;
                    this.platform = platform;
                    this.content = content;
                    this.minPullHeight = 112;
                    this.maxPullHeight = 168;
                    this.enabled = true;
                    this.enableScroll = false;
                    this.direction = 'down';
                    this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivPull = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                FivPull.prototype.ngOnInit = function () {
                    var _this = this;
                    this.content.scrollEvents = true;
                    this.content.getScrollElement().then(( /**
                     * @param {?} s
                     * @return {?}
                     */function (/**
                     * @param {?} s
                     * @return {?}
                     */ s) {
                        _this.scrollY = s; // needed for scrollTop
                        _this.setupPanListener();
                    }));
                };
                /**
                 * @private
                 * @return {?}
                 */
                FivPull.prototype.setupPanListener = function () {
                    var _this = this;
                    /** @type {?} */
                    var touchstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.element.nativeElement, 'touchstart', { passive: true });
                    /** @type {?} */
                    var touchmove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.element.nativeElement, 'touchmove', { passive: true });
                    /** @type {?} */
                    var touchend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.element.nativeElement, 'touchend', { passive: true });
                    /** @type {?} */
                    var touchcancel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.element.nativeElement, 'touchcancel', { passive: true });
                    /** @type {?} */
                    var end$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(touchend$, touchcancel$);
                    /** @type {?} */
                    var dragAtTop = touchstart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} e
                     * @return {?}
                     */function (/**
                     * @param {?} e
                     * @return {?}
                     */ e) { return (_this.scrollY.scrollTop === 0 || _this.enableScroll) &&
                        _this.direction === 'down' &&
                        _this.enabled; })));
                    /** @type {?} */
                    var dragAtBottom = touchstart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} e
                     * @return {?}
                     */function (/**
                     * @param {?} e
                     * @return {?}
                     */ e) { return (_this.scrollY.scrollTop ===
                        _this.scrollY.clientHeight - _this.platform.height() ||
                        _this.enableScroll) &&
                        _this.direction === 'up' &&
                        _this.enabled; })));
                    /** @type {?} */
                    var dragTopDown = dragAtTop.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                     * @param {?} start
                     * @return {?}
                     */function (start) {
                        /** @type {?} */
                        var startY = start.touches[0].pageY;
                        return touchmove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                         * @param {?} move
                         * @return {?}
                         */function (move) {
                            /** @type {?} */
                            var currentY = move.touches[0].pageY;
                            return {
                                startEvent: start,
                                moveEvent: move,
                                startY: startY,
                                currentY: currentY,
                                offset: currentY - startY
                            };
                        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skipWhile"])(( /**
                         * @param {?} drag
                         * @return {?}
                         */function (/**
                         * @param {?} drag
                         * @return {?}
                         */ drag) { return drag.offset < 0; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(end$));
                    })));
                    dragTopDown.forEach(( /**
                     * @param {?} drags
                     * @return {?}
                     */function (/**
                     * @param {?} drags
                     * @return {?}
                     */ drags) {
                        drags.forEach(( /**
                         * @param {?} drag
                         * @return {?}
                         */function (/**
                         * @param {?} drag
                         * @return {?}
                         */ drag) {
                            /** @type {?} */
                            var offset = drag.offset / 2;
                            if (offset < 0 || offset > _this.maxPullHeight) {
                                return;
                            }
                            if (offset <= _this.maxPullHeight) {
                            }
                            _this.fivPull.emit(offset / _this.maxPullHeight);
                        }));
                        drags.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeLast"])(1)).subscribe(( /**
                         * @param {?} drag
                         * @return {?}
                         */function (/**
                         * @param {?} drag
                         * @return {?}
                         */ drag) {
                            /** @type {?} */
                            var offset = drag.offset / 2;
                            /** @type {?} */
                            var refresh = offset >= _this.minPullHeight;
                            if (refresh) {
                                _this.fivRefresh.emit(offset / _this.maxPullHeight);
                            }
                            else {
                                _this.fivCancel.emit(offset / _this.maxPullHeight);
                            }
                        }));
                    }));
                    /** @type {?} */
                    var dragBottomUp = dragAtBottom.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                     * @param {?} start
                     * @return {?}
                     */function (start) {
                        /** @type {?} */
                        var startY = start.touches[0].pageY;
                        return touchmove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                         * @param {?} move
                         * @return {?}
                         */function (move) {
                            /** @type {?} */
                            var currentY = move.touches[0].pageY;
                            return {
                                startEvent: start,
                                moveEvent: move,
                                startY: startY,
                                currentY: currentY,
                                offset: startY - currentY
                            };
                        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skipWhile"])(( /**
                         * @param {?} drag
                         * @return {?}
                         */function (/**
                         * @param {?} drag
                         * @return {?}
                         */ drag) { return drag.offset < 0; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(end$));
                    })));
                    dragBottomUp.forEach(( /**
                     * @param {?} drags
                     * @return {?}
                     */function (/**
                     * @param {?} drags
                     * @return {?}
                     */ drags) {
                        drags.forEach(( /**
                         * @param {?} drag
                         * @return {?}
                         */function (/**
                         * @param {?} drag
                         * @return {?}
                         */ drag) {
                            /** @type {?} */
                            var offset = drag.offset / 2;
                            if (offset < 0 || offset > _this.maxPullHeight) {
                                return;
                            }
                            _this.fivPull.emit(offset / _this.maxPullHeight);
                        }));
                        drags.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeLast"])(1)).subscribe(( /**
                         * @param {?} drag
                         * @return {?}
                         */function (/**
                         * @param {?} drag
                         * @return {?}
                         */ drag) {
                            /** @type {?} */
                            var offset = drag.offset / 2;
                            /** @type {?} */
                            var refresh = offset >= _this.minPullHeight;
                            if (refresh) {
                                _this.fivRefresh.emit(offset / _this.maxPullHeight);
                            }
                            else {
                                _this.fivCancel.emit(offset / _this.maxPullHeight);
                            }
                        }));
                    }));
                };
                return FivPull;
            }());
            FivPull.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                            selector: '[fivPull]'
                        },] }
            ];
            /** @nocollapse */
            FivPull.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"] }
            ]; };
            FivPull.propDecorators = {
                minPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                maxPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                enableScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivPull: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivPullModule = /** @class */ (function () {
                function FivPullModule() {
                }
                return FivPullModule;
            }());
            FivPullModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivPull],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [FivPull]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivGalleryToolbarContent = /** @class */ (function () {
                /**
                 * @param {?} gallery
                 */
                function FivGalleryToolbarContent(gallery) {
                    this.gallery = gallery;
                }
                /**
                 * @return {?}
                 */
                FivGalleryToolbarContent.prototype.ngOnInit = function () { };
                return FivGalleryToolbarContent;
            }());
            FivGalleryToolbarContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-gallery-toolbar-content',
                            template: "<ion-toolbar color=\"transparent\">\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"gallery.close()\">\n      <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"gallery.fullscreen()\">\n      <fiv-icon slot=\"icon-only\" [name]=\"gallery.inFullscreen ? 'contract': 'expand'\"></fiv-icon>\n    </ion-button>\n    <ion-button (click)=\"gallery.zoom()\">\n      <fiv-icon slot=\"icon-only\" [name]=\"gallery.zoomedIn ? 'remove': 'add'\"></fiv-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n",
                            styles: [""]
                        }] }
            ];
            /** @nocollapse */
            FivGalleryToolbarContent.ctorParameters = function () { return [
                { type: FivGallery, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivGalleryModule = /** @class */ (function () {
                function FivGalleryModule() {
                }
                return FivGalleryModule;
            }());
            FivGalleryModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [
                                FivGallery,
                                FivGalleryImage,
                                FivGalleryToolbar,
                                FivGalleryToolbarContent
                            ],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                                FivIconModule,
                                FivIfModule,
                                FivPullModule,
                                FivOverlayModule,
                                FivRippleModule
                            ],
                            exports: [
                                FivGallery,
                                FivGalleryImage,
                                FivGalleryToolbar,
                                FivGalleryToolbarContent
                            ]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FivPasswordInput; })),
                multi: true
            };
            var FivPasswordInput = /** @class */ (function () {
                function FivPasswordInput() {
                    this.clearOnEdit = false;
                    this.disabled = false;
                    this.hideIcon = 'eye-off';
                    this.position = 'floating';
                    this.showIcon = 'eye';
                    this._passwordValue = '';
                }
                /**
                 * @return {?}
                 */
                FivPasswordInput.prototype.toggleShowPassword = function () {
                    this.show = !this.show;
                };
                Object.defineProperty(FivPasswordInput.prototype, "passwordValue", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._passwordValue;
                    },
                    /**
                     * @param {?} v
                     * @return {?}
                     */
                    set: function (v) {
                        if (v !== this._passwordValue) {
                            this._passwordValue = v;
                            if (this.onChangeCallback) {
                                this.onChangeCallback(this._passwordValue);
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @param {?} value
                 * @return {?}
                 */
                FivPasswordInput.prototype.writeValue = function (value) {
                    if (value !== undefined && value !== this._passwordValue) {
                        this._passwordValue = value;
                    }
                };
                /**
                 * @return {?}
                 */
                FivPasswordInput.prototype.blur = function () {
                    if (this.onTouchedCallback) {
                        this.onTouchedCallback();
                    }
                };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                FivPasswordInput.prototype.registerOnChange = function (fn) {
                    this.onChangeCallback = fn;
                };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                FivPasswordInput.prototype.registerOnTouched = function (fn) {
                    this.onTouchedCallback = fn;
                };
                return FivPasswordInput;
            }());
            FivPasswordInput.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-password-input',
                            template: "<ion-item [color]=\"color\" [disabled]=\"disabled\" [lines]=\"lines\">\n  <ion-label *ngIf=\"placeholder\" [position]=\"position\">{{ placeholder }}</ion-label>\n  <ion-input [type]=\"show ? 'text' : 'password'\" [(ngModel)]=\"passwordValue\" [clearOnEdit]=\"clearOnEdit\"\n    (ionBlur)=\"blur()\"></ion-input>\n  <ion-icon slot=\"end\" [name]=\"show ? hideIcon : showIcon\" (click)=\"toggleShowPassword()\"></ion-icon>\n</ion-item>",
                            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                            styles: [":host(.password-disabled){pointer-events:none}ion-icon{-ms-grid-row-align:center;align-self:center}"]
                        }] }
            ];
            /** @nocollapse */
            FivPasswordInput.ctorParameters = function () { return []; };
            FivPasswordInput.propDecorators = {
                clearOnEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.password-disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                hideIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                showIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivPasswordInputModule = /** @class */ (function () {
                function FivPasswordInputModule() {
                }
                return FivPasswordInputModule;
            }());
            FivPasswordInputModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivPasswordInput],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivPasswordInput]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivExpandable = /** @class */ (function () {
                /**
                 * @param {?} change
                 */
                function FivExpandable(change) {
                    this.change = change;
                    this.isOpen = false;
                    this.fivWillOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivWillClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                FivExpandable.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivExpandable.prototype.open = function () {
                    this.fivWillOpen.emit(this);
                    this.isOpen = true;
                    this.change.detectChanges();
                };
                /**
                 * @return {?}
                 */
                FivExpandable.prototype.toggle = function () {
                    if (this.isOpen === false) {
                        this.open();
                    }
                    else {
                        this.close();
                    }
                };
                /**
                 * @param {?=} param
                 * @return {?}
                 */
                FivExpandable.prototype.close = function (param) {
                    this.param = param;
                    this.fivWillClose.emit(this);
                    this.isOpen = false;
                    this.change.detectChanges();
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivExpandable.prototype.onAnimationEnd = function (event) {
                    if (event.fromState === 'closed') {
                        this.fivDidOpen.emit(this);
                    }
                    else if (event.fromState === 'open') {
                        this.fivDidClose.emit({ expandable: this, param: this.param });
                        this.param = null;
                    }
                };
                return FivExpandable;
            }());
            FivExpandable.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-expandable',
                            template: "<div>\n  <ng-content select=\"[header]\"></ng-content>\n  <div [@listAnim]=\"{value: isOpen ? 'open' : 'closed', params: timingFunction ? {time: timingFunction} : {}}\" (@listAnim.done)=\"onAnimationEnd($event)\"\n    style=\"overflow: hidden\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n</div>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('listAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*', opacity: 1 })),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', opacity: 0 })),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('closed => open', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{time}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', opacity: 0, offset: 0 }),
                                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*', opacity: 0.1, offset: 0.8 }),
                                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*', opacity: 1, offset: 1 })
                                        ]))
                                    ], { params: { time: '270ms ease-out' } }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('open => closed', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{time}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["keyframes"])([
                                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*', opacity: 1, offset: 0 }),
                                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*', opacity: 0.1, offset: 0.2 }),
                                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', opacity: 0, offset: 1 })
                                        ]))
                                    ], { params: { time: '220ms ease-out' } })
                                ])
                            ],
                            styles: [""]
                        }] }
            ];
            /** @nocollapse */
            FivExpandable.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
            ]; };
            FivExpandable.propDecorators = {
                isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                timingFunction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivWillOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivWillClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivExpandableIndicator = /** @class */ (function () {
                /**
                 * @param {?} expandable
                 */
                function FivExpandableIndicator(expandable) {
                    this.expandable = expandable;
                    this.icon = 'ios-arrow-down';
                }
                /**
                 * @return {?}
                 */
                FivExpandableIndicator.prototype.ngOnInit = function () { };
                return FivExpandableIndicator;
            }());
            FivExpandableIndicator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-expandable-indicator',
                            template: "<ion-icon class=\"indicator\" [ngClass]=\"{'rotate': expandable.isOpen}\" [name]=\"icon\"></ion-icon>",
                            styles: [":host{display:flex}.indicator{transition:125ms}.indicator.rotate{-webkit-transform:rotateZ(180deg);transform:rotateZ(180deg)}"]
                        }] }
            ];
            /** @nocollapse */
            FivExpandableIndicator.ctorParameters = function () { return [
                { type: FivExpandable }
            ]; };
            FivExpandableIndicator.propDecorators = {
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivExpandableModule = /** @class */ (function () {
                function FivExpandableModule() {
                }
                return FivExpandableModule;
            }());
            FivExpandableModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivExpandable, FivExpandableIndicator],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivExpandable, FivExpandableIndicator]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivStep = /** @class */ (function () {
                function FivStep() {
                    this.isLast = false;
                    this.open = false;
                    this.title = '';
                    this.subtitle = '';
                }
                /**
                 * @return {?}
                 */
                FivStep.prototype.ngOnInit = function () { };
                return FivStep;
            }());
            FivStep.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-step',
                            template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                            styles: [""]
                        }] }
            ];
            /** @nocollapse */
            FivStep.ctorParameters = function () { return []; };
            FivStep.propDecorators = {
                index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"],] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivStepHeader = /** @class */ (function () {
                function FivStepHeader() {
                    this.iconState = 'normal';
                }
                /**
                 * @return {?}
                 */
                FivStepHeader.prototype.ngOnInit = function () { };
                /**
                 * @param {?} event
                 * @param {?} icon
                 * @return {?}
                 */
                FivStepHeader.prototype.changeIconAndReveal = function (event, icon) {
                    if (event.fromState === 'normal') {
                        this.tempIcon = this.icon;
                        this.icon = icon;
                        this.iconState = 'normal';
                    }
                };
                /**
                 * @return {?}
                 */
                FivStepHeader.prototype.complete = function () {
                    this.iconState = 'rotate';
                };
                /**
                 * @return {?}
                 */
                FivStepHeader.prototype.reset = function () {
                    this.icon = this.tempIcon;
                };
                return FivStepHeader;
            }());
            FivStepHeader.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-step-header',
                            template: "<div class=\"number-container\">\n  <span *ngIf=\"index && !icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\">{{index}}</span>\n  <ion-icon *ngIf=\"icon\" [@rotateAnim]=\"iconState\" (@rotateAnim.done)=\"changeIconAndReveal($event,'md-checkmark')\"\n    [name]=\"icon\"></ion-icon>\n</div>\n<div class=\"step-content\">\n  <ng-content>\n  </ng-content>\n</div>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('rotateAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('normal => rotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-out')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('rotate => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-in')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                        opacity: '0',
                                        transform: 'translate(-50%, -50%) rotateZ(45deg)'
                                    })),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                        opacity: '1',
                                        transform: 'translate(-50%, -50%) rotateZ(0deg)'
                                    }))
                                ])
                            ],
                            styles: [":host{display:block;width:100%;height:72px;align-items:center;position:relative;padding-top:8px}.number-container{width:24px;height:24px;border-radius:100%;position:absolute;left:16px;background:var(--fiv-color-circle,var(--ion-color-primary));color:var(--fiv-color-circle-color,var(--ion-color-light))}.number-container *{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) rotateZ(0);transform:translate(-50%,-50%) rotateZ(0)}.step-content{padding-left:56px}"]
                        }] }
            ];
            /** @nocollapse */
            FivStepHeader.ctorParameters = function () { return []; };
            FivStepHeader.propDecorators = {
                index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivStepContent = /** @class */ (function () {
                /**
                 * @param {?} change
                 */
                function FivStepContent(change) {
                    this.change = change;
                    this.isLast = false;
                    this.isOpen = false;
                    this.title = '';
                    this.subtitle = '';
                    this.fivDidOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivDidClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                FivStepContent.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivStepContent.prototype.open = function () {
                    this.isOpen = true;
                    this.change.detectChanges();
                };
                /**
                 * @return {?}
                 */
                FivStepContent.prototype.close = function () {
                    this.isOpen = false;
                    this.change.detectChanges();
                };
                /**
                 * @return {?}
                 */
                FivStepContent.prototype.completeAndClose = function () {
                    this.close();
                    this.complete();
                };
                /**
                 * @return {?}
                 */
                FivStepContent.prototype.complete = function () {
                    this.header.complete();
                };
                /**
                 * @return {?}
                 */
                FivStepContent.prototype.reset = function () {
                    this.header.reset();
                };
                /**
                 * @return {?}
                 */
                FivStepContent.prototype.afterClose = function () {
                    this.fivDidClose.emit(this);
                };
                /**
                 * @return {?}
                 */
                FivStepContent.prototype.afterOpen = function () {
                    this.fivDidOpen.emit(this);
                };
                /**
                 * @return {?}
                 */
                FivStepContent.prototype.click = function () {
                    this.fivClick.emit(this);
                };
                return FivStepContent;
            }());
            FivStepContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-step-content',
                            template: "<div *ngIf=\"!isLast\" class=\"timeline\"></div>\n<fiv-expandable [isOpen]=\"isOpen\" (fivDidClose)=\"afterClose()\" (fivDidOpen)=\"afterOpen()\" #self>\n  <fiv-ripple header (fivClick)=\"click()\">\n    <fiv-step-header #header [index]=\"index\" [icon]=\"icon\">\n      <div class=\"header-title\">{{title}}</div>\n      <div class=\"header-subtitle\">{{subtitle}}</div>\n    </fiv-step-header>\n  </fiv-ripple>\n  <ng-container content>\n    <div class=\"step-content\">\n      <ng-content></ng-content>\n    </div>\n  </ng-container>\n</fiv-expandable>",
                            styles: [":host{display:block;width:100%;position:relative}.step-content{padding-left:44px;padding-bottom:24px}.timeline{width:1px;height:calc(100% - 32px);position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));left:27.5px;top:36px}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
                        }] }
            ];
            /** @nocollapse */
            FivStepContent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
            ]; };
            FivStepContent.propDecorators = {
                index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                subtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivDidOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivDidClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['self',] }],
                header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['header',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivStepperHorizontal = /** @class */ (function () {
                function FivStepperHorizontal() {
                    this.fivSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                FivStepperHorizontal.prototype.ngOnInit = function () {
                    this.slides.lockSwipes(true);
                };
                /**
                 * @return {?}
                 */
                FivStepperHorizontal.prototype.close = function () {
                    this.slides.slideTo(0);
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                FivStepperHorizontal.prototype.open = function (index) {
                    this.slides.lockSwipes(false);
                    this.slides.slideTo(index);
                    this.slides.lockSwipes(true);
                };
                return FivStepperHorizontal;
            }());
            FivStepperHorizontal.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-stepper-horizontal',
                            template: "<ion-grid fixed>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\" [size]=\"12 / contents.length\">\n      <fiv-ripple (click)=\"fivSelect.emit(i)\">\n        <span *ngIf=\"!f\" class=\"line left\"></span>\n        <div class=\"number-container\">\n          <span *ngIf=\"!content.icon\">{{i +  1}}</span>\n          <ion-icon *ngIf=\"content.icon\"\n            [name]=\"content.icon\"></ion-icon>\n        </div>\n        <span *ngIf=\"!l\" class=\"line right\"></span>\n      </fiv-ripple>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col *ngFor=\"let content of contents.toArray(); let i = index; let f = first; let l = last;\" [size]=\"12 / contents.length\">\n      <fiv-ripple (click)=\"fivSelect.emit(i)\">\n          <div class=\"horizontal-content\">\n          <div class=\"header-title\">{{content.title}}</div>\n          <div class=\"header-subtitle\">{{content.subtitle}}</div>\n        </div>\n      </fiv-ripple>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-slides #slides pager=\"false\">\n  <ion-slide *ngFor=\"let content of contents; let i = index\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </ion-slide>\n</ion-slides>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('rotateAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('normal => rotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-out')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('rotate => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-in')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                        opacity: '0',
                                        transform: 'translate(-50%, -50%) rotateZ(45deg)'
                                    })),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                        opacity: '1',
                                        transform: 'translate(-50%, -50%) rotateZ(0deg)'
                                    }))
                                ])
                            ],
                            styles: [".number-container{width:24px;height:24px;border-radius:100%;position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:var(--fiv-color-circle,var(--ion-color-primary));color:var(--fiv-color-circle-color,var(--ion-color-light))}.number-container *{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) rotateZ(0);transform:translate(-50%,-50%) rotateZ(0)}ion-col{text-align:center;padding:0}.line{width:calc(50% - 20px);height:1px;position:absolute;background:var(--fiv-color-timeline,var(--ion-color-medium));top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.left{left:0}.right{right:0}.header-title{color:var(--fiv-color-title,var(--ion-color-dark))}.header-subtitle{color:var(--fiv-color-subtitle,var(--ion-color-medium));font-size:.8em}"]
                        }] }
            ];
            /** @nocollapse */
            FivStepperHorizontal.ctorParameters = function () { return []; };
            FivStepperHorizontal.propDecorators = {
                contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['slides',] }],
                fivSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivStepper = /** @class */ (function () {
                function FivStepper() {
                    this.mode = 'vertical';
                    this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.currentIndex = 0;
                }
                /**
                 * @return {?}
                 */
                FivStepper.prototype.ngOnInit = function () { };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                FivStepper.prototype.open = function (index) {
                    if (this.mode === 'horizontal') {
                        this.currentIndex = index;
                        this.horizontal.open(index);
                    }
                    else {
                        if (this.steps.toArray()[index]) {
                            if (this.steps.toArray()[index].isOpen) {
                                this.close(index);
                            }
                            else {
                                this.currentIndex = index;
                                this.steps.toArray()[index].open();
                            }
                        }
                        else {
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                FivStepper.prototype.openFirst = function () {
                    this.open(0);
                };
                /**
                 * @return {?}
                 */
                FivStepper.prototype.openLast = function () {
                    this.open(this.steps.toArray().length - 1);
                };
                /**
                 * @param {?} index
                 * @param {?=} param
                 * @return {?}
                 */
                FivStepper.prototype.close = function (index, param) {
                    this.param = param;
                    if (this.mode === 'horizontal') {
                        this.currentIndex = 0;
                        this.horizontal.close();
                    }
                    else {
                        this.currentIndex = -1;
                        this.steps.toArray()[index].close();
                    }
                };
                /**
                 * @return {?}
                 */
                FivStepper.prototype.closeFirst = function () {
                    this.close(0);
                };
                /**
                 * @return {?}
                 */
                FivStepper.prototype.closeLast = function () {
                    this.close(this.steps.toArray().length - 1);
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                FivStepper.prototype.select = function (index) {
                    if (index >= 0 && index < this.contents.length) {
                        if (this.mode === 'vertical') {
                            this.closeAll();
                        }
                        this.open(index);
                    }
                };
                /**
                 * @return {?}
                 */
                FivStepper.prototype.closeAll = function () {
                    if (this.mode === 'horizontal') {
                        this.currentIndex = 0;
                        this.horizontal.close();
                    }
                    else {
                        this.steps.forEach(( /**
                         * @param {?} step
                         * @return {?}
                         */function (/**
                         * @param {?} step
                         * @return {?}
                         */ step) {
                            step.close();
                        }));
                    }
                };
                /**
                 * @return {?}
                 */
                FivStepper.prototype.next = function () {
                    /** @type {?} */
                    var next = this.currentIndex < this.steps.length ? this.currentIndex + 1 : -1;
                    this.select(next);
                };
                /**
                 * @return {?}
                 */
                FivStepper.prototype.previous = function () {
                    /** @type {?} */
                    var next = this.currentIndex > 0 ? this.currentIndex + -1 : -1;
                    this.select(next);
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                FivStepper.prototype.completeStep = function (index) {
                    if (this.mode === 'horizontal') {
                        // not yet impletented
                    }
                    else {
                        this.steps.toArray()[index].complete();
                    }
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                FivStepper.prototype.completeAndCloseStep = function (index) {
                    if (this.mode === 'horizontal') {
                        // not yet impletented
                    }
                    else {
                        this.steps.toArray()[index].completeAndClose();
                    }
                };
                /**
                 * @param {?} index
                 * @return {?}
                 */
                FivStepper.prototype.reset = function (index) {
                    if (this.mode === 'horizontal') {
                        // not yet impletented
                    }
                    else {
                        this.steps.toArray()[index].reset();
                    }
                };
                return FivStepper;
            }());
            FivStepper.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-stepper',
                            template: "<ion-list *ngIf=\"mode === 'vertical'\">\n  <fiv-step-content (fivDidClose)=\"fivClose.emit({index: i, param: param}); param = null;\" (fivClick)=\"fivClick.emit(i)\" *ngFor=\"let content of contents; let i = index; let l = last;\" [icon]=\"content.icon\" [index]=\"i + 1\"\n    [isLast]=\"l\" [title]=\"content.title\" [subtitle]=\"content.subtitle\" [isOpen]=\"content.open\">\n    <ng-container [ngTemplateOutlet]=\"content.content\"></ng-container>\n  </fiv-step-content>\n</ion-list>\n<div *ngIf=\"mode === 'horizontal'\">\n  <fiv-stepper-horizontal (fivSelect)=\"select($event)\" [contents]=\"contents\"></fiv-stepper-horizontal>\n</div>",
                            styles: [":host{display:block;width:100%}"]
                        }] }
            ];
            /** @nocollapse */
            FivStepper.ctorParameters = function () { return []; };
            FivStepper.propDecorators = {
                contents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [FivStep,] }],
                steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: [FivStepContent,] }],
                horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [FivStepperHorizontal,] }],
                mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivStepperModule = /** @class */ (function () {
                function FivStepperModule() {
                }
                return FivStepperModule;
            }());
            FivStepperModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [
                                FivStepper,
                                FivStepContent,
                                FivStepperHorizontal,
                                FivStep,
                                FivStepHeader
                            ],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], FivExpandableModule, FivRippleModule],
                            exports: [
                                FivStepper,
                                FivStepContent,
                                FivStepperHorizontal,
                                FivStep,
                                FivStepHeader
                            ]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivRouterItem = /** @class */ (function () {
                /**
                 * @param {?} router
                 * @param {?} host
                 */
                function FivRouterItem(router, host) {
                    this.router = router;
                    this.host = host;
                    this.active = false;
                    this.detailIcon = 'ios-arrow-forward';
                    this.disabled = false;
                    this.matchChildUrl = false;
                    this.navigate = true;
                    /**
                     * The position of the active state.
                     * Default value is: `"left"`
                     */
                    this.position = 'left';
                    /**
                     * The shape of the active state.
                     * Possible values are: `"line"`, `"dot"` and `"rounded"`.
                     * Default value is: `"line"`
                     */
                    this.shape = 'line';
                }
                /**
                 * @return {?}
                 */
                FivRouterItem.prototype.onclick = function () {
                    if (this.navigate && this.pageUrl) {
                        this.router.navigateByUrl(this.pageUrl);
                    }
                };
                Object.defineProperty(FivRouterItem.prototype, "classes", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this.position + " " + this.shape;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivRouterItem.prototype, "activeClass", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this.matchActiveUrl() || this.active;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivRouterItem.prototype, "disabledClass", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this.disabled;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivRouterItem.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivRouterItem.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.router.events
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) { return event.url === _this.pageUrl; })))
                        .subscribe(( /**
                 * @return {?}
                 */function () { return _this.openExpandableHost(); }));
                };
                /**
                 * @return {?}
                 */
                FivRouterItem.prototype.openExpandableHost = function () {
                    /** @type {?} */
                    var isActive = this.matchActiveUrl() || this.active;
                    if (isActive) {
                        if (this.host && !this.host.isOpen) {
                            this.host.open();
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                FivRouterItem.prototype.getClasses = function () {
                    return [this.position, this.shape];
                };
                /**
                 * @return {?}
                 */
                FivRouterItem.prototype.matchActiveUrl = function () {
                    return this.matchChildUrl ? this.isChildUrl() : this.isCurrentUrl();
                };
                /**
                 * @return {?}
                 */
                FivRouterItem.prototype.isCurrentUrl = function () {
                    return this.router.url === this.pageUrl;
                };
                /**
                 * @return {?}
                 */
                FivRouterItem.prototype.isChildUrl = function () {
                    return this.router.url.startsWith(this.pageUrl);
                };
                return FivRouterItem;
            }());
            FivRouterItem.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-router-item',
                            template: "<ion-menu-toggle auto-hide=\"false\">\n    <fiv-ripple>\n        <ion-item [color]=\"color\" [detail]=\"detail\" [detailIcon]=\"detailIcon\" [disabled]=\"disabled\" [lines]=\"lines\">\n            <fiv-icon #fivIcon *ngIf=\"icon\" [name]=\"icon\"></fiv-icon>\n            <ion-label>{{text}}</ion-label>\n        </ion-item>\n    </fiv-ripple>\n</ion-menu-toggle>\n<span [ngClass]=\"getClasses()\" class=\"indicator\"></span>",
                            styles: [":host{display:block;position:relative;width:100%}:host(.active){--color-active:var(--ion-color-primary)}:host(.active) ion-item{--color:var(--color-active)}:host(.line){--width-line:4px;--background-line:var(--ion-color-primary)}:host(.active) .line{display:block;background:var(--background-line)}:host.active.left .line{width:var(--width-line);height:100%;top:0}:host.active.right .line{width:var(--width-line);height:100%;top:0}.indicator{position:absolute}:host.active .dot{display:block}:host.active.dot.left{padding-left:24px}.dot{width:var(--fiv-dot-width,8px);height:var(--fiv-dot-heigt,8px);background-color:var(--fiv-dot-color,var(--ion-color-primary));top:50%;border-radius:100%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:8px;display:none}.dot.left{left:8px;right:unset}.dot.right{right:8px}:host(.rounded.left){--border-radius-rounded-left:0 50px 50px 0}:host(.rounded.left) ion-item{--border-radius:var(--border-radius-rounded-left)}:host(.rounded.right){--border-radius-rounded-right:50px 0 0 50px}:host(.rounded.right) ion-item{--border-radius:var(--border-radius-rounded-right)}:host(.active.rounded){--background-rounded:var(--ion-color-primary-rgb);--opacity-rounded:0.25}:host(.active.rounded) ion-item{--background:rgba(var(--background-rounded), var(--opacity-rounded))}.left{left:0}.right{right:0}ion-item{--border-style:none}fiv-icon{--fiv-padding-end:8px}ion-item:hover{--background-hover:var(--ion-color-light);cursor:pointer;--background:var(--background-hover)}:host(.router-item-disabled){pointer-events:none}"]
                        }] }
            ];
            /** @nocollapse */
            FivRouterItem.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: FivExpandable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] }
            ]; };
            FivRouterItem.propDecorators = {
                fivIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['fivIcon',] }],
                active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                detail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                detailIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                matchChildUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                pageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['click',] }],
                classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class',] }],
                activeClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.active',] }],
                disabledClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.router-item-disabled',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivRouterItemModule = /** @class */ (function () {
                function FivRouterItemModule() {
                }
                return FivRouterItemModule;
            }());
            FivRouterItemModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivRouterItem],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                                FivExpandableModule,
                                FivIconModule,
                                FivRippleModule
                            ],
                            exports: [FivRouterItem]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivAppBarTabContent = /** @class */ (function () {
                function FivAppBarTabContent() {
                    this.active = false;
                    this.titleLayout = 'hide';
                    this.selected = false;
                    this.badge = -1;
                    this.ionTabButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                Object.defineProperty(FivAppBarTabContent.prototype, "classes", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "label-" + this.titleLayout;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivAppBarTabContent.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivAppBarTabContent.prototype.onClick = function () {
                    // this.nav.navigateRoot(this.href);
                    this.ionTabButtonClick.emit({
                        tab: this.tab,
                        href: this.href,
                        selected: true
                    });
                };
                return FivAppBarTabContent;
            }());
            FivAppBarTabContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-app-bar-tab-content',
                            template: "<fiv-ripple (fivClick)=\"onClick()\" class=\"tab\" [ngClass]=\"{'active': active}\">\n  <fiv-icon [(indicatorValue)]=\"badge\" [name]=\"icon\"></fiv-icon>\n  <ion-label>{{name}}</ion-label>\n</fiv-ripple>",
                            styles: [":host{width:50%;height:100%;display:inline-block;position:relative}:host fiv-ripple{width:100%;height:100%;display:flex;position:relative;flex-direction:column;align-items:center;justify-content:center}:host fiv-icon{display:block;order:-1;--fiv-dot-top:-6px;--fiv-dot-right:-6px}:host ion-label{order:0}:host .tab.active{--fiv-color-icon:var(--ion-color-primary)}:host .tab.active ion-label{color:var(--ion-color-primary)}:host(.label-hide) ion-label{display:none}:host(.label-active-only) fiv-ripple:not(.active) ion-label{display:none}"]
                        }] }
            ];
            /** @nocollapse */
            FivAppBarTabContent.ctorParameters = function () { return []; };
            FivAppBarTabContent.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                tab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                titleLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                badge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class',] }],
                ionTabButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivFeatureDiscovery = /** @class */ (function () {
                /**
                 * @param {?} renderer
                 * @param {?} platform
                 */
                function FivFeatureDiscovery(renderer, platform) {
                    this.renderer = renderer;
                    this.platform = platform;
                    this.top = 0;
                    this.left = 0;
                    this.width = 420;
                    this.height = 420;
                    this.innerDiameter = 0;
                    this.featurePadding = 0;
                    this.contentTop = 0;
                    this.contentLeft = 0;
                    this.contentWidth = 0;
                    this.contentHeight = 0;
                    this.contentOffset = 0;
                    this.animationState = 'hidden';
                    this.pulse = 'small';
                    this.fivClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivBackdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivAnimation = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                FivFeatureDiscovery.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivFeatureDiscovery.prototype.ngAfterContentInit = function () { };
                /**
                 * @param {?} bounds
                 * @return {?}
                 */
                FivFeatureDiscovery.prototype.setBounds = function (bounds) {
                    this.bounds = bounds;
                    this.innerDiameter =
                        bounds.height > bounds.width ? bounds.height : bounds.width;
                    this.top = bounds.top + bounds.height / 2 - this.height / 2;
                    this.left = bounds.left + bounds.width / 2 - this.width / 2;
                    this.calculateContentBounds();
                    if (!this.icon) {
                        // tslint:disable-next-line:max-line-length
                        /** @type {?} */
                        var gradient = "-webkit-radial-gradient(transparent " + (this
                            .innerDiameter /
                            2 +
                            5) + "px, var(--fiv-color-feature) " + (this.innerDiameter / 2 + 5) + "px)";
                        // tslint:disable-next-line:max-line-length
                        /** @type {?} */
                        var pulseGradient = "-webkit-radial-gradient(transparent " + (this
                            .innerDiameter /
                            2 +
                            5) + "px, var(--fiv-color-pulse) " + (this.innerDiameter / 2 + 5) + "px)";
                        this.renderer.setStyle(this.circle.nativeElement, 'background', gradient);
                        this.renderer.setStyle(this.innerPulse.nativeElement, 'background', pulseGradient);
                        this.renderer.setStyle(this.outerPulse.nativeElement, 'background', pulseGradient);
                    }
                };
                /**
                 * @return {?}
                 */
                FivFeatureDiscovery.prototype.calculateContentBounds = function () {
                    /** @type {?} */
                    var absoluteCenter = {
                        x: this.platform.width() / 2,
                        y: this.platform.height() / 2
                    };
                    /** @type {?} */
                    var center = {
                        x: this.left + this.width / 2,
                        y: this.top + this.width / 2
                    };
                    /** @type {?} */
                    var rectWidth = Math.sqrt(Math.pow(this.width, 2) / 2);
                    /** @type {?} */
                    var isTop = center.y < absoluteCenter.y;
                    /** @type {?} */
                    var isLeft = center.x < absoluteCenter.x;
                    /** @type {?} */
                    var innerRadius = this.innerDiameter / 2;
                    /** @type {?} */
                    var padding = this.featurePadding / 2;
                    /** @type {?} */
                    var contentRight = 0;
                    /** @type {?} */
                    var contentBottom = 0;
                    if (isLeft) {
                        this.contentLeft = center.x - innerRadius;
                        contentRight = Math.min(center.x + rectWidth / 2 + this.contentOffset, this.platform.width());
                    }
                    else {
                        this.contentLeft = Math.max(center.x - rectWidth / 2 - this.contentOffset, 0);
                        contentRight = center.x + innerRadius;
                    }
                    if (isTop) {
                        this.contentTop = center.y + innerRadius + padding;
                        contentBottom = center.y + rectWidth / 2 + -1 * this.contentOffset;
                    }
                    else {
                        this.contentTop = center.y - rectWidth / 2 + this.contentOffset;
                        contentBottom = center.y - innerRadius - padding;
                    }
                    this.contentWidth = Math.abs(this.contentLeft - contentRight);
                    this.contentHeight = Math.abs(this.contentTop - contentBottom);
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivFeatureDiscovery.prototype.handleCircleAnimation = function (event) {
                    this.fivAnimation.emit(event);
                    if (event.toState === 'visible') {
                        this.fivOpen.emit();
                    }
                    if (event.fromState === 'visible' && event.toState === 'hidden') {
                        this.fivClose.emit();
                    }
                    if (event.fromState === 'visible' && event.toState === 'execute') {
                        this.fivClose.emit();
                    }
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivFeatureDiscovery.prototype.handleFeatureAnimation = function (event) {
                    if (event.toState === 'big') {
                        this.pulse = 'small';
                    }
                    if (event.toState === 'small') {
                        this.pulse = 'big';
                    }
                };
                /**
                 * @return {?}
                 */
                FivFeatureDiscovery.prototype.show = function () {
                    this.animationState = 'visible';
                };
                /**
                 * @return {?}
                 */
                FivFeatureDiscovery.prototype.hide = function () {
                    this.animationState = 'hidden';
                };
                /**
                 * @return {?}
                 */
                FivFeatureDiscovery.prototype.featureClick = function () {
                    this.animationState = 'execute';
                };
                /**
                 * @param {?} icon
                 * @return {?}
                 */
                FivFeatureDiscovery.prototype.setIcon = function (icon) {
                    if (icon) {
                        this.icon = icon.name;
                    }
                };
                return FivFeatureDiscovery;
            }());
            FivFeatureDiscovery.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-feature-discovery',
                            template: "<div class=\"backdrop\" (click)=\"fivBackdropClick.emit()\"></div>\n<div [@scale]=\"animationState\" (@scale.done)=\"handleCircleAnimation($event)\" #circle class=\"circle\"\n  [style.height]=\"height + 'px'\" [style.width]=\"width + 'px'\" [style.top]=\"top + 'px'\" [style.left]=\"left + 'px'\">\n  <div #pOuter class=\"feature center\" [@pulseFade]=\"pulse\" [style.height]=\"(innerDiameter + featurePadding) + 'px'\"\n    [style.width]=\"(innerDiameter + featurePadding) + 'px'\">\n  </div>\n  <fiv-ripple #pInner class=\"feature center\" (fivClick)=\"fivClick.emit()\" [@pulse]=\"pulse\"\n    (@pulse.done)=\"handleFeatureAnimation($event)\" [style.height]=\"(innerDiameter + (icon ? featurePadding : 0)) + 'px'\"\n    [style.width]=\"(innerDiameter + (icon ? featurePadding : 0)) + 'px'\">\n    <fiv-icon class=\"center\" *ngIf=\"icon\" [name]=\"icon\"></fiv-icon>\n  </fiv-ripple>\n</div>\n<div class=\"content\" *ngIf=\"animationState === 'visible'\" [@contentAnim] [style.width]=\"contentWidth + 'px'\"\n  [style.height]=\"contentHeight + 'px'\" [style.top]=\"contentTop + 'px'\" [style.left]=\"contentLeft + 'px'\">\n  <ng-content></ng-content>\n</div>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('scale', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => visible', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(0)', opacity: '0' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('240ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1)', opacity: '1' }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('visible => hidden', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1)', opacity: '1' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('215ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(0)', opacity: '0' }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('visible => execute', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1)', opacity: '1' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('215ms 0.15s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1.4)', opacity: '0' }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('pulse', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('small => big', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1) translate(-50%,-50%)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1.1) translate(-45%,-45%)' }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('big => small', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1.1) translate(-45%,-45%)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1) translate(-50%,-50%)' }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('pulseFade', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('small => big', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1) translate(-50%,-50%)', opacity: 0.8 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1.6) translate(-28%,-28%)', opacity: 0 }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('big => small', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1) translate(-50%,-50%)', opacity: 0 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1) translate(-50%,-50%)', opacity: 0 }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('contentAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms 240ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '1' }))
                                    ])
                                ])
                            ],
                            styles: [":host{display:block;height:100vh;width:100vw;position:absolute;--fiv-color-feature:rgba(56, 128, 255, 0.97);--fiv-color-pulse:var(--ion-color-light)}.backdrop{display:block;height:100vh;width:100vw;position:absolute}fiv-icon{--fiv-color-icon:var(--ion-color-primary)}.circle{position:absolute;border-radius:100%;background:var(--fiv-color-feature);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.feature{border-radius:100%;background:var(--fiv-color-pulse)}.content{position:absolute}.center{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
                        }] }
            ];
            /** @nocollapse */
            FivFeatureDiscovery.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"] }
            ]; };
            FivFeatureDiscovery.propDecorators = {
                circle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['circle',] }],
                rect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['rect',] }],
                innerPulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['pInner', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },] }],
                outerPulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['pOuter',] }],
                fivClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivBackdropClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivLoadingService = /** @class */ (function () {
                function FivLoadingService() {
                    this.loading = false;
                    this.isComplete = false;
                    this.loadChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.loading);
                    this.completeChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.isComplete);
                }
                /**
                 * @return {?}
                 */
                FivLoadingService.prototype.load = function () {
                    this.loading = true;
                    this.loadChange.next(this.loading);
                };
                /**
                 * @return {?}
                 */
                FivLoadingService.prototype.unload = function () {
                    this.loading = false;
                    this.loadChange.next(this.loading);
                    this.isComplete = false;
                };
                /**
                 * @return {?}
                 */
                FivLoadingService.prototype.toggleSpinner = function () {
                    this.loading = !this.loading;
                };
                /**
                 * @return {?}
                 */
                FivLoadingService.prototype.complete = function () {
                    this.isComplete = true;
                    this.completeChange.next(this.isComplete);
                };
                return FivLoadingService;
            }());
            FivLoadingService.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                            providedIn: 'root'
                        },] }
            ];
            /** @nocollapse */
            FivLoadingService.ctorParameters = function () { return []; };
            /** @nocollapse */ FivLoadingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function FivLoadingService_Factory() { return new FivLoadingService(); }, token: FivLoadingService, providedIn: "root" });
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivLoadingProgressBar = /** @class */ (function () {
                /**
                 * @param {?} loadingService
                 * @param {?} builder
                 */
                function FivLoadingProgressBar(loadingService, builder) {
                    this.loadingService = loadingService;
                    this.builder = builder;
                    this.loading = false;
                    this.global = false;
                    this.isComplete = false;
                    this.progress = 0;
                    this.verticalAlign = 'top';
                    this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivDoneShrinking = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.animating = false;
                }
                /**
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.global) {
                        this.loadingService.completeChange.subscribe(( /**
                         * @param {?} isComplete
                         * @return {?}
                         */function (/**
                         * @param {?} isComplete
                         * @return {?}
                         */ isComplete) {
                            if (isComplete) {
                                _this.complete(null);
                            }
                        }));
                    }
                };
                /**
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.ngOnDestroy = function () {
                    if (this.global) {
                        this.loadingService.completeChange.unsubscribe();
                    }
                };
                /**
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.toggleSpinner = function () {
                    this.loading = !this.loading;
                };
                /**
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.load = function () {
                    this.loading = true;
                    this.fivRefresh.emit(this);
                };
                /**
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.unload = function () {
                    this.loading = false;
                    if (this.isComplete) {
                        this.isComplete = false;
                    }
                };
                /**
                 * @param {?=} param
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.complete = function (param) {
                    this.param = param;
                    this.isComplete = true;
                    this.fillIn(850);
                };
                /**
                 * @param {?} isComplete
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.fillAnimationComplete = function (isComplete) {
                    if (isComplete) {
                        this.fivComplete.emit(this.param);
                        this.isComplete = false;
                        this.param = null;
                        if (this.global) {
                            this.loadingService.unload();
                        }
                        else {
                            this.unload();
                        }
                    }
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.setProgress = function (progress) {
                    if (progress < 0) {
                        this.progress = 0;
                        return;
                    }
                    if (progress > 100) {
                        this.progress = 100;
                        return;
                    }
                    this.progress = progress;
                };
                /**
                 * @param {?} ms
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.fillIn = function (ms) {
                    var _this = this;
                    // first define a reusable animation
                    this.progress = 0;
                    /** @type {?} */
                    var myAnimation = this.builder.build([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: this.progress + "%" }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(ms, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: '100%' }))
                    ]);
                    // use the returned factory object to create a player
                    /** @type {?} */
                    var player = myAnimation.create(this.linear.nativeElement);
                    /** @type {?} */
                    var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, ms / 100).subscribe(( /**
                     * @return {?}
                     */function () {
                        if (_this.progress <= 0) {
                            return t.unsubscribe();
                        }
                        _this.progress++;
                    }));
                    player.play();
                    player.onDone(( /**
                     * @return {?}
                     */function () {
                        if (_this.animating) {
                            _this.fillAnimationComplete(true);
                            _this.stopProgressAnimation();
                        }
                    }));
                    this.stopProgressAnimation();
                    this.animating = true;
                    this._progressPlayer = player;
                };
                /**
                 * @param {?} ms
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.shrinkIn = function (ms) {
                    var _this = this;
                    // first define a reusable animation
                    this.progress = 100;
                    /** @type {?} */
                    var myAnimation = this.builder.build([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: this.progress + "%" }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(ms, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: 0 }))
                    ]);
                    // use the returned factory object to create a player
                    /** @type {?} */
                    var player = myAnimation.create(this.linear.nativeElement);
                    /** @type {?} */
                    var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, ms / 100).subscribe(( /**
                     * @return {?}
                     */function () {
                        if (_this.progress <= 0) {
                            return t.unsubscribe();
                        }
                        _this.progress--;
                    }));
                    player.play();
                    player.onDone(( /**
                     * @return {?}
                     */function () {
                        if (_this.animating) {
                            _this.fivDoneShrinking.emit(true);
                            _this.stopProgressAnimation();
                        }
                    }));
                    this.stopProgressAnimation();
                    this.animating = true;
                    this._progressPlayer = player;
                };
                /**
                 * @return {?}
                 */
                FivLoadingProgressBar.prototype.stopProgressAnimation = function () {
                    if (this._progressPlayer) {
                        this._progressPlayer.destroy();
                        this._progressPlayer = null;
                        this.animating = false;
                    }
                };
                return FivLoadingProgressBar;
            }());
            FivLoadingProgressBar.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-loading-progress-bar',
                            template: "<div [@progressAnim] *ngIf=\"(!global && loading) || (global && loadingService.loading)\" class=\"slider\" [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" >\n  <div class=\"line\"></div>\n  <div *ngIf=\"!isComplete\" class=\"subline inc\"></div>\n  <!-- <div *ngIf=\"isComplete\" [@fillAnim] (@fillAnim.done)=\"fillAnimationComplete(isComplete)\" class=\"subline fill\"></div> -->\n  <div *ngIf=\"!isComplete\" class=\"subline dec\"></div>\n</div>\n<div #linear [@progressAnimLinear] class=\"progress\"  [ngClass]=\"{'top':verticalAlign == 'top','bottom': verticalAlign == 'bottom'}\" ></div>\n",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('progressAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('250ms ease-out')
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px' }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('progressAnimLinear', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('65ms ease-out')
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('299ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px' }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fillAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            width: '0px'
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('850ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: '100%' }))
                                    ])
                                ])
                            ],
                            styles: [":host{--background-progress-bar:var(--ion-color-primary);--color-spin-0:var(--ion-color-primary-shade);--color-spin-25:var(--ion-color-primary-shade);--color-spin-50:var(--ion-color-primary-shade);--color-spin-75:var(--ion-color-primary-shade);--color-spin-100:var(--ion-color-primary-shade)}.slider{position:absolute;width:100%;height:5px;overflow-x:hidden;z-index:5000}.progress{position:absolute;height:5px;width:0;overflow-x:hidden;z-index:5000;background:var(--background-progress-bar);transition:240ms}.line{position:absolute;opacity:.4;width:240%;height:5px;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}.subline{position:absolute;height:5px;background:inherit}.inc{-webkit-animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin;animation:1.6s infinite increase,5.6s ease-in-out infinite colorspin}.dec{-webkit-animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin;animation:1.6s .4s infinite decrease,5.6s ease-in-out infinite colorspin}.fill{left:0;width:100%;-webkit-animation:5.6s ease-in-out infinite colorspin;animation:5.6s ease-in-out infinite colorspin}@-webkit-keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@keyframes increase{from{left:-5%;width:5%}to{left:130%;width:100%}}@-webkit-keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@keyframes decrease{from{left:-80%;width:80%}to{left:110%;width:10%}}@-webkit-keyframes colorspin{0%{background-color:var(--color-spin-0)}25%{background-color:var(--color-spin-25)}50%{background-color:var(--color-spin-50)}75%{background-color:var(--color-spin-75)}100%{background-color:var(--color-spin-100)}}@keyframes colorspin{0%{background-color:var(--color-spin-0)}25%{background-color:var(--color-spin-25)}50%{background-color:var(--color-spin-50)}75%{background-color:var(--color-spin-75)}100%{background-color:var(--color-spin-100)}}.top{top:0;left:0}.bottom{bottom:0;left:0}"]
                        }] }
            ];
            /** @nocollapse */
            FivLoadingProgressBar.ctorParameters = function () { return [
                { type: FivLoadingService },
                { type: _angular_animations__WEBPACK_IMPORTED_MODULE_6__["AnimationBuilder"] }
            ]; };
            FivLoadingProgressBar.propDecorators = {
                loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                global: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                isComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivDoneShrinking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                bar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['bar',] }],
                linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['linear',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var BASE_SIZE = 100;
            var FivLoadingSpinner = /** @class */ (function () {
                /**
                 * @param {?} _document
                 * @param {?} _elementRef
                 * @param {?} change
                 * @param {?} builder
                 * @param {?} sanitizer
                 * @param {?} renderer
                 */
                function FivLoadingSpinner(_document, _elementRef, change, builder, sanitizer, renderer) {
                    this._document = _document;
                    this._elementRef = _elementRef;
                    this.change = change;
                    this.builder = builder;
                    this.sanitizer = sanitizer;
                    this.renderer = renderer;
                    this._diameter = BASE_SIZE;
                    this._strokeWidth = 10;
                    this._value = 0;
                    this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.mode = 'indeterminate';
                    this.circleRadius = 45;
                }
                Object.defineProperty(FivLoadingSpinner.prototype, "color", {
                    /**
                     * @param {?} color
                     * @return {?}
                     */
                    set: function (color) {
                        this._color = "var(--ion-color-" + color + ")";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivLoadingSpinner.prototype, "class", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return (this.mode +
                            ' fiv-spinner fiv-progress-spinner fiv-progress-spinner-indeterminate-animation');
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivLoadingSpinner.prototype.ngOnInit = function () { };
                Object.defineProperty(FivLoadingSpinner.prototype, "viewBox", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        /** @type {?} */
                        var viewBox = this.circleRadius * 2 + this.strokeWidth;
                        return "0 0 " + viewBox + " " + viewBox;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivLoadingSpinner.prototype, "strokeCircumference", {
                    /**
                     * The stroke circumference of the svg circle.
                     * @return {?}
                     */
                    get: function () {
                        return 2 * Math.PI * this.circleRadius;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivLoadingSpinner.prototype, "strokeDashOffset", {
                    /**
                     * The dash offset of the svg circle.
                     * @return {?}
                     */
                    get: function () {
                        if (this.mode === 'determinate') {
                            return (this.strokeCircumference * (100 - this._value)) / 100;
                        }
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivLoadingSpinner.prototype, "circleStrokeWidth", {
                    /**
                     * Stroke width of the circle in percent.
                     * @return {?}
                     */
                    get: function () {
                        return (this.strokeWidth / this.diameter) * 100;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivLoadingSpinner.prototype, "value", {
                    /**
                     * Value of the progress circle.
                     * @return {?}
                     */
                    get: function () {
                        return this.mode === 'determinate' ? this._value : 0;
                    },
                    /**
                     * @param {?} newValue
                     * @return {?}
                     */
                    set: function (newValue) {
                        this._value = Math.max(0, Math.min(100, newValue));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivLoadingSpinner.prototype, "diameter", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._diameter;
                    },
                    /**
                     * @param {?} size
                     * @return {?}
                     */
                    set: function (size) {
                        this._diameter = size;
                        if (!FivLoadingSpinner.diameters.has(this._diameter)) {
                            this._attachStyleNode();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivLoadingSpinner.prototype, "strokeWidth", {
                    /**
                     * Stroke width of the progress spinner.
                     * @return {?}
                     */
                    get: function () {
                        return this._strokeWidth || this.diameter / 10;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._strokeWidth = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Dynamically generates a style tag containing the correct animation for this diameter.
                 * @private
                 * @return {?}
                 */
                FivLoadingSpinner.prototype._attachStyleNode = function () {
                    /** @type {?} */
                    var styleTag = FivLoadingSpinner.styleTag;
                    if (!styleTag) {
                        styleTag = this._document.createElement('style');
                        this._document.head.appendChild(styleTag);
                        FivLoadingSpinner.styleTag = styleTag;
                    }
                    if (styleTag && styleTag.sheet) {
                        (( /** @type {?} */(styleTag.sheet))).insertRule(this._getAnimationText(), 0);
                    }
                    FivLoadingSpinner.diameters.add(this.diameter);
                };
                /**
                 * Generates animation styles adjusted for the spinner's diameter.
                 * @private
                 * @return {?}
                 */
                FivLoadingSpinner.prototype._getAnimationText = function () {
                    /** @type {?} */
                    var INDETERMINATE_ANIMATION_TEMPLATE = "\n    @keyframes fiv-progress-spinner-stroke-rotate-DIAMETER {\n       0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n       12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n       12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n       25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n       25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n       37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n       37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n       50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n       50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n       62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n       62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n       75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n       75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n       87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n       87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n       100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n     }\n   ";
                    return (INDETERMINATE_ANIMATION_TEMPLATE
                        // Animation should begin at 5% and end at 80%
                        .replace(/START_VALUE/g, "" + 0.95 * this.strokeCircumference)
                        .replace(/END_VALUE/g, "" + 0.2 * this.strokeCircumference)
                        .replace(/DIAMETER/g, "" + this.diameter));
                };
                /**
                 * @param {?} duration
                 * @return {?}
                 */
                FivLoadingSpinner.prototype.completeIn = function (duration) {
                    var _this = this;
                    this.mode = 'determinate';
                    this.change.detectChanges();
                    /** @type {?} */
                    var animation = this.builder.build([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                            'stroke-dasharray': 180,
                            'stroke-dashoffset': 90,
                            transformOrigin: 'center',
                            stroke: '#DE3E35'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(duration + "ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                            'stroke-dasharray': 315,
                            'stroke-dashoffset': 0,
                            transformOrigin: 'center',
                            stroke: '#1B9A59',
                            opacity: 0
                        }))
                    ]);
                    /** @type {?} */
                    var player = animation.create(this.determinateCircle.nativeElement);
                    player.play();
                    player.onDone(( /**
                     * @return {?}
                     */function () {
                        _this.fivComplete.emit(_this);
                        _this._value = 0;
                    }));
                    /** @type {?} */
                    var i = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(duration / 100);
                    /** @type {?} */
                    var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(duration + duration / 50);
                    /** @type {?} */
                    var progress = i.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(t));
                    progress.subscribe(( /**
                     * @param {?} p
                     * @return {?}
                     */function (/**
                     * @param {?} p
                     * @return {?}
                     */ p) {
                        _this.fivProgress.emit(p);
                    }));
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivLoadingSpinner.prototype.setValue = function (progress) {
                    this.mode = 'determinate';
                    this._value = progress;
                    this.change.detectChanges();
                };
                /**
                 * @return {?}
                 */
                FivLoadingSpinner.prototype.spin = function () {
                    this.mode = 'indeterminate';
                    this.change.detectChanges();
                };
                /**
                 * @return {?}
                 */
                FivLoadingSpinner.prototype.stopSpinning = function () {
                    this._value = 0;
                    this.change.detectChanges();
                };
                /**
                 * @param {?} mode
                 * @return {?}
                 */
                FivLoadingSpinner.prototype.setMode = function (mode) {
                    this.mode = mode;
                    this.change.detectChanges();
                };
                return FivLoadingSpinner;
            }());
            FivLoadingSpinner.diameters = new Set([BASE_SIZE]);
            FivLoadingSpinner.styleTag = null;
            FivLoadingSpinner.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-loading-spinner',
                            template: "<svg [style.width.px]=\"diameter\" [style.height.px]=\"diameter\" [attr.viewBox]=\"viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" [ngSwitch]=\"mode == 'indeterminate'\">\n  <circle [attr.stroke]=\"_color\" *ngSwitchCase=\"true\" cx=\"50%\" cy=\"50%\" [attr.r]=\"circleRadius\"\n    [style.animation-name]=\"'fiv-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"strokeDashOffset\" [style.stroke-dasharray.px]=\"strokeCircumference\"\n    [style.stroke-width.%]=\"circleStrokeWidth\"></circle>\n\n  <circle [attr.stroke]=\"_color\" class=\"determinate-circle\" #determinateCircle *ngSwitchCase=\"false\" cx=\"50%\" cy=\"50%\"\n    [attr.r]=\"circleRadius\" [style.stroke-dashoffset.px]=\"strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"strokeCircumference\" [style.stroke-width.%]=\"circleStrokeWidth\"></circle>\n</svg>",
                            // tslint:disable-next-line:use-host-property-decorator
                            host: {
                                '[style.width.px]': 'diameter',
                                '[style.height.px]': 'diameter'
                            },
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                            styles: ["fiv-loading-spinner{display:block;position:relative}fiv-loading-spinner svg{position:absolute;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);top:0;left:0;-webkit-transform-origin:center;transform-origin:center;overflow:visible}fiv-loading-spinner circle{fill:transparent;-webkit-transform-origin:center;transform-origin:center;transition:stroke-dashoffset 225ms linear}fiv-loading-spinner.fiv-progress-spinner-indeterminate-animation.determinate circle{transition-property:stroke;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}fiv-loading-spinner.fiv-progress-spinner-indeterminate-animation.indeterminate{-webkit-animation:2s linear infinite fiv-progress-spinner-linear-rotate;animation:2s linear infinite fiv-progress-spinner-linear-rotate}fiv-loading-spinner.fiv-progress-spinner-indeterminate-animation.indeterminate circle{transition-property:stroke;-webkit-animation-duration:4s;animation-duration:4s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes fiv-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fiv-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fiv-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotate(0);transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotate(0);transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}}@keyframes fiv-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotate(0);transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotate(0);transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotateX(180deg) rotate(72.5deg);transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotateX(180deg) rotate(161.5deg);transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotate(180deg);transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotateX(180deg) rotate(251.5deg);transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677646px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.6061718819px;-webkit-transform:rotateX(180deg) rotate(341.5deg);transform:rotateX(180deg) rotate(341.5deg)}}"]
                        }] }
            ];
            /** @nocollapse */
            FivLoadingSpinner.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
                { type: _angular_animations__WEBPACK_IMPORTED_MODULE_6__["AnimationBuilder"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
            ]; };
            FivLoadingSpinner.propDecorators = {
                fivProgress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                determinateCircle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['determinateCircle',] }],
                mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                circleRadius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class',] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivFab = /** @class */ (function () {
                /**
                 * @param {?} renderer
                 * @param {?} platform
                 * @param {?} content
                 */
                function FivFab(renderer, platform, content) {
                    this.renderer = renderer;
                    this.platform = platform;
                    this.content = content;
                    this.vertical = 'none';
                    this.horizontal = 'none';
                    this.mode = 'normal';
                    this.spinColor = 'primary';
                    this.disabled = false;
                    this.visible = true;
                    this.pulse = false;
                    this._scroll = true;
                    this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivShow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivTransition = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.loading = false;
                    this.extended = false;
                    this.iconState = 'normal';
                    this.currentDeltaY = 0;
                    this.$onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                }
                Object.defineProperty(FivFab.prototype, "scroll", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._scroll;
                    },
                    /**
                     * @param {?} scroll
                     * @return {?}
                     */
                    set: function (scroll) {
                        this._scroll = scroll;
                        this.$onDestroy.next();
                        this.ngOnInit();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivFab.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.content) {
                        return;
                    }
                    if (!this.scroll) {
                        return;
                    }
                    this.content.scrollEvents = true;
                    /** @type {?} */
                    var directionChange = this.content.ionScroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                     * @param {?} ev
                     * @return {?}
                     */function (/**
                     * @param {?} ev
                     * @return {?}
                     */ ev) { return ev.detail.deltaY; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var _b = __read(_a, 2), y1 = _b[0], y2 = _b[1];
                        return (y2 < y1 ? 'Up' : 'Down');
                    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.content.ionScrollEnd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["repeat"])());
                    /** @type {?} */
                    var up = directionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} direction
                     * @return {?}
                     */function (/**
                     * @param {?} direction
                     * @return {?}
                     */ direction) { return direction === 'Up'; })));
                    /** @type {?} */
                    var down = directionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                     * @param {?} direction
                     * @return {?}
                     */function (/**
                     * @param {?} direction
                     * @return {?}
                     */ direction) { return direction === 'Down'; })));
                    up.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                     * @return {?}
                     */function () { return _this.labelComp ? (_this.extended = true) : (_this.visible = true); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.$onDestroy)).subscribe();
                    down
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(( /**
                 * @return {?}
                 */function () { return _this.labelComp ? (_this.extended = false) : (_this.visible = false); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.$onDestroy))
                        .subscribe();
                };
                /**
                 * @return {?}
                 */
                FivFab.prototype.ngOnDestroy = function () {
                    this.$onDestroy.next();
                };
                /**
                 * @return {?}
                 */
                FivFab.prototype.ngAfterContentInit = function () {
                    this.extended = !!this.labelComp;
                };
                /**
                 * @return {?}
                 */
                FivFab.prototype.load = function () {
                    this.loading = true;
                    this.fivRefresh.emit(this);
                };
                /**
                 * @return {?}
                 */
                FivFab.prototype.unload = function () {
                    if (this.bar) {
                        this.bar.unload();
                    }
                    this.loading = false;
                };
                /**
                 * @return {?}
                 */
                FivFab.prototype.complete = function () {
                    if (this.loading) {
                        if (this.spinner) {
                            this.spinner.completeIn(1000);
                        }
                        else if (this.bar) {
                            this.bar.complete();
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                FivFab.prototype.fillAnimationDone = function () {
                    this.fivComplete.emit(this);
                    this.unload();
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivFab.prototype.rotate = function (progress) {
                    this.renderer.setStyle(this.spinner._elementRef.nativeElement, 'transform', "rotateZ(" + (progress / 200) * 360 + "deg)");
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivFab.prototype.fabAnimDone = function (event) {
                    if (event.fromState === 'void') {
                        this.fivShow.emit(this);
                    }
                    if (event.toState === 'void') {
                        this.fivHidden.emit(this);
                    }
                };
                return FivFab;
            }());
            FivFab.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-fab',
                            template: "<ion-fab *ngIf=\"visible\" (@fabAnim.done)=\"fabAnimDone($event)\" [@fabAnim]=\"horizontal\"\n  [ngClass]=\"[mode,horizontal,vertical]\" [slot]=\"slot\">\n  <fiv-loading-spinner [color]=\"spinColor\" *ngIf=\"!extended && loading\" (fivProgress)=\"rotate($event)\" #spinner\n    (fivComplete)=\"fillAnimationDone()\" class=\"spinner\" [circleRadius]=\"30\" [diameter]=\"68\" [strokeWidth]=\"4\"\n    [mode]=\"'indeterminate'\">\n  </fiv-loading-spinner>\n\n  <ion-button [ngClass]=\"{'pulse': pulse, 'small':!labelComp || !extended}\" [color]=\"color\" [disabled]=\"disabled\">\n    <fiv-loading-progress-bar *ngIf=\"extended\" [loading]=\"loading\" (fivComplete)=\"fillAnimationDone()\" #bar>\n    </fiv-loading-progress-bar>\n    <fiv-icon [ngClass]=\"{'ios': platform.is('ios')}\" #feature=\"fivFeature\" slot=\"start\" [fivFeature]=\"feature\" *ngIf=\"iconComp\" [color]=\"iconComp.color\"\n      [name]=\"iconComp.name\" [dotVisible]=\"iconComp.dotVisible\" [indicatorValue]=\"iconComp.indicatorValue\">\n    </fiv-icon>\n    <div [@labelAnim] *ngIf=\"labelComp && extended\">\n      <ng-content select=\"ion-label\"></ng-content>\n    </div>\n  </ion-button>\n</ion-fab>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fabAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => center', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            transform: 'translateX(-50%) scale(0) '
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateX(-50%) scale(1)' }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('center => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            transform: 'translateX(-50%) scale(1) '
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: ' translateX(-50%) scale(0)' }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            transform: 'scale(0)'
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            transform: 'scale(1)'
                                        }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            transform: 'scale(1)'
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('250ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            transform: 'scale(0)'
                                        }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('labelAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: '0', opacity: 0 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('140ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: '*', opacity: 1 }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: '*', opacity: 1 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('120ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: 0, opacity: 0 }))
                                    ])
                                ])
                            ],
                            styles: [":host{--fiv-spinner-size:68px;display:contents;--fiv-fab-bottom:calc(10px + env(safe-area-inset-bottom));--fiv-fab-top:calc(10px + env(safe-area-inset-top))}:host(.button-disabled){pointer-events:none}fiv-icon.ios{--fiv-icon-height:24px;--fiv-icon-width:24px}fiv-icon:not(.ios){--fiv-icon-height:25px;--fiv-icon-width:25px}ion-button{--border-radius:28px;height:56px;min-width:56px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;margin:0}ion-fab.top{top:var(--fiv-fab-top)}ion-fab.top.edge{top:calc(var(--fiv-fab-top) - 38px)}ion-fab.middle{top:calc(50% - 28px)}ion-fab.bottom.edge{bottom:calc(var(--fiv-fab-bottom) - 38px)}ion-fab.bottom{bottom:var(--fiv-fab-bottom)}ion-fab.center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}ion-fab.start{left:10px}ion-fab.end{right:calc(10px + var(--ion-safe-area-right,0px))}.pulse{-webkit-animation:1.2s infinite shadow-pulse;animation:1.2s infinite shadow-pulse}fiv-loading-spinner{position:absolute;left:calc((var(--fiv-spinner-size) - 56px)/ -2);top:calc((var(--fiv-spinner-size) - 56px)/ -2)}@-webkit-keyframes shadow-pulse{0%{border-radius:28px;box-shadow:0 0 0 0 rgba(0,0,0,.2)}100%{border-radius:28px;box-shadow:0 0 0 28px transparent}}@keyframes shadow-pulse{0%{border-radius:28px;box-shadow:0 0 0 0 rgba(0,0,0,.2)}100%{border-radius:28px;box-shadow:0 0 0 28px transparent}}"]
                        }] }
            ];
            /** @nocollapse */
            FivFab.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
            ]; };
            FivFab.propDecorators = {
                vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                pulse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                feature: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivTransition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['spinner',] }],
                featureDiscovery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['feature',] }],
                bar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['bar',] }],
                iconComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [FivIcon,] }],
                labelComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonLabel"],] }]
            };
            if (false) { }
            /**
             * @record
             */
            function FabTransitionEvent() { }
            if (false) { }
            /** @enum {number} */
            var FabState = {
                HIDDEN: 0,
                NORMAL: 1,
                EXTENDED: 2,
            };
            FabState[FabState.HIDDEN] = 'HIDDEN';
            FabState[FabState.NORMAL] = 'NORMAL';
            FabState[FabState.EXTENDED] = 'EXTENDED';
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivAppBarTab = /** @class */ (function () {
                function FivAppBarTab() {
                    this.badge = -1;
                }
                /**
                 * @return {?}
                 */
                FivAppBarTab.prototype.ngOnInit = function () { };
                return FivAppBarTab;
            }());
            FivAppBarTab.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-app-bar-tab',
                            template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                            styles: [":host{width:50%;height:100%;display:inline-block;position:relative}:host fiv-ripple{width:100%;height:100%}:host fiv-icon{display:block}:host .tab.active{--fiv-color-icon:var(--ion-color-primary)}"]
                        }] }
            ];
            /** @nocollapse */
            FivAppBarTab.ctorParameters = function () { return []; };
            FivAppBarTab.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                tab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                badge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivAppBar = /** @class */ (function () {
                /**
                 * @param {?} router
                 * @param {?} tabs
                 */
                function FivAppBar(router, tabs) {
                    this.router = router;
                    this.tabs = tabs;
                    this._fabVisible = true;
                    this.cutoutVisible = true;
                    this.left = false;
                    this.right = false;
                    this.transitioning = false;
                    this.icon = 'md-add';
                    this.titleLayout = 'hide';
                    this.fivFabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                Object.defineProperty(FivAppBar.prototype, "position", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._position;
                    },
                    /**
                     * @param {?} position
                     * @return {?}
                     */
                    set: function (position) {
                        if (!position) {
                            return;
                        }
                        if (!this.fabVisible) {
                            this._position = position;
                            this.setPosition();
                            return;
                        }
                        this._fabVisible = false;
                        this.transitioning = true;
                        if (!this._position) {
                            this._position = position;
                            this.onFabHidden();
                            return;
                        }
                        this.prepareTabs(position);
                        this._position = position;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivAppBar.prototype, "fabVisible", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._fabVisible;
                    },
                    /**
                     * @param {?} fabVisible
                     * @return {?}
                     */
                    set: function (fabVisible) {
                        var _this = this;
                        if (this._fabVisible === true && fabVisible === false) {
                            this._fabVisible = false;
                        }
                        else if (this._fabVisible === false && fabVisible === true) {
                            this.cutoutVisible = true;
                            setTimeout(( /**
                             * @return {?}
                             */function () {
                                _this._fabVisible = true;
                            }), 250);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivAppBar.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivAppBar.prototype.ngAfterViewInit = function () { };
                /**
                 * @return {?}
                 */
                FivAppBar.prototype.ngAfterContentInit = function () {
                    this.prepareTabs(this.position);
                };
                /**
                 * @return {?}
                 */
                FivAppBar.prototype.onFabHidden = function () {
                    var _this = this;
                    if (this.transitioning) {
                        this.setPosition();
                        this.cutoutVisible = false;
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this.cutoutVisible = true;
                            setTimeout(( /**
                             * @return {?}
                             */function () {
                                _this._fabVisible = true;
                                _this.transitioning = false;
                            }), 225);
                        }), 225);
                    }
                    else {
                        this.cutoutVisible = false;
                    }
                };
                /**
                 * @private
                 * @param {?} position
                 * @return {?}
                 */
                FivAppBar.prototype.prepareTabs = function (position) {
                    if (position === 'center') {
                        this.tabsLeft = this.tabComponents.toArray().slice(0, 2);
                        this.tabsRight = this.tabComponents.toArray().slice(2, 4);
                    }
                    else if (position === 'right') {
                        this.tabsLeft = this.tabComponents.toArray();
                        this.tabsRight = [];
                    }
                    else if (position === 'left') {
                        this.tabsLeft = [];
                        this.tabsRight = this.tabComponents.toArray();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                FivAppBar.prototype.setPosition = function () {
                    if (this._position === 'right') {
                        this.right = true;
                        this.left = false;
                    }
                    else if (this._position === 'left') {
                        this.right = false;
                        this.left = true;
                    }
                    else {
                        this.right = false;
                        this.left = false;
                    }
                };
                /**
                 * @return {?}
                 */
                FivAppBar.prototype.fabClick = function () {
                    this.fivFabClick.emit(this);
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivAppBar.prototype.ionTabButtonClick = function (event) {
                    this.tabs.select(event.tab);
                };
                return FivAppBar;
            }());
            FivAppBar.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-app-bar',
                            template: "<div class=\"appbar\" [ngClass]=\"{'cutout': cutoutVisible, 'left': left, 'right': right}\">\n  <div class=\"appbar-rect left\">\n    <div class=\"tabs\">\n      <fiv-app-bar-tab-content (ionTabButtonClick)=\"ionTabButtonClick($event)\" [active]=\"router.url.endsWith(tab.href)\"\n        [tab]=\"tab.tab\" [href]=\"tab.href\" [name]=\"tab.name\" [icon]=\"tab.icon\" [badge]=\"tab.badge\"\n        [titleLayout]=\"titleLayout\" *ngFor=\"let tab of tabsLeft\"></fiv-app-bar-tab-content>\n    </div>\n  </div>\n  <fiv-fab [scroll]=\"false\" (fivHidden)=\"onFabHidden()\" [visible]=\"_fabVisible\" #fab (click)=\"fabClick()\">\n    <fiv-icon [name]=\"icon\"></fiv-icon>\n  </fiv-fab>\n  <div class=\"rect\"></div>\n  <div class=\"rect-filler\"></div>\n  <div class=\"appbar-rect right\">\n    <div class=\"tabs\">\n      <fiv-app-bar-tab-content (ionTabButtonClick)=\"ionTabButtonClick($event)\" [active]=\"router.url.endsWith(tab.href)\"\n        [tab]=\"tab.tab\" [href]=\"tab.href\" [name]=\"tab.name\" [icon]=\"tab.icon\" [badge]=\"tab.badge\"\n        [titleLayout]=\"titleLayout\" *ngFor=\"let tab of tabsRight\"></fiv-app-bar-tab-content>\n    </div>\n  </div>\n</div>",
                            styles: [":host{--fiv-color-appbar:var(--ion-color-light);--fiv-color-fab:var(--ion-color-primary)}.appbar{width:100%;position:fixed;bottom:0;left:0;height:calc(84px + env(safe-area-inset-bottom));background:rgba(0,0,0,0);z-index:5000}.appbar .appbar-rect{position:absolute;width:calc(50% - 34px);height:calc(56px + env(safe-area-inset-bottom));bottom:0;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1);transition:350ms}.appbar .appbar-rect.left{left:0;background:var(--fiv-color-appbar);border-top-right-radius:12px}.appbar .appbar-rect.right{right:0;background:var(--fiv-color-appbar);border-top-left-radius:12px}.appbar fiv-fab{display:block;width:56px;height:56px;-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;position:absolute;z-index:14}.appbar fiv-fab fiv-icon{--fiv-color-icon:var(--fiv-color-fab-icon)}.appbar .rect{display:inline-block;width:68px;height:48px;position:absolute;overflow:hidden;bottom:env(safe-area-inset-bottom);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:350ms}.appbar .rect-filler{display:inline-block;width:72px;height:env(safe-area-inset-bottom);position:absolute;overflow:hidden;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:350ms;background:var(--fiv-color-appbar)}.appbar .rect:before{content:\"\";position:absolute;bottom:50%;width:100%;height:100%;border-radius:100%;box-shadow:0 300px 0 300px var(--fiv-color-appbar);transition:350ms}.appbar:not(.cutout) .appbar-rect.left{border-top-right-radius:0}.appbar:not(.cutout) .appbar-rect.right{border-top-left-radius:0}.appbar:not(.cutout) .rect{height:56px;box-shadow:3px -4px 5px 0 rgba(0,0,0,.1);background:var(--fiv-color-appbar)}.appbar:not(.cutout) .rect:before{border-radius:0;bottom:100%}.appbar.left .appbar-rect.left{width:4px}.appbar.left .appbar-rect.right{width:calc(100% - 70px)}.appbar.left .rect{left:4px;-webkit-transform:translateX(0);transform:translateX(0);width:66px}.appbar.left fiv-fab{width:56px;height:56px;-webkit-transform:translateX(0);transform:translateX(0);left:10px;position:absolute}.appbar.right .appbar-rect.left{width:calc(100% - 70px)}.appbar.right .appbar-rect.right{width:4px}.appbar.right .rect{left:calc(100% - 37px);width:67px}.appbar.right fiv-fab{width:56px;height:56px;-webkit-transform:translateX(0);transform:translateX(0);left:calc(100% - 64px);position:absolute;--fiv-spinner-size:68px}.tabs{display:flex;width:100%;height:100%;position:relative}"]
                        }] }
            ];
            /** @nocollapse */
            FivAppBar.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTabs"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] }
            ]; };
            FivAppBar.propDecorators = {
                fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['fab',] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                titleLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivFabClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                _tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: [FivAppBarTabContent,] }],
                tabComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [FivAppBarTab,] }],
                position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fabVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivFeature = /** @class */ (function () {
                /**
                 * @param {?} host
                 * @param {?} viewContainer
                 * @param {?} icon
                 * @param {?} overlay
                 * @param {?} platform
                 */
                function FivFeature(host, viewContainer, icon, overlay, platform) {
                    this.host = host;
                    this.viewContainer = viewContainer;
                    this.icon = icon;
                    this.overlay = overlay;
                    this.platform = platform;
                    this.maxDiameter = 1080;
                    this.diameter = Math.min(this.platform.width() * 2, this.maxDiameter);
                    this.contentOffset = 20;
                    this.featurePadding = 20;
                    this.clickEnabled = true;
                    this.fivFeatureClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivWillOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivWillClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.isOpen = false;
                }
                /**
                 * @private
                 * @param {?} nativeElement
                 * @return {?}
                 */
                FivFeature.prototype.getBounds = function (nativeElement) {
                    /** @type {?} */
                    var bounds = nativeElement.getBoundingClientRect();
                    return {
                        top: bounds.top,
                        left: bounds.left,
                        height: nativeElement.clientHeight,
                        width: nativeElement.clientWidth
                    };
                };
                /**
                 * @return {?}
                 */
                FivFeature.prototype.show = function () {
                    var _this = this;
                    /** @type {?} */
                    var bounds = this.icon
                        ? this.getBounds(this.host.nativeElement.parentElement)
                        : this.getBounds(this.host.nativeElement);
                    this.overlayRef = this.overlay.createOverlay(this.viewContainer, FivFeatureDiscovery, this.fivFeature);
                    /** @type {?} */
                    var featureOverlay = this.overlayRef.instance;
                    featureOverlay.height = this.diameter;
                    featureOverlay.width = this.diameter;
                    featureOverlay.featurePadding = this.featurePadding;
                    featureOverlay.contentOffset = this.contentOffset;
                    featureOverlay.setIcon(this.icon);
                    featureOverlay.setBounds(bounds);
                    featureOverlay.show();
                    this.fivWillOpen.emit();
                    featureOverlay.fivAnimation
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) { return event.toState === 'visible'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(( /**
                 * @return {?}
                 */function () {
                        _this.didOpen();
                    }));
                    featureOverlay.fivClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.featureClick();
                    }));
                    featureOverlay.fivBackdropClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.hide();
                    }));
                };
                /**
                 * @return {?}
                 */
                FivFeature.prototype.hide = function () {
                    var _this = this;
                    this.fivWillClose.emit();
                    if (this.overlayRef) {
                        this.overlayRef.instance.hide();
                        this.overlayRef.instance.fivClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(( /**
                         * @return {?}
                         */function () {
                            _this.fivClose.emit();
                            _this.isOpen = false;
                            _this.overlayRef.destroy();
                            _this.overlayRef = null;
                        }));
                    }
                };
                /**
                 * @return {?}
                 */
                FivFeature.prototype.didOpen = function () {
                    this.fivOpen.emit();
                    this.isOpen = true;
                };
                /**
                 * @return {?}
                 */
                FivFeature.prototype.featureClick = function () {
                    var _this = this;
                    if (this.overlayRef) {
                        this.fivFeatureClick.emit();
                        this.fivWillClose.emit();
                        this.overlayRef.instance.featureClick();
                        this.overlayRef.instance.fivClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(( /**
                         * @return {?}
                         */function () {
                            _this.fivClose.emit();
                            _this.overlayRef.destroy();
                            _this.overlayRef = null;
                            if (_this.clickEnabled) {
                                _this.host.nativeElement.click();
                            }
                        }));
                    }
                };
                return FivFeature;
            }());
            FivFeature.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                            selector: '[fivFeature]',
                            exportAs: 'fivFeature'
                        },] }
            ];
            /** @nocollapse */
            FivFeature.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
                { type: FivIcon, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
                { type: FivOverlayService },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"] }
            ]; };
            FivFeature.propDecorators = {
                maxDiameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                contentOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                featurePadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                clickEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivFeature: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivFeatureClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivWillOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivWillClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivFeatureDiscoveryModule = /** @class */ (function () {
                function FivFeatureDiscoveryModule() {
                }
                return FivFeatureDiscoveryModule;
            }());
            FivFeatureDiscoveryModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivFeature, FivFeatureDiscovery],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], FivIconModule, FivRippleModule],
                            exports: [FivFeature, FivFeatureDiscovery],
                            entryComponents: [FivFeatureDiscovery]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivLoadingProgressBarModule = /** @class */ (function () {
                function FivLoadingProgressBarModule() {
                }
                return FivLoadingProgressBarModule;
            }());
            FivLoadingProgressBarModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivLoadingProgressBar],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [FivLoadingProgressBar],
                            providers: [FivLoadingService]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivLoadingSpinnerModule = /** @class */ (function () {
                function FivLoadingSpinnerModule() {
                }
                return FivLoadingSpinnerModule;
            }());
            FivLoadingSpinnerModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivLoadingSpinner],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [FivLoadingSpinner]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivFabModule = /** @class */ (function () {
                function FivFabModule() {
                }
                return FivFabModule;
            }());
            FivFabModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivFab],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                                FivCenterModule,
                                FivIconModule,
                                FivFeatureDiscoveryModule,
                                FivLoadingSpinnerModule,
                                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                                FivLoadingProgressBarModule
                            ],
                            exports: [FivFab],
                            providers: []
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivAppBarModule = /** @class */ (function () {
                function FivAppBarModule() {
                }
                return FivAppBarModule;
            }());
            FivAppBarModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivAppBar, FivAppBarTabContent, FivAppBarTab],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                                FivIconModule,
                                FivFabModule,
                                FivRippleModule,
                                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]
                            ],
                            exports: [FivAppBar, FivAppBarTabContent, FivAppBarTab],
                            providers: []
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @record
             */
            function RoutingStateConfig() { }
            if (false) { }
            var FivRoutingStateService = /** @class */ (function () {
                /**
                 * @param {?} router
                 * @param {?} navCtrl
                 * @param {?} platform
                 */
                function FivRoutingStateService(router, navCtrl, platform) {
                    this.router = router;
                    this.navCtrl = navCtrl;
                    this.platform = platform;
                    this.history = [];
                }
                /**
                 * @param {?=} config
                 * @return {?}
                 */
                FivRoutingStateService.prototype.loadRouting = function (config) {
                    var _this = this;
                    this.config = config;
                    this.handleAndroidBackButton();
                    this.router.events
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]; })))
                        .subscribe(( /**
                 * @param {?} __0
                 * @return {?}
                 */function (_a) {
                        var urlAfterRedirects = _a.urlAfterRedirects;
                        if (urlAfterRedirects === _this.getPreviousUrl(_this.config.root)) {
                            _this.pop();
                            _this.pop();
                        }
                        // add url to history
                        _this.history.push(urlAfterRedirects);
                        if (_this.config && _this.config.clearOn) {
                            /** @type {?} */
                            var clear = _this.config.clearOn.some(( /**
                             * @param {?} s
                             * @return {?}
                             */function (/**
                             * @param {?} s
                             * @return {?}
                             */ s) { return s === urlAfterRedirects; }));
                            if (clear) {
                                _this.clearHistory(urlAfterRedirects);
                            }
                        }
                    }));
                };
                /**
                 * @param {?} target
                 * @return {?}
                 */
                FivRoutingStateService.prototype.registerNavigateable = function (target) {
                    if (isNavigateable(target)) {
                        this.history.push(target);
                    }
                };
                /**
                 * @return {?}
                 */
                FivRoutingStateService.prototype.handleAndroidBackButton = function () {
                    var _this = this;
                    this.platform.backButton
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                 * @return {?}
                 */function () { return !isNavigateable(_this.getCurrentUrl()); })))
                        .subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) {
                        _this.goBack();
                    }));
                    this.platform.backButton
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(( /**
                 * @return {?}
                 */function () { return isNavigateable(_this.getCurrentUrl()); })))
                        .subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) {
                        event.register(99999, ( /**
                         * @return {?}
                         */function () {
                            _this.goBack('/');
                        }));
                    }));
                };
                /**
                 * @return {?}
                 */
                FivRoutingStateService.prototype.getHistory = function () {
                    return this.history;
                };
                /**
                 * @param {?=} defaultHref
                 * @return {?}
                 */
                FivRoutingStateService.prototype.getPreviousUrl = function (defaultHref) {
                    if (defaultHref === void 0) { defaultHref = '/'; }
                    if (this.history.length >= 2) {
                        return this.history[this.history.length - 2];
                    }
                    return defaultHref;
                };
                /**
                 * @return {?}
                 */
                FivRoutingStateService.prototype.pop = function () {
                    return this.history.pop();
                };
                /**
                 * @param {?} fromUrl
                 * @return {?}
                 */
                FivRoutingStateService.prototype.clearHistory = function (fromUrl) {
                    var _this = this;
                    this.history = this.history.filter(( /**
                     * @param {?} h
                     * @return {?}
                     */function (/**
                     * @param {?} h
                     * @return {?}
                     */ h) { return _this.config.clearOn.some(( /**
                     * @param {?} s
                     * @return {?}
                     */function (/**
                     * @param {?} s
                     * @return {?}
                     */ s) { return s === h; })); }));
                    if (fromUrl !== this.config.root) {
                        this.history.push(fromUrl);
                    }
                    this.history = this.history
                        .reverse()
                        .filter(( /**
                 * @param {?} item
                 * @param {?} pos
                 * @param {?} self
                 * @return {?}
                 */function (item, pos, self) {
                        return self.indexOf(item) === pos;
                    }))
                        .reverse();
                    if (this.history[0] !== this.config.root) {
                        this.history = __spread([this.config.root], this.history);
                    }
                };
                /**
                 * @return {?}
                 */
                FivRoutingStateService.prototype.getCurrentUrl = function () {
                    return this.history[this.history.length - 1];
                };
                /**
                 * @param {?=} defaultHref
                 * @return {?}
                 */
                FivRoutingStateService.prototype.goBack = function (defaultHref) {
                    if (defaultHref === void 0) { defaultHref = '/'; }
                    if (this.getHistory().length <= 1) {
                        // close the app because we are at root level
                        return navigator['app'].exitApp();
                    }
                    /** @type {?} */
                    var current = this.getCurrentUrl();
                    if (typeof current !== 'string' && isNavigateable(current)) {
                        current.dismiss();
                        return this.pop();
                    }
                    /** @type {?} */
                    var previous = this.getPreviousUrl(defaultHref);
                    if (typeof previous === 'string') {
                        return this.navCtrl.navigateBack(previous);
                    }
                    if (isNavigateable(previous)) {
                        return this.navCtrl.navigateBack(this.getLatestUrl(defaultHref));
                    }
                };
                /**
                 * @param {?} defaultHref
                 * @return {?}
                 */
                FivRoutingStateService.prototype.getLatestUrl = function (defaultHref) {
                    /** @type {?} */
                    var urls = this.history.filter(( /**
                     * @param {?} e
                     * @return {?}
                     */function (/**
                     * @param {?} e
                     * @return {?}
                     */ e) { return !!(typeof e === 'string'); }));
                    /** @type {?} */
                    var latest = urls[urls.length - 1];
                    if (urls.length > 0 && latest && typeof latest === 'string') {
                        return latest;
                    }
                    return defaultHref;
                };
                return FivRoutingStateService;
            }());
            FivRoutingStateService.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                            providedIn: 'root'
                        },] }
            ];
            /** @nocollapse */
            FivRoutingStateService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"] }
            ]; };
            /** @nocollapse */ FivRoutingStateService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function FivRoutingStateService_Factory() { return new FivRoutingStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavController"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"])); }, token: FivRoutingStateService, providedIn: "root" });
            if (false) { }
            /**
             * @param {?} object
             * @return {?}
             */
            function isNavigateable(object) {
                return !!object && object.dismiss !== undefined;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivBackButton = /** @class */ (function () {
                /**
                 * @param {?} routingState
                 */
                function FivBackButton(routingState) {
                    this.routingState = routingState;
                    this.icon = 'arrow-back';
                    this.defaultHref = '/';
                }
                /**
                 * @return {?}
                 */
                FivBackButton.prototype.buttonClick = function () {
                    this.routingState.goBack(this.defaultHref);
                };
                return FivBackButton;
            }());
            FivBackButton.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-back-button',
                            template: "<ion-button (click)=\"buttonClick()\">\n  <fiv-icon [color]=\"color\" [name]=\"icon\"></fiv-icon>\n</ion-button>\n",
                            styles: [":host{display:block;padding-top:.2em}"]
                        }] }
            ];
            /** @nocollapse */
            FivBackButton.ctorParameters = function () { return [
                { type: FivRoutingStateService }
            ]; };
            FivBackButton.propDecorators = {
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                defaultHref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivBackButtonModule = /** @class */ (function () {
                function FivBackButtonModule() {
                }
                return FivBackButtonModule;
            }());
            FivBackButtonModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivBackButton],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], FivIconModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivBackButton],
                            providers: []
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivPopover = /** @class */ (function () {
                /**
                 * @param {?} navParams
                 * @param {?} popoverController
                 */
                function FivPopover(navParams, popoverController) {
                    this.navParams = navParams;
                    this.popoverController = popoverController;
                    this.buttons = [];
                    this.buttons = navParams.get('buttons');
                }
                /**
                 * @return {?}
                 */
                FivPopover.prototype.ngOnInit = function () { };
                /**
                 * @param {?} i
                 * @return {?}
                 */
                FivPopover.prototype.onItemClicked = function (i) {
                    this.popoverController.dismiss({ index: i });
                };
                return FivPopover;
            }());
            FivPopover.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-popover',
                            template: "<ion-content>\n  <ion-item (click)=\"onItemClicked(i)\" class=\"popover-item\" *ngFor=\"let button of buttons; let i = index\">\n    <ion-icon slot=\"start\" [name]=\"button.icon\"></ion-icon>\n    <ion-label>{{button.text}}</ion-label>\n  </ion-item>\n</ion-content>",
                            styles: [".popover-item{--border-style:none}.popover-item:hover{--background:rgb(240, 240, 240);cursor:pointer}"]
                        }] }
            ];
            /** @nocollapse */
            FivPopover.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["NavParams"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["PopoverController"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivButtons = /** @class */ (function () {
                /**
                 * @param {?} platform
                 * @param {?} popoverController
                 * @param {?} actionSheetController
                 */
                function FivButtons(platform, popoverController, actionSheetController) {
                    this.platform = platform;
                    this.popoverController = popoverController;
                    this.actionSheetController = actionSheetController;
                    this.slot = 'end';
                    this.icon = 'more';
                    this.count = 0;
                    this.forceActionsheet = false;
                    this.forcePopover = false;
                    this.iconsOnly = true;
                }
                /**
                 * @return {?}
                 */
                FivButtons.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivButtons.prototype.ngAfterContentInit = function () { };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivButtons.prototype.onMenuClicked = function (event) {
                    if (this.forceActionsheet) {
                        this.presentActionSheet(event);
                        return;
                    }
                    if (this.forcePopover) {
                        this.presentPopover(event);
                        return;
                    }
                    if (this.platform.is('mobile')) {
                        this.presentActionSheet(event);
                    }
                    else {
                        this.presentPopover(event);
                    }
                };
                /**
                 * @param {?} ev
                 * @return {?}
                 */
                FivButtons.prototype.presentPopover = function (ev) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__awaiter"])(this, void 0, void 0, function () {
                        var popover, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.popoverController.create({
                                        component: FivPopover,
                                        event: ev,
                                        translucent: false,
                                        componentProps: {
                                            buttons: this.buttons
                                                .toArray()
                                                .slice(this.count)
                                                .filter(( /**
                                         * @param {?} button
                                         * @return {?}
                                         */function (/**
                                         * @param {?} button
                                         * @return {?}
                                         */ button) { return !button.disabled; }))
                                        }
                                    })];
                                case 1:
                                    popover = _a.sent();
                                    return [4 /*yield*/, popover.present()];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, popover.onDidDismiss()];
                                case 3:
                                    result = _a.sent();
                                    if (result &&
                                        result.data &&
                                        (result.data.index || result.data.index === 0)) {
                                        this.onButtonClicked(result.data.index + this.count);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * @param {?} ev
                 * @return {?}
                 */
                FivButtons.prototype.presentActionSheet = function (ev) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__awaiter"])(this, void 0, void 0, function () {
                        var buttons, actionSheet;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    buttons = [];
                                    this.buttons
                                        .toArray()
                                        .slice(this.count)
                                        .forEach(( /**
                                 * @param {?} button
                                 * @param {?} index
                                 * @return {?}
                                 */function (button, index) {
                                        if (!button.disabled) {
                                            buttons.push({
                                                text: button.text,
                                                icon: button.icon,
                                                handler: ( /**
                                                 * @return {?}
                                                 */function () {
                                                    _this.onButtonClicked(_this.count + index);
                                                })
                                            });
                                        }
                                    }));
                                    return [4 /*yield*/, this.actionSheetController.create({
                                            header: this.header,
                                            subHeader: this.subHeader,
                                            buttons: buttons
                                        })];
                                case 1:
                                    actionSheet = _a.sent();
                                    return [4 /*yield*/, actionSheet.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * @param {?} i
                 * @return {?}
                 */
                FivButtons.prototype.onButtonClicked = function (i) {
                    this.buttons.toArray()[i].click.emit();
                };
                return FivButtons;
            }());
            FivButtons.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-buttons',
                            template: "<ion-buttons *ngIf=\"buttons\" [slot]=\"slot\">\n\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'start' || slot ==='primary') && count < buttons.length && text\"\n    (click)=\"onMenuClicked($event)\" [text]=\"text\"></fiv-button>\n\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'start' || slot ==='primary') && count < buttons.length && !text\"\n    (click)=\"onMenuClicked($event)\" [icon]=\"'md-more'\"></fiv-button>\n  <ng-container *ngIf=\"iconsOnly\">\n    <fiv-button [color]=\"button.color\" (click)=\"onButtonClicked(i)\" [icon]=\"button.icon\"\n      *ngFor=\"let button of buttons.toArray() |\u00A0slice:0:count; let i = index;\"></fiv-button>\n  </ng-container>\n  <ng-container *ngIf=\"!iconsOnly\">\n    <fiv-button [color]=\"button.color\" (click)=\"onButtonClicked(i)\" [icon]=\"button.icon\" [text]=\"button.text\"\n      *ngFor=\"let button of buttons.toArray() |\u00A0slice:0:count; let i = index;\"></fiv-button>\n  </ng-container>\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'end' || slot ==='secondary') && count < buttons.length && !text\"\n    (click)=\"onMenuClicked($event)\" [icon]=\"icon\"></fiv-button>\n  <fiv-button [color]=\"color\" *ngIf=\"(slot === 'end' || slot ==='secondary') && count < buttons.length && text\"\n    (click)=\"onMenuClicked($event)\" [text]=\"text\"></fiv-button>\n</ion-buttons>",
                            styles: [":host{display:block}"]
                        }] }
            ];
            /** @nocollapse */
            FivButtons.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["PopoverController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ActionSheetController"] }
            ]; };
            FivButtons.propDecorators = {
                slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                subHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                forceActionsheet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                forcePopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                iconsOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                buttons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [FivButton,] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivButtonsModule = /** @class */ (function () {
                function FivButtonsModule() {
                }
                return FivButtonsModule;
            }());
            FivButtonsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivButtons],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], FivButtonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [
                                FivButtons,
                                // Re-export `FivButtonModule` as `FivButton` will be used
                                // inside of `FivButtons`
                                FivButtonModule
                            ]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivCollapsableMenu = /** @class */ (function () {
                /**
                 * @param {?} sanitizer
                 * @param {?} menu
                 * @param {?} split
                 * @param {?} platform
                 */
                function FivCollapsableMenu(sanitizer, menu, split, platform) {
                    var _this = this;
                    this.sanitizer = sanitizer;
                    this.menu = menu;
                    this.split = split;
                    this.platform = platform;
                    this.collapsed = false;
                    this.hovering = false;
                    this.splitVisible = false;
                    this.hoverMenu = true;
                    this.width = 64;
                    this.minWidth = 270;
                    this.maxWidth = this.platform.width() * 0.28;
                    this.split.ionSplitPaneVisible
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(( /**
                 * @param {?} event
                 * @return {?}
                 */function (/**
                 * @param {?} event
                 * @return {?}
                 */ event) { return event.detail.visible; })))
                        .subscribe(( /**
                 * @param {?} visible
                 * @return {?}
                 */function (/**
                 * @param {?} visible
                 * @return {?}
                 */ visible) { return (_this.splitVisible = visible); }));
                }
                Object.defineProperty(FivCollapsableMenu.prototype, "myStyle", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        if (this.collapsed && this.splitVisible) {
                            return (this.sanitizer
                                // tslint:disable-next-line:max-line-length
                                .bypassSecurityTrustStyle("min-width: " + this.width + "px; max-width: " + this.width + "px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;"));
                        }
                        else {
                            if (!this.splitVisible) {
                                return (this.sanitizer
                                    // tslint:disable-next-line:max-line-length
                                    .bypassSecurityTrustStyle("--border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;"));
                            }
                            else {
                                return (this.sanitizer
                                    // tslint:disable-next-line:max-line-length
                                    .bypassSecurityTrustStyle("min-width: " + this.minWidth + "px; max-width: " + this.maxWidth + "px; --border: 0; transition: all cubic-bezier(.55,0,.1,1) 200ms;"));
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivCollapsableMenu.prototype.hover = function () {
                    if (this.collapsed && !this.hovering && this.hoverMenu) {
                        this.open();
                        this.hovering = true;
                    }
                };
                /**
                 * @return {?}
                 */
                FivCollapsableMenu.prototype.blur = function () {
                    if (!this.hoverMenu) {
                        return;
                    }
                    if (!this.collapsed && this.hovering) {
                        this.close();
                    }
                    this.hovering = false;
                };
                Object.defineProperty(FivCollapsableMenu.prototype, "fivCollapseMenu", {
                    /**
                     * @param {?} collapse
                     * @return {?}
                     */
                    set: function (collapse) {
                        this.collapsed = collapse;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivCollapsableMenu.prototype.toggleMenu = function () {
                    if (this.hovering) {
                        this.open();
                        this.hovering = false;
                        return;
                    }
                    this.collapsed = !this.collapsed;
                };
                /**
                 * @return {?}
                 */
                FivCollapsableMenu.prototype.open = function () {
                    this.collapsed = false;
                };
                /**
                 * @return {?}
                 */
                FivCollapsableMenu.prototype.close = function () {
                    this.collapsed = true;
                };
                return FivCollapsableMenu;
            }());
            FivCollapsableMenu.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                            selector: '[fivCollapseMenu]',
                            exportAs: 'menuCollapse'
                        },] }
            ];
            /** @nocollapse */
            FivCollapsableMenu.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonMenu"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonSplitPane"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"] }
            ]; };
            FivCollapsableMenu.propDecorators = {
                hoverMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                myStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['style',] }],
                hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['mouseenter',] }],
                blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['mouseleave',] }],
                fivCollapseMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivCollapsableMenuButton = /** @class */ (function () {
                function FivCollapsableMenuButton() {
                    this.icon = 'menu';
                }
                /**
                 * @return {?}
                 */
                FivCollapsableMenuButton.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivCollapsableMenuButton.prototype.onClick = function () {
                    this.menu.toggleMenu();
                };
                return FivCollapsableMenuButton;
            }());
            FivCollapsableMenuButton.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-collapsable-menu-button',
                            template: "<ion-button fivCenter (click)=\"onClick()\">\n  <fiv-icon slot=\"icon-only\" [name]=\"icon\"></fiv-icon>\n</ion-button>",
                            styles: [":host{display:block;padding-top:.2em}"]
                        }] }
            ];
            /** @nocollapse */
            FivCollapsableMenuButton.ctorParameters = function () { return []; };
            FivCollapsableMenuButton.propDecorators = {
                menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivCollapsableModule = /** @class */ (function () {
                function FivCollapsableModule() {
                }
                return FivCollapsableModule;
            }());
            FivCollapsableModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivCollapsableMenu, FivCollapsableMenuButton],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], FivIconModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivCollapsableMenu, FivCollapsableMenuButton]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivDialog = /** @class */ (function () {
                /**
                 * @param {?} renderer
                 * @param {?} domCtrl
                 * @param {?} animation
                 */
                function FivDialog(renderer, domCtrl, animation) {
                    this.renderer = renderer;
                    this.domCtrl = domCtrl;
                    this.animation = animation;
                    this.verticalAlign = 'top';
                    this.horizontalAlign = 'middle';
                    this.shape = 'card';
                    this.priority = 20001;
                    this.backdrop = true;
                    this.backdropDismiss = true;
                    this.pullEnabled = true;
                    // animation data
                    this.inDuration = 160;
                    this.outDuration = 120;
                    this.outPosition = '-100%';
                    this.toPosition = '0px';
                    this.translate = '0px';
                    this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivDurationOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.dialogState = 'out';
                }
                /**
                 * @return {?}
                 */
                FivDialog.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivDialog.prototype.open = function () {
                    this.overlay.show(this.priority);
                    this.dialogState = this.verticalAlign;
                    if (this.duration) {
                        this.bar.shrinkIn(this.duration);
                    }
                };
                /**
                 * @return {?}
                 */
                FivDialog.prototype.doneShrinking = function () {
                    this.fivDurationOver.emit(this);
                };
                /**
                 * @return {?}
                 */
                FivDialog.prototype.close = function () {
                    this.dialogState = 'out';
                    this.bar.stopProgressAnimation();
                };
                /**
                 * @return {?}
                 */
                FivDialog.prototype.backdropClick = function () {
                    if (this.backdropDismiss) {
                        this.close();
                    }
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivDialog.prototype.animationDone = function (event) {
                    if (event.fromState !== 'void' && event.toState === 'out') {
                        this.transformDialog(0);
                        this.overlay.hide();
                        this.fivClose.emit(this);
                    }
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivDialog.prototype.backdropAnimDone = function (event) {
                    if (event.fromState === 'out' && event.toState !== 'void') {
                        this.fivOpen.emit(this);
                    }
                };
                /**
                 * @return {?}
                 */
                FivDialog.prototype.onRefresh = function () {
                    this.close();
                };
                /**
                 * @return {?}
                 */
                FivDialog.prototype.fivCancel = function () {
                    this.resetDialog(this.currentPullProgress);
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivDialog.prototype.transformDialog = function (progress) {
                    var _this = this;
                    this.currentPullProgress = progress;
                    this.domCtrl.write(( /**
                     * @return {?}
                     */function () {
                        if (_this.verticalAlign === 'bottom') {
                            _this.renderer.setStyle(_this.dialogRef.nativeElement, 'margin-bottom', "-" + progress * 120 + "px");
                        }
                        else if (_this.verticalAlign === 'top') {
                            _this.renderer.setStyle(_this.dialogRef.nativeElement, 'margin-top', "-" + progress * 120 + "px");
                        }
                        else if (_this.verticalAlign === 'center') {
                            _this.renderer.setStyle(_this.dialogRef.nativeElement, 'margin-top', progress * 120 + "px");
                        }
                    }));
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivDialog.prototype.resetDialog = function (progress) {
                    var _this = this;
                    /** @type {?} */
                    var reset;
                    if (this.verticalAlign === 'bottom') {
                        reset = this.animation.build([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ 'margin-bottom': "-" + progress * 120 + "px" }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ 'margin-bottom': "0px" }))
                        ]);
                    }
                    else if (this.verticalAlign === 'top') {
                        reset = this.animation.build([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ 'margin-top': "-" + progress * 120 + "px" }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ 'margin-top': "0px" }))
                        ]);
                    }
                    else if (this.verticalAlign === 'center') {
                        reset = this.animation.build([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ 'margin-top': progress * 120 + "px" }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ 'margin-top': "0px" }))
                        ]);
                    }
                    /** @type {?} */
                    var animation = reset.create(this.dialogRef.nativeElement);
                    animation.play();
                    animation.onDone(( /**
                     * @return {?}
                     */function () {
                        animation.destroy();
                        _this.transformDialog(0);
                    }));
                };
                return FivDialog;
            }());
            FivDialog.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-dialog',
                            template: "<fiv-overlay #overlay>\n  <ion-content no-bounce [direction]=\"verticalAlign === 'top' ? 'up' : 'down'\" fivPull [enabled]=\"pullEnabled\" [maxPullHeight]=\"168\" [minPullHeight]=\"120\" (fivPull)=\"transformDialog($event)\"\n  (fivRefresh)=\"onRefresh()\" (fivCancel)=\"fivCancel()\"  *ngIf=\"backdrop\" (@fade.done)=\"backdropAnimDone($event)\"\n    [@fade]=\"{value: dialogState, params: { opacity: 0, inDuration: '120ms' }}\" (click)=\"backdropClick()\" class=\"backdrop\">\n</ion-content>\n  <div #dialog [@fade]=\"{value: dialogState, params: { opacity: 0, inDuration: '120ms' }}\"\n  [@slide]=\"{value: dialogState, params: {top: outPosition, inDuration: inDuration + 'ms',outDuration: outDuration + 'ms', toPosition: toPosition, translate: translate,translateX: horizontalAlign === 'middle' ? 'translateX(-50%)' :  '' }}\"\n  (@slide.done)=\"animationDone($event)\" class=\"dialog\" [ngClass]=\"[verticalAlign, horizontalAlign, shape]\">\n    <ng-container>\n      <ng-container *ngTemplateOutlet=\"card\"></ng-container>\n    </ng-container>\n  </div>\n\n</fiv-overlay>\n\n<ng-template #card>\n  <ion-card>\n    <fiv-loading-progress-bar [verticalAlign]=\"verticalAlign === 'top' ? 'bottom' : 'top'\"\n      (fivDoneShrinking)=\"doneShrinking()\" #bar></fiv-loading-progress-bar>\n    <ng-content></ng-content>\n  </ion-card>\n</ng-template>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('slide', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('out => top', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ top: '0', transform: 'translateY(-100%) {{translateX}}' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('220ms ease-out')
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('out => center', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            top: '50%',
                                            transform: 'translateY(-50%) {{translateX}} scale(0)',
                                            opacity: 0
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('220ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            top: '50%',
                                            transform: 'translateY(-50%) {{translateX}} scale(1)',
                                            opacity: 1
                                        }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('out => bottom', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ bottom: '0', transform: 'translateY(100%) {{translateX}}' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('220ms ease-out')
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('top => out', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ top: '0', transform: '*' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('140ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ top: '0', transform: 'translateY(-100%) {{translateX}}' }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('center => out', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            top: '50%',
                                            transform: '*',
                                            opacity: 1
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('140ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            top: '50%',
                                            transform: 'translateY(-50%) {{translateX}} scale(0)',
                                            opacity: 0
                                        }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('bottom => out', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ bottom: '0', transform: '*' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('140ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ bottom: '0', transform: 'translateY(100%) {{translateX}}' }))
                                    ]),
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fade', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('out => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '{{opacity}}' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{inDuration}} ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '1' }))
                                    ], { params: { opacity: 0, inDuration: '250ms' } }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => out', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '1' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('{{outDuration}} ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0' }))
                                    ], { params: { opacity: 0, outDuration: '200ms' } }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0' }))
                                ])
                            ],
                            styles: ["ion-grid{--ion-grid-padding:0;--ion-grid-column-padding:0}.dialog{--min-width:340px;--ion-item-background:#fff;position:absolute;min-width:var(--min-width)}@media (max-width:600px){.dialog{--min-width:100%}}.dialog.fill{background:var(--ion-item-background);box-shadow:0 4px 16px rgba(0,0,0,.12)}.dialog.fill .sc-ion-card-ios-h,.dialog.fill .sc-ion-card-md-h{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;box-shadow:none;margin-top:0;margin-bottom:0}.dialog.fill.bottom .sc-ion-card-ios-h,.dialog.fill.bottom .sc-ion-card-md-h,.dialog.fill.top .sc-ion-card-ios-h,.dialog.fill.top .sc-ion-card-md-h{border-radius:0}.dialog.top.left{padding-top:env(safe-area-inset-top);top:0;left:0}.dialog.top.right{padding-top:env(safe-area-inset-top);top:0;right:0}.dialog.top.middle{padding-top:env(safe-area-inset-top);top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.dialog.center.middle{padding-top:env(safe-area-inset-top);top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.dialog.center.left{top:50%;padding-top:env(safe-area-inset-top);left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dialog.center.right{right:0;top:50%;padding-top:env(safe-area-inset-top);-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dialog.bottom.left{bottom:0;left:0;padding-bottom:env(safe-area-inset-bottom)}.dialog.bottom.right{bottom:0;right:0;padding-bottom:env(safe-area-inset-bottom)}.dialog.bottom.middle{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);padding-bottom:env(safe-area-inset-bottom)}.backdrop{width:100%;height:100%;--background:rgba(0, 0, 0, 0.2);position:absolute}"]
                        }] }
            ];
            /** @nocollapse */
            FivDialog.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["DomController"] },
                { type: _angular_animations__WEBPACK_IMPORTED_MODULE_6__["AnimationBuilder"] }
            ]; };
            FivDialog.propDecorators = {
                verticalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                horizontalAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                priority: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                backdropDismiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                pullEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                inDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                outDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivDurationOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [FivOverlay,] }],
                bar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [FivLoadingProgressBar,] }],
                dialogRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['dialog',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @record
             */
            function DialogOptions() { }
            if (false) { }
            var FivDialogService = /** @class */ (function () {
                /**
                 * @param {?} overlay
                 */
                function FivDialogService(overlay) {
                    this.overlay = overlay;
                }
                /**
                 * @param {?} viewContainerRef
                 * @param {?} content
                 * @param {?=} options
                 * @return {?}
                 */
                FivDialogService.prototype.openDialog = function (viewContainerRef, content, options) {
                    /** @type {?} */
                    var c = this.overlay.createOverlay(viewContainerRef, FivDialog, content);
                    c.instance.verticalAlign = options ? options.verticalAlign : 'top';
                    c.instance.verticalAlign = options ? options.verticalAlign : 'center';
                    c.instance.backdrop = options ? options.backdrop : true;
                    c.instance.duration = options ? options.duration : 0;
                    c.instance.shape = options ? options.shape : 'card';
                    c.instance.open();
                    return c;
                };
                return FivDialogService;
            }());
            FivDialogService.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                            providedIn: 'root'
                        },] }
            ];
            /** @nocollapse */
            FivDialogService.ctorParameters = function () { return [
                { type: FivOverlayService }
            ]; };
            /** @nocollapse */ FivDialogService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function FivDialogService_Factory() { return new FivDialogService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(FivOverlayService)); }, token: FivDialogService, providedIn: "root" });
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivDialogModule = /** @class */ (function () {
                function FivDialogModule() {
                }
                return FivDialogModule;
            }());
            FivDialogModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivDialog],
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                                FivLoadingProgressBarModule,
                                FivOverlayModule,
                                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                                FivPullModule
                            ],
                            exports: [FivDialog],
                            entryComponents: [FivDialog],
                            providers: [FivDialogService]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR = {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FivEditableLabel; })),
                multi: true
            };
            var FivEditableLabel = /** @class */ (function () {
                function FivEditableLabel() {
                    this.type = 'label';
                    this.disabled = false;
                    this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                Object.defineProperty(FivEditableLabel.prototype, "editing", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._editing;
                    },
                    /**
                     * @param {?} edit
                     * @return {?}
                     */
                    set: function (edit) {
                        this._editing = edit;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivEditableLabel.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0).subscribe(( /**
                     * @return {?}
                     */function () { return (_this.internalValue = _this.value); }));
                };
                Object.defineProperty(FivEditableLabel.prototype, "internalValue", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._value;
                    },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (value !== this._value) {
                            this._value = value;
                            if (this.onChangeCallback) {
                                this.onChangeCallback(this._value);
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivEditableLabel.prototype.edit = function () {
                    this.editing = true;
                };
                /**
                 * @return {?}
                 */
                FivEditableLabel.prototype.stopEdit = function () {
                    this.editing = false;
                };
                /**
                 * @return {?}
                 */
                FivEditableLabel.prototype.onEscapeClick = function () {
                    this.internalValue = this.value;
                    this.stopEdit();
                };
                /**
                 * @return {?}
                 */
                FivEditableLabel.prototype.onEnterClick = function () {
                    this.value = this.internalValue;
                    this.stopEdit();
                };
                /**
                 * @param {?} value
                 * @return {?}
                 */
                FivEditableLabel.prototype.writeValue = function (value) {
                    if (value !== undefined && value !== this._value) {
                        this._value = value;
                    }
                };
                /**
                 * @return {?}
                 */
                FivEditableLabel.prototype.onBlur = function () {
                    this.blur.emit();
                    this.stopEdit();
                    if (this.onTouchedCallback) {
                        this.onTouchedCallback();
                    }
                };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                FivEditableLabel.prototype.registerOnChange = function (fn) {
                    this.onChangeCallback = fn;
                };
                /**
                 * @param {?} fn
                 * @return {?}
                 */
                FivEditableLabel.prototype.registerOnTouched = function (fn) {
                    this.onTouchedCallback = fn;
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivEditableLabel.prototype.titleAnimDone = function (event) {
                    if (event.toState === 'void') {
                        this.input.setFocus();
                    }
                };
                return FivEditableLabel;
            }());
            FivEditableLabel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-editable-label',
                            template: "<!-- TODO if value is empty label or title can not be clicked, show placeholder?! -->\n<ion-title *ngIf=\"type === 'title' && !editing\" (click)=\"edit()\" (@titleAnim.done)=\"titleAnimDone($event)\" [@titleAnim]>\n    {{value}}</ion-title>\n<ion-label *ngIf=\"type === 'label' && !editing\" class=\"label\" (click)=\"edit()\" (@titleAnim.done)=\"titleAnimDone($event)\" [@titleAnim]>\n    {{value}}</ion-label>\n<ion-input *ngIf=\"editing\" [(ngModel)]=\"internalValue\" (blur)=\"onBlur()\" (keyup.enter)=\"onEnterClick()\"\n    (keyup.escape)=\"onEscapeClick()\" #input [@titleAnim] [ngClass]=\"{'title-input': type === 'title'}\">\n</ion-input>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('titleAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0', transform: 'translateY(-20%)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '1', transform: 'translateY(0)' }))
                                    ])
                                ])
                            ],
                            providers: [CUSTOM_EDITIABLE_LABEL_CONTROL_VALUE_ACCESSOR],
                            styles: [":host{width:100%}.label{max-width:100%}:host *{pointer-events:auto}:host(.editable-label-disabled){pointer-events:none}.title-input{font-size:20px;font-weight:500;color:var(--color)}"]
                        }] }
            ];
            /** @nocollapse */
            FivEditableLabel.ctorParameters = function () { return []; };
            FivEditableLabel.propDecorators = {
                editing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"], args: ['class.editable-label-disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['input',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivEditableLabelModule = /** @class */ (function () {
                function FivEditableLabelModule() {
                }
                return FivEditableLabelModule;
            }());
            FivEditableLabelModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivEditableLabel],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivEditableLabel]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivLoadingRefresherContent = /** @class */ (function () {
                /**
                 * @param {?} element
                 * @param {?} renderer
                 * @param {?} builder
                 */
                function FivLoadingRefresherContent(element, renderer, builder) {
                    this.element = element;
                    this.renderer = renderer;
                    this.builder = builder;
                    this.iconColor = '#000';
                    this.checkmark = false;
                    this.disabled = false;
                    this._progress = 0;
                    this.fivComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivShowed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.visible = false;
                    this.iconState = 'normal';
                }
                Object.defineProperty(FivLoadingRefresherContent.prototype, "progress", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._progress;
                    },
                    /**
                     * @param {?} progress
                     * @return {?}
                     */
                    set: function (progress) {
                        this._progress = progress;
                        if (progress < 1) {
                            this.renderer.setStyle(this.spinnerRef.nativeElement, 'transform', "rotateZ(" + 360 * progress + "deg)");
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.load = function () {
                    this.visible = true;
                    this.spinner.spin();
                    this.fivRefresh.emit(this);
                };
                /**
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.unload = function () {
                    this.spinner.stopSpinning();
                };
                /**
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.complete = function () {
                    // this.spinner.completeIn(500);
                    if (this.checkmark) {
                        this.iconState = 'rotate';
                    }
                    else {
                        this.postComplete();
                    }
                };
                /**
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.show = function () {
                    var _this = this;
                    if (!this.visible) {
                        this.visible = true;
                        /** @type {?} */
                        var animation = this.builder.build([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(1)' }))
                        ]);
                        /** @type {?} */
                        var player_1 = animation.create(this.background.nativeElement);
                        player_1.play();
                        player_1.onDone(( /**
                         * @return {?}
                         */function () {
                            _this.fivShowed.emit(_this);
                            player_1.destroy();
                        }));
                    }
                };
                /**
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.hide = function () {
                    var _this = this;
                    if (this.visible) {
                        /** @type {?} */
                        var transform_1 = "scale(1)";
                        /** @type {?} */
                        var animation = this.builder.build([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: transform_1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('175ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(0)' }))
                        ]);
                        /** @type {?} */
                        var player_2 = animation.create(this.background.nativeElement);
                        player_2.play();
                        player_2.onDone(( /**
                         * @return {?}
                         */function () {
                            _this.fivHidden.emit(_this);
                            _this.visible = false;
                            player_2.destroy();
                        }));
                    }
                };
                /**
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.fillAnimationDone = function () {
                    if (this.checkmark) {
                        this.iconState = 'rotate';
                    }
                    else {
                        this.postComplete();
                    }
                };
                /**
                 * @param {?} event
                 * @param {?} icon
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.changeIconAndReveal = function (event, icon) {
                    if (event.fromState === 'normal') {
                        this.icon = icon;
                        this.iconState = 'normal';
                    }
                    else {
                        if (event.fromState === 'rotate') {
                            this.postComplete();
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.postComplete = function () {
                    this.unload();
                    this.fivComplete.emit(this);
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.setValue = function (progress) {
                    this.spinner.setValue(progress);
                };
                /**
                 * @return {?}
                 */
                FivLoadingRefresherContent.prototype.reset = function () {
                    this.spinner.setMode('indeterminate');
                };
                return FivLoadingRefresherContent;
            }());
            FivLoadingRefresherContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-loading-refresher-content',
                            template: "<div #background class=\"spinner-background\">\n    <fiv-loading-spinner #spinner (fivProgress)=\"fivProgress.emit($event)\" (fivComplete)=\"fillAnimationDone()\"\n        class=\"spinner\" [color]=\"spinColor\" [circleRadius]=\"8\" [diameter]=\"20\" [strokeWidth]=\"2\"></fiv-loading-spinner>\n</div>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fabAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(0)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('250ms ease-out')
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'scale(0)' }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('spinnerAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('250ms ease-out')
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0' }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('rotateAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('normal => rotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-out')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('rotate => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-in')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('rotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0', transform: 'rotateZ(45deg)' })),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '1', transform: 'rotateZ(0deg)' }))
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fillAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => fill', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            'stroke-dasharray': 180,
                                            'stroke-dashoffset': 90,
                                            transformOrigin: 'center',
                                            stroke: '#DE3E35'
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('1400ms ease-out')
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                        'stroke-dasharray': 315,
                                        'stroke-dashoffset': 0,
                                        transformOrigin: 'center',
                                        stroke: '#1B9A59',
                                        opacity: 0
                                    }))
                                ])
                            ],
                            styles: [":host{position:absolute;width:40px;height:40px;top:env(safe-area-inset-top);left:calc(50% - 20px);z-index:9}.spinner-background{position:absolute;width:40px;height:40px;background:var(--ion-color-light);border-radius:50%;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1)}.spinner-background fiv-loading-spinner{position:absolute;top:10px;left:10px}.rotate{-webkit-animation:1.4s linear infinite rotator;animation:1.4s linear infinite rotator}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}}.path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors;animation:1.4s ease-in-out infinite dash,5.6s ease-in-out infinite colors}.fill{stroke-dasharray:360;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1.4s ease-out fill;animation:1.4s ease-out fill;stroke:#1b9a59}@-webkit-keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@keyframes colors{0%,100%{stroke:#4285f4}25%{stroke:#de3e35}50%{stroke:#f7c223}75%{stroke:#1b9a59}}@-webkit-keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes fill{0%{stroke-dashoffset:360}80%{stroke-dashoffset:180;-webkit-transform:rotate(135deg);transform:rotate(135deg)}100%{stroke-dashoffset:0;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}"]
                        }] }
            ];
            /** @nocollapse */
            FivLoadingRefresherContent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
                { type: _angular_animations__WEBPACK_IMPORTED_MODULE_6__["AnimationBuilder"] }
            ]; };
            FivLoadingRefresherContent.propDecorators = {
                icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fabColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                checkmark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivShowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivProgress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['spinner',] }],
                spinnerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['spinner', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },] }],
                background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['background',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivLoadingContent = /** @class */ (function () {
                /**
                 * @param {?} builder
                 * @param {?} renderer
                 */
                function FivLoadingContent(builder, renderer) {
                    this.builder = builder;
                    this.renderer = renderer;
                    this.hintText = 'new posts';
                    this.spinColor = 'light';
                    this.maxPullHeight = 168;
                    this.minPullHeight = 112;
                    this.fivProgressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.hintVisible = false;
                    this.currentProgress = 0;
                    this.refreshing = false;
                }
                /**
                 * @return {?}
                 */
                FivLoadingContent.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivLoadingContent.prototype.refresh = function () {
                    this.refreshing = true;
                    this.changeAnimationToProgress(112 / 168);
                    this.spinner.load();
                    this.fivRefresh.emit(this);
                };
                /**
                 * @return {?}
                 */
                FivLoadingContent.prototype.completeRefresh = function () {
                    this.spinner.complete();
                };
                /**
                 * @return {?}
                 */
                FivLoadingContent.prototype.fillAnimationDone = function () {
                    this.spinner.hide();
                };
                /**
                 * @return {?}
                 */
                FivLoadingContent.prototype.showHint = function () {
                    this.hintVisible = true;
                };
                /**
                 * @return {?}
                 */
                FivLoadingContent.prototype.onHintClicked = function () {
                    this.hintVisible = false;
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivLoadingContent.prototype.postHint = function (event) {
                    if (!event.fromState && event.toState === 'void') {
                        this.setPullAnimationProgress(112 / 168);
                        this.spinner.load();
                        this.refreshing = true;
                        this.fivRefresh.emit(this);
                    }
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivLoadingContent.prototype.setPullAnimationProgress = function (progress) {
                    this.currentProgress = progress;
                    if (progress < 1) {
                        this.renderer.setStyle(this.spinner.element.nativeElement, 'transform', "translateY(" + 168 * progress + "px)");
                    }
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivLoadingContent.prototype.changeAnimationToProgress = function (progress) {
                    var _this = this;
                    return new Promise(( /**
                     * @param {?} resolve
                     * @return {?}
                     */function (/**
                     * @param {?} resolve
                     * @return {?}
                     */ resolve) {
                        /** @type {?} */
                        var animation = _this.builder.build([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                transform: "translateY(" + _this.currentProgress *
                                    168 + "px) rotateZ(" + 360 * _this.currentProgress + "deg)"
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('85ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                transform: "translateY(" + progress * 168 + "px) rotateZ(" + 360 *
                                    progress + "deg)"
                            }))
                        ]);
                        /** @type {?} */
                        var player = animation.create(_this.spinner.element.nativeElement);
                        player.play();
                        player.onDone(( /**
                         * @return {?}
                         */function () {
                            _this.setPullAnimationProgress(progress);
                            player.destroy();
                            resolve();
                        }));
                    }));
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivLoadingContent.prototype.fivPull = function (progress) {
                    this.setPullAnimationProgress(progress);
                    this.spinner.show();
                    /** @type {?} */
                    var value = Math.max(0, Math.min(100, (progress * 100 * this.maxPullHeight) / this.minPullHeight));
                    this.spinner.setValue(value * 0.84);
                };
                /**
                 * @return {?}
                 */
                FivLoadingContent.prototype.onRefresh = function () {
                    this.refresh();
                    this.spinner.load();
                };
                /**
                 * @return {?}
                 */
                FivLoadingContent.prototype.fivCancel = function () {
                    this.moveBack();
                };
                /**
                 * @return {?}
                 */
                FivLoadingContent.prototype.afterSpinnerHide = function () {
                    this.setPullAnimationProgress(0);
                    this.refreshing = false;
                    this.spinner.reset();
                };
                /**
                 * @return {?}
                 */
                FivLoadingContent.prototype.moveBack = function () {
                    var _this = this;
                    /** @type {?} */
                    var animation = this.builder.build([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                            transform: "translateY(" + this.currentProgress * 168 + "px) rotateZ(" + 360 *
                                this.currentProgress + "deg)"
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('145ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0) rotateZ(0)' }))
                    ]);
                    /** @type {?} */
                    var player = animation.create(this.spinner.element.nativeElement);
                    player.play();
                    player.onDone(( /**
                     * @return {?}
                     */function () {
                        _this.setPullAnimationProgress(0);
                        _this.spinner.visible = false;
                        player.destroy();
                    }));
                };
                /**
                 * @param {?} progress
                 * @return {?}
                 */
                FivLoadingContent.prototype.onSpinnerProgress = function (progress) {
                    this.fivProgressChanged.emit(progress);
                    this.renderer
                        // tslint:disable-next-line:max-line-length
                        .setStyle(this.spinner.element.nativeElement, 'transform', "translateY(" + 168 * this.currentProgress + "px) rotateZ(" + (360 *
                        progress) /
                        200 + "deg)");
                };
                return FivLoadingContent;
            }());
            FivLoadingContent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-loading-content',
                            template: "<fiv-loading-refresher-content [spinColor]=\"spinColor\" [progress]=\"currentProgress\" (fivProgress)=\"onSpinnerProgress($event)\" (fivHidden)=\"afterSpinnerHide()\" (fivComplete)=\"fillAnimationDone()\"\n  #spinner></fiv-loading-refresher-content>\n<ion-chip class=\"gg-hint-wrapper\" *ngIf=\"hintVisible\" [@hintAnim] (@hintAnim.done)=\"postHint($event)\" (click)=\"onHintClicked()\"\n  #hint>\n  <ion-icon class=\"icon\" name=\"md-arrow-up\"></ion-icon>\n  <ion-label *ngIf=\"hintVisible\" class=\"text\">{{hintText}}</ion-label>\n</ion-chip>\n\n<ion-content [forceOverscroll]=\"false\" fivPull [maxPullHeight]=\"maxPullHeight\" [minPullHeight]=\"minPullHeight\" (fivPull)=\"fivPull($event)\"\n  (fivRefresh)=\"onRefresh()\" (fivCancel)=\"fivCancel()\" [enabled]=\"!refreshing && !hintVisible\">\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n\n</ion-content>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fillAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => fill', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            'stroke-dasharray': 180,
                                            'stroke-dashoffset': 90,
                                            transformOrigin: 'center',
                                            stroke: '#DE3E35'
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('360ms ease-out')
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('fill', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                        'stroke-dasharray': 315,
                                        'stroke-dashoffset': 0,
                                        transformOrigin: 'center',
                                        stroke: '#1B9A59'
                                    }))
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('spinnerAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }))
                                    ])
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('hintAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'translateY(0px) translateX(-50%)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            opacity: 1,
                                            transform: 'translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%)'
                                        }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            width: '112px',
                                            opacity: 1,
                                            transform: 'translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%)'
                                        }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                                            width: '40px',
                                            transform: 'translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%)'
                                        }))
                                    ])
                                ])
                            ],
                            styles: [":host{height:100%;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}ion-content{--padding-top:calc(env(safe-area-inset-top) + var(--fiv-padding-top, 0px))}.content{min-height:100%;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.icon{height:20px;width:20px;background:0 0;color:var(--ion-color-dark)}.text{font-size:1em;color:var(--ion-color-dark)}.gg-hint-wrapper{position:absolute;z-index:8;opacity:1;left:50%;-webkit-transform:translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%);transform:translateY(calc(112px + env(safe-area-inset-top))) translateX(-50%);height:40px;padding-left:8px;padding-right:8px;background:var(--ion-color-light);border-radius:40px;box-shadow:0 4px 6px 0 rgba(0,0,0,.14),0 4px 5px rgba(0,0,0,.1);margin:0}"]
                        }] }
            ];
            /** @nocollapse */
            FivLoadingContent.ctorParameters = function () { return [
                { type: _angular_animations__WEBPACK_IMPORTED_MODULE_6__["AnimationBuilder"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
            ]; };
            FivLoadingContent.propDecorators = {
                hintText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                spinColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                maxPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                minPullHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivProgressChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['content',] }],
                spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['spinner',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivLoadingContentModule = /** @class */ (function () {
                function FivLoadingContentModule() {
                }
                return FivLoadingContentModule;
            }());
            FivLoadingContentModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivLoadingContent, FivLoadingRefresherContent],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], FivLoadingSpinnerModule, FivPullModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivLoadingContent, FivLoadingRefresherContent]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivNetworkStatus = /** @class */ (function () {
                function FivNetworkStatus() {
                    this.visible = true;
                    this.status = 'online';
                    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                FivNetworkStatus.prototype.ngOnInit = function () { };
                /**
                 * @return {?}
                 */
                FivNetworkStatus.prototype.show = function () {
                    this.visible = true;
                };
                /**
                 * @return {?}
                 */
                FivNetworkStatus.prototype.hide = function () {
                    this.visible = false;
                };
                /**
                 * @param {?} status
                 * @return {?}
                 */
                FivNetworkStatus.prototype.setStatus = function (status) {
                    this.status = status;
                };
                /**
                 * @return {?}
                 */
                FivNetworkStatus.prototype.FivNetworkStatusClicked = function () {
                    this.onClick.emit(this);
                };
                return FivNetworkStatus;
            }());
            FivNetworkStatus.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-network-status',
                            template: "<ion-chip [@status] (click)=\"FivNetworkStatusClicked()\" *ngIf=\"visible\">\n  <fiv-icon [indicatorValue]=\"-1\" [fivCenter] [off]=\"status === 'offline'\" name=\"cloud\"></fiv-icon>\n</ion-chip>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('status', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 }))
                                    ]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('550ms 200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }))
                                    ])
                                ])
                            ],
                            styles: [":host{position:absolute;top:66px;right:8px}ion-chip{width:56px}fiv-icon{--fiv-color-icon:var(--ion-color-dark)}"]
                        }] }
            ];
            /** @nocollapse */
            FivNetworkStatus.ctorParameters = function () { return []; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivNetworkStatusModule = /** @class */ (function () {
                function FivNetworkStatusModule() {
                }
                return FivNetworkStatusModule;
            }());
            FivNetworkStatusModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivNetworkStatus],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], FivCenterModule, FivIconModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivNetworkStatus],
                            entryComponents: [FivNetworkStatus]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivPopoverModule = /** @class */ (function () {
                function FivPopoverModule() {
                }
                return FivPopoverModule;
            }());
            FivPopoverModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivPopover],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], FivButtonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]],
                            exports: [FivPopover],
                            entryComponents: [FivPopover]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivPermissions = /** @class */ (function () {
                /**
                 * @param {?} viewContainer
                 * @param {?} templateRef
                 */
                function FivPermissions(viewContainer, templateRef) {
                    this.viewContainer = viewContainer;
                    this.templateRef = templateRef;
                    this.allowedPermissions = [];
                    this.uPermissions = [];
                }
                Object.defineProperty(FivPermissions.prototype, "fivPermissionsUserPermissions", {
                    /**
                     * @param {?} userPermissions
                     * @return {?}
                     */
                    set: function (userPermissions) {
                        this.uPermissions = userPermissions || [];
                        this.updateView();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FivPermissions.prototype, "fivPermissions", {
                    /**
                     * @param {?} allowed
                     * @return {?}
                     */
                    set: function (allowed) {
                        this.allowedPermissions = allowed || [];
                        this.updateView();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivPermissions.prototype.checkPermission = function () {
                    var _this = this;
                    /** @type {?} */
                    var show = false;
                    this.uPermissions.forEach(( /**
                     * @param {?} role
                     * @return {?}
                     */function (/**
                     * @param {?} role
                     * @return {?}
                     */ role) {
                        if (_this.allowedPermissions.find(( /**
                         * @param {?} a
                         * @return {?}
                         */function (/**
                         * @param {?} a
                         * @return {?}
                         */ a) { return a.toUpperCase() === role.toUpperCase(); }))) {
                            show = true;
                        }
                    }));
                    return show;
                };
                /**
                 * @return {?}
                 */
                FivPermissions.prototype.updateView = function () {
                    if (this.checkPermission()) {
                        this.viewContainer.createEmbeddedView(this.templateRef);
                    }
                    else {
                        this.viewContainer.clear();
                    }
                };
                return FivPermissions;
            }());
            FivPermissions.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                            selector: '[fivPermissions]'
                        },] }
            ];
            /** @nocollapse */
            FivPermissions.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
            ]; };
            FivPermissions.propDecorators = {
                fivPermissionsUserPermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivPermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivPermissionsModule = /** @class */ (function () {
                function FivPermissionsModule() {
                }
                return FivPermissionsModule;
            }());
            FivPermissionsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivPermissions],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [FivPermissions]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivViewport = /** @class */ (function () {
                /**
                 * @param {?} elementRef
                 */
                function FivViewport(elementRef) {
                    this.elementRef = elementRef;
                    this.fivAppear = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivDisappear = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.visible = false;
                }
                /**
                 * @return {?}
                 */
                FivViewport.prototype.ngOnInit = function () {
                    var _this = this;
                    this.io = new IntersectionObserver(( /**
                     * @param {?} entries
                     * @param {?} observer
                     * @return {?}
                     */function (entries, observer) {
                        entries.forEach(( /**
                         * @param {?} entry
                         * @return {?}
                         */function (/**
                         * @param {?} entry
                         * @return {?}
                         */ entry) {
                            if (entry.isIntersecting) {
                                _this.handleIntersection();
                            }
                            else {
                                _this.handleNonIntersection();
                            }
                        }));
                    }));
                    this.io['POLL_INTERVAL'] = 100;
                    this.io.observe(this.elementRef.nativeElement);
                };
                /**
                 * @return {?}
                 */
                FivViewport.prototype.handleNonIntersection = function () {
                    if (this.visible) {
                        this.fivDisappear.emit(this);
                    }
                    this.visible = false;
                };
                /**
                 * @return {?}
                 */
                FivViewport.prototype.handleIntersection = function () {
                    if (!this.visible) {
                        this.fivAppear.emit(this);
                    }
                    this.visible = true;
                };
                /**
                 * @return {?}
                 */
                FivViewport.prototype.ngOnDestroy = function () {
                    this.io.disconnect();
                };
                /**
                 * @return {?}
                 */
                FivViewport.prototype.isVisible = function () {
                    return this.visible;
                };
                return FivViewport;
            }());
            FivViewport.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                            selector: '[fivViewport]',
                            exportAs: 'viewport'
                        },] }
            ];
            /** @nocollapse */
            FivViewport.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
            ]; };
            FivViewport.propDecorators = {
                fivAppear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivDisappear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivViewportModule = /** @class */ (function () {
                function FivViewportModule() {
                }
                return FivViewportModule;
            }());
            FivViewportModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivViewport],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [FivViewport]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivLazyImage = /** @class */ (function () {
                /**
                 * @param {?} fivImage
                 * @param {?} image
                 */
                function FivLazyImage(fivImage, image) {
                    this.fivImage = fivImage;
                    this.image = image;
                    this.virtual = false;
                    this.inViewport = false;
                    this.willShow = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.willHide = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                }
                /**
                 * @return {?}
                 */
                FivLazyImage.prototype.ngOnInit = function () {
                    var _this = this;
                    /** @type {?} */
                    var io = new IntersectionObserver(( /**
                     * @param {?} entries
                     * @param {?} observer
                     * @return {?}
                     */function (entries, observer) {
                        entries.forEach(( /**
                         * @param {?} entry
                         * @return {?}
                         */function (/**
                         * @param {?} entry
                         * @return {?}
                         */ entry) {
                            if (entry.isIntersecting) {
                                if (!_this.inViewport) {
                                    _this.handleIntersection();
                                    if (!_this.virtual) {
                                        io.disconnect();
                                    }
                                }
                            }
                            else {
                                if (_this.inViewport) {
                                    _this.inViewport = false;
                                    if (_this.fivImage) {
                                        _this.willHide.emit(_this.fivImage);
                                    }
                                    else {
                                        _this.willHide.emit(_this.image.nativeElement);
                                    }
                                }
                            }
                        }));
                    }));
                    io['POLL_INTERVAL'] = 100;
                    if (this.fivImage) {
                        io.observe(this.fivImage.thumbnail.nativeElement);
                    }
                    else {
                        io.observe(this.image.nativeElement);
                    }
                };
                /**
                 * @return {?}
                 */
                FivLazyImage.prototype.handleIntersection = function () {
                    this.inViewport = true;
                    if (this.fivLazyImage) {
                        if (this.fivImage) {
                            this.fivImage.src = this.fivLazyImage;
                            this.willShow.emit(this.fivImage);
                        }
                        else {
                            this.image.nativeElement.src = this.fivLazyImage;
                            this.willShow.emit(this.image.nativeElement);
                        }
                    }
                    else {
                        this.willShow.emit(this.fivImage || this.image.nativeElement);
                    }
                };
                return FivLazyImage;
            }());
            FivLazyImage.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                            selector: '[fivLazyImage]'
                        },] }
            ];
            /** @nocollapse */
            FivLazyImage.ctorParameters = function () { return [
                { type: FivGalleryImage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
            ]; };
            FivLazyImage.propDecorators = {
                fivLazyImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                virtual: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                willShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                willHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivLazyImageModule = /** @class */ (function () {
                function FivLazyImageModule() {
                }
                return FivLazyImageModule;
            }());
            FivLazyImageModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivLazyImage],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                            exports: [FivLazyImage]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivSearchbar = /** @class */ (function () {
                /**
                 * @param {?} renderer
                 */
                function FivSearchbar(renderer) {
                    this.renderer = renderer;
                    this.searching = false;
                    this.titleVisible = true;
                    this.closeButtonVisible = false;
                    this.smallWidth = 120;
                    this._small = false;
                    this.fivInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.fivClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
                    this.state = 'normal';
                }
                Object.defineProperty(FivSearchbar.prototype, "small", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return this._small;
                    },
                    /**
                     * @param {?} s
                     * @return {?}
                     */
                    set: function (s) {
                        if (s && !this._small) {
                            this.shrink();
                        }
                        else if (!s && this._small) {
                            this.grow();
                        }
                        this._small = s;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                FivSearchbar.prototype.ngOnInit = function () {
                    this.state = this._small ? 'small' : 'normal';
                };
                /**
                 * @return {?}
                 */
                FivSearchbar.prototype.shrink = function () {
                    this.state = 'small';
                };
                /**
                 * @return {?}
                 */
                FivSearchbar.prototype.grow = function () {
                    this.state = 'normal';
                };
                /**
                 * @return {?}
                 */
                FivSearchbar.prototype.openSearchbar = function () {
                    if (this._small) {
                        this.state = 'normal';
                    }
                    this._open();
                };
                /**
                 * @return {?}
                 */
                FivSearchbar.prototype.toggleSearchbar = function () {
                    if (this.searching) {
                        this.closeSearchbar();
                    }
                    else {
                        this.openSearchbar();
                    }
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivSearchbar.prototype.searchBarStateChange = function (event) {
                    if (event.fromState === 'normal' && event.toState === 'small') {
                    }
                    if (event.fromState === 'small' && event.toState === 'normal') {
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                FivSearchbar.prototype._open = function () {
                    this.searching = true;
                    this.titleVisible = false;
                    this.open.emit();
                };
                /**
                 * @return {?}
                 */
                FivSearchbar.prototype.closeSearchbar = function () {
                    if (this.small) {
                        this.state = 'small';
                    }
                    this.searching = false;
                    this.fivClose.emit();
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivSearchbar.prototype.searchAnimDone = function (event) {
                    if (event.fromState !== 'void') {
                        this.closeButtonVisible = true;
                    }
                };
                /**
                 * @param {?} event
                 * @return {?}
                 */
                FivSearchbar.prototype.closeAnimDone = function (event) {
                    if (event.fromState !== 'void') {
                        this.searching = false;
                    }
                };
                /**
                 * @param {?} event
                 * @param {?} input
                 * @return {?}
                 */
                FivSearchbar.prototype.seachbarAnimDone = function (event, input) {
                    if (event.fromState !== 'void') {
                        this.titleVisible = true;
                    }
                    else {
                        input.setFocus();
                    }
                };
                return FivSearchbar;
            }());
            FivSearchbar.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                            selector: 'fiv-searchbar',
                            template: "<ion-toolbar [@searchbarAnim]=\"{value:state, params: {width: smallWidth}}\"\n  (@searchbarAnim.done)=\"searchBarStateChange($event)\" [color]=\"color\" [ngClass]=\"{'small': state === 'small'}\">\n  <ion-buttons slot=\"start\">\n    <ng-content select=\"[start]\"></ng-content>\n\n  </ion-buttons>\n  <ion-title [@titleAnim] *ngIf=\"titleVisible && state !== 'small'\">{{title}}</ion-title>\n  <ion-input (ionChange)=\"fivInputChange.emit($event)\" [placeholder]=\"!titleVisible ? placeholder : ''\" autofocus #input\n    class=\"toolbar-searchbar\" [@titleAnim] (@titleAnim.done)=\"seachbarAnimDone($event,input)\" *ngIf=\"searching\">\n  </ion-input>\n\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"toggleSearchbar()\">\n      <fiv-icon [name]=\"searching ? 'md-close' : 'md-search'\"></fiv-icon>\n    </ion-button>\n    <ng-content select=\"[end]\"></ng-content>\n\n  </ion-buttons>\n</ion-toolbar>",
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('searchbarAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('small => normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('125ms ease-out')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('normal => small', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('95ms ease-in')]),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: '{{width}}px' }), {
                                        params: { width: 120 }
                                    }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ width: '100%' }))
                                ]),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('titleAnim', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '0', transform: 'translateY(-20%)' }),
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('175ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: '1', transform: 'translateY(0)' }))
                                    ])
                                ])
                            ],
                            styles: [":host{position:relative;display:block;width:100%}ion-toolbar{box-shadow:0 1px 4px rgba(0,0,0,.25);transition:border-bottom-right-radius 85ms;margin-top:env(safe-area-inset-top)}ion-toolbar.small{border-bottom-right-radius:12px}.toolbar-searchbar{float:right}"]
                        }] }
            ];
            /** @nocollapse */
            FivSearchbar.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
            ]; };
            FivSearchbar.propDecorators = {
                title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                smallWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                small: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
                fivInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                fivClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
                open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var FivSearchbarModule = /** @class */ (function () {
                function FivSearchbarModule() {
                }
                return FivSearchbarModule;
            }());
            FivSearchbarModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            declarations: [FivSearchbar],
                            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], FivIconModule],
                            exports: [FivSearchbar]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var componentModules = [
                FivAppBarModule,
                FivBackButtonModule,
                FivBottomSheetModule,
                FivButtonModule,
                FivButtonsModule,
                FivCollapsableModule,
                FivDialogModule,
                FivEditableLabelModule,
                FivExpandableModule,
                FivFeatureDiscoveryModule,
                FivGalleryModule,
                FivIconModule,
                FivLoadingContentModule,
                FivFabModule,
                FivLoadingProgressBarModule,
                FivLoadingSpinnerModule,
                FivNetworkStatusModule,
                FivOverlayModule,
                FivPasswordInputModule,
                FivPopoverModule,
                FivRippleModule,
                FivRouterItemModule,
                FivStepperModule,
                FivSearchbarModule
            ];
            /** @type {?} */
            var directiveModules = [
                FivCenterModule,
                FivIfModule,
                FivLazyImageModule,
                FivPermissionsModule,
                FivPullModule,
                FivViewportModule
            ];
            var FivethreeCoreModule = /** @class */ (function () {
                function FivethreeCoreModule() {
                }
                return FivethreeCoreModule;
            }());
            FivethreeCoreModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                            imports: __spread([
                                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"]
                            ], componentModules, directiveModules),
                            exports: __spread(componentModules, directiveModules)
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=fivethree-core.js.map
            /***/ 
        })
    }]);
//# sourceMappingURL=default~pages-fivethree-components-app-bar-app-bar-module~pages-fivethree-components-bottom-sheet-bo~58ac70ac-es2015.js.map
//# sourceMappingURL=default~pages-fivethree-components-app-bar-app-bar-module~pages-fivethree-components-bottom-sheet-bo~58ac70ac-es5.js.map
//# sourceMappingURL=default~pages-fivethree-components-app-bar-app-bar-module~pages-fivethree-components-bottom-sheet-bo~58ac70ac-es5.js.map