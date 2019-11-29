(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yannbf-components-miscellaneous-testimonials-testimonials-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title> Testimonials </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div *ngFor=\"let testimonial of testimonials\">\r\n        <figure class=\"snip1574\">\r\n          <img [src]=\"testimonial.imageUrl\" alt=\"profile-sample2\" />\r\n          <figcaption>\r\n            <blockquote>\r\n              <p>{{testimonial.quote}}</p>\r\n            </blockquote>\r\n            <h3>{{testimonial.name}}</h3>\r\n            <h5>{{testimonial.position}}</h5>\r\n          </figcaption>\r\n        </figure>\r\n      </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TestimonialsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsPageModule", function() { return TestimonialsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _testimonials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonials.page */ "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.ts");







var routes = [
    {
        path: '',
        component: _testimonials_page__WEBPACK_IMPORTED_MODULE_6__["TestimonialsPage"]
    }
];
var TestimonialsPageModule = /** @class */ (function () {
    function TestimonialsPageModule() {
    }
    TestimonialsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_testimonials_page__WEBPACK_IMPORTED_MODULE_6__["TestimonialsPage"]]
        })
    ], TestimonialsPageModule);
    return TestimonialsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Lato);\n@import url(https://fonts.googleapis.com/css?family=Oswald);\n@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);\n@charset \"UTF-8\";\n.snip1574 {\n  font-family: \"Lato\", Arial, sans-serif;\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  margin: 8px;\n  min-width: 250px;\n  max-width: 310px;\n  width: 100%;\n  background-color: #000000;\n  color: #ffffff;\n  text-align: center;\n  font-size: 16px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n}\n.snip1574 * {\n  box-sizing: border-box;\n}\n.snip1574 img {\n  max-width: 100%;\n  vertical-align: top;\n  opacity: 0.7;\n}\n.snip1574 figcaption {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 80px 10% 15%;\n}\n.snip1574 figcaption:before {\n  font-family: \"FontAwesome\";\n  content: \"“\";\n  position: absolute;\n  font-size: 170px;\n  opacity: 0.35;\n  font-style: normal;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  top: 0px;\n  left: 50%;\n}\n.snip1574 blockquote {\n  padding: 0;\n  margin: 0;\n  font-style: italic;\n  font-size: 1.2em;\n}\n.snip1574 h3 {\n  font-family: \"Oswald\";\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 24px;\n  margin: 3px 0;\n}\n.snip1574 h5 {\n  font-weight: 400;\n  margin: 0;\n  text-transform: uppercase;\n  color: #bbb;\n  letter-spacing: 1px;\n}\n/* Demo purposes only */\nion-content {\n  background-color: #212121 !important;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy90ZXN0aW1vbmlhbHMvQzpcXFVzZXJzXFxzYWJhZGlcXERvY3VtZW50c1xcUHJvamV0b3NcXF9pb25pY1xcaW9uaWM0LWNvbXBvbmVudHMvc3JjXFxhcHBcXHBhZ2VzXFx5YW5uYmZcXGNvbXBvbmVudHNcXG1pc2NlbGxhbmVvdXNcXHRlc3RpbW9uaWFsc1xcdGVzdGltb25pYWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMveWFubmJmL2NvbXBvbmVudHMvbWlzY2VsbGFuZW91cy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQVEseURBQUE7QUFDQSwyREFBQTtBQUNBLHdGQUFBO0FDRlIsZ0JBQWdCO0FER2hCO0VBQ0Usc0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtBQ0VGO0FEQ0E7RUFFRSxzQkFBQTtBQ0VGO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRUY7QURDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0FDRUY7QURDQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNFRjtBRENBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7QURDQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNFRjtBRENBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBLHVCQUFBO0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5uYmYvY29tcG9uZW50cy9taXNjZWxsYW5lb3VzL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8pO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkKTtcclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC40LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzKTtcclxuLnNuaXAxNTc0IHtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDhweDtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1heC13aWR0aDogMzEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLnNuaXAxNTc0ICoge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc25pcDE1NzQgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5zbmlwMTU3NCBmaWdjYXB0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDgwcHggMTAlIDE1JTtcclxufVxyXG5cclxuLnNuaXAxNTc0IGZpZ2NhcHRpb246YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDFDXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMTcwcHg7XHJcbiAgb3BhY2l0eTogMC4zNTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnNuaXAxNTc0IGJsb2NrcXVvdGUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4uc25pcDE1NzQgaDMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiAzcHggMDtcclxufVxyXG5cclxuLnNuaXAxNTc0IGg1IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjYmJiO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi8qIERlbW8gcHVycG9zZXMgb25seSAqL1xyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjEgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8pO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9zd2FsZCk7XG5AaW1wb3J0IHVybChodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjQuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MpO1xuLnNuaXAxNTc0IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogOHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDMxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5zbmlwMTU3NCAqIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc25pcDE1NzQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5zbmlwMTU3NCBmaWdjYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDgwcHggMTAlIDE1JTtcbn1cblxuLnNuaXAxNTc0IGZpZ2NhcHRpb246YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCLigJxcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDE3MHB4O1xuICBvcGFjaXR5OiAwLjM1O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA1MCU7XG59XG5cbi5zbmlwMTU3NCBibG9ja3F1b3RlIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5zbmlwMTU3NCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDNweCAwO1xufVxuXG4uc25pcDE1NzQgaDUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjYmJiO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4vKiBEZW1vIHB1cnBvc2VzIG9ubHkgKi9cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: TestimonialsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsPage", function() { return TestimonialsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestimonialsPage = /** @class */ (function () {
    function TestimonialsPage() {
        this.testimonials = [
            {
                imageUrl: 'assets/yannbf/img/misc/testimonial-1.jpg',
                quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
                name: 'Sue Shei',
                position: 'Founder'
            },
            {
                imageUrl: 'assets/yannbf/img/misc/testimonial-2.jpg',
                quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
                name: 'Will Barrow',
                position: 'Web Designer'
            },
            {
                imageUrl: 'assets/yannbf/img/misc/testimonial-3.jpg',
                quote: 'The only skills I have the patience to learn are those that have no real application in life.',
                name: 'Indigo Violet',
                position: 'Public Relations'
            },
            {
                imageUrl: 'assets/yannbf/img/misc/testimonial-1.jpg',
                quote: 'Which is worse, that everyone has his price, or that the price is always so low.',
                name: 'Sue Shei',
                position: 'Founder'
            },
            {
                imageUrl: 'assets/yannbf/img/misc/testimonial-2.jpg',
                quote: 'I\'m killing time while I wait for life to shower me with meaning and happiness.',
                name: 'Will Barrow',
                position: 'Web Designer'
            },
            {
                imageUrl: 'assets/yannbf/img/misc/testimonial-3.jpg',
                quote: 'The only skills I have the patience to learn are those that have no real application in life.',
                name: 'Indigo Violet',
                position: 'Public Relations'
            },
        ];
    }
    TestimonialsPage.prototype.ngOnInit = function () {
    };
    TestimonialsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! raw-loader!./testimonials.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.html"),
            styles: [__webpack_require__(/*! ./testimonials.page.scss */ "./src/app/pages/yannbf/components/miscellaneous/testimonials/testimonials.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestimonialsPage);
    return TestimonialsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-yannbf-components-miscellaneous-testimonials-testimonials-module-es5.js.map