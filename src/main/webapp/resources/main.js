(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'category/:name', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<header>\r\n  <app-navbar></app-navbar>\r\n</header>\r\n\r\n<main class=\"pt-05\">\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _categories_searchfrm_searchfrm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categories/searchfrm/searchfrm.component */ "./src/app/categories/searchfrm/searchfrm.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _gglplcs_gglplcs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gglplcs/gglplcs.component */ "./src/app/gglplcs/gglplcs.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _infinite_scroller_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./infinite-scroller.directive */ "./src/app/infinite-scroller.directive.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
                _categories_searchfrm_searchfrm_component__WEBPACK_IMPORTED_MODULE_9__["SearchfrmComponent"],
                _gglplcs_gglplcs_component__WEBPACK_IMPORTED_MODULE_11__["GglplcsComponent"],
                _infinite_scroller_directive__WEBPACK_IMPORTED_MODULE_16__["InfiniteScrollerDirective"]
            ],
            imports: [
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    //apiKey: "AIzaSyDviOSCqGI5VGN8kP4ltqtxt930uMh5vKg",
                    libraries: ["places"]
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-sidenav #start>\r\n    <mat-nav-list>\r\n\r\n      <a mat-list-item routerLink=\"/\">\r\n        <mat-icon>library_books</mat-icon>\r\n        <span>Courses</span>\r\n      </a>\r\n\r\n      <a mat-list-item routerLink=\"about\">\r\n        <mat-icon>question_answer</mat-icon>\r\n        <span>About</span>\r\n      </a>\r\n      <a mat-list-item>\r\n        <mat-icon>person_add</mat-icon>\r\n        <span>Register</span>\r\n      </a>\r\n\r\n      <a mat-list-item>\r\n        <mat-icon>account_circle</mat-icon>\r\n        <span>Login</span>\r\n      </a>\r\n\r\n    </mat-nav-list>\r\n\r\n  </mat-sidenav>\r\n\r\n  <mat-toolbar color=\"primary\">\r\n    <button mat-icon-button (click)=\"start.open('mouse')\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n  </mat-toolbar>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <app-searchfrm (searchDone)=\"updateGrid($event)\" [s_category]=\"category\"></app-searchfrm>\r\n      sunt in categoria: {{ category }}\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n        <mat-grid-list appInfiniteScroller\r\n                       scrollPercent=\"70\"\r\n                       immediateCallback=\"true\"\r\n                       [scrollCallback]=\"scrollCallback\" cols=\"4\" rowHeight=\"1:1\">\r\n          <mat-grid-tile\r\n                  *ngFor=\"let image of datasource\"\r\n                  [colspan]=1\r\n                  [rowspan]=1>\r\n            <img src=\"{{image.phoneNumber}}\" class=\"tn\"\r\n                 width=\"200\" height=\"200\"\r\n                 (click)=setSelectedImage(image)>\r\n            <div class=\"caption\">\r\n              <p><strong>{{image.name}}</strong></p>\r\n              <p>{{image.email}}</p>\r\n            </div>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      <p>Pagina de categorie vine aici.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/categories/categories.component.scss":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tn {\n  margin: 2px 0px;\n  box-shadow: #999 1px 1px 3px 1px;\n  cursor: pointer;\n  bottom: 0px; }\n\n.image {\n  position: relative; }\n\n.caption {\n  position: absolute;\n  height: 50px;\n  width: 200px;\n  bottom: 0px;\n  opacity: 0.9;\n  background-color: black;\n  color: white;\n  padding: 5px;\n  font-family: verdana;\n  font-size: 12px; }\n\n.mat-mrg-top {\n  margin-top: 5% !important; }\n\np {\n  -webkit-margin-before: 5px !important;\n  -webkit-margin-after: 5px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9DOlxcd29ya1xccGVyc29uYWxcXHByb2plY3QxXFxmcm9udGVuZC9zcmNcXGFwcFxcY2F0ZWdvcmllc1xcY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFjO0VBQ2QsaUNBQStCO0VBQy9CLGdCQUFlO0VBQ2YsWUFBVyxFQUNaOztBQUNEO0VBQ0UsbUJBQWtCLEVBQUM7O0FBQ3JCO0VBQ0UsbUJBQWlCO0VBQ2pCLGFBQVc7RUFDWCxhQUFXO0VBQ1gsWUFBVztFQUNYLGFBQVc7RUFDWCx3QkFBc0I7RUFDdEIsYUFBVztFQUNYLGFBQVc7RUFDWCxxQkFBbUI7RUFDbkIsZ0JBQWMsRUFDZjs7QUFDRDtFQUNFLDBCQUF3QixFQUN6Qjs7QUFDRDtFQUNFLHNDQUFxQztFQUNyQyxxQ0FBb0MsRUFDckMiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG57XHJcbiAgbWFyZ2luOjJweCAwcHg7XHJcbiAgYm94LXNoYWRvdzojOTk5IDFweCAxcHggM3B4IDFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuLmltYWdle1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlIH1cclxuLmNhcHRpb257XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjUwcHg7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgb3BhY2l0eTowLjk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBwYWRkaW5nOjVweDtcclxuICBmb250LWZhbWlseTp2ZXJkYW5hO1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG59XHJcbi5tYXQtbXJnLXRvcHtcclxuICBtYXJnaW4tdG9wOiA1JSFpbXBvcnRhbnQ7XHJcbn1cclxucCB7XHJcbiAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiA1cHggIWltcG9ydGFudDtcclxuICAtd2Via2l0LW1hcmdpbi1hZnRlcjogNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(route) {
        this.route = route;
        this.datasource = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.category = this.route.snapshot.params['name'];
        this.route.params.subscribe(function (params) {
            _this.category = params['name'];
        });
    };
    CategoriesComponent.prototype.updateGrid = function (srm) {
        if (srm != null) {
            this.supplierRespModel = srm;
            this.datasource = this.supplierRespModel.results;
        }
        else {
            //are eroare
        }
    };
    CategoriesComponent.prototype.setSelectedImage = function (image) {
        this.selectedImage = image;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoriesComponent.prototype, "category", void 0);
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/searchfrm/searchfrm.component.html":
/*!***************************************************************!*\
  !*** ./src/app/categories/searchfrm/searchfrm.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n\r\n    <div class=\"card-body\">\r\n        <form (ngSubmit)=\"onSubmit()\" #searchForm=\"ngForm\">\r\n            <div class=\"md-form form-sm\">\r\n                <mat-form-field style=\"width:100%\">\r\n                    <input matInput name=\"name\" [(ngModel)]=\"sdata.name\" placeholder=\"Denumire\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"md-form form-sm\">\r\n                <i class=\"fa fa-envelope prefix\"></i>\r\n                <app-gglplcs name=\"place\" (updatedSearch)=\"updatePlace($event)\" style=\"width:100%\"></app-gglplcs>\r\n            </div>\r\n            <div class=\"md-form form-sm\">\r\n                <i class=\"fa fa-envelope prefix\"></i>\r\n                <mat-form-field style=\"width:100%\">\r\n                    <input name=\"minPrice\" matInput [(ngModel)]=\"sdata.minPrice\" placeholder=\"Pret minim meniu\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"md-form form-sm\">\r\n                <h6 class=\"m-b-0\">Numar minim invitati</h6>\r\n                <mat-slider name=\"minInv\" thumbLabel [(ngModel)]=\"sdata.minInv\" style=\"width:100%\"></mat-slider>\r\n            </div>\r\n            <div class=\"md-form form-sm\">\r\n                <h6 class=\"m-b-0\">Numar maxim invitati</h6>\r\n                <mat-slider name=\"maxInv\" thumbLabel [(ngModel)]=\"sdata.maxInv\" style=\"width:100%\"></mat-slider>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"form-check col-sm-6\">\r\n                    <mat-checkbox class=\"mr-1\" name=\"outdoor\" [(ngModel)]=\"sdata.outdoor\" ></mat-checkbox>\r\n                    <label class=\"form-check-label\">Outdoor</label>\r\n                </div>\r\n                <div class=\"form-check col-sm-6\">\r\n                    <mat-checkbox class=\"mr-1\" name=\"accommodation\" [(ngModel)]=\"sdata.accommodation\"></mat-checkbox>\r\n                    <label class=\"form-check-label\">Cazare</label>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"form-check col-sm-6\">\r\n                    <mat-checkbox class=\"mr-1\" name=\"fireworks\" [(ngModel)]=\"sdata.fireworks\"></mat-checkbox>\r\n                    <label class=\"form-check-label\">Artificii</label>\r\n                </div>\r\n                <div class=\"form-check col-sm-6\">\r\n                    <mat-checkbox class=\"mr-1\" name=\"events\" [(ngModel)]=\"sdata.events\"></mat-checkbox>\r\n                    <label class=\"form-check-label\">Divertisment</label>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"form-check col-sm-6\">\r\n                    <mat-checkbox class=\"mr-1\" name=\"preparations\" [(ngModel)]=\"sdata.preparations\"></mat-checkbox>\r\n                    <label class=\"form-check-label\">Aranjare salon</label>\r\n                </div>\r\n                <div class=\"form-check col-sm-6\">\r\n                    <mat-checkbox class=\"mr-1\" name=\"parking\" [(ngModel)]=\"sdata.parking\"></mat-checkbox>\r\n                    <label class=\"form-check-label\">Parcare</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center py-4 mt-3\">\r\n                <button class=\"btn btn-cyan\" type=\"submit\">Cauta</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/categories/searchfrm/searchfrm.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/categories/searchfrm/searchfrm.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvc2VhcmNoZnJtL3NlYXJjaGZybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/categories/searchfrm/searchfrm.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/categories/searchfrm/searchfrm.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchfrmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchfrmComponent", function() { return SearchfrmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _searchfrm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchfrm.service */ "./src/app/categories/searchfrm/searchfrm.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchfrmComponent = /** @class */ (function () {
    function SearchfrmComponent(searchfrmService) {
        this.searchfrmService = searchfrmService;
        this.searchDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sdata = {
            type: this.s_category,
            name: null,
            lifecycle: null,
            place: null,
            phoneNumber: null,
            email: null,
            minPrice: null,
            minInv: null,
            maxInv: null,
            outdoor: null,
            accommodation: null,
            fireworks: null,
            events: null,
            preparations: null,
            parking: null,
            password: null,
        };
    }
    SearchfrmComponent.prototype.updatePlace = function (place) {
        if (place != null) {
            this.sdata.place = place;
        }
        else {
            //are eroare
        }
    };
    SearchfrmComponent.prototype.onSubmit = function () {
        var _this = this;
        this.searchfrmService.getSearchResults(this.sdata)
            .subscribe(function (data) {
            _this.sdataArr = data.results;
            _this.sdataArrCount = data.count;
            _this.searchDone.emit(data);
        }, function (error) {
            console.log('am eroarea: ', error);
            _this.sdataArr = [];
            _this.searchDone.emit(null);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchfrmComponent.prototype, "searchDone", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchfrmComponent.prototype, "s_category", void 0);
    SearchfrmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchfrm',
            template: __webpack_require__(/*! ./searchfrm.component.html */ "./src/app/categories/searchfrm/searchfrm.component.html"),
            styles: [__webpack_require__(/*! ./searchfrm.component.scss */ "./src/app/categories/searchfrm/searchfrm.component.scss")],
            providers: [_searchfrm_service__WEBPACK_IMPORTED_MODULE_1__["SearchfrmService"]]
        }),
        __metadata("design:paramtypes", [_searchfrm_service__WEBPACK_IMPORTED_MODULE_1__["SearchfrmService"]])
    ], SearchfrmComponent);
    return SearchfrmComponent;
}());



