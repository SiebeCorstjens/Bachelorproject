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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-list/person-list.component */ "./src/app/person-list/person-list.component.ts");
/* harmony import */ var _registration_list_registration_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-list/registration-list.component */ "./src/app/registration-list/registration-list.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");






var routes = [
    { path: '', component: _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_3__["PersonListComponent"] },
    { path: 'registratie', component: _registration_list_registration_list_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationListComponent"] },
    { path: 'notificaties', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"innerWidth <= 1024\">\r\n    <app-sidebar *ngIf=\"isAuthenticated\"></app-sidebar>\r\n    <app-login *ngIf=\"!isAuthenticated\"></app-login>\r\n\r\n    <notifier-container [routerLink]=\"['notificaties']\"></notifier-container>\r\n\r\n    <ng-template #registrationModal let-modal>\r\n        <div class=\"modal-header bg-blue text-light\">\r\n            <span class=\"modal-title h5 \" id=\"modal-basic-title\">Registratie {{ registrationStatus }}.</span>\r\n            <button type=\"button\" class=\"close\" (click)=\"modal.dismiss()\">\r\n                <span class=\"text-light\" [innerHTML]=\"'x' | feather:24\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button class=\"btn bg-lightgreen text-light\" [routerLink]=\"['registratie']\"\r\n                (click)=\"modal.dismiss(); registrationStatus = null\">\r\n                <span>Sluit</span>\r\n            </button>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n<app-resolution-error *ngIf=\"innerWidth > 1024\"></app-resolution-error>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/core/auth.service */ "./src/app/services/core/auth.service.ts");
/* harmony import */ var _services_others_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/others/error.service */ "./src/app/services/others/error.service.ts");
/* harmony import */ var _services_others_hub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/others/hub.service */ "./src/app/services/others/hub.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_others_registration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/others/registration.service */ "./src/app/services/others/registration.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(authService, errorService, modalService, registrationService, hubService) {
        this.authService = authService;
        this.errorService = errorService;
        this.modalService = modalService;
        this.registrationService = registrationService;
        this.hubService = hubService;
    }
    AppComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.isAuthenticated) {
                    if (window.location.href.indexOf('?postLogout=true') > 0) {
                        this.resetWindow();
                    }
                }
                if (window.location.href.indexOf('?error=true') > 0) {
                    this.errorService.authErrorSource.next('Aanmelden mislukt.');
                    this.resetWindow();
                }
                this.authStatusSubscription = this.authService.authStatus$.subscribe(function (status) {
                    _this.isAuthenticated = status;
                    if (status) {
                        _this.hubService.startConnection();
                        _this.hubService.addTransferChartDataListener();
                    }
                });
                this.registrationStatusSubscription = this.registrationService.registrationStatus$.subscribe(function (status) {
                    if (status) {
                        _this.registrationStatus = status;
                        _this.openRegistrationModal(_this.registrationModal);
                    }
                });
                this.innerWidth = window.innerWidth;
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.signout = function () {
        this.authService.signout();
    };
    AppComponent.prototype.resetWindow = function () {
        window.history.replaceState({}, window.document.title, window.location.origin);
    };
    AppComponent.prototype.openRegistrationModal = function (modal) {
        this.modalService.open(modal);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.authStatusSubscription.unsubscribe();
        this.registrationStatusSubscription.unsubscribe();
    };
    AppComponent.prototype.onResize = function () {
        this.innerWidth = window.innerWidth;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registrationModal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "registrationModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_others_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _services_others_registration_service__WEBPACK_IMPORTED_MODULE_6__["RegistrationService"],
            _services_others_hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_core_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/core/auth.service */ "./src/app/services/core/auth.service.ts");
/* harmony import */ var _services_http_workshift_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/http/workshift.service */ "./src/app/services/http/workshift.service.ts");
/* harmony import */ var _services_http_person_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/http/person.service */ "./src/app/services/http/person.service.ts");
/* harmony import */ var _registration_list_registration_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./registration-list/registration-list.component */ "./src/app/registration-list/registration-list.component.ts");
/* harmony import */ var _registration_list_modal_registration_list_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./registration-list-modal/registration-list-modal.component */ "./src/app/registration-list-modal/registration-list-modal.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _pipes_feather_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/feather.pipe */ "./src/app/pipes/feather.pipe.ts");
/* harmony import */ var _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./person-list/person-list.component */ "./src/app/person-list/person-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_http_employer_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/http/employer.service */ "./src/app/services/http/employer.service.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_core_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/core/auth.interceptor */ "./src/app/services/core/auth.interceptor.ts");
/* harmony import */ var _services_others_error_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/others/error.service */ "./src/app/services/others/error.service.ts");
/* harmony import */ var _services_others_filter_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/others/filter.service */ "./src/app/services/others/filter.service.ts");
/* harmony import */ var _services_others_registration_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/others/registration.service */ "./src/app/services/others/registration.service.ts");
/* harmony import */ var _services_others_hub_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/others/hub.service */ "./src/app/services/others/hub.service.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _resolution_error_resolution_error_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./resolution-error/resolution-error.component */ "./src/app/resolution-error/resolution-error.component.ts");
































var customNotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 2500,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _registration_list_registration_list_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationListComponent"],
                _registration_list_modal_registration_list_modal_component__WEBPACK_IMPORTED_MODULE_16__["RegistrationListModalComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["SidebarComponent"],
                _pipes_feather_pipe__WEBPACK_IMPORTED_MODULE_18__["FeatherIconsPipe"],
                _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_19__["PersonListComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_22__["FilterPipe"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_29__["NotificationsComponent"],
                _resolution_error_resolution_error_component__WEBPACK_IMPORTED_MODULE_30__["ResolutionErrorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierModule"].withConfig(customNotifierOptions),
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _services_core_auth_interceptor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
                    multi: true
                },
                _services_core_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_http_person_service__WEBPACK_IMPORTED_MODULE_14__["PersonService"],
                _services_http_workshift_service__WEBPACK_IMPORTED_MODULE_13__["WorkshiftService"],
                _services_http_employer_service__WEBPACK_IMPORTED_MODULE_21__["EmployerService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"],
                _services_others_filter_service__WEBPACK_IMPORTED_MODULE_26__["FilterService"],
                _services_others_error_service__WEBPACK_IMPORTED_MODULE_25__["ErrorService"],
                _services_others_registration_service__WEBPACK_IMPORTED_MODULE_27__["RegistrationService"],
                _services_others_hub_service__WEBPACK_IMPORTED_MODULE_28__["HubService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [
                _registration_list_modal_registration_list_modal_component__WEBPACK_IMPORTED_MODULE_16__["RegistrationListModalComponent"],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n      <div class=\"card card-signin my-5\">\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title text-center\">FestiTimer</h3>\r\n          <h6 class=\"text-center\">Werkgeversportaal</h6>\r\n          <hr>\r\n          <ngb-alert *ngIf=\"errorMessage\" [type]=\"'danger'\" (close)=\"errorMessage = undefined\">\r\n            {{ errorMessage }}\r\n          </ngb-alert>\r\n          <button class=\"btn btn-lg bg-blue btn-block mt-4 mb-2 text-light\" type=\"submit\" (click)=\"login()\">Identificeer</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/core/auth.service */ "./src/app/services/core/auth.service.ts");
/* harmony import */ var _services_others_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/others/error.service */ "./src/app/services/others/error.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, errorService) {
        this.authService = authService;
        this.errorService = errorService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.errorService.authError$.subscribe(function (error) {
            _this.errorMessage = error;
        });
    };
    LoginComponent.prototype.login = function () {
        this.authService.loginEmployer();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_others_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/enums/timeraction.enum.ts":
/*!**************************************************!*\
  !*** ./src/app/models/enums/timeraction.enum.ts ***!
  \**************************************************/
/*! exports provided: TimerAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerAction", function() { return TimerAction; });
var TimerAction;
(function (TimerAction) {
    TimerAction[TimerAction["Start"] = 0] = "Start";
    TimerAction[TimerAction["Pause"] = 1] = "Pause";
    TimerAction[TimerAction["Stop"] = 2] = "Stop";
})(TimerAction || (TimerAction = {}));


/***/ }),

/***/ "./src/app/models/enums/timerstate.enum.ts":
/*!*************************************************!*\
  !*** ./src/app/models/enums/timerstate.enum.ts ***!
  \*************************************************/
/*! exports provided: TimerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerState", function() { return TimerState; });
var TimerState;
(function (TimerState) {
    TimerState["NoState"] = "NoState";
    TimerState["StartedState"] = "StartedState";
    TimerState["PausedState"] = "PausedState";
    TimerState["StoppedState"] = "StoppedState";
})(TimerState || (TimerState = {}));


/***/ }),

/***/ "./src/app/models/person.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/person.model.ts ***!
  \****************************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/models/workshift.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/workshift.model.ts ***!
  \*******************************************/
/*! exports provided: Workshift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workshift", function() { return Workshift; });
var Workshift = /** @class */ (function () {
    function Workshift() {
    }
    return Workshift;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fixed-top bg-white\" style=\"margin-top: 60px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 border-bottom border-blue-2 p-2\">\r\n      <span class=\"h5 font-weight-bold\">Notificaties</span>\r\n      <div>Werknemers</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\" style=\"margin-top: 130px;\">\r\n    <div class=\"col-12 mt-4 text-center\" *ngIf=\"!notifications\" [hidden]=\"errorMessage\">\r\n      <div class=\"spinner-border\" role=\"status\"></div>\r\n    </div>\r\n    <div class=\"col-12 p-2\" *ngIf=\"errorMessage\">\r\n      <div class=\"p-2 rounded bg-lightgray\">\r\n        <span class=\"h6\">{{ errorMessage }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 p-2\" *ngFor=\"let notification of notifications\">\r\n      <div class=\"p-2 rounded bg-lightgray\">\r\n        <span class=\"font-weight-bold\">{{ notification.person.name }}</span>\r\n        <span class=\"float-right\">{{ notification.date | date:'dd/MM/yyyy HH:mm' }}</span>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-10\">\r\n            <span [innerHtml]=\"parseMessage(notification)\"></span>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <button class=\"btn btn-sm bg-blue text-white text-center float-right\"\r\n              (click)=\"deleteNotification(notification)\">\r\n              <span class=\"mr-2\" [innerHTML]=\"'trash-2' | feather:22\"></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_others_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/others/hub.service */ "./src/app/services/others/hub.service.ts");
/* harmony import */ var _services_http_employer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http/employer.service */ "./src/app/services/http/employer.service.ts");
/* harmony import */ var _services_http_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http/notification.service */ "./src/app/services/http/notification.service.ts");





