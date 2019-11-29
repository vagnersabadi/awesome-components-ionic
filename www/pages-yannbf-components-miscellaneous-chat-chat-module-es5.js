(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Messages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"chats\">\r\n  <ion-list>\r\n    <ion-list-header>Today</ion-list-header>\r\n    <ion-item *ngFor=\"let chat of chats\" (click)=\"viewMessages(chat)\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"chat.imageUrl\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{chat.title}}</h2>\r\n        <p>{{chat.lastMessage}}</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">{{chat.timestamp | date:\"hh:mm a\" | lowercase}}</ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header>Yesterday</ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/yannbf/img/avatar/marty-avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>McFly</h2>\r\n        <p>Lorem ipsum dolor sit amet..</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">11:11 pm</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/yannbf/img/avatar/marty-avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>McFly</h2>\r\n        <p>Lorem ipsum dolor sit amet..</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">11:11 pm</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/yannbf/img/avatar/marty-avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>McFly</h2>\r\n        <p>Lorem ipsum dolor sit amet..</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">11:11 pm</ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header>Last Week</ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/yannbf/img/avatar/marty-avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>McFly</h2>\r\n        <p>Lorem ipsum dolor sit amet..</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">11:11 pm</ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button slot=\"icon-only\" (click)=\"close()\" fill=\"clear\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Chat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngFor=\"let message of messages\" class=\"message-wrapper\">\r\n    <div *ngIf=\"user._id !== message.userId\">\r\n      <img class=\"profile-pic left\" [src]=\"toUser.pic\" onerror=\"onProfilePicError(this)\" />\r\n      <!--  wave-->\r\n      <div class=\"chat-bubble left slide-left\">\r\n\r\n        <div class=\"message\" [innerHTML]=\"message.text\" autolinker>\r\n        </div>\r\n\r\n        <div class=\"message-detail\">\r\n          <span class=\"bold\">{{toUser.username}}</span>,\r\n          <span>{{message.date | date:\"ago\" | lowercase}}</span>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"user._id === message.userId\">\r\n\r\n      <img class=\"profile-pic right\" [src]=\"user.pic\" onerror=\"onProfilePicError(this)\" />\r\n\r\n      <div class=\"chat-bubble right slide-right\">\r\n\r\n        <div class=\"message\" [innerHTML]=\"message.text\" autolinker>\r\n        </div>\r\n\r\n        <div class=\"message-detail\">\r\n          <span class=\"bold\">{{user.username}}</span>,\r\n          <span>{{message.date | date:\"ago\" | lowercase}}</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"cf\"></div>\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <form [formGroup]=\"messageForm\" (submit)=\"send(chatBox)\" novalidate>\r\n    <ion-item>\r\n      <ion-input formControlName=\"message\" [(ngModel)]=\"chatBox\" placeholder=\"Send {{toUser.username}} a message...\">\r\n      </ion-input>\r\n      <ion-button fill=\"clear\" (click)=\"send(chatBox)\" slot=\"end\">\r\n        <ion-icon class=\"footer-btn\" name=\"send\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </form>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/chat/chat.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _messages_messages_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages/messages.module */ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.ts");