/***/ }),

/***/ "./src/app/categories/searchfrm/searchfrm.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/categories/searchfrm/searchfrm.service.ts ***!
  \***********************************************************/
/*! exports provided: SearchfrmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchfrmService", function() { return SearchfrmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchfrmService = /** @class */ (function () {
    function SearchfrmService(http) {
        this.http = http;
        //private api = 'http://localhost:8080/api/suppliers/search'; - real url
        this.api = 'assets/data/datasource.json'; //- mock url
    }
    SearchfrmService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    SearchfrmService.prototype.getSearchResults = function (sdata) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // return this.http.post<SupplierRespModel>(this.api, sdata, httpOptions) //REAL API CALL
        //     .pipe(map(data =>{
        //         if (data.rc !== 0) {
        //             throw(data.message);
        //         } else {
        //             return <SupplierRespModel> data;
        //         }
        //     }),
        //     catchError(this.handleError)
        //     );
        return this.http.get(this.api) //MOCK API CALL
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.rc !== 0) {
                throw (data.message);
            }
            else {
                return data;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SearchfrmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchfrmService);
    return SearchfrmService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\" style=\"text-align: center\">\r\n<p>Este ceva ce nu functioneaza? Daca ai intimpinat vreo eroare,\r\n  <a href=\"/report/\">te rugam sa ne informezi aici.</a></p>\r\n<p><a href=\"/termeni/\">Conditii generale pentru utilizator</a> &nbsp\r\n  <a href=\"/contact/\">Contactati-ne!</a> &nbsp\r\n  <a href=\"/politica_confidentialitate/\">politica de confidentialitate</a></p>\r\n</div>\r\n<div style=\"text-align: center\">\r\n  <div class=\"container-fluid\"> 2018 Copyright: Site.ro toate drepturile rezervate Site SRL Ploiesti Str. Domnisori,\r\n    Bl 63, Sc. A, Ap. 8\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gglplcs/gglplcs.component.html":
/*!************************************************!*\
  !*** ./src/app/gglplcs/gglplcs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"form-group\">\r\n    <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\r\n  </div>\r\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\r\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n  </agm-map>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gglplcs/gglplcs.component.scss":
/*!************************************************!*\
  !*** ./src/app/gglplcs/gglplcs.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2dscGxjcy9DOlxcd29ya1xccGVyc29uYWxcXHByb2plY3QxXFxmcm9udGVuZC9zcmNcXGFwcFxcZ2dscGxjc1xcZ2dscGxjcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2dnbHBsY3MvZ2dscGxjcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/gglplcs/gglplcs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gglplcs/gglplcs.component.ts ***!
  \**********************************************/
/*! exports provided: GglplcsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GglplcsComponent", function() { return GglplcsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="@types/googlemaps" />



var GglplcsComponent = /** @class */ (function () {
    function GglplcsComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.updatedSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GglplcsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                    _this.formatted_address = place.formatted_address;
                    _this.updatedSearch.emit(_this.formatted_address);
                });
            });
        });
    };
    GglplcsComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GglplcsComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GglplcsComponent.prototype, "updatedSearch", void 0);
    GglplcsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gglplcs',
            template: __webpack_require__(/*! ./gglplcs.component.html */ "./src/app/gglplcs/gglplcs.component.html"),
            styles: [__webpack_require__(/*! ./gglplcs.component.scss */ "./src/app/gglplcs/gglplcs.component.scss")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], GglplcsComponent);
    return GglplcsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div fxLayoutAlign=\"center center\">\r\n      <img src=\"../../assets/img/index_1.jpg\" width=\"95%\" class=\"img-fluid\">\r\n      <div class=\"centered\">\r\n          <h1>Pagina de socializare</h1>\r\n          <p class=\"lead font-weight-normal\">Aici poti interactiona cu cine vrei tu</p>\r\n      </div>\r\n  </div>\r\n  <div style=\"text-align: center\">\r\n      <h1>Si asa cum spuneam acici vine un bla bla</h1>\r\n      <h1>care se contimnua aisdfsa</h1>\r\n  </div>\r\n  <div style=\"text-align: center\">\r\n      <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"32px\" fxLayoutAlign=\"center center\">\r\n            <div fxFlex=\"0 1 calc(33.3% - 32px)\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\" fxFlex.lt-sm=\"100%\">\r\n                <img  src=\"../../assets/img/index_1.jpg\" alt=\"Generic placeholder image\" width=\"95%\">\r\n                <h2>Heading</h2>\r\n            </div>\r\n              <div fxFlex=\"0 1 calc(33.3% - 32px)\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\" fxFlex.lt-sm=\"100%\">\r\n                <img  src=\"../../assets/img/index_1.jpg\" alt=\"Generic placeholder image\" width=\"95%\">\r\n                <h2>Heading</h2>\r\n            </div>\r\n              <div fxFlex=\"0 1 calc(33.3% - 32px)\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\" fxFlex.lt-sm=\"100%\">\r\n                <img  src=\"../../assets/img/index_1.jpg\" alt=\"Generic placeholder image\" width=\"95%\">\r\n                <h2>Heading</h2>\r\n            </div>\r\n      </div>\r\n      <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"32px\" fxLayoutAlign=\"center center\">\r\n            <div fxFlex=\"0 1 calc(33.3% - 32px)\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\" fxFlex.lt-sm=\"100%\">\r\n              <img  src=\"../../assets/img/index_1.jpg\" alt=\"Generic placeholder image\" width=\"95%\">\r\n              <h2>Heading</h2>\r\n            </div>\r\n            <div fxFlex=\"0 1 calc(33.3% - 32px)\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\" fxFlex.lt-sm=\"100%\">\r\n              <img  src=\"../../assets/img/index_1.jpg\" alt=\"Generic placeholder image\" width=\"95%\">\r\n              <h2>Heading</h2>\r\n            </div>\r\n            <div fxFlex=\"0 1 calc(33.3% - 32px)\" fxFlex.lt-md=\"0 1 calc(50% - 32px)\" fxFlex.lt-sm=\"100%\">\r\n              <img  src=\"../../assets/img/index_1.jpg\" alt=\"Generic placeholder image\" width=\"95%\">\r\n              <h2>Heading</h2>\r\n            </div>\r\n      </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/infinite-scroller.directive.ts":