var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(hubService, employerService, notificationService) {
        this.hubService = hubService;
        this.employerService = employerService;
        this.notificationService = notificationService;
        this.notifications = [];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employerService.getAllNotifications().subscribe(function (data) {
            _this.notifications = data;
        }, function (error) {
            _this.errorMessage = "Er is een fout opgetreden. Probeer het later opnieuw.";
        });
        this.notificationSubscription = this.hubService.notifications$.subscribe(function (notification) {
            if (notification) {
                _this.notifications.push(notification);
            }
        });
    };
    NotificationsComponent.prototype.deleteNotification = function (notification) {
        var _this = this;
        this.notificationService.deleteNotification(notification.id).subscribe(function (data) {
            var index = _this.notifications.indexOf(notification);
            _this.notifications.splice(index, 1);
        });
    };
    NotificationsComponent.prototype.parseMessage = function (notification) {
        var message;
        switch (notification.state) {
            case 'NotStarted':
                message = "Shift voor job " + notification.job.description.toLocaleLowerCase().italics() + " niet gestart.";
                break;
            case 'Paused':
                message = "Te lange pauze.";
                break;
        }
        return message;
    };
    NotificationsComponent.prototype.ngOnDestroy = function () {
        this.notificationSubscription.unsubscribe();
    };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/notifications/notifications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_others_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"], _services_http_employer_service__WEBPACK_IMPORTED_MODULE_3__["EmployerService"], _services_http_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/person-list/person-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/person-list/person-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi1saXN0L3BlcnNvbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/person-list/person-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/person-list/person-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fixed-top\" style=\"margin-top: 60px;\">\r\n  <div class=\"row border-bottom border-blue-2\">\r\n    <div class=\"col-12 p-2\">\r\n      <span class=\"h5 font-weight-bold\">Personen onder contract</span>\r\n      <div>{{ currentDate | date:'dd/MM/yyyy' }}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 p-2 mt-2 d-flex\">\r\n      <div class=\"flex-fill pr-2\">\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Zoek persoon\" [(ngModel)]=\"searchName\">\r\n      </div>\r\n      <div class=\"flex-fill pl-2\">\r\n        <button [disabled]=\"!persons\" class=\"btn bg-blue float-right text-light\" (click)=\"openFilterModal(filterModal)\">\r\n          Filteropties\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 mt-4 text-center\" *ngIf=\"!persons\" [hidden]=\"errorMessage\">\r\n      <div class=\"spinner-border\" role=\"status\"></div>\r\n    </div>\r\n    <div class=\"col-12 p-2\" *ngIf=\"errorMessage\">\r\n      <div class=\"p-2 rounded bg-lightgray\">\r\n        <span class=\"h6\">{{ errorMessage }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 p-2\" *ngIf=\"getSelectedFiltersCount() > 0 && filteredPersons.length === 0\">\r\n      <div class=\"p-2 rounded bg-lightgray\">\r\n        <span class=\"h6\">Geen opgestelde personen voor de gekozen filter.</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 p-2\" *ngFor=\"let person of filteredPersons | filter : searchName\">\r\n      <div class=\"p-2 rounded bg-lightgray\">\r\n        <span class=\"font-weight-bold\">{{ person.name }}</span>\r\n        <div class=\"row\" *ngFor=\"let workshift of person.workshifts\">\r\n          <div class=\"col-6\">\r\n            <span>{{ workshift.startDateTime | date:'HH:mm' }} - {{ workshift.stopDateTime | date:'HH:mm' }}</span>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <span>{{ workshift.job.location }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #filterModal let-modal>\r\n  <div class=\"modal-header bg-blue text-light\">\r\n    <span class=\"modal-title h5 \" id=\"modal-basic-title\">Selecteer filter(s)</span>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.dismiss()\">\r\n      <span class=\"text-light\" [innerHTML]=\"'x' | feather:24\"></span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"container\">\r\n      <div class=\"row text-center center-block\">\r\n        <div class=\"col-6\">\r\n          <button class=\"btn\" (click)=\"filters[0].selected = !filters[0].selected\">\r\n            <span class=\"h5\">Startuur</span>\r\n          </button>\r\n          <ngb-timepicker *ngIf=\"filters[0].selected\" [(ngModel)]=\"filters[0].value\"></ngb-timepicker>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button class=\"btn\" (click)=\"filters[1].selected = !filters[1].selected\">\r\n            <span class=\"h5\">Stopuur</span>\r\n          </button>\r\n          <ngb-timepicker *ngIf=\"filters[1].selected\" [(ngModel)]=\"filters[1].value\"></ngb-timepicker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn bg-lightgreen text-light\" (click)=\"applyFilter()\">\r\n      <span>{{ getSelectedFiltersCount() }} filter(s) toepassen</span>\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/person-list/person-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/person-list/person-list.component.ts ***!
  \******************************************************/
/*! exports provided: PersonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonListComponent", function() { return PersonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_employer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http/employer.service */ "./src/app/services/http/employer.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_others_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/others/filter.service */ "./src/app/services/others/filter.service.ts");





var PersonListComponent = /** @class */ (function () {
    function PersonListComponent(employerService, filterService, modalService) {
        this.employerService = employerService;
        this.filterService = filterService;
        this.modalService = modalService;
        this.currentDate = new Date();
        this.filters = [
            {
                name: 'startTime',
                doesApply: function (workshift) {
                    return workshift.startDateTime.getHours() == this.value.hour;
                },
                selected: false,
                value: { hour: 0, minute: 0 },
            },
            {
                name: 'stopTime',
                doesApply: function (workshift) {
                    return workshift.stopDateTime.getHours() == this.value.hour;
                },
                selected: false,
                value: { hour: 0, minute: 0 },
            }
        ];
    }
    PersonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employerService.getAllPersonsByDate().subscribe(function (data) {
            _this.persons = data;
            _this.filteredPersons = data;
            _this.isDataEmpty(data);
        }, function (error) {
            _this.errorMessage = "Er is een fout opgetreden. Probeer het later opnieuw.";
        });
    };
    PersonListComponent.prototype.isDataEmpty = function (data) {
        if (data.length === 0) {
            this.errorMessage = "Geen werkshifts voor het huidige moment.";
        }
    };
    PersonListComponent.prototype.openFilterModal = function (modal) {
        this.modalService.open(modal);
    };
    PersonListComponent.prototype.applyFilter = function () {
        this.filteredPersons = this.filterService.filterPersons(this.persons, this.filters);
        this.modalService.dismissAll();
    };
    PersonListComponent.prototype.getSelectedFiltersCount = function () {
        return this.filterService.selectedFiltersCount(this.filters);
    };
    PersonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person-list',
            template: __webpack_require__(/*! ./person-list.component.html */ "./src/app/person-list/person-list.component.html"),
            styles: [__webpack_require__(/*! ./person-list.component.css */ "./src/app/person-list/person-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_employer_service__WEBPACK_IMPORTED_MODULE_2__["EmployerService"],
            _services_others_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], PersonListComponent);
    return PersonListComponent;
}());



/***/ }),

/***/ "./src/app/pipes/feather.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/feather.pipe.ts ***!
  \***************************************/
/*! exports provided: FeatherIconsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatherIconsPipe", function() { return FeatherIconsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! feather-icons */ "./node_modules/feather-icons/dist/feather.js");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_3__);




