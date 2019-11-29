(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ios-transition-071bd421-js"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ios.transition-071bd421.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ios.transition-071bd421.js ***!
  \**************************************************************************/
/*! exports provided: iosTransitionAnimation, shadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function() { return iosTransitionAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm-es5/core-ca0488fc.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-af478fe9.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-af478fe9.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm-es5/constants-3c3e1099.js");
/* harmony import */ var _index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-6826f2f6.js */ "./node_modules/@ionic/core/dist/esm-es5/index-6826f2f6.js");






var DURATION = 540;
var addSafeArea = function (val, side) {
    if (side === void 0) { side = 'top'; }
    return "calc(" + val + "px + var(--ion-safe-area-" + side + "))";
};
var getClonedElement = function (tagName) {
    return document.querySelector(tagName + ".ion-cloned-element");
};
var shadow = function (el) {
    return el.shadowRoot || el;
};
var getLargeTitle = function (refEl) {
    return refEl.querySelector('ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]');
};
var getBackButton = function (refEl, backDirection) {
    var buttonsList = refEl.querySelectorAll('ion-buttons');
    for (var _i = 0, buttonsList_1 = buttonsList; _i < buttonsList_1.length; _i++) {
        var buttons = buttonsList_1[_i];
        var parentHeader = buttons.closest('ion-header');
        var activeHeader = parentHeader && !parentHeader.classList.contains('header-collapse-condense-inactive');
        var backButton = buttons.querySelector('ion-back-button');
        var buttonsCollapse = buttons.classList.contains('buttons-collapse');
        if (backButton !== null && ((buttonsCollapse && activeHeader && backDirection) || !buttonsCollapse)) {
            return backButton;
        }
    }
    return null;
};
var createLargeTitleTransition = function (rootAnimation, rtl, backDirection, enteringEl, leavingEl) {
    var enteringBackButton = getBackButton(enteringEl, backDirection);
    var leavingLargeTitle = getLargeTitle(leavingEl);
    var enteringLargeTitle = getLargeTitle(enteringEl);
    var leavingBackButton = getBackButton(leavingEl, backDirection);
    var shouldAnimationForward = enteringBackButton !== null && leavingLargeTitle !== null && !backDirection;
    var shouldAnimationBackward = enteringLargeTitle !== null && leavingBackButton !== null && backDirection;
    if (shouldAnimationForward) {
        animateLargeTitle(rootAnimation, rtl, backDirection, leavingLargeTitle);
        animateBackButton(rootAnimation, rtl, backDirection, enteringBackButton);
    }
    else if (shouldAnimationBackward) {
        animateLargeTitle(rootAnimation, rtl, backDirection, enteringLargeTitle);
        animateBackButton(rootAnimation, rtl, backDirection, leavingBackButton);
    }
    return {
        forward: shouldAnimationForward,
        backward: shouldAnimationBackward
    };
};
var animateBackButton = function (rootAnimation, rtl, backDirection, backButtonEl) {
    var backButtonBounds = backButtonEl.getBoundingClientRect();
    var BACK_BUTTON_START_OFFSET = (rtl) ? "calc(100% - " + (backButtonBounds.right + 4) + "px)" : backButtonBounds.left - 4 + "px";
    var START_TEXT_TRANSLATE = (rtl) ? '7px' : '-7px';
    var END_TEXT_TRANSLATE = (rtl) ? '-4px' : '4px';
    var ICON_TRANSLATE = (rtl) ? '-4px' : '4px';
    var TEXT_ORIGIN_X = (rtl) ? 'right' : 'left';
    var ICON_ORIGIN_X = (rtl) ? 'left' : 'right';
    var FORWARD_TEXT_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: "translate(" + START_TEXT_TRANSLATE + ", " + addSafeArea(8) + ") scale(2.1)" },
        { offset: 1, opacity: 1, transform: "translate(" + END_TEXT_TRANSLATE + ", " + addSafeArea(-40) + ") scale(1)" }
    ];
    var BACKWARD_TEXT_KEYFRAMES = [
        { offset: 0, opacity: 1, transform: "translate(" + END_TEXT_TRANSLATE + ", " + addSafeArea(-40) + ") scale(1)" },
        { offset: 0.6, opacity: 0 },
        { offset: 1, opacity: 0, transform: "translate(" + START_TEXT_TRANSLATE + ", " + addSafeArea(8) + ") scale(2.1)" }
    ];
    var TEXT_KEYFRAMES = (backDirection) ? BACKWARD_TEXT_KEYFRAMES : FORWARD_TEXT_KEYFRAMES;
    var FORWARD_ICON_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: "translate3d(" + ICON_TRANSLATE + ", " + addSafeArea(-35) + ", 0) scale(0.6)" },
        { offset: 1, opacity: 1, transform: "translate3d(" + ICON_TRANSLATE + ", " + addSafeArea(-40) + ", 0) scale(1)" }
    ];
    var BACKWARD_ICON_KEYFRAMES = [
        { offset: 0, opacity: 1, transform: "translate(" + ICON_TRANSLATE + ", " + addSafeArea(-40) + ") scale(1)" },
        { offset: 0.2, opacity: 0, transform: "translate(" + ICON_TRANSLATE + ", " + addSafeArea(-35) + ") scale(0.6)" },
        { offset: 1, opacity: 0, transform: "translate(" + ICON_TRANSLATE + ", " + addSafeArea(-35) + ") scale(0.6)" }
    ];
    var ICON_KEYFRAMES = (backDirection) ? BACKWARD_ICON_KEYFRAMES : FORWARD_ICON_KEYFRAMES;
    var enteringBackButtonTextAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var enteringBackButtonIconAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var clonedBackButtonEl = getClonedElement('ion-back-button');
    var backButtonTextEl = clonedBackButtonEl.querySelector('.button-text');
    var backButtonIconEl = clonedBackButtonEl.querySelector('ion-icon');
    clonedBackButtonEl.text = backButtonEl.text;
    clonedBackButtonEl.mode = backButtonEl.mode;
    clonedBackButtonEl.icon = backButtonEl.icon;
    clonedBackButtonEl.color = backButtonEl.color;
    clonedBackButtonEl.disabled = backButtonEl.disabled;
    clonedBackButtonEl.style.setProperty('display', 'block');
    clonedBackButtonEl.style.setProperty('position', 'fixed');
    enteringBackButtonIconAnimation.addElement(backButtonIconEl);
    enteringBackButtonTextAnimation.addElement(backButtonTextEl);
    enteringBackButtonTextAnimation
        .beforeStyles({
        'transform-origin': TEXT_ORIGIN_X + " center"
    })
        .beforeAddWrite(function () {
        backButtonEl.style.setProperty('display', 'none');
        clonedBackButtonEl.style.setProperty(TEXT_ORIGIN_X, BACK_BUTTON_START_OFFSET);
    })
        .afterAddWrite(function () {
        backButtonEl.style.setProperty('display', '');
        clonedBackButtonEl.style.setProperty('display', 'none');
        clonedBackButtonEl.style.removeProperty(TEXT_ORIGIN_X);
    })
        .keyframes(TEXT_KEYFRAMES);
    enteringBackButtonIconAnimation
        .beforeStyles({
        'transform-origin': ICON_ORIGIN_X + " center"
    })
        .keyframes(ICON_KEYFRAMES);
    rootAnimation.addAnimation([enteringBackButtonTextAnimation, enteringBackButtonIconAnimation]);
};
var animateLargeTitle = function (rootAnimation, rtl, backDirection, largeTitleEl) {
    var _a;
    var largeTitleBounds = largeTitleEl.getBoundingClientRect();
    var TITLE_START_OFFSET = (rtl) ? "calc(100% - " + largeTitleBounds.right + "px)" : largeTitleBounds.left + "px";
    var START_TRANSLATE = (rtl) ? '-18px' : '18px';
    var ORIGIN_X = (rtl) ? 'right' : 'left';
    var BACKWARDS_KEYFRAMES = [
        { offset: 0, opacity: 0, transform: "translate(" + START_TRANSLATE + ", " + addSafeArea(0) + ") scale(0.49)" },
        { offset: 0.1, opacity: 0 },
        { offset: 1, opacity: 1, transform: "translate(0, " + addSafeArea(49) + ") scale(1)" }
    ];
    var FORWARDS_KEYFRAMES = [
        { offset: 0, opacity: 0.99, transform: "translate(0, " + addSafeArea(49) + ") scale(1)" },
        { offset: 0.6, opacity: 0 },
        { offset: 1, opacity: 0, transform: "translate(" + START_TRANSLATE + ", " + addSafeArea(0) + ") scale(0.5)" }
    ];
    var KEYFRAMES = (backDirection) ? BACKWARDS_KEYFRAMES : FORWARDS_KEYFRAMES;
    var clonedTitleEl = getClonedElement('ion-title');
    var clonedLargeTitleAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    clonedTitleEl.innerText = largeTitleEl.innerText;
    clonedTitleEl.size = largeTitleEl.size;
    clonedTitleEl.color = largeTitleEl.color;
    clonedLargeTitleAnimation.addElement(clonedTitleEl);
    clonedLargeTitleAnimation
        .beforeStyles((_a = {
            'transform-origin': ORIGIN_X + " center",
            'height': '46px',
            'display': '',
            'position': 'relative'
        },
        _a[ORIGIN_X] = TITLE_START_OFFSET,
        _a))
        .beforeAddWrite(function () {
        largeTitleEl.style.setProperty('display', 'none');
    })
        .afterAddWrite(function () {
        largeTitleEl.style.setProperty('display', '');
        clonedTitleEl.style.setProperty('display', 'none');
    })
        .keyframes(KEYFRAMES);
    rootAnimation.addAnimation(clonedLargeTitleAnimation);
};
var iosTransitionAnimation = function (navEl, opts) {
    try {
        var EASING = 'cubic-bezier(0.32,0.72,0,1)';
        var OPACITY_1 = 'opacity';
        var TRANSFORM_1 = 'transform';
        var CENTER_1 = '0%';
        var OFF_OPACITY = 0.8;
        var isRTL_1 = navEl.ownerDocument.dir === 'rtl';
        var OFF_RIGHT_1 = isRTL_1 ? '-99.5%' : '99.5%';
        var OFF_LEFT_1 = isRTL_1 ? '33%' : '-33%';
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        var backDirection_1 = (opts.direction === 'back');
        var contentEl = enteringEl.querySelector(':scope > ion-content');
        var headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
        var enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
        var rootAnimation_1 = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        var enteringContentAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
        rootAnimation_1
            .addElement(enteringEl)
            .duration(opts.duration || DURATION)
            .easing(opts.easing || EASING)
            .fill('both')
            .beforeRemoveClass('ion-page-invisible');
        if (leavingEl && navEl) {
            var navDecorAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            navDecorAnimation.addElement(navEl);
            rootAnimation_1.addAnimation(navDecorAnimation);
        }
        if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
            enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs')); // REVIEW
        }
        else {
            enteringContentAnimation.addElement(contentEl); // REVIEW
            enteringContentAnimation.addElement(headerEls);
        }
        rootAnimation_1.addAnimation(enteringContentAnimation);
        if (backDirection_1) {
            enteringContentAnimation
                .beforeClearStyles([OPACITY_1])
                .fromTo('transform', "translateX(" + OFF_LEFT_1 + ")", "translateX(" + CENTER_1 + ")")
                .fromTo(OPACITY_1, OFF_OPACITY, 1);
        }
        else {
            // entering content, forward direction
            enteringContentAnimation
                .beforeClearStyles([OPACITY_1])
                .fromTo('transform', "translateX(" + OFF_RIGHT_1 + ")", "translateX(" + CENTER_1 + ")");
        }
        if (contentEl) {
            var enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');
            if (enteringTransitionEffectEl) {
                var enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
                var enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
                var enteringTransitionEffect = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var enteringTransitionCover = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var enteringTransitionShadow = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                enteringTransitionEffect
                    .addElement(enteringTransitionEffectEl)
                    .beforeStyles({ opacity: '1' })
                    .afterStyles({ opacity: '' });
                enteringTransitionCover
                    .addElement(enteringTransitionCoverEl) // REVIEW
                    .beforeClearStyles([OPACITY_1])
                    .fromTo(OPACITY_1, 0, 0.1);
                enteringTransitionShadow
                    .addElement(enteringTransitionShadowEl) // REVIEW
                    .beforeClearStyles([OPACITY_1])
                    .fromTo(OPACITY_1, 0.03, 0.70);
                enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
                enteringContentAnimation.addAnimation([enteringTransitionEffect]);
            }
        }
        var enteringContentHasLargeTitle_1 = enteringEl.querySelector('ion-header.header-collapse-condense');
        var _a = createLargeTitleTransition(rootAnimation_1, isRTL_1, backDirection_1, enteringEl, leavingEl), forward_1 = _a.forward, backward_1 = _a.backward;
        enteringToolBarEls.forEach(function (enteringToolBarEl) {
            var enteringToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBar.addElement(enteringToolBarEl);
            rootAnimation_1.addAnimation(enteringToolBar);
            var enteringTitle = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title')); // REVIEW
            var enteringToolBarButtons = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            var buttons = Array.from(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
            var parentHeader = enteringToolBarEl.closest('ion-header');
            var inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
            var buttonsToAnimate;
            if (backDirection_1) {
                buttonsToAnimate = buttons.filter(function (button) {
                    var isCollapseButton = button.classList.contains('buttons-collapse');
                    return (isCollapseButton && !inactiveHeader) || !isCollapseButton;
                });
            }
            else {
                buttonsToAnimate = buttons.filter(function (button) { return !button.classList.contains('buttons-collapse'); });
            }
            enteringToolBarButtons.addElement(buttonsToAnimate);
            var enteringToolBarItems = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
            var enteringToolBarBg = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background')); // REVIEW
            var enteringBackButton = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            var backButtonEl = enteringToolBarEl.querySelector('ion-back-button');
            if (backButtonEl) {
                enteringBackButton.addElement(backButtonEl);
            }
            enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
            enteringToolBarButtons.fromTo(OPACITY_1, 0.01, 1);
            enteringToolBarItems.fromTo(OPACITY_1, 0.01, 1);
            if (backDirection_1) {
                if (!inactiveHeader) {
                    enteringTitle
                        .fromTo('transform', "translateX(" + OFF_LEFT_1 + ")", "translateX(" + CENTER_1 + ")")
                        .fromTo(OPACITY_1, 0.01, 1);
                }
                enteringToolBarItems.fromTo('transform', "translateX(" + OFF_LEFT_1 + ")", "translateX(" + CENTER_1 + ")");
                // back direction, entering page has a back button
                enteringBackButton.fromTo(OPACITY_1, 0.01, 1);
            }
            else {
                // entering toolbar, forward direction
                if (!enteringContentHasLargeTitle_1) {
                    enteringTitle
                        .fromTo('transform', "translateX(" + OFF_RIGHT_1 + ")", "translateX(" + CENTER_1 + ")")
                        .fromTo(OPACITY_1, 0.01, 1);
                }
                enteringToolBarItems.fromTo('transform', "translateX(" + OFF_RIGHT_1 + ")", "translateX(" + CENTER_1 + ")");
                enteringToolBarBg
                    .beforeClearStyles([OPACITY_1])
                    .fromTo(OPACITY_1, 0.01, 1);
                // forward direction, entering page has a back button
                if (!forward_1) {
                    enteringBackButton.fromTo(OPACITY_1, 0.01, 1);
                }
                if (backButtonEl && !forward_1) {
                    var enteringBackBtnText = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    enteringBackBtnText
                        .addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                        .fromTo("transform", (isRTL_1 ? 'translateX(-100px)' : 'translateX(100px)'), 'translateX(0px)');
                    enteringToolBar.addAnimation(enteringBackBtnText);
                }
            }
        });
        // setup leaving view
        if (leavingEl) {
            var leavingContent = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
            var leavingContentEl = leavingEl.querySelector(':scope > ion-content');
            leavingContent.addElement(leavingContentEl); // REVIEW
            leavingContent.addElement(leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'));
            rootAnimation_1.addAnimation(leavingContent);
            if (backDirection_1) {
                // leaving content, back direction
                leavingContent
                    .beforeClearStyles([OPACITY_1])
                    .fromTo('transform', "translateX(" + CENTER_1 + ")", (isRTL_1 ? 'translateX(-100%)' : 'translateX(100%)'));
                var leavingPage_1 = Object(_index_6826f2f6_js__WEBPACK_IMPORTED_MODULE_5__["g"])(leavingEl);
                rootAnimation_1.afterAddWrite(function () {
                    if (rootAnimation_1.getDirection() === 'normal') {
                        leavingPage_1.style.setProperty('display', 'none');
                    }
                });
            }
            else {
                // leaving content, forward direction
                leavingContent
                    .fromTo('transform', "translateX(" + CENTER_1 + ")", "translateX(" + OFF_LEFT_1 + ")")
                    .fromTo(OPACITY_1, 1, OFF_OPACITY);
            }
            if (leavingContentEl) {
                var leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');
                if (leavingTransitionEffectEl) {
                    var leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
                    var leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
                    var leavingTransitionEffect = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    var leavingTransitionCover = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    var leavingTransitionShadow = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                    leavingTransitionEffect
                        .addElement(leavingTransitionEffectEl)
                        .beforeStyles({ opacity: '1' })
                        .afterStyles({ opacity: '' });
                    leavingTransitionCover
                        .addElement(leavingTransitionCoverEl) // REVIEW
                        .beforeClearStyles([OPACITY_1])
                        .fromTo(OPACITY_1, 0.1, 0);
                    leavingTransitionShadow
                        .addElement(leavingTransitionShadowEl) // REVIEW
                        .beforeClearStyles([OPACITY_1])
                        .fromTo(OPACITY_1, 0.70, 0.03);
                    leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
                    leavingContent.addAnimation([leavingTransitionEffect]);
                }
            }
            var leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
            leavingToolBarEls.forEach(function (leavingToolBarEl) {
                var leavingToolBar = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingToolBar.addElement(leavingToolBarEl);
                var leavingTitle = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title')); // REVIEW
                var leavingToolBarButtons = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var buttons = leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]');
                var parentHeader = leavingToolBarEl.closest('ion-header');
                var inactiveHeader = parentHeader && parentHeader.classList.contains('header-collapse-condense-inactive');
                var buttonsToAnimate = Array.from(buttons).filter(function (button) {
                    var isCollapseButton = button.classList.contains('buttons-collapse');
                    return (isCollapseButton && !inactiveHeader) || !isCollapseButton;
                });
                leavingToolBarButtons.addElement(buttonsToAnimate);
                var leavingToolBarItems = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');
                if (leavingToolBarItemEls.length > 0) {
                    leavingToolBarItems.addElement(leavingToolBarItemEls);
                }
                var leavingToolBarBg = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background')); // REVIEW
                var leavingBackButton = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                var backButtonEl = leavingToolBarEl.querySelector('ion-back-button');
                if (backButtonEl) {
                    leavingBackButton.addElement(backButtonEl);
                }
                leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
                rootAnimation_1.addAnimation(leavingToolBar);
                // fade out leaving toolbar items
                leavingBackButton.fromTo(OPACITY_1, 0.99, 0);
                leavingToolBarButtons.fromTo(OPACITY_1, 0.99, 0);
                leavingToolBarItems.fromTo(OPACITY_1, 0.99, 0);
                if (backDirection_1) {
                    if (!inactiveHeader) {
                        // leaving toolbar, back direction
                        leavingTitle
                            .fromTo('transform', "translateX(" + CENTER_1 + ")", (isRTL_1 ? 'translateX(-100%)' : 'translateX(100%)'))
                            .fromTo(OPACITY_1, 0.99, 0);
                    }
                    leavingToolBarItems.fromTo('transform', "translateX(" + CENTER_1 + ")", (isRTL_1 ? 'translateX(-100%)' : 'translateX(100%)'));
                    // leaving toolbar, back direction, and there's no entering toolbar
                    // should just slide out, no fading out
                    leavingToolBarBg
                        .beforeClearStyles([OPACITY_1])
                        .fromTo(OPACITY_1, 1, 0.01);
                    if (backButtonEl && !backward_1) {
                        var leavingBackBtnText = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
                        leavingBackBtnText
                            .addElement(shadow(backButtonEl).querySelector('.button-text')) // REVIEW
                            .fromTo('transform', "translateX(" + CENTER_1 + ")", "translateX(" + ((isRTL_1 ? -124 : 124) + 'px') + ")");
                        leavingToolBar.addAnimation(leavingBackBtnText);
                    }
                }
                else {
                    // leaving toolbar, forward direction
                    if (!inactiveHeader) {
                        leavingTitle
                            .fromTo('transform', "translateX(" + CENTER_1 + ")", "translateX(" + OFF_LEFT_1 + ")")
                            .fromTo(OPACITY_1, 0.99, 0)
                            .afterClearStyles([TRANSFORM_1, OPACITY_1]);
                    }
                    leavingToolBarItems
                        .fromTo('transform', "translateX(" + CENTER_1 + ")", "translateX(" + OFF_LEFT_1 + ")")
                        .afterClearStyles([TRANSFORM_1, OPACITY_1]);
                    leavingBackButton.afterClearStyles([OPACITY_1]);
                    leavingTitle.afterClearStyles([OPACITY_1]);
                    leavingToolBarButtons.afterClearStyles([OPACITY_1]);
                }
            });
        }
        return rootAnimation_1;
    }
    catch (err) {
        throw err;
    }
};



/***/ })

}]);
//# sourceMappingURL=ios-transition-071bd421-js-es5.js.map