/*!************************************************!*\
  !*** ./src/app/infinite-scroller.directive.ts ***!
  \************************************************/
/*! exports provided: InfiniteScrollerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollerDirective", function() { return InfiniteScrollerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DEFAULT_SCROLL_POSITION = {
    sH: 0,
    sT: 0,
    cH: 0
};
var InfiniteScrollerDirective = /** @class */ (function () {
    function InfiniteScrollerDirective(elm) {
        var _this = this;
        this.elm = elm;
        this.scrollPercent = 70;
        this.isUserScrollingDown = function (positions) {
            return positions[0].sT < positions[1].sT;
        };
        this.isScrollExpectedPercent = function (position) {
            return ((position.sT + position.cH) / position.sH) > (_this.scrollPercent / 100);
        };
    }
    InfiniteScrollerDirective.prototype.ngAfterViewInit = function () {
        this.registerScrollEvent();
        this.streamScrollEvents();
        this.requestCallbackOnScroll();
    };
    InfiniteScrollerDirective.prototype.registerScrollEvent = function () {
        this.scrollEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elm.nativeElement, 'scroll');
    };
    InfiniteScrollerDirective.prototype.streamScrollEvents = function () {
        var _this = this;
        this.userScrolledDown$ = this.scrollEvent$
            .map(function (e) { return ({
            sH: e.target.scrollHeight,
            sT: e.target.scrollTop,
            cH: e.target.clientHeight
        }); })
            .pairwise()
            .filter(function (positions) { return _this.isUserScrollingDown(positions) && _this.isScrollExpectedPercent(positions[1]); });
    };
    InfiniteScrollerDirective.prototype.requestCallbackOnScroll = function () {
        var _this = this;
        this.requestOnScroll$ = this.userScrolledDown$;
        if (this.immediateCallback) {
            this.requestOnScroll$ = this.requestOnScroll$
                .startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]);
        }
        this.requestOnScroll$
            .exhaustMap(function () { return _this.scrollCallback(); })
            .subscribe(function () { });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfiniteScrollerDirective.prototype, "scrollCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfiniteScrollerDirective.prototype, "immediateCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfiniteScrollerDirective.prototype, "scrollPercent", void 0);
    InfiniteScrollerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appInfiniteScroller]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InfiniteScrollerDirective);
    return InfiniteScrollerDirective;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\" xmlns=\"http://www.w3.org/1999/html\">\r\n    <mat-toolbar-row>\r\n        <h1 class=\"mr-5\">\r\n            <a routerLink=\"/home\">\r\n                <img src=\"92817_champagne.ico\" width=\"30\" height=\"30\" alt=\"logo\">\r\n            </a>\r\n        </h1>\r\n        <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n            <mat-nav-list fxLayout=\"row\">\r\n                <mat-list-item *ngFor=\"let item of navItems\" class=\"mr-2\">\r\n                    <a mat-button routerLink=\"/category/{{ item.name }}\"> {{ item.name }}</a>\r\n                </mat-list-item>\r\n            </mat-nav-list>\r\n        </div>\r\n        <div fxShow=\"true\" fxHide.gt-sm=\"true\">\r\n            <a mat-icon-button [matMenuTriggerFor]=\"appMenu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n            </a>\r\n            <mat-menu #appMenu=\"matMenu\" >\r\n                    <a mat-menu-item mat-button *ngFor=\"let item of navItems\" routerLink=\"/category/{{ item.name }}\">{{ item.name }}</a>\r\n            </mat-menu>\r\n        </div>\r\n        <span class=\"fill-space\"></span>\r\n        <div fxLayoutAlign=\"end\">\r\n            <a fxLayoutAlign=\"center center\" routerLink=\"/register\" class=\"mr-05 nav-link\">\r\n                <mat-icon>account_circle</mat-icon>\r\n                <span>Login</span>\r\n            </a>\r\n            <button mat-raised-button color=\"primary\" routerLink=\"/login\" fxLayoutAlign=\"center center\">\r\n                <span>Register</span>\r\n            </button>\r\n        </div>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  font-family: \"Pacifico\", sans-serif;\n  word-spacing: 3px;\n  letter-spacing: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFx3b3JrXFxwZXJzb25hbFxccHJvamVjdDFcXGZyb250ZW5kL3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSxvQ0FBbUM7RUFDbkMsa0JBQWlCO0VBQ2pCLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubmF2YmFyLWJyYW5kIHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNvXCIsIHNhbnMtc2VyaWY7XHJcbi8vICAgICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuLy8gICAgIHdvcmQtc3BhY2luZzogN3B4O1xyXG5cclxuLy8gfVxyXG5cclxuXHJcbi8vIC5kcm9wZG93bi10by1sZWZ0IHtcclxuLy8gICAgIGxlZnQ6IC01MCU7XHJcbi8vIH1cclxuXHJcbi8vIC5vcGFjIHtcclxuLy8gICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTApO1xyXG4vLyB9XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBhY2lmaWNvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.service */ "./src/app/navbar/navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(navbarService) {
        this.navbarService = navbarService;
        this.flag = false;
        this.navItems = [];
        this.navItemsExtra = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.navItems = this.navbarService.getNavItems();
        this.navbarService.getNavItems()
            .subscribe(function (data) {
            data.map(function (val, index) {
                _this.navItems.push({ name: val.name, priority: val.priority });
            });
        }, function (error) {
            console.log('am eroarea: ', error);
            _this.navItems = [];
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")],
            providers: [_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]]
        }),
        __metadata("design:paramtypes", [_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.service.ts":
/*!******************************************!*\
  !*** ./src/app/navbar/navbar.service.ts ***!
  \******************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//.pipe(map(...))
var NavbarService = /** @class */ (function () {
    function NavbarService(http) {
        this.http = http;
        //private api = 'http://localhost:8080/api/getNavItems';
        this.api = 'assets/data/menu.json';
    }
    NavbarService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    // in getNavItems trebuie sa returneze maxim 4 elemente in functie de priority
    // cumva trebuie sa duc celelalte elemente intr-o alta componenta (copilul lui  nav-item)
    NavbarService.prototype.getNavItems = function () {
        return this.http.get(this.api)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data.rc !== 0) {
                throw (data.message);
            }
            else {
                return data.results;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    NavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\personal\project1\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map