var FeatherIconsPipe = /** @class */ (function () {
    function FeatherIconsPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    FeatherIconsPipe.prototype.transform = function (icon, size, color) {
        if (size === void 0) { size = 24; }
        if (color === void 0) { color = 'inherit'; }
        return this.sanitizer.bypassSecurityTrustHtml(feather_icons__WEBPACK_IMPORTED_MODULE_3__["icons"][icon].toSvg({
            width: size,
            height: size,
            color: color
        }));
    };
    FeatherIconsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({ name: 'feather' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], FeatherIconsPipe);
    return FeatherIconsPipe;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (persons, searchName) {
        if (!persons)
            return [];
        if (!searchName)
            return persons;
        searchName = searchName.toLowerCase();
        return persons.filter(function (person) {
            return person.name.toLocaleLowerCase().includes(searchName);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'filter' })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/registration-list-modal/registration-list-modal.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/registration-list-modal/registration-list-modal.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-collapse {\r\n    position: absolute; \r\n    top: 190px;\r\n    z-index: 4; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uLWxpc3QtbW9kYWwvcmVnaXN0cmF0aW9uLWxpc3QtbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uLWxpc3QtbW9kYWwvcmVnaXN0cmF0aW9uLWxpc3QtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItY29sbGFwc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogMTkwcHg7XHJcbiAgICB6LWluZGV4OiA0OyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/registration-list-modal/registration-list-modal.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/registration-list-modal/registration-list-modal.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-blue\">\r\n  <h5 class=\"modal-title text-light\">{{ _person.name }}</h5>\r\n  <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss()\">\r\n    <span class=\"text-light\" [innerHTML]=\"'x' | feather:24\"></span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row border-bottom pb-3\">\r\n    <div class=\"col-4 text-center\">\r\n      <button class=\"btn btn-info\" [class.bg-success]=\"selectedTimerAction === timerAction.Start\"\r\n        [disabled]=\"isStartButtonDisabled()\" (click)=\"selectAction(timerAction.Start)\">Start</button>\r\n    </div>\r\n    <div class=\"col-4 text-center\">\r\n      <button class=\"btn btn-info\" [class.bg-success]=\"selectedTimerAction === timerAction.Pause\"\r\n        [disabled]=\"isPauseButtonDisabled()\" (click)=\"selectAction(timerAction.Pause)\">Pause</button>\r\n    </div>\r\n    <div class=\"col-4 text-center\">\r\n      <button class=\"btn btn-info\" [class.bg-success]=\"selectedTimerAction === timerAction.Stop\"\r\n        [disabled]=\"isStopButtonDisabled()\" (click)=\"selectAction(timerAction.Stop)\">Stop</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row border-bottom p-3\">\r\n    <div class=\"col-12 text-center\">\r\n      <div *ngIf=\"workTime == undefined\" class=\"spinner-border\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n      <h5>{{ workTime | date:'HH:mm:ss':'GMT' }}</h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"row pt-3\" *ngIf=\"selectedTimerAction != undefined\">\r\n    <div class=\"col-12 text-center\">\r\n      <button class=\"btn btn-block btn-info\" (click)=\"identifyPerson()\">Identificeer</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/registration-list-modal/registration-list-modal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/registration-list-modal/registration-list-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: RegistrationListModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationListModalComponent", function() { return RegistrationListModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/core/auth.service */ "./src/app/services/core/auth.service.ts");
/* harmony import */ var _services_http_workshift_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http/workshift.service */ "./src/app/services/http/workshift.service.ts");
/* harmony import */ var _models_workshift_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/workshift.model */ "./src/app/models/workshift.model.ts");
/* harmony import */ var _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/enums/timerstate.enum */ "./src/app/models/enums/timerstate.enum.ts");
/* harmony import */ var _models_enums_timeraction_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/enums/timeraction.enum */ "./src/app/models/enums/timeraction.enum.ts");
/* harmony import */ var _models_person_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/person.model */ "./src/app/models/person.model.ts");









var RegistrationListModalComponent = /** @class */ (function () {
    function RegistrationListModalComponent(activeModal, authService, workshiftService) {
        this.activeModal = activeModal;
        this.authService = authService;
        this.workshiftService = workshiftService;
        this.timerAction = _models_enums_timeraction_enum__WEBPACK_IMPORTED_MODULE_7__["TimerAction"];
    }
    Object.defineProperty(RegistrationListModalComponent.prototype, "person", {
        set: function (person) {
            this._person = person;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationListModalComponent.prototype, "workshift", {
        set: function (workshift) {
            var _this = this;
            this._workshift = workshift;
            this.workshiftService.getWorkshiftRegistrationElapsedTime(workshift.id).subscribe(function (data) {
                if (_models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"][workshift.timerState] == _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"].StartedState) {
                    var startTime = Date.now();
                    setInterval(function () {
                        _this.workTime = Date.now() - startTime + data;
                    }, 10);
                }
                if (_models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"][workshift.timerState] == _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"].PausedState || _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"][workshift.timerState] == _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"].StoppedState) {
                    _this.workTime = data;
                    return;
                }
                _this.workTime = 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    RegistrationListModalComponent.prototype.selectAction = function (timerAction) {
        this.selectedTimerAction = timerAction;
    };
    RegistrationListModalComponent.prototype.identifyPerson = function () {
        localStorage.setItem('registrationValues', this.selectedTimerAction + ',' + this._workshift.id.toString());
        this.authService.loginPerson();
    };
    RegistrationListModalComponent.prototype.isStartButtonDisabled = function () {
        return _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"][this._workshift.timerState] == _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"].StartedState
            || _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"][this._workshift.timerState] == _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"].StoppedState;
    };
    RegistrationListModalComponent.prototype.isPauseButtonDisabled = function () {
        return _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"][this._workshift.timerState] === _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"].NoState
            || _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"][this._workshift.timerState] === _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"].PausedState
            || _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"][this._workshift.timerState] === _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"].StoppedState;
    };
    RegistrationListModalComponent.prototype.isStopButtonDisabled = function () {
        return _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"][this._workshift.timerState] === _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"].NoState
            || _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"][this._workshift.timerState] === _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_6__["TimerState"].StoppedState;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_person_model__WEBPACK_IMPORTED_MODULE_8__["Person"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_person_model__WEBPACK_IMPORTED_MODULE_8__["Person"]])
    ], RegistrationListModalComponent.prototype, "person", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_workshift_model__WEBPACK_IMPORTED_MODULE_5__["Workshift"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_models_workshift_model__WEBPACK_IMPORTED_MODULE_5__["Workshift"]])
    ], RegistrationListModalComponent.prototype, "workshift", null);
    RegistrationListModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-list-modal',
            template: __webpack_require__(/*! ./registration-list-modal.component.html */ "./src/app/registration-list-modal/registration-list-modal.component.html"),
            styles: [__webpack_require__(/*! ./registration-list-modal.component.css */ "./src/app/registration-list-modal/registration-list-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_http_workshift_service__WEBPACK_IMPORTED_MODULE_4__["WorkshiftService"]])
    ], RegistrationListModalComponent);
    return RegistrationListModalComponent;
}());



/***/ }),

