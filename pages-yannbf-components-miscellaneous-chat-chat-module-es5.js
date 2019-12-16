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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-chat-chat-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Messages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"chats\">\r\n  <ion-list>\r\n    <ion-list-header>Today</ion-list-header>\r\n    <ion-item *ngFor=\"let chat of chats\" (click)=\"viewMessages(chat)\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"chat.imageUrl\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{chat.title}}</h2>\r\n        <p>{{chat.lastMessage}}</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">{{chat.timestamp | date:\"hh:mm a\" | lowercase}}</ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header>Yesterday</ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/yannbf/img/avatar/marty-avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>McFly</h2>\r\n        <p>Lorem ipsum dolor sit amet..</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">11:11 pm</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/yannbf/img/avatar/marty-avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>McFly</h2>\r\n        <p>Lorem ipsum dolor sit amet..</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">11:11 pm</ion-note>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/yannbf/img/avatar/marty-avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>McFly</h2>\r\n        <p>Lorem ipsum dolor sit amet..</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">11:11 pm</ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-list-header>Last Week</ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/yannbf/img/avatar/marty-avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>McFly</h2>\r\n        <p>Lorem ipsum dolor sit amet..</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">11:11 pm</ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button slot=\"icon-only\" (click)=\"close()\" fill=\"clear\">\r\n        <ion-icon name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Chat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngFor=\"let message of messages\" class=\"message-wrapper\">\r\n    <div *ngIf=\"user._id !== message.userId\">\r\n      <img class=\"profile-pic left\" [src]=\"toUser.pic\" onerror=\"onProfilePicError(this)\" />\r\n      <!--  wave-->\r\n      <div class=\"chat-bubble left slide-left\">\r\n\r\n        <div class=\"message\" [innerHTML]=\"message.text\" autolinker>\r\n        </div>\r\n\r\n        <div class=\"message-detail\">\r\n          <span class=\"bold\">{{toUser.username}}</span>,\r\n          <span>{{message.date | date:\"ago\" | lowercase}}</span>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"user._id === message.userId\">\r\n\r\n      <img class=\"profile-pic right\" [src]=\"user.pic\" onerror=\"onProfilePicError(this)\" />\r\n\r\n      <div class=\"chat-bubble right slide-right\">\r\n\r\n        <div class=\"message\" [innerHTML]=\"message.text\" autolinker>\r\n        </div>\r\n\r\n        <div class=\"message-detail\">\r\n          <span class=\"bold\">{{user.username}}</span>,\r\n          <span>{{message.date | date:\"ago\" | lowercase}}</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"cf\"></div>\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <form [formGroup]=\"messageForm\" (submit)=\"send(chatBox)\" novalidate>\r\n    <ion-item>\r\n      <ion-input formControlName=\"message\" [(ngModel)]=\"chatBox\" placeholder=\"Send {{toUser.username}} a message...\">\r\n      </ion-input>\r\n      <ion-button fill=\"clear\" (click)=\"send(chatBox)\" slot=\"end\">\r\n        <ion-icon class=\"footer-btn\" name=\"send\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </form>\r\n</ion-footer>");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.module.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/chat/chat.module.ts ***!
          \***************************************************************************/
        /*! exports provided: ChatPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () { return ChatPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _messages_messages_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages/messages.module */ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.module.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
                return ChatPageModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.scss ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-note {\n  font-size: 12px;\n  align-self: flex-start;\n  margin-top: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxtaXNjZWxsYW5lb3VzXFxjaGF0XFxjaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L2NoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lhbm5iZi9jb21wb25lbnRzL21pc2NlbGxhbmVvdXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ub3RlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAxNHB4O1xyXG59XHJcbiIsImlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.ts ***!
          \*************************************************************************/
        /*! exports provided: ChatPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function () { return ChatPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
                        return __generator(this, function (_a) {
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
                return ChatPage;
            }());
            ChatPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
            ]; };
            ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chat',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
            ], ChatPage);
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.module.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.module.ts ***!
          \****************************************************************************************/
        /*! exports provided: MessagesPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () { return MessagesPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.ts");
            var MessagesPageModule = /** @class */ (function () {
                function MessagesPageModule() {
                }
                return MessagesPageModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.scss": 
        /*!****************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.scss ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/* allows the bar-footer to be elastic /*\n    /* optionally set a max-height */\n/* maxlength on the textarea will prevent /*\n    /* it from getting too large also */\n.bar-footer {\n  overflow: visible !important;\n}\n.bar-footer textarea {\n  resize: none;\n  height: 25px;\n}\n/* fixes an ios bug bear */\nbutton.ion-android-send {\n  padding-top: 2px;\n}\n.footer-btn {\n  font-size: x-large;\n}\nimg.profile-pic {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 10px;\n}\nimg.profile-pic.left {\n  left: 10px;\n}\nimg.profile-pic.right {\n  right: 10px;\n}\n.ion-email {\n  float: right;\n  font-size: 32px;\n  vertical-align: middle;\n}\n.message {\n  font-size: 14px;\n}\n.message-detail {\n  white-space: nowrap;\n  font-size: 14px;\n}\n.bar.item-input-inset .item-input-wrapper input {\n  width: 100% !important;\n}\n.message-wrapper {\n  position: relative;\n}\n.message-wrapper:last-child {\n  margin-bottom: 10px;\n}\n.chat-bubble {\n  border-radius: 5px;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  margin: 10px;\n  max-width: 80%;\n}\n.chat-bubble:before {\n  content: \" \";\n  display: block;\n  height: 16px;\n  width: 9px;\n  position: absolute;\n  bottom: -7.5px;\n}\n.chat-bubble.left {\n  background-color: #e6e5eb;\n  float: left;\n  margin-left: 55px;\n}\n.chat-bubble.left:before {\n  background-color: #e6e5eb;\n  left: 10px;\n  -webkit-transform: rotate(70deg) skew(5deg);\n}\n.chat-bubble.right {\n  background-color: #158ffe;\n  color: #fff;\n  float: right;\n  margin-right: 55px;\n}\n.chat-bubble.right:before {\n  background-color: #158ffe;\n  right: 10px;\n  -webkit-transform: rotate(118deg) skew(-5deg);\n}\n.chat-bubble.right a.autolinker {\n  color: #fff;\n  font-weight: bold;\n}\n.user-messages-top-icon {\n  font-size: 28px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n  right: 5px;\n}\n.msg-header-username {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n}\ninput,\ntextarea,\n.item-input,\n.item-input-wrapper {\n  background-color: #f4f4f4 !important;\n}\n.bold {\n  font-weight: bold;\n}\n.cf {\n  clear: both !important;\n}\na.autolinker {\n  color: #3b88c3;\n  text-decoration: none;\n}\n/* loading */\n.loader-center {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center;\n}\n.loader .ion-loading-c {\n  font-size: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L21lc3NhZ2VzL0M6XFxVc2Vyc1xcc2FiYWRpXFxEb2N1bWVudHNcXFByb2pldG9zXFxfaW9uaWNcXGlvbmljNC1jb21wb25lbnRzL3NyY1xcYXBwXFxwYWdlc1xceWFubmJmXFxjb21wb25lbnRzXFxtaXNjZWxsYW5lb3VzXFxjaGF0XFxtZXNzYWdlc1xcbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtvQ0FBQTtBQUVBO3VDQUFBO0FBRUE7RUFDRSw0QkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBREVGO0FDQ0EsMEJBQUE7QUFDQTtFQUNFLGdCQUFBO0FERUY7QUNDQTtFQUNFLGtCQUFBO0FERUY7QUNDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURFRjtBQ0NBO0VBQ0UsVUFBQTtBREVGO0FDQ0E7RUFDRSxXQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtBREVGO0FDQ0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QURFRjtBQ0NBO0VBQ0Usc0JBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FERUY7QUNDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FERUY7QUNDQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FERUY7QUNDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBREVGO0FDQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtBREVGO0FDQ0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FERUY7QUNDQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QURFRjtBQ0NBOzs7O0VBSUUsb0NBQUE7QURFRjtBQ0NBO0VBQ0UsaUJBQUE7QURFRjtBQ0NBO0VBQ0Usc0JBQUE7QURFRjtBQ0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FERUY7QUNDQSxZQUFBO0FBQ0E7RUFDRSxZQUFBO0VBS0EsYUFBQTtFQU9BLG1CQUFBO0VBR0EsaUJBQUE7RUFLQSx1QkFBQTtFQUdBLHNCQUFBO0VBS0EsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIGFsbG93cyB0aGUgYmFyLWZvb3RlciB0byBiZSBlbGFzdGljIC8qXG4gICAgLyogb3B0aW9uYWxseSBzZXQgYSBtYXgtaGVpZ2h0ICovXG4vKiBtYXhsZW5ndGggb24gdGhlIHRleHRhcmVhIHdpbGwgcHJldmVudCAvKlxuICAgIC8qIGl0IGZyb20gZ2V0dGluZyB0b28gbGFyZ2UgYWxzbyAqL1xuLmJhci1mb290ZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG4uYmFyLWZvb3RlciB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4vKiBmaXhlcyBhbiBpb3MgYnVnIGJlYXIgKi9cbmJ1dHRvbi5pb24tYW5kcm9pZC1zZW5kIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmZvb3Rlci1idG4ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbmltZy5wcm9maWxlLXBpYyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG59XG5cbmltZy5wcm9maWxlLXBpYy5sZWZ0IHtcbiAgbGVmdDogMTBweDtcbn1cblxuaW1nLnByb2ZpbGUtcGljLnJpZ2h0IHtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5pb24tZW1haWwge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tZXNzYWdlLWRldGFpbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJhci5pdGVtLWlucHV0LWluc2V0IC5pdGVtLWlucHV0LXdyYXBwZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubWVzc2FnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWVzc2FnZS13cmFwcGVyOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2hhdC1idWJibGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5jaGF0LWJ1YmJsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIsKgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiA5cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNy41cHg7XG59XG5cbi5jaGF0LWJ1YmJsZS5sZWZ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTVlYjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1NXB4O1xufVxuXG4uY2hhdC1idWJibGUubGVmdDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNWViO1xuICBsZWZ0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcwZGVnKSBza2V3KDVkZWcpO1xufVxuXG4uY2hhdC1idWJibGUucmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU4ZmZlO1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XG59XG5cbi5jaGF0LWJ1YmJsZS5yaWdodDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU4ZmZlO1xuICByaWdodDogMTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMThkZWcpIHNrZXcoLTVkZWcpO1xufVxuXG4uY2hhdC1idWJibGUucmlnaHQgYS5hdXRvbGlua2VyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udXNlci1tZXNzYWdlcy10b3AtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLm1zZy1oZWFkZXItdXNlcm5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuLml0ZW0taW5wdXQsXG4uaXRlbS1pbnB1dC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNCAhaW1wb3J0YW50O1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2Yge1xuICBjbGVhcjogYm90aCAhaW1wb3J0YW50O1xufVxuXG5hLmF1dG9saW5rZXIge1xuICBjb2xvcjogIzNiODhjMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBsb2FkaW5nICovXG4ubG9hZGVyLWNlbnRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvYWRlciAuaW9uLWxvYWRpbmctYyB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbn0iLCIvKiBhbGxvd3MgdGhlIGJhci1mb290ZXIgdG8gYmUgZWxhc3RpYyAvKlxyXG4gICAgLyogb3B0aW9uYWxseSBzZXQgYSBtYXgtaGVpZ2h0ICovXHJcbi8qIG1heGxlbmd0aCBvbiB0aGUgdGV4dGFyZWEgd2lsbCBwcmV2ZW50IC8qXHJcbiAgICAvKiBpdCBmcm9tIGdldHRpbmcgdG9vIGxhcmdlIGFsc28gKi9cclxuLmJhci1mb290ZXIge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYXItZm9vdGVyIHRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4vKiBmaXhlcyBhbiBpb3MgYnVnIGJlYXIgKi9cclxuYnV0dG9uLmlvbi1hbmRyb2lkLXNlbmQge1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5mb290ZXItYnRuIHtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbmltZy5wcm9maWxlLXBpYyB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pbWcucHJvZmlsZS1waWMubGVmdCB7XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG5cclxuaW1nLnByb2ZpbGUtcGljLnJpZ2h0IHtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuLmlvbi1lbWFpbCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1kZXRhaWwge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYmFyLml0ZW0taW5wdXQtaW5zZXQgLml0ZW0taW5wdXQtd3JhcHBlciBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lc3NhZ2Utd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWVzc2FnZS13cmFwcGVyOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDAwYTBcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDlweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtNy41cHg7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZS5sZWZ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNWViO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG59XHJcblxyXG4uY2hhdC1idWJibGUubGVmdDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU1ZWI7XHJcbiAgbGVmdDogMTBweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcwZGVnKSBza2V3KDVkZWcpO1xyXG59XHJcblxyXG4uY2hhdC1idWJibGUucmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNThmZmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogNTVweDtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlLnJpZ2h0OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1OGZmZTtcclxuICByaWdodDogMTBweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExOGRlZykgc2tldygtNWRlZyk7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZS5yaWdodCBhLmF1dG9saW5rZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udXNlci1tZXNzYWdlcy10b3AtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0zcHg7XHJcbiAgcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm1zZy1oZWFkZXItdXNlcm5hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0zcHg7XHJcbn1cclxuXHJcbmlucHV0LFxyXG50ZXh0YXJlYSxcclxuLml0ZW0taW5wdXQsXHJcbi5pdGVtLWlucHV0LXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2Yge1xyXG4gIGNsZWFyOiBib3RoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEuYXV0b2xpbmtlciB7XHJcbiAgY29sb3I6ICMzYjg4YzM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBsb2FkaW5nICovXHJcbi5sb2FkZXItY2VudGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xyXG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XHJcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvYWRlciAuaW9uLWxvYWRpbmctYyB7XHJcbiAgZm9udC1zaXplOiA2NHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.ts ***!
          \**************************************************************************************/
        /*! exports provided: MessagesPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function () { return MessagesPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
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
                return MessagesPage;
            }());
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
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
            ], MessagesPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-chat-chat-module-es2015.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-chat-chat-module-es5.js.map
//# sourceMappingURL=pages-yannbf-components-miscellaneous-chat-chat-module-es5.js.map