var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _messages_messages_module__WEBPACK_IMPORTED_MODULE_1__["MessagesPageModule"]
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-note {\n  font-size: 12px;\n  align-self: flex-start;\n  margin-top: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxtaXNjZWxsYW5lb3VzXFxjaGF0XFxjaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ub3RlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG59XHJcbiIsImlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.ts ***!
  \*************************************************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messages_messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/messages.page */ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.ts");




var ChatPage = /** @class */ (function () {
    function ChatPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.chats = [{
                imageUrl: 'assets/yannbf/img/avatar/marty-avatar.png',
                title: 'McFly',
                lastMessage: 'Hey, what happened yesterday?',
                timestamp: new Date()
            },
            {
                imageUrl: 'assets/yannbf/img/avatar/ian-avatar.png',
                title: 'Venkman',
                lastMessage: 'Sup, dude',
                timestamp: new Date()
            },
            {
                imageUrl: 'assets/yannbf/img/avatar/sarah-avatar.jpg',
                title: 'Sarah Mcconnor',
                lastMessage: 'You still ow me that pizza.',
                timestamp: new Date()
            }];
    }
    ChatPage.prototype.ngOnInit = function () {
    };
    //  Open modal messages
    ChatPage.prototype.viewMessages = function (chat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _messages_messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"],
                            componentProps: {
                                chatId: chat.id,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.module.ts ***!
  \****************************************************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.ts");






var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_5__["MessagesPage"]],
            entryComponents: [_messages_page__WEBPACK_IMPORTED_MODULE_5__["MessagesPage"]]
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* allows the bar-footer to be elastic /*\n    /* optionally set a max-height */\n/* maxlength on the textarea will prevent /*\n    /* it from getting too large also */\n.bar-footer {\n  overflow: visible !important;\n}\n.bar-footer textarea {\n  resize: none;\n  height: 25px;\n}\n/* fixes an ios bug bear */\nbutton.ion-android-send {\n  padding-top: 2px;\n}\n.footer-btn {\n  font-size: x-large;\n}\nimg.profile-pic {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 10px;\n}\nimg.profile-pic.left {\n  left: 10px;\n}\nimg.profile-pic.right {\n  right: 10px;\n}\n.ion-email {\n  float: right;\n  font-size: 32px;\n  vertical-align: middle;\n}\n.message {\n  font-size: 14px;\n}\n.message-detail {\n  white-space: nowrap;\n  font-size: 14px;\n}\n.bar.item-input-inset .item-input-wrapper input {\n  width: 100% !important;\n}\n.message-wrapper {\n  position: relative;\n}\n.message-wrapper:last-child {\n  margin-bottom: 10px;\n}\n.chat-bubble {\n  border-radius: 5px;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  margin: 10px;\n  max-width: 80%;\n}\n.chat-bubble:before {\n  content: \" \";\n  display: block;\n  height: 16px;\n  width: 9px;\n  position: absolute;\n  bottom: -7.5px;\n}\n.chat-bubble.left {\n  background-color: #e6e5eb;\n  float: left;\n  margin-left: 55px;\n}\n.chat-bubble.left:before {\n  background-color: #e6e5eb;\n  left: 10px;\n  -webkit-transform: rotate(70deg) skew(5deg);\n}\n.chat-bubble.right {\n  background-color: #158ffe;\n  color: #fff;\n  float: right;\n  margin-right: 55px;\n}\n.chat-bubble.right:before {\n  background-color: #158ffe;\n  right: 10px;\n  -webkit-transform: rotate(118deg) skew(-5deg);\n}\n.chat-bubble.right a.autolinker {\n  color: #fff;\n  font-weight: bold;\n}\n.user-messages-top-icon {\n  font-size: 28px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n  right: 5px;\n}\n.msg-header-username {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n}\ninput,\ntextarea,\n.item-input,\n.item-input-wrapper {\n  background-color: #f4f4f4 !important;\n}\n.bold {\n  font-weight: bold;\n}\n.cf {\n  clear: both !important;\n}\na.autolinker {\n  color: #3b88c3;\n  text-decoration: none;\n}\n/* loading */\n.loader-center {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  -webkit-box-pack: center;\n  justify-content: center;\n  align-content: stretch;\n  -webkit-box-align: center;\n  align-items: center;\n}\n.loader .ion-loading-c {\n  font-size: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L21lc3NhZ2VzL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxtaXNjZWxsYW5lb3VzXFxjaGF0XFxtZXNzYWdlc1xcbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtvQ0FBQTtBQUVBO3VDQUFBO0FBRUE7RUFDRSw0QkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBREVGO0FDQ0EsMEJBQUE7QUFDQTtFQUNFLGdCQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0FERUY7QUNDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURFRjtBQ0NBO0VBQ0UsVUFBQTtBREVGO0FDQ0E7RUFDRSxXQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtBREVGO0FDQ0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QURFRjtBQ0NBO0VBQ0Usc0JBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FERUY7QUNDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FERUY7QUNDQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FERUY7QUNDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBREVGO0FDQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtBREVGO0FDQ0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FERUY7QUNDQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QURFRjtBQ0NBOzs7O0VBSUUsb0NBQUE7QURFRjtBQ0NBO0VBQ0UsaUJBQUE7QURFRjtBQ0NBO0VBQ0Usc0JBQUE7QURFRjtBQ0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FERUY7QUNDQSxZQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFJQSxhQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUlBLG1CQUFBO0VBR0EsaUJBQUE7RUFDQSx3QkFBQTtFQUlBLHVCQUFBO0VBR0Esc0JBQUE7RUFDQSx5QkFBQTtFQUlBLG1CQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7QURFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvY2hhdC9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBhbGxvd3MgdGhlIGJhci1mb290ZXIgdG8gYmUgZWxhc3RpYyAvKlxuICAgIC8qIG9wdGlvbmFsbHkgc2V0IGEgbWF4LWhlaWdodCAqL1xuLyogbWF4bGVuZ3RoIG9uIHRoZSB0ZXh0YXJlYSB3aWxsIHByZXZlbnQgLypcbiAgICAvKiBpdCBmcm9tIGdldHRpbmcgdG9vIGxhcmdlIGFsc28gKi9cbi5iYXItZm9vdGVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxuLmJhci1mb290ZXIgdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLyogZml4ZXMgYW4gaW9zIGJ1ZyBiZWFyICovXG5idXR0b24uaW9uLWFuZHJvaWQtc2VuZCB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5mb290ZXItYnRuIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG5pbWcucHJvZmlsZS1waWMge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG5pbWcucHJvZmlsZS1waWMubGVmdCB7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbmltZy5wcm9maWxlLXBpYy5yaWdodCB7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uaW9uLWVtYWlsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDMycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWVzc2FnZS1kZXRhaWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5iYXIuaXRlbS1pbnB1dC1pbnNldCAuaXRlbS1pbnB1dC13cmFwcGVyIGlucHV0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1lc3NhZ2Utd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lc3NhZ2Utd3JhcHBlcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoYXQtYnViYmxlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuXG4uY2hhdC1idWJibGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLCoFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogOXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTcuNXB4O1xufVxuXG4uY2hhdC1idWJibGUubGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU1ZWI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNTVweDtcbn1cblxuLmNoYXQtYnViYmxlLmxlZnQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTVlYjtcbiAgbGVmdDogMTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3MGRlZykgc2tldyg1ZGVnKTtcbn1cblxuLmNoYXQtYnViYmxlLnJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1OGZmZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xufVxuXG4uY2hhdC1idWJibGUucmlnaHQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1OGZmZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTE4ZGVnKSBza2V3KC01ZGVnKTtcbn1cblxuLmNoYXQtYnViYmxlLnJpZ2h0IGEuYXV0b2xpbmtlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVzZXItbWVzc2FnZXMtdG9wLWljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5tc2ctaGVhZGVyLXVzZXJuYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbi5pdGVtLWlucHV0LFxuLml0ZW0taW5wdXQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQgIWltcG9ydGFudDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNmIHtcbiAgY2xlYXI6IGJvdGggIWltcG9ydGFudDtcbn1cblxuYS5hdXRvbGlua2VyIHtcbiAgY29sb3I6ICMzYjg4YzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogbG9hZGluZyAqL1xuLmxvYWRlci1jZW50ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2FkZXIgLmlvbi1sb2FkaW5nLWMge1xuICBmb250LXNpemU6IDY0cHg7XG59IiwiLyogYWxsb3dzIHRoZSBiYXItZm9vdGVyIHRvIGJlIGVsYXN0aWMgLypcclxuICAgIC8qIG9wdGlvbmFsbHkgc2V0IGEgbWF4LWhlaWdodCAqL1xyXG4vKiBtYXhsZW5ndGggb24gdGhlIHRleHRhcmVhIHdpbGwgcHJldmVudCAvKlxyXG4gICAgLyogaXQgZnJvbSBnZXR0aW5nIHRvbyBsYXJnZSBhbHNvICovXHJcbi5iYXItZm9vdGVyIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFyLWZvb3RlciB0ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLyogZml4ZXMgYW4gaW9zIGJ1ZyBiZWFyICovXHJcbmJ1dHRvbi5pb24tYW5kcm9pZC1zZW5kIHtcclxuICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWJ0biB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG5pbWcucHJvZmlsZS1waWMge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW1nLnByb2ZpbGUtcGljLmxlZnQge1xyXG4gIGxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmltZy5wcm9maWxlLXBpYy5yaWdodCB7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pb24tZW1haWwge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtZGV0YWlsIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJhci5pdGVtLWlucHV0LWluc2V0IC5pdGVtLWlucHV0LXdyYXBwZXIgaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1lc3NhZ2Utd3JhcHBlcjpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2hhdC1idWJibGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwwMGEwXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiA5cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTcuNXB4O1xyXG59XHJcblxyXG4uY2hhdC1idWJibGUubGVmdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTVlYjtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogNTVweDtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlLmxlZnQ6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNWViO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3MGRlZykgc2tldyg1ZGVnKTtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlLnJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU4ZmZlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZS5yaWdodDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNThmZmU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMThkZWcpIHNrZXcoLTVkZWcpO1xyXG59XHJcblxyXG4uY2hhdC1idWJibGUucmlnaHQgYS5hdXRvbGlua2VyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnVzZXItbWVzc2FnZXMtdG9wLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5tc2ctaGVhZGVyLXVzZXJuYW1lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtM3B4O1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEsXHJcbi5pdGVtLWlucHV0LFxyXG4uaXRlbS1pbnB1dC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib2xkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNmIHtcclxuICBjbGVhcjogYm90aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLmF1dG9saW5rZXIge1xyXG4gIGNvbG9yOiAjM2I4OGMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogbG9hZGluZyAqL1xyXG4ubG9hZGVyLWNlbnRlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2FkZXIgLmlvbi1sb2FkaW5nLWMge1xyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.ts ***!
  \**************************************************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var MessagesPage = /** @class */ (function () {
    function MessagesPage(formBuilder, modalCtrl) {
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.toUser = {
            _id: '534b8e5aaa5e7afc1b23e69b',
            pic: 'assets/yannbf/img/avatar/ian-avatar.png',
            username: 'Venkman',
        };
        this.user = {
            _id: '534b8fb2aa5e7afc1b23e69c',
            pic: 'assets/yannbf/img/avatar/marty-avatar.png',
            username: 'Marty',
        };
        this.doneLoading = false;
        this.messages = [
            {
                _id: 1,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'OH CRAP!!'
            },
            {
                _id: 2,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'what??'
            },
            {
                _id: 3,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'Pretty long message with lots of content'
            },
            {
                _id: 4,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'Pretty long message with even way more of lots and lots of content'
            },
            {
                _id: 5,
                date: new Date(),
                userId: this.user._id,
                username: this.user.username,
                pic: this.user.pic,
                text: 'what??'
            },
            {
                _id: 6,
                date: new Date(),
                userId: this.toUser._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: 'yes!'
            }
        ];
        this.messageForm = formBuilder.group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.chatBox = '';
    }
    MessagesPage.prototype.ngOnInit = function () {
    };
    MessagesPage.prototype.send = function (message) {
        var _this = this;
        if (message && message !== '') {
            // this.messageService.sendMessage(chatId, message);
            var messageData = {
                toId: this.toUser._id,
                _id: 6,
                date: new Date(),
                userId: this.user._id,
                username: this.toUser.username,
                pic: this.toUser.pic,
                text: message
            };
            this.messages.push(messageData);
            this.scrollToBottom();
            setTimeout(function () {
                var replyData = {
                    toId: _this.toUser._id,
                    _id: 6,
                    date: new Date(),
                    userId: _this.toUser._id,
                    username: _this.toUser.username,
                    pic: _this.toUser.pic,
                    text: 'Just a quick reply'
                };
                _this.messages.push(replyData);
                _this.scrollToBottom();
            }, 1000);
        }
        this.chatBox = '';
    };
    MessagesPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    MessagesPage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    MessagesPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], MessagesPage.prototype, "content", void 0);
    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! raw-loader!./messages.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.html"),
            styles: [__webpack_require__(/*! ./messages.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], MessagesPage);
    return MessagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-chat-chat-module-es5.js.map