/***/ "./src/app/registration-list/registration-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/registration-list/registration-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi1saXN0L3JlZ2lzdHJhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/registration-list/registration-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/registration-list/registration-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fixed-top\" style=\"margin-top: 60px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 border-bottom border-blue-2 p-2\">\r\n      <span class=\"h5 font-weight-bold\">Registratie personen</span>\r\n      <div>{{ currentDate | date:'dd/MM/yyyy HH:mm' }}</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 p-2 mt-2 d-flex\">\r\n      <div class=\"flex-fill pr-2\">\r\n        <input class=\"form-control\" type=\"text\" placeholder=\"Zoek persoon\" [(ngModel)]=\"searchName\">\r\n      </div>\r\n      <div class=\"flex-fill pl-2\">\r\n        <button [disabled]=\"!persons\" class=\"btn bg-blue float-right text-light\" (click)=\"openFilterModal(filterModal)\">\r\n          Filteropties\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 mt-4 text-center\" *ngIf=\"!persons\" [hidden]=\"errorMessage\">\r\n      <div class=\"spinner-border\" role=\"status\"></div>\r\n    </div>\r\n    <div class=\"col-12 p-2\" *ngIf=\"errorMessage\">\r\n      <div class=\"p-2 rounded bg-lightgray\">\r\n        <span class=\"h6\">{{ errorMessage }}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 p-2\" *ngIf=\"getSelectedFiltersCount() > 0 && filteredPersons.length === 0\">\r\n      <div class=\"p-2 rounded bg-lightgray\">\r\n        <span class=\"h6\">Geen werkshifts voor de gekozen filter.</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 p-2\" *ngFor=\"let person of filteredPersons | filter : searchName\">\r\n      <div class=\"p-2 rounded bg-lightgray\" *ngFor=\"let workshift of person.workshifts\"\r\n        (click)=\"openRegistrationDetails(person, workshift)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 mb-3\">\r\n            <span class=\"font-weight-bold\">{{ person.name }}</span>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <span class=\"font-weight-bold\">Job</span>\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <span>{{ workshift.job.description }}</span>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <span class=\"font-weight-bold\">Werktijd</span>\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <span>{{ workshift.startDateTime | date:'HH:mm' }} - {{ workshift.stopDateTime | date:'HH:mm' }}</span>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <span class=\"font-weight-bold\">Registratie</span>\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <div [ngSwitch]=\"timerState[workshift.timerState]\">\r\n              <span *ngSwitchCase=\"timerState.NoState\">Niet gestart</span>\r\n              <span *ngSwitchCase=\"timerState.StartedState\">Gestart</span>\r\n              <span *ngSwitchCase=\"timerState.PausedState\">Gepauzeerd</span>\r\n              <span *ngSwitchCase=\"timerState.StoppedState\">Gestopt</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <span [innerHTML]=\"'clock' | feather:20\"\r\n              *ngIf=\"timerState[workshift.timerState] === timerState.StartedState\"></span>\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <span\r\n              *ngIf=\"timerState[workshift.timerState] === timerState.StartedState\">{{ workshift.workTime | slice:0:11 }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #filterModal let-modal>\r\n  <div class=\"modal-header bg-blue text-light\">\r\n    <span class=\"modal-title h5 \" id=\"modal-basic-title\">Selecteer filter(s)</span>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.dismiss()\">\r\n      <span class=\"text-light\" [innerHTML]=\"'x' | feather:24\"></span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body pt-2 pb-2 pr-0 pl-0\">\r\n    <div class=\"container\">\r\n      <div class=\"row text-left center-block\">\r\n        <div class=\"col-12 p-2\">\r\n          <button class=\"btn\" (click)=\"filters[0].selected = !filters[0].selected\">\r\n            <span class=\"h5\">Job</span>\r\n          </button>\r\n          <div class=\"pt-2\" *ngIf=\"filters[0].selected\">\r\n            <ng-select [items]=\"jobs\" bindLabel=\"description\" bindValue=\"id\" placeholder=\"Selecteer job\"\r\n              [(ngModel)]=\"filters[0].value\" [searchable]=\"false\" [clearable]=\"false\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 p-2\">\r\n          <button class=\"btn\" (click)=\"filters[1].selected = !filters[1].selected\">\r\n            <span class=\"h5\">Registratie</span>\r\n          </button>\r\n          <div class=\"pt-2\" *ngIf=\"filters[1].selected\">\r\n            <ng-select [(ngModel)]=\"filters[1].value\" placeholder=\"Selecteer registratie\" [searchable]=\"false\"\r\n              [clearable]=\"false\">\r\n              <ng-option [value]=\"'NoState'\">Niet gestart</ng-option>\r\n              <ng-option [value]=\"'StartedState'\">Gestart</ng-option>\r\n              <ng-option [value]=\"'PausedState'\">Gepauzeerd</ng-option>\r\n              <ng-option [value]=\"'StoppedState'\">Gestopt</ng-option>\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn bg-lightgreen text-light\" (click)=\"applyFilter()\">\r\n      <span>{{ getSelectedFiltersCount() }} filter(s) toepassen</span>\r\n    </button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/registration-list/registration-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/registration-list/registration-list.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationListComponent", function() { return RegistrationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _registration_list_modal_registration_list_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registration-list-modal/registration-list-modal.component */ "./src/app/registration-list-modal/registration-list-modal.component.ts");
/* harmony import */ var _services_http_employer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http/employer.service */ "./src/app/services/http/employer.service.ts");
/* harmony import */ var _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/enums/timerstate.enum */ "./src/app/models/enums/timerstate.enum.ts");
/* harmony import */ var _services_others_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/others/filter.service */ "./src/app/services/others/filter.service.ts");







