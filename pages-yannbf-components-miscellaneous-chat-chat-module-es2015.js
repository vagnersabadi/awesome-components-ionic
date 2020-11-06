(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-chat-chat-module"],{

/***/ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/chat/chat.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var _messages_messages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/messages.module */ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/pages/yannbf/components/miscellaneous/chat/chat.page.ts");









const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
class ChatPageModule {
}
ChatPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChatPageModule });
ChatPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ChatPageModule_Factory(t) { return new (t || ChatPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _messages_messages_module__WEBPACK_IMPORTED_MODULE_0__["MessagesPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChatPageModule, { declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _messages_messages_module__WEBPACK_IMPORTED_MODULE_0__["MessagesPageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                    _messages_messages_module__WEBPACK_IMPORTED_MODULE_0__["MessagesPageModule"]
                ],
                declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _messages_messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/messages.page */ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ChatPage_ion_item_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatPage_ion_item_11_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const chat_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.viewMessages(chat_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-note", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", chat_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chat_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chat_r1.lastMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 6, chat_r1.timestamp, "hh:mm a")));
} }
class ChatPage {
    constructor(modalCtrl) {
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
    ngOnInit() {
    }
    //  Open modal messages
    viewMessages(chat) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _messages_messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"],
                componentProps: {
                    chatId: chat.id,
                }
            });
            yield modal.present();
        });
    }
}
ChatPage.ɵfac = function ChatPage_Factory(t) { return new (t || ChatPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
ChatPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatPage, selectors: [["app-chat"]], decls: 60, vars: 1, consts: [["slot", "start"], ["defaultHref", "/"], [1, "chats"], [3, "click", 4, "ngFor", "ngForOf"], ["src", "assets/yannbf/img/avatar/marty-avatar.png"], ["slot", "end"], [3, "click"], [3, "src"]], template: function ChatPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ChatPage_ion_item_11_Template, 12, 9, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-avatar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "McFly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Lorem ipsum dolor sit amet..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-note", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "11:11 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-avatar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "McFly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Lorem ipsum dolor sit amet..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-note", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "11:11 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-avatar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "McFly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Lorem ipsum dolor sit amet..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-note", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "11:11 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Last Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-avatar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "McFly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Lorem ipsum dolor sit amet..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-note", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "11:11 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chats);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonNote"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["ion-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  align-self: flex-start;\n  margin-top: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXG1pc2NlbGxhbmVvdXNcXGNoYXRcXGNoYXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW5vdGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuIiwiaW9uLW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.page.html',
                styleUrls: ['./chat.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.page */ "./src/app/pages/yannbf/components/miscellaneous/chat/messages/messages.page.ts");






class MessagesPageModule {
}
MessagesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MessagesPageModule });
MessagesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MessagesPageModule_Factory(t) { return new (t || MessagesPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MessagesPageModule, { declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_4__["MessagesPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_4__["MessagesPage"]],
                entryComponents: [_messages_page__WEBPACK_IMPORTED_MODULE_4__["MessagesPage"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function MessagesPage_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.toUser.pic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", message_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.toUser.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, message_r1.date, "ago")));
} }
function MessagesPage_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.user.pic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", message_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, message_r1.date, "ago")));
} }
function MessagesPage_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessagesPage_div_8_div_1_Template, 12, 9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MessagesPage_div_8_div_2_Template, 12, 9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user._id !== message_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user._id === message_r1.userId);
} }
class MessagesPage {
    constructor(formBuilder, modalCtrl) {
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
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.chatBox = '';
    }
    ngOnInit() {
    }
    send(message) {
        if (message && message !== '') {
            // this.messageService.sendMessage(chatId, message);
            const messageData = {
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
            setTimeout(() => {
                const replyData = {
                    toId: this.toUser._id,
                    _id: 6,
                    date: new Date(),
                    userId: this.toUser._id,
                    username: this.toUser.username,
                    pic: this.toUser.pic,
                    text: 'Just a quick reply'
                };
                this.messages.push(replyData);
                this.scrollToBottom();
            }, 1000);
        }
        this.chatBox = '';
    }
    scrollToBottom() {
        setTimeout(() => {
            this.content.scrollToBottom();
        }, 100);
    }
    close() {
        this.modalCtrl.dismiss();
    }
}
MessagesPage.ɵfac = function MessagesPage_Factory(t) { return new (t || MessagesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
MessagesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesPage, selectors: [["app-messages"]], viewQuery: function MessagesPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 15, vars: 4, consts: [["slot", "start"], ["slot", "icon-only", "fill", "clear", 3, "click"], ["name", "arrow-back"], ["class", "message-wrapper", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "submit"], ["formControlName", "message", 3, "ngModel", "placeholder", "ngModelChange"], ["fill", "clear", "slot", "end", 3, "click"], ["name", "send", 1, "footer-btn"], [1, "message-wrapper"], [4, "ngIf"], [1, "cf"], ["onerror", "onProfilePicError(this)", 1, "profile-pic", "left", 3, "src"], [1, "chat-bubble", "left", "slide-left"], ["autolinker", "", 1, "message", 3, "innerHTML"], [1, "message-detail"], [1, "bold"], ["onerror", "onProfilePicError(this)", 1, "profile-pic", "right", 3, "src"], [1, "chat-bubble", "right", "slide-right"]], template: function MessagesPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesPage_Template_ion_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MessagesPage_div_8_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function MessagesPage_Template_form_submit_10_listener() { return ctx.send(ctx.chatBox); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesPage_Template_ion_input_ngModelChange_12_listener($event) { return ctx.chatBox = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesPage_Template_ion_button_click_13_listener() { return ctx.send(ctx.chatBox); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.messageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Send ", ctx.toUser.username, " a message...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.chatBox);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["@charset \"UTF-8\";\n\n\n.bar-footer[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n.bar-footer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n  height: 25px;\n}\n\nbutton.ion-android-send[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\n.footer-btn[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\nimg.profile-pic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 10px;\n}\nimg.profile-pic.left[_ngcontent-%COMP%] {\n  left: 10px;\n}\nimg.profile-pic.right[_ngcontent-%COMP%] {\n  right: 10px;\n}\n.ion-email[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 32px;\n  vertical-align: middle;\n}\n.message[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.message-detail[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 14px;\n}\n.bar.item-input-inset[_ngcontent-%COMP%]   .item-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.message-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.message-wrapper[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 10px;\n}\n.chat-bubble[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  margin: 10px;\n  max-width: 80%;\n}\n.chat-bubble[_ngcontent-%COMP%]:before {\n  content: \"\u00A0\";\n  display: block;\n  height: 16px;\n  width: 9px;\n  position: absolute;\n  bottom: -7.5px;\n}\n.chat-bubble.left[_ngcontent-%COMP%] {\n  background-color: #e6e5eb;\n  float: left;\n  margin-left: 55px;\n}\n.chat-bubble.left[_ngcontent-%COMP%]:before {\n  background-color: #e6e5eb;\n  left: 10px;\n  -webkit-transform: rotate(70deg) skew(5deg);\n}\n.chat-bubble.right[_ngcontent-%COMP%] {\n  background-color: #158ffe;\n  color: #fff;\n  float: right;\n  margin-right: 55px;\n}\n.chat-bubble.right[_ngcontent-%COMP%]:before {\n  background-color: #158ffe;\n  right: 10px;\n  -webkit-transform: rotate(118deg) skew(-5deg);\n}\n.chat-bubble.right[_ngcontent-%COMP%]   a.autolinker[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: bold;\n}\n.user-messages-top-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n  right: 5px;\n}\n.msg-header-username[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  top: -3px;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], .item-input[_ngcontent-%COMP%], .item-input-wrapper[_ngcontent-%COMP%] {\n  background-color: #f4f4f4 !important;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.cf[_ngcontent-%COMP%] {\n  clear: both !important;\n}\na.autolinker[_ngcontent-%COMP%] {\n  color: #3b88c3;\n  text-decoration: none;\n}\n\n.loader-center[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center;\n}\n.loader[_ngcontent-%COMP%]   .ion-loading-c[_ngcontent-%COMP%] {\n  font-size: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy9jaGF0L21lc3NhZ2VzL0M6XFxVc2Vyc1xcVmFnbmVyIFNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZWN0c1xcX015XFxhd2Vzb21lLWNvbXBvbmVudHMtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXG1pc2NlbGxhbmVvdXNcXGNoYXRcXG1lc3NhZ2VzXFxtZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO29DQUFBO0FBRUE7dUNBQUE7QUFFQTtFQUNFLDRCQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FERUY7QUNDQSwwQkFBQTtBQUNBO0VBQ0UsZ0JBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7QURFRjtBQ0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBREVGO0FDQ0E7RUFDRSxVQUFBO0FERUY7QUNDQTtFQUNFLFdBQUE7QURFRjtBQ0NBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0FERUY7QUNDQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBREVGO0FDQ0E7RUFDRSxzQkFBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtBREVGO0FDQ0E7RUFDRSxtQkFBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURFRjtBQ0NBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURFRjtBQ0NBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7QURFRjtBQ0NBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FERUY7QUNDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0FERUY7QUNDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURFRjtBQ0NBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBREVGO0FDQ0E7Ozs7RUFJRSxvQ0FBQTtBREVGO0FDQ0E7RUFDRSxpQkFBQTtBREVGO0FDQ0E7RUFDRSxzQkFBQTtBREVGO0FDQ0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QURFRjtBQ0NBLFlBQUE7QUFDQTtFQUNFLFlBQUE7RUFLQSxhQUFBO0VBT0EsbUJBQUE7RUFHQSxpQkFBQTtFQUtBLHVCQUFBO0VBR0Esc0JBQUE7RUFLQSxtQkFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0FERUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL2NoYXQvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogYWxsb3dzIHRoZSBiYXItZm9vdGVyIHRvIGJlIGVsYXN0aWMgLypcbiAgICAvKiBvcHRpb25hbGx5IHNldCBhIG1heC1oZWlnaHQgKi9cbi8qIG1heGxlbmd0aCBvbiB0aGUgdGV4dGFyZWEgd2lsbCBwcmV2ZW50IC8qXG4gICAgLyogaXQgZnJvbSBnZXR0aW5nIHRvbyBsYXJnZSBhbHNvICovXG4uYmFyLWZvb3RlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5iYXItZm9vdGVyIHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi8qIGZpeGVzIGFuIGlvcyBidWcgYmVhciAqL1xuYnV0dG9uLmlvbi1hbmRyb2lkLXNlbmQge1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuXG4uZm9vdGVyLWJ0biB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuaW1nLnByb2ZpbGUtcGljIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuaW1nLnByb2ZpbGUtcGljLmxlZnQge1xuICBsZWZ0OiAxMHB4O1xufVxuXG5pbWcucHJvZmlsZS1waWMucmlnaHQge1xuICByaWdodDogMTBweDtcbn1cblxuLmlvbi1lbWFpbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1lc3NhZ2UtZGV0YWlsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYmFyLml0ZW0taW5wdXQtaW5zZXQgLml0ZW0taW5wdXQtd3JhcHBlciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tZXNzYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tZXNzYWdlLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jaGF0LWJ1YmJsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuLmNoYXQtYnViYmxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiwqBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDlweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC03LjVweDtcbn1cblxuLmNoYXQtYnViYmxlLmxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNWViO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XG59XG5cbi5jaGF0LWJ1YmJsZS5sZWZ0OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU1ZWI7XG4gIGxlZnQ6IDEwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpIHNrZXcoNWRlZyk7XG59XG5cbi5jaGF0LWJ1YmJsZS5yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNThmZmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNTVweDtcbn1cblxuLmNoYXQtYnViYmxlLnJpZ2h0OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNThmZmU7XG4gIHJpZ2h0OiAxMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDExOGRlZykgc2tldygtNWRlZyk7XG59XG5cbi5jaGF0LWJ1YmJsZS5yaWdodCBhLmF1dG9saW5rZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51c2VyLW1lc3NhZ2VzLXRvcC1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogNXB4O1xufVxuXG4ubXNnLWhlYWRlci11c2VybmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG4uaXRlbS1pbnB1dCxcbi5pdGVtLWlucHV0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0ICFpbXBvcnRhbnQ7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jZiB7XG4gIGNsZWFyOiBib3RoICFpbXBvcnRhbnQ7XG59XG5cbmEuYXV0b2xpbmtlciB7XG4gIGNvbG9yOiAjM2I4OGMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIGxvYWRpbmcgKi9cbi5sb2FkZXItY2VudGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtbW96LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1vei1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9hZGVyIC5pb24tbG9hZGluZy1jIHtcbiAgZm9udC1zaXplOiA2NHB4O1xufSIsIi8qIGFsbG93cyB0aGUgYmFyLWZvb3RlciB0byBiZSBlbGFzdGljIC8qXHJcbiAgICAvKiBvcHRpb25hbGx5IHNldCBhIG1heC1oZWlnaHQgKi9cclxuLyogbWF4bGVuZ3RoIG9uIHRoZSB0ZXh0YXJlYSB3aWxsIHByZXZlbnQgLypcclxuICAgIC8qIGl0IGZyb20gZ2V0dGluZyB0b28gbGFyZ2UgYWxzbyAqL1xyXG4uYmFyLWZvb3RlciB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhci1mb290ZXIgdGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi8qIGZpeGVzIGFuIGlvcyBidWcgYmVhciAqL1xyXG5idXR0b24uaW9uLWFuZHJvaWQtc2VuZCB7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLmZvb3Rlci1idG4ge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuaW1nLnByb2ZpbGUtcGljIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmltZy5wcm9maWxlLXBpYy5sZWZ0IHtcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pbWcucHJvZmlsZS1waWMucmlnaHQge1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW9uLWVtYWlsIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWRldGFpbCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5iYXIuaXRlbS1pbnB1dC1pbnNldCAuaXRlbS1pbnB1dC13cmFwcGVyIGlucHV0IHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXdyYXBwZXI6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1heC13aWR0aDogODAlO1xyXG59XHJcblxyXG4uY2hhdC1idWJibGU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMDBhMFwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogOXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC03LjVweDtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlLmxlZnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU1ZWI7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZS5sZWZ0OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTVlYjtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpIHNrZXcoNWRlZyk7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZS5yaWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1OGZmZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG4uY2hhdC1idWJibGUucmlnaHQ6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU4ZmZlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTE4ZGVnKSBza2V3KC01ZGVnKTtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlLnJpZ2h0IGEuYXV0b2xpbmtlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi51c2VyLW1lc3NhZ2VzLXRvcC1pY29uIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTNweDtcclxuICByaWdodDogNXB4O1xyXG59XHJcblxyXG4ubXNnLWhlYWRlci11c2VybmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTNweDtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhLFxyXG4uaXRlbS1pbnB1dCxcclxuLml0ZW0taW5wdXQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jZiB7XHJcbiAgY2xlYXI6IGJvdGggIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5hdXRvbGlua2VyIHtcclxuICBjb2xvcjogIzNiODhjMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIGxvYWRpbmcgKi9cclxuLmxvYWRlci1jZW50ZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcclxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGVyIC5pb24tbG9hZGluZy1jIHtcclxuICBmb250LXNpemU6IDY0cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.page.html',
                styleUrls: ['./messages.page.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-chat-chat-module-es2015.js.map