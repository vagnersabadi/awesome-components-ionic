(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-wordpress-blogs-blogs-module"],{

/***/ "./src/app/pages/samples/components/wordpress/blogs/blogpage/blogpage.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/samples/components/wordpress/blogs/blogpage/blogpage.module.ts ***!
  \**************************************************************************************/
/*! exports provided: BlogpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpagePageModule", function() { return BlogpagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _blogpage_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogpage.page */ "./src/app/pages/samples/components/wordpress/blogs/blogpage/blogpage.page.ts");






class BlogpagePageModule {
}
BlogpagePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogpagePageModule });
BlogpagePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogpagePageModule_Factory(t) { return new (t || BlogpagePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogpagePageModule, { declarations: [_blogpage_page__WEBPACK_IMPORTED_MODULE_4__["BlogpagePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogpagePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                ],
                declarations: [_blogpage_page__WEBPACK_IMPORTED_MODULE_4__["BlogpagePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/wordpress/blogs/blogpage/blogpage.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/samples/components/wordpress/blogs/blogpage/blogpage.page.ts ***!
  \************************************************************************************/
/*! exports provided: BlogpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogpagePage", function() { return BlogpagePage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/wordpress/wordpress.service */ "./src/app/services/wordpress/wordpress.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function BlogpagePage_ion_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-img", 12);
} if (rf & 2) {
    const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r370.image_url);
} }
function BlogpagePage_ion_grid_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r371 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r371.blogDetail.title.rendered, " ");
} }
function BlogpagePage_ion_row_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r372.blogDetail.authorData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 2, ctx_r372.blogDetail.date, "dd/MM/yyyy"));
} }
function BlogpagePage_ion_chip_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-chip", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r375 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r375.name);
} }
function BlogpagePage_ion_grid_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r374.blogDetail.content.rendered, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class BlogpagePage {
    constructor(activatedRoute, wp_service, modaCtrl) {
        this.activatedRoute = activatedRoute;
        this.wp_service = wp_service;
        this.modaCtrl = modaCtrl;
        this.blogDetail = null;
        this.image_url = null;
    }
    ngOnInit() {
        this.wp_service.getBlogDetail(this.id).subscribe(result => {
            this.blogDetail = result;
            this.getImage(this.blogDetail);
            this.getTags();
            this.getAuthor();
        });
    }
    getImage(data) {
        this.wp_service.getImage(data.featured_media).subscribe(data => {
            this.blogDetail.imageData = data;
            this.image_url = this.blogDetail.imageData.source_url;
        });
    }
    getTags() {
        this.wp_service.getTags().subscribe((data) => {
            this.blogDetail.tagsData = data.filter(item => {
                return this.blogDetail.tags.includes(item.id);
            });
            console.log(this.blogDetail);
        });
    }
    getAuthor() {
        this.wp_service.getUser(this.blogDetail.author).subscribe(data => {
            console.log(data);
            this.blogDetail.authorData = data;
        });
    }
    dismiss() {
        this.modaCtrl.dismiss();
    }
}
BlogpagePage.ɵfac = function BlogpagePage_Factory(t) { return new (t || BlogpagePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"])); };
BlogpagePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlogpagePage, selectors: [["app-blogpage"]], inputs: { id: "id" }, decls: 18, vars: 5, consts: [["color", "primary"], ["slot", "end"], ["fill", "clear", 3, "click"], ["name", "close", "slot", "icon-only"], ["color", "primary", 1, "ion-text-center"], [1, "image-wrapper"], [3, "src", 4, "ngIf"], [4, "ngIf"], ["class", "author", 4, "ngIf"], [1, "tags"], [1, "tags-inner"], ["color", "primary", 4, "ngFor", "ngForOf"], [3, "src"], [1, "title"], [1, "author"], [1, "ion-text-center"], [1, "ion-no-margin"], [1, "blog-date", "ion-no-margin"], [1, "content", 3, "innerHtml"]], template: function BlogpagePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Wordpress Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogpagePage_Template_ion_button_click_5_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Single WP post details fetched ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BlogpagePage_ion_img_11_Template, 1, 1, "ion-img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BlogpagePage_ion_grid_12_Template, 4, 1, "ion-grid", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BlogpagePage_ion_row_13_Template, 8, 5, "ion-row", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, BlogpagePage_ion_chip_16_Template, 2, 1, "ion-chip", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, BlogpagePage_ion_grid_17_Template, 3, 1, "ion-grid", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.image_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.blogDetail && ctx.blogDetail.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.blogDetail && ctx.blogDetail.authorData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.blogDetail && ctx.blogDetail.tagsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.blogDetail && ctx.blogDetail.content);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Muli;\n  line-height: 32px;\n  text-align: center;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: justify;\n  font-family: Muli;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n\n.tags-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.blog-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL3dvcmRwcmVzcy9ibG9ncy9ibG9ncGFnZS9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHNhbXBsZXNcXGNvbXBvbmVudHNcXHdvcmRwcmVzc1xcYmxvZ3NcXGJsb2dwYWdlXFxibG9ncGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NhbXBsZXMvY29tcG9uZW50cy93b3JkcHJlc3MvYmxvZ3MvYmxvZ3BhZ2UvYmxvZ3BhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zYW1wbGVzL2NvbXBvbmVudHMvd29yZHByZXNzL2Jsb2dzL2Jsb2dwYWdlL2Jsb2dwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpO1xyXG59XHJcbi5pbWFnZS13cmFwcGVye1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuLnRhZ3MtaW5uZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJsb2ctZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59IiwiLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LWZhbWlseTogTXVsaTtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LWZhbWlseTogTXVsaTtcbn1cblxuLmltYWdlLXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLnRhZ3MtaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJsb2ctZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BlogpagePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-blogpage',
                templateUrl: './blogpage.page.html',
                styleUrls: ['./blogpage.page.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/samples/components/wordpress/blogs/blogs.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/samples/components/wordpress/blogs/blogs.module.ts ***!
  \**************************************************************************/
/*! exports provided: BlogsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsPageModule", function() { return BlogsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _blogs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogs.page */ "./src/app/pages/samples/components/wordpress/blogs/blogs.page.ts");
/* harmony import */ var _blogpage_blogpage_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogpage/blogpage.module */ "./src/app/pages/samples/components/wordpress/blogs/blogpage/blogpage.module.ts");









const routes = [
    {
        path: '',
        component: _blogs_page__WEBPACK_IMPORTED_MODULE_5__["BlogsPage"]
    }
];
class BlogsPageModule {
}
BlogsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogsPageModule });
BlogsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogsPageModule_Factory(t) { return new (t || BlogsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _blogpage_blogpage_module__WEBPACK_IMPORTED_MODULE_6__["BlogpagePageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogsPageModule, { declarations: [_blogs_page__WEBPACK_IMPORTED_MODULE_5__["BlogsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _blogpage_blogpage_module__WEBPACK_IMPORTED_MODULE_6__["BlogpagePageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _blogpage_blogpage_module__WEBPACK_IMPORTED_MODULE_6__["BlogpagePageModule"]
                ],
                declarations: [_blogs_page__WEBPACK_IMPORTED_MODULE_5__["BlogsPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/samples/components/wordpress/blogs/blogs.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/samples/components/wordpress/blogs/blogs.page.ts ***!
  \************************************************************************/
/*! exports provided: BlogsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsPage", function() { return BlogsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/wordpress/wordpress.service */ "./src/app/services/wordpress/wordpress.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _blogpage_blogpage_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogpage/blogpage.page */ "./src/app/pages/samples/components/wordpress/blogs/blogpage/blogpage.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = function (a0) { return { "background-image": a0 }; };
function BlogsPage_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r379 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BlogsPage_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r379); const item_r377 = ctx.$implicit; const ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r378.openBlog(item_r377.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r377 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, "url(" + item_r377.jetpack_featured_media_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r377.title.rendered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 3, item_r377.date, "dd/MM/yyyy"));
} }
class BlogsPage {
    constructor(wp_service, modalCtrl) {
        this.wp_service = wp_service;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        // Initiate the API call to fetch all blogs. Show spinner in meantime
        this.getBlogData();
    }
    getBlogData() {
        // Call our service function which returns an Observable
        this.wp_service.getBlogs().subscribe(result => {
            this.blogPosts = result;
            this.getImages();
        });
    }
    getImages() {
        this.wp_service.getMedia().subscribe((data) => {
            this.blogPosts.forEach(element => {
                const media = data.filter(item => {
                    return item.id === element.featured_media;
                });
                element.imageData = media[0];
            });
            console.log(this.blogPosts);
        });
    }
    openBlog(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _blogpage_blogpage_page__WEBPACK_IMPORTED_MODULE_4__["BlogpagePage"],
                componentProps: {
                    id: id
                }
            });
            return yield modal.present();
        });
    }
}
BlogsPage.ɵfac = function BlogsPage_Factory(t) { return new (t || BlogsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"])); };
BlogsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BlogsPage, selectors: [["app-blogs"]], decls: 10, vars: 1, consts: [["color", "primary"], ["slot", "start"], ["defaultHref", "/samples"], ["color", "primary", 1, "ion-text-center"], ["class", "video-list ion-no-padding", "mode", "md", 3, "click", 4, "ngFor", "ngForOf"], ["mode", "md", 1, "video-list", "ion-no-padding", 3, "click"], [1, "imagediv", 3, "ngStyle"], [1, "details"], [1, "title-block"], [1, "title"], [1, "extra"], [1, "views"]], template: function BlogsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Wordpress Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Wordpress posts fetched as blogs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BlogsPage_div_9_Template, 10, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.blogPosts);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".video-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 10px 0 10px;\n}\n.video-list[_ngcontent-%COMP%]   .imagediv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  display: flex;\n  flex: 5;\n  background-position: center;\n  background-size: cover;\n  border: 1px solid #ccc;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 10px;\n  flex: 6;\n  justify-content: flex-start;\n  margin-left: 10px;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 10px;\n  width: 75px;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-family: sans-serif;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  color: gray;\n  align-items: flex-start;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 3px;\n  background: gray;\n  margin: 0px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL3dvcmRwcmVzcy9ibG9ncy9DOlxcVXNlcnNcXHNhYmFkaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcX2lvbmljXFxpb25pYzQtY29tcG9uZW50cy9zcmNcXGFwcFxccGFnZXNcXHNhbXBsZXNcXGNvbXBvbmVudHNcXHdvcmRwcmVzc1xcYmxvZ3NcXGJsb2dzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL3dvcmRwcmVzcy9ibG9ncy9ibG9ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUNDSjtBREFJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0VOO0FEQUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0VOO0FEQVE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRVY7QURDTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ1I7QURBUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0VaO0FEQVE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDRVY7QURBUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRVYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zYW1wbGVzL2NvbXBvbmVudHMvd29yZHByZXNzL2Jsb2dzL2Jsb2dzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XHJcbiAgICAuaW1hZ2VkaXYge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiA1O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlscyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBmbGV4OiA2O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAuYXZhdGFyIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudGl0bGUtYmxvY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV4dHJhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRvdCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHggNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCIudmlkZW8tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcbn1cbi52aWRlby1saXN0IC5pbWFnZWRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbi52aWRlby1saXN0IC5kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZsZXg6IDY7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udmlkZW8tbGlzdCAuZGV0YWlscyAuYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDc1cHg7XG59XG4udmlkZW8tbGlzdCAuZGV0YWlscyAudGl0bGUtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbi52aWRlby1saXN0IC5kZXRhaWxzIC50aXRsZS1ibG9jayAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi52aWRlby1saXN0IC5kZXRhaWxzIC50aXRsZS1ibG9jayAuZXh0cmEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBncmF5O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi52aWRlby1saXN0IC5kZXRhaWxzIC50aXRsZS1ibG9jayAuZG90IHtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIG1hcmdpbjogMHB4IDZweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BlogsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-blogs',
                templateUrl: './blogs.page.html',
                styleUrls: ['./blogs.page.scss'],
            }]
    }], function () { return [{ type: _services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/wordpress/wordpress.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/wordpress/wordpress.service.ts ***!
  \*********************************************************/
/*! exports provided: WordpressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordpressService", function() { return WordpressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class WordpressService {
    /**
     * Constructor of the Service with Dependency Injection
     * @param http The standard Angular HttpClient to make requests
     */
    constructor(http) {
        this.http = http;
        this.url = 'https://hackaday.com/wp-json'; // Your wordpress base URL
        this.apiKey = ''; // <-- Enter your own key here if required!
    }
    /**
    * Get data from wordpress
    * map the result to return only the results that we need
    *
    * @returns Observable with the blogs results
    */
    getBlogs() {
        return this.http.get(`${this.url}/wp/v2/posts`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(results => results));
        ;
    }
    /**
    * Get the detailed information for an ID using the "i" parameter
    *
    * @param {string} id imdbID to retrieve information
    * @returns Observable with detailed information
    */
    getBlogDetail(id) {
        return this.http.get(`${this.url}/wp/v2/posts/${id}`);
    }
    /**
    * Get all images from WP media
    *
    * @returns Observable with detailed information
    */
    getMedia() {
        return this.http.get(`${this.url}/wp/v2/media`);
    }
    /**
    * Get the image for a blog post
    *
    * @returns Observable with detailed information
    */
    getImage(id) {
        console.log('id', id);
        return this.http.get(`${this.url}/wp/v2/media/${id}`);
    }
    /**
    * Get all tags from Wordpress
    *
    * @returns Observable with detailed information
    */
    getTags() {
        return this.http.get(`${this.url}/wp/v2/tags`);
    }
    /**
    * Get user information by ID
    *
    * @returns Observable with detailed information
    */
    getUser(id) {
        return this.http.get(`${this.url}/wp/v2/users/${id}`);
    }
}
WordpressService.ɵfac = function WordpressService_Factory(t) { return new (t || WordpressService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WordpressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WordpressService, factory: WordpressService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordpressService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-wordpress-blogs-blogs-module-es2015.js.map