var RegistrationListComponent = /** @class */ (function () {
    function RegistrationListComponent(modalService, filterService, employerService) {
        this.modalService = modalService;
        this.filterService = filterService;
        this.employerService = employerService;
        this.timerState = _models_enums_timerstate_enum__WEBPACK_IMPORTED_MODULE_5__["TimerState"];
        this.currentDate = new Date();
        this.filters = [
            {
                name: 'jobDescription',
                doesApply: function (workshift) {
                    return workshift.job.id == this.value;
                },
                selected: false,
                value: null,
            },
            {
                name: 'registration',
                doesApply: function (workshift) {
                    return workshift.timerState == this.value;
                },
                selected: false,
                value: null,
            }
        ];
    }
    RegistrationListComponent.prototype.ngOnInit = function () {
        this.getWorkshifts();
        this.jobs = [];
    };
    RegistrationListComponent.prototype.getWorkshifts = function () {
        var _this = this;
        this.employerService.getAllWorkshiftsByDateTime().subscribe(function (data) {
            _this.persons = data;
            _this.filteredPersons = data;
            _this.isDataEmpty(data);
        }, function (error) {
            _this.errorMessage = "Er is een fout opgetreden. Probeer het later opnieuw.";
        });
    };
    RegistrationListComponent.prototype.isDataEmpty = function (data) {
        if (data.length === 0) {
            this.errorMessage = "Geen werkshifts voor het huidige moment.";
        }
        else {
            this.parseJobs(data);
        }
    };
    RegistrationListComponent.prototype.parseJobs = function (data) {
        var _this = this;
        data.forEach(function (p) {
            p.workshifts.forEach(function (w) {
                if (!_this.jobs.some(function (job) { return job.id == w.job.id; })) {
                    _this.jobs.push(w.job);
                }
            });
        });
    };
    RegistrationListComponent.prototype.openRegistrationDetails = function (person, workshift) {
        var modalRef = this.modalService.open(_registration_list_modal_registration_list_modal_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationListModalComponent"]);
        modalRef.componentInstance.person = person;
        modalRef.componentInstance.workshift = workshift;
    };
    RegistrationListComponent.prototype.openFilterModal = function (modal) {
        this.modalService.open(modal);
    };
    RegistrationListComponent.prototype.applyFilter = function () {
        this.filteredPersons = this.filterService.filterPersons(this.persons, this.filters);
        this.modalService.dismissAll();
    };
    RegistrationListComponent.prototype.getSelectedFiltersCount = function () {
        return this.filterService.selectedFiltersCount(this.filters);
    };
    RegistrationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-list',
            template: __webpack_require__(/*! ./registration-list.component.html */ "./src/app/registration-list/registration-list.component.html"),
            styles: [__webpack_require__(/*! ./registration-list.component.css */ "./src/app/registration-list/registration-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _services_others_filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"],
            _services_http_employer_service__WEBPACK_IMPORTED_MODULE_4__["EmployerService"]])
    ], RegistrationListComponent);
    return RegistrationListComponent;
}());



/***/ }),

/***/ "./src/app/resolution-error/resolution-error.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/resolution-error/resolution-error.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc29sdXRpb24tZXJyb3IvcmVzb2x1dGlvbi1lcnJvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/resolution-error/resolution-error.component.html":
/*!******************************************************************!*\
  !*** ./src/app/resolution-error/resolution-error.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-6 mx-auto\">\r\n          <div class=\"card card-signin my-5\">\r\n              <div class=\"card-body text-center\">\r\n                  <h3 class=\"card-title\">FestiTimer</h3>\r\n                  <hr>\r\n                  <div class=\"alert alert-danger\">\r\n                      Applicatie niet compatibel met huidige resolutie.\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/resolution-error/resolution-error.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/resolution-error/resolution-error.component.ts ***!
  \****************************************************************/
/*! exports provided: ResolutionErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolutionErrorComponent", function() { return ResolutionErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResolutionErrorComponent = /** @class */ (function () {
    function ResolutionErrorComponent() {
    }
    ResolutionErrorComponent.prototype.ngOnInit = function () {
    };
    ResolutionErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resolution-error',
            template: __webpack_require__(/*! ./resolution-error.component.html */ "./src/app/resolution-error/resolution-error.component.html"),
            styles: [__webpack_require__(/*! ./resolution-error.component.css */ "./src/app/resolution-error/resolution-error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResolutionErrorComponent);
    return ResolutionErrorComponent;
}());



/***/ }),

/***/ "./src/app/services/core/auth.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/services/core/auth.interceptor.ts ***!
  \***************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        if (req.url.startsWith(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiRoot)) {
            var accessToken = this._authService.authorizationAccessToken;
            var headers = req.headers.set('Authorization', "Bearer " + accessToken);
            var authReq = req.clone({ headers: headers });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/core/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/core/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService, getClientSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientSettings", function() { return getClientSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! oidc-client */ "./node_modules/oidc-client/lib/oidc-client.min.js");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _others_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../others/registration.service */ "./src/app/services/others/registration.service.ts");
/* harmony import */ var _others_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../others/error.service */ "./src/app/services/others/error.service.ts");







var AuthService = /** @class */ (function () {
    function AuthService(registrationService, errorService) {
        var _this = this;
        this.registrationService = registrationService;
        this.errorService = errorService;
        this._authStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.authStatus$ = this._authStatusSource.asObservable();
        this.manager = new oidc_client__WEBPACK_IMPORTED_MODULE_2__["UserManager"](getClientSettings());
        this.manager.getUser().then(function (user) {
            if (user != null && user.profile["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == "Person") {
                var storedEmployer = JSON.parse(localStorage.getItem('EmployerObject'));
                if (storedEmployer == null) {
                    _this.manager.removeUser();
                    _this.errorService.authErrorSource.next("Aanmelden mislukt.");
                    localStorage.clear();
                    return;
                }
                _this.replaceUserWithEmployer(user, storedEmployer);
                var personRegistration = localStorage.getItem('registrationValues').split(",");
                _this.registrationService.performRegistration(personRegistration[0], Number.parseInt(personRegistration[1]));
                localStorage.clear();
                return;
            }
            _this.user = user;
            _this._authStatusSource.next(_this.isAuthenticated());
        });
        this.manager.events.addUserLoaded(function () {
            _this.manager.getUser().then(function (user) {
                _this.user = user;
                _this._authStatusSource.next(_this.isAuthenticated());
            });
        });
    }
    AuthService.prototype.loginEmployer = function () {
        return this.manager.signinRedirect();
    };
    AuthService.prototype.loginPerson = function () {
        localStorage.setItem('EmployerObject', JSON.stringify(this.user));
        return this.manager.signinRedirect();
    };
    AuthService.prototype.signout = function () {
        this.manager.signoutRedirect();
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.user != null && !this.user.expired;
    };
    Object.defineProperty(AuthService.prototype, "authorizationAccessToken", {
        get: function () {
            return "" + this.user.access_token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "UserFirstName", {
        get: function () {
            return this.user != null ? this.user.profile.first_name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "UserId", {
        get: function () {
            return this.user != null ? this.user.profile.sub : 0;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.replaceUserWithEmployer = function (user, storedEmployer) {
        user.access_token = storedEmployer.access_token;
        user.expires_at = storedEmployer.expires_at;
        user.id_token = storedEmployer.id_token;
        user.profile = storedEmployer.profile;
        user.scope = storedEmployer.scope;
        user.session_state = storedEmployer.session_state;
        this.user = user;
        this.manager.storeUser(user);
        this._authStatusSource.next(this.isAuthenticated());
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_others_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"], _others_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"]])
    ], AuthService);
    return AuthService;
}());

function getClientSettings() {
    return {
        authority: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].identityAuthority,
        client_id: 'festitimer-client',
        redirect_uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].clientRoot + "assets/oidc-login-redirect.html",
        post_logout_redirect_uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].clientRoot + "?postLogout=true",
        response_type: "id_token token",
        scope: "openid festitimer-api profile",
        filterProtocolClaims: true,
        userStore: new oidc_client__WEBPACK_IMPORTED_MODULE_2__["WebStorageStateStore"]({ store: window.sessionStorage }),
        silent_redirect_uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].clientRoot + "silent-refresh.html",
        loadUserInfo: true,
        prompt: 'login'
    };
}


