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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.image_url);
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
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.blogDetail.title.rendered, " ");
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
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.blogDetail.authorData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 2, ctx_r2.blogDetail.date, "dd/MM/yyyy"));
} }
function BlogpagePage_ion_chip_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-chip", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.name);
} }
function BlogpagePage_ion_grid_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", ctx_r4.blogDetail.content.rendered, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
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
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: Muli;\n  line-height: 32px;\n  text-align: center;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: justify;\n  font-family: Muli;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n\n.tags-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.blog-date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL3dvcmRwcmVzcy9ibG9ncy9ibG9ncGFnZS9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcc2FtcGxlc1xcY29tcG9uZW50c1xcd29yZHByZXNzXFxibG9nc1xcYmxvZ3BhZ2VcXGJsb2dwYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL3dvcmRwcmVzcy9ibG9ncy9ibG9ncGFnZS9ibG9ncGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbXBsZXMvY29tcG9uZW50cy93b3JkcHJlc3MvYmxvZ3MvYmxvZ3BhZ2UvYmxvZ3BhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGVudHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1mYW1pbHk6IE11bGk7XHJcbn1cclxuLmltYWdlLXdyYXBwZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG4udGFncy1pbm5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYmxvZy1kYXRle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn0iLCIudGl0bGUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBNdWxpO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtZmFtaWx5OiBNdWxpO1xufVxuXG4uaW1hZ2Utd3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG4udGFncy1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYmxvZy1kYXRlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbn0iXX0= */"] });
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
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BlogsPage_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.openBlog(item_r1.id); });
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
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, "url(" + item_r1.jetpack_featured_media_url + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.title.rendered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 3, item_r1.date, "dd/MM/yyyy"));
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
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".video-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 10px 0 10px;\n}\n.video-list[_ngcontent-%COMP%]   .imagediv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  display: flex;\n  flex: 5;\n  background-position: center;\n  background-size: cover;\n  border: 1px solid #ccc;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 10px;\n  flex: 6;\n  justify-content: flex-start;\n  margin-left: 10px;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 10px;\n  width: 75px;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-family: sans-serif;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  color: gray;\n  align-items: flex-start;\n}\n.video-list[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 3px;\n  background: gray;\n  margin: 0px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2FtcGxlcy9jb21wb25lbnRzL3dvcmRwcmVzcy9ibG9ncy9DOlxcVXNlcnNcXFZhZ25lciBTYWJhZGlcXERvY3VtZW50c1xcUHJvamVjdHNcXF9NeVxcYXdlc29tZS1jb21wb25lbnRzLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcc2FtcGxlc1xcY29tcG9uZW50c1xcd29yZHByZXNzXFxibG9nc1xcYmxvZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zYW1wbGVzL2NvbXBvbmVudHMvd29yZHByZXNzL2Jsb2dzL2Jsb2dzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0NKO0FEQUk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDRU47QURBSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDRU47QURBUTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNFVjtBRENNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNDUjtBREFRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRVo7QURBUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNFVjtBREFRO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbXBsZXMvY29tcG9uZW50cy93b3JkcHJlc3MvYmxvZ3MvYmxvZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcclxuICAgIC5pbWFnZWRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXg6IDU7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGZsZXg6IDY7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZS1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXh0cmEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZG90IHtcclxuICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSIsIi52aWRlby1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xufVxuLnZpZGVvLWxpc3QgLmltYWdlZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogNTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLnZpZGVvLWxpc3QgLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZmxleDogNjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi52aWRlby1saXN0IC5kZXRhaWxzIC5hdmF0YXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNzVweDtcbn1cbi52aWRlby1saXN0IC5kZXRhaWxzIC50aXRsZS1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuLnZpZGVvLWxpc3QgLmRldGFpbHMgLnRpdGxlLWJsb2NrIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnZpZGVvLWxpc3QgLmRldGFpbHMgLnRpdGxlLWJsb2NrIC5leHRyYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnZpZGVvLWxpc3QgLmRldGFpbHMgLnRpdGxlLWJsb2NrIC5kb3Qge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDNweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgbWFyZ2luOiAwcHggNnB4O1xufSJdfQ== */"] });
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