/***/ }),

/***/ "./src/app/services/http/employer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/http/employer.service.ts ***!
  \***************************************************/
/*! exports provided: EmployerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerService", function() { return EmployerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/services/core/auth.service.ts");







var EmployerService = /** @class */ (function () {
    function EmployerService(httpClient, authService, datepipe) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.datepipe = datepipe;
    }
    EmployerService.prototype.getAllPersonsByDate = function () {
        var _this = this;
        var currentDate = new Date();
        var formattedDate = this.datepipe.transform(currentDate, 'yyyy-MM-dd');
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiRoot + 'employer/' + this.authService.UserId + '/persons/' + formattedDate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return _this.parseData(res); }));
    };
    EmployerService.prototype.getAllWorkshiftsByDateTime = function () {
        var currentDate = new Date();
        currentDate.setHours(9);
        var formattedDate = this.datepipe.transform(currentDate, 'yyyy-MM-ddTHH:mm:ss');
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiRoot + 'employer/' + this.authService.UserId + '/workshifts/' + formattedDate);
    };
    EmployerService.prototype.getAllNotifications = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiRoot + 'employer/' + this.authService.UserId + '/notifications');
    };
    EmployerService.prototype.parseData = function (json) {
        return Object.keys(json).map(function (key) {
            var workshifts = json[key].workshifts;
            var parsedWorkshifts = Object.keys(workshifts).map(function (key) {
                var workshift = {
                    id: workshifts[key].id,
                    startDateTime: new Date(workshifts[key].startDateTime),
                    stopDateTime: new Date(workshifts[key].stopDateTime),
                    workTime: workshifts[key].workTime,
                    timerState: workshifts[key].timerState,
                    job: workshifts[key].job,
                };
                return workshift;
            });
            var person = {
                id: json[key].id,
                name: json[key].name,
                workshifts: parsedWorkshifts,
            };
            return person;
        });
    };
    EmployerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], EmployerService);
    return EmployerService;
}());



/***/ }),

/***/ "./src/app/services/http/notification.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/http/notification.service.ts ***!
  \*******************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var NotificationService = /** @class */ (function () {
    function NotificationService(httpClient) {
        this.httpClient = httpClient;
    }
    NotificationService.prototype.deleteNotification = function (id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + 'notifications/' + id);
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/http/person.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/http/person.service.ts ***!
  \*************************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var PersonService = /** @class */ (function () {
    function PersonService(httpClient) {
        this.httpClient = httpClient;
    }
    PersonService.prototype.getAllPersons = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + 'person');
    };
    PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/services/http/workshift.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/http/workshift.service.ts ***!
  \****************************************************/
/*! exports provided: WorkshiftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshiftService", function() { return WorkshiftService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var WorkshiftService = /** @class */ (function () {
    function WorkshiftService(httpClient) {
        this.httpClient = httpClient;
    }
    WorkshiftService.prototype.getAllWorkshiftRegistrations = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + 'workshift/');
    };
    WorkshiftService.prototype.getWorkshiftRegistration = function (id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + 'workshift/' + id);
    };
    WorkshiftService.prototype.getWorkshiftRegistrationElapsedTime = function (id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + 'workshift/' + id + '/elapsed/');
    };
    WorkshiftService.prototype.startWorkshiftRegistration = function (id) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + 'workshift/start?id=' + id, null);
    };
    WorkshiftService.prototype.pauseWorkshiftRegistration = function (id) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + 'workshift/pause?id=' + id, null);
    };
    WorkshiftService.prototype.stopWorkshiftRegistration = function (id) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + 'workshift/stop?id=' + id, null);
    };
    WorkshiftService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WorkshiftService);
    return WorkshiftService;
}());



/***/ }),

/***/ "./src/app/services/others/error.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/others/error.service.ts ***!
  \**************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.authErrorSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.authError$ = this.authErrorSource.asObservable();
    }
    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/services/others/filter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/others/filter.service.ts ***!
  \***************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterService = /** @class */ (function () {
    function FilterService() {
    }
    FilterService.prototype.filterPersons = function (persons, filters) {
        var _this = this;
        var selectedFilters = filters.filter(function (filter) { return filter.selected; });
        if (selectedFilters.length === 0) {
            return persons;
        }
        return persons.filter(function (p) { return _this.hasAWorkshiftAppliesByAllFilters(p, selectedFilters); });
    };
    FilterService.prototype.hasAWorkshiftAppliesByAllFilters = function (person, selectedFilters) {
        return person.workshifts.some(function (w) {
            return selectedFilters.every(function (value) {
                return value.doesApply(w);
            });
        });
    };
    FilterService.prototype.selectedFiltersCount = function (filters) {
        return filters.filter(function (filter) { return filter.selected; }).length;
    };
    FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/services/others/hub.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/others/hub.service.ts ***!
  \************************************************/
/*! exports provided: HubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubService", function() { return HubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var HubService = /** @class */ (function () {
    function HubService(notifierService) {
        var _this = this;
        this.notifierService = notifierService;
        this._notificationsSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.notifications$ = this._notificationsSource.asObservable();
        this.startConnection = function () {
            _this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
                .withUrl('http://localhost:5000/notificaties')
                .build();
            _this.hubConnection
                .start()
                .then(function () { return console.log('Connection started'); })
                .catch(function (err) { return console.log('Error while starting connection: ' + err); });
        };
        this.addTransferChartDataListener = function () {
            _this.hubConnection.on('broadcastnotification', function (data) {
                _this._notificationsSource.next(data);
                _this.notifierService.notify('default', 'Nieuwe notificatie beschikbaar');
            });
        };
    }
    HubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]])
    ], HubService);
    return HubService;
}());



/***/ }),

/***/ "./src/app/services/others/registration.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/others/registration.service.ts ***!
  \*********************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_enums_timeraction_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/enums/timeraction.enum */ "./src/app/models/enums/timeraction.enum.ts");
/* harmony import */ var _http_workshift_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/workshift.service */ "./src/app/services/http/workshift.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var RegistrationService = /** @class */ (function () {
    function RegistrationService(workshiftService) {
        this.workshiftService = workshiftService;
        this._registrationStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.registrationStatus$ = this._registrationStatusSource.asObservable();
    }
    RegistrationService.prototype.performRegistration = function (timerAction, workshiftId) {
        var _this = this;
        switch (src_app_models_enums_timeraction_enum__WEBPACK_IMPORTED_MODULE_2__["TimerAction"][timerAction]) {
            case 'Start':
                this.workshiftService.startWorkshiftRegistration(workshiftId).subscribe(function (data) { return _this.registrationStatus('gestart'); });
                break;
            case 'Pause':
                this.workshiftService.pauseWorkshiftRegistration(workshiftId).subscribe(function (data) { return _this.registrationStatus('gepauzeerd'); });
                break;
            case 'Stop':
                this.workshiftService.stopWorkshiftRegistration(workshiftId).subscribe(function (data) { return _this.registrationStatus('gestopt'); });
                break;
        }
    };
    RegistrationService.prototype.registrationStatus = function (timerAction) {
        this._registrationStatusSource.next(timerAction);
    };
    RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_workshift_service__WEBPACK_IMPORTED_MODULE_3__["WorkshiftService"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-container {\r\n    height: 100%;\r\n}\r\n\r\n.sidebar-width {\r\n    width: 200px;\r\n}\r\n\r\n.height-60 {\r\n    height: 60px;\r\n}\r\n\r\n.pointer {\r\n    cursor: pointer;\r\n}\r\n\r\nng-scrollbar {\r\n    --scrollbar-size: 8px;\r\n    --scrollbar-thumb-color: rgba(94, 175, 255, 0.5);\r\n    --scrollbar-thumb-hover-color: dodgerblue;\r\n    --scrollbar-border-radius: 4px;\r\n    border: 1px solid gray;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdEQUFnRDtJQUNoRCx5Q0FBeUM7SUFDekMsOEJBQThCO0lBQzlCLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGViYXItd2lkdGgge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uaGVpZ2h0LTYwIHtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uZy1zY3JvbGxiYXIge1xyXG4gICAgLS1zY3JvbGxiYXItc2l6ZTogOHB4O1xyXG4gICAgLS1zY3JvbGxiYXItdGh1bWItY29sb3I6IHJnYmEoOTQsIDE3NSwgMjU1LCAwLjUpO1xyXG4gICAgLS1zY3JvbGxiYXItdGh1bWItaG92ZXItY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICAtLXNjcm9sbGJhci1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen hasBackdrop=\"true\" class=\"sidebar-container\">\r\n  <mat-sidenav #sidebar mode=\"over\" class=\"sidebar-width bg-white\" fixedInViewport=\"true\">\r\n    <div class=\"d-flex border-bottom border-dark bg-blue text-light p-2  height-60\">\r\n      <div class=\"flex-fill p-1 align-self-center\">\r\n        <span class=\"h5\">FestiTimer</span>\r\n      </div>\r\n      <div class=\"flex-fill p-1 align-self-center\">\r\n        <span [innerHTML]=\"'x' | feather:20\" class=\"float-right\" (click)=\"toggleSidebar()\"></span>\r\n      </div>\r\n    </div>\r\n    <ul class=\"list-group pointer text-black\" (click)=\"toggleSidebar()\">\r\n      <li class=\"list-group-item bg-light-green\" [routerLink]=\"['']\">\r\n        <span class=\"mr-2\" [innerHTML]=\"'users' | feather:24\"></span>\r\n        <span class=\"h6\">Personen</span>\r\n      </li>\r\n      <li class=\"list-group-item bg-light-green\" [routerLink]=\"['registratie']\">\r\n        <span class=\"mr-2\" [innerHTML]=\"'book-open' | feather:24\"></span>\r\n        <span class=\"h6\">Registratie</span>\r\n      </li>\r\n      <li class=\"list-group-item bg-light-green\" [routerLink]=\"['notificaties']\">\r\n        <span class=\"mr-2\" [innerHTML]=\"'bell' | feather:24\"></span>\r\n        <span class=\"h6\">Notificaties</span>\r\n      </li>\r\n    </ul>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content class=\"bg-light-green\">\r\n    <div class=\"container bg-blue text-light fixed-top\">\r\n      <div class=\"row pt-2 pb-2 height-60\">\r\n        <div class=\"col-2 align-self-center\">\r\n          <span [innerHTML]=\"'menu' | feather:32\" (click)=\"toggleSidebar()\"></span>\r\n        </div>\r\n        <div class=\"col-10 align-self-center\">\r\n          <span class=\"float-right\" [innerHTML]=\"'log-out' | feather:28\" (click)=\"logout()\"></span>\r\n          <span class=\"float-right mr-3\" style=\"font-size:20px\">{{ UserFirstName }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/core/auth.service */ "./src/app/services/core/auth.service.ts");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.UserFirstName = this.authService.UserFirstName;
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        this.sidebar.toggle();
    };
    SidebarComponent.prototype.logout = function () {
        this.authService.signout();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], SidebarComponent.prototype, "sidebar", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiRoot: 'http://localhost:5000/',
    identityAuthority: 'http://localhost:5001/',
    clientRoot: 'http://localhost:4200/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\corstjens siebe\Documents\Stage Workspace\mobieletijdsregistratie.app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map