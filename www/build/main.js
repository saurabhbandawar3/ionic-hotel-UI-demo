webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupdataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupdataPage = (function () {
    function SignupdataPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fname = navParams.get("fname");
        this.email = navParams.get("email");
        this.pswd = navParams.get("pswd");
        this.address = navParams.get("address");
        this.mobile = navParams.get("mobile");
        console.log(this.fname);
        console.log(this.email);
        console.log(this.pswd);
        console.log(this.address);
        console.log(this.mobile);
    }
    SignupdataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupdataPage');
    };
    SignupdataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signupdata',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/signupdata/signupdata.html"*/`<!--\n  Generated template for the SignupdataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Signupdata</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating color="primary" >Full Name</ion-label>\n    <ion-input type = "text" [(ngModel)]="fname"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating color="primary">Email</ion-label>\n    <ion-input type = "email"[(ngModel)]="email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating color="primary">Password</ion-label>\n    <ion-input type = "password" [(ngModel)]="pswd"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating color="primary">Address</ion-label>\n    <ion-input type = "text" [(ngModel)]="address"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating color="primary">Mobile Number</ion-label>\n    <ion-input type = "tel" [(ngModel)]="mobile"></ion-input>\n  </ion-item>\n</ion-content>\n`/*ion-inline-end:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/signupdata/signupdata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignupdataPage);
    return SignupdataPage;
}());

//# sourceMappingURL=signupdata.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/modal-view/modal-view.module": [
		276,
		4
	],
	"../pages/play-video/play-video.module": [
		277,
		3
	],
	"../pages/signin/signin.module": [
		278,
		2
	],
	"../pages/signup/signup.module": [
		280,
		1
	],
	"../pages/signupdata/signupdata.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play_video_play_video__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_view_modal_view__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, actionCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.actionCtrl = actionCtrl;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.ngAfterViewInit = function () {
        this.slider.slidesPerView = 1;
        this.slider.pager = true;
    };
    HomePage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    HomePage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.watchVid = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__play_video_play_video__["a" /* PlayVideoPage */]);
    };
    HomePage.prototype.showactionsheet = function () {
        var _this = this;
        var action = this.actionCtrl.create({
            title: 'Action Sheet',
            buttons: [
                {
                    text: 'Visit On Facebook Page',
                    handler: function () {
                        console.log('Visit FB clicked');
                    }
                },
                {
                    text: 'Share Link ',
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Watch Video ',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__play_video_play_video__["a" /* PlayVideoPage */]);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ],
        });
        action.present();
    };
    HomePage.prototype.showModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_view_modal_view__["a" /* ModalViewPage */], {
            name: this.name
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/home/home.html"*/`\n<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n\n    <ion-title>\n      Indian Classic Cafe\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n  <ion-card class="main">\n\n    <ion-card class="action-sheet" (swipe)="showactionsheet()">\n      <!--<ion-card-header class="header-card">-->\n        <!--Swipe card-->\n      <!--</ion-card-header>-->\n      <img src="../assets/imgs/card.jpg">\n    </ion-card>\n    <ion-card class="modal-view">\n      <ion-item>\n      <ion-input type="text" [(ngModel)]="name" placeholder="Enter Name"></ion-input>\n      </ion-item>\n      <button ion-button full color="light" (click)="showModal()" > View On Modal Page</button>\n    </ion-card>\n    <ion-card class="chat">\n      <ion-slides effect initialSlide=0 pager autoplay>\n        <ion-slide>\n          <img src="../assets/imgs/logo1.png" class="logo1"/>\n        </ion-slide>\n        <ion-slide>\n          <img src="../assets/imgs/paniPuri.jpg">\n          <ion-label padding>PANI PURI</ion-label>\n        </ion-slide>\n        <ion-slide>\n          <img src="../assets/imgs/sevPuri.jpg">\n          <ion-label padding>SEV PURI</ion-label>\n        </ion-slide>\n        <ion-slide>\n          <img src="../assets/imgs/dahiPuri.jpg">\n          <ion-label padding>DAHI PURI</ion-label>\n        </ion-slide>\n      </ion-slides>\n  </ion-card>\n\n   <ion-card class="northIndian">\n    <ion-slides effect="" initialSlide=0 pager>\n      <ion-slide>\n        <img src="../assets/imgs/NI.png" cass="logo3"/>\n      </ion-slide>\n      <ion-slide>\n        <img src="../assets/imgs/thali.jpg">\n        <ion-label padding>THALI</ion-label>\n      </ion-slide>\n      <ion-slide>\n        <img src="../assets/imgs/dal.png">\n        <ion-label padding>DAL MAKHANI</ion-label>\n      </ion-slide>\n      <ion-slide>\n        <img src="../assets/imgs/paneer.jpg">\n        <ion-label padding>BUTTER PANEER</ion-label>\n      </ion-slide>\n    </ion-slides>\n   </ion-card>\n\n    <ion-card class="southIndian">\n      <ion-slides effect="" initialSlide=0 pager>\n        <ion-slide>\n          <img src="../assets/imgs/SI.jpg" cass="logo2" height="4em"/>\n        </ion-slide>\n        <ion-slide>\n          <img src="../assets/imgs/dosa.jpg">\n          <ion-label padding>DOSA</ion-label>\n        </ion-slide>\n        <ion-slide>\n          <img src="../assets/imgs/wada.jpg" class="wada">\n          <ion-label padding>MEDU WADA</ion-label>\n        </ion-slide>\n        <ion-slide>\n          <img src="../assets/imgs/buttermilk-dosa_759.jpg">\n          <ion-label padding>SPONGE DOSA</ion-label>\n        </ion-slide>\n      </ion-slides>\n    </ion-card>\n\n    <ion-card class="nav-button">\n      <button ion-button class="signin" color="dark" (click)="signIn()">SignIn</button>\n      <button ion-button class="watchVideo" color="dark" (click)="watchVid()" >WatchVideo</button>\n      <button ion-button class="signup" color="dark" (click)="signUp()">SignUp</button>\n    </ion-card>\n\n  </ion-card>\n</ion-content>\n\n`/*ion-inline-end:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signupdata_signupdata__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_play_video_play_video__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modal_view_modal_view__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signupdata_signupdata__["a" /* SignupdataPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_play_video_play_video__["a" /* PlayVideoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_view_modal_view__["a" /* ModalViewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/modal-view/modal-view.module#ModalViewPageModule', name: 'ModalViewPage', segment: 'modal-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/play-video/play-video.module#PlayVideoPageModule', name: 'PlayVideoPage', segment: 'play-video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signupdata/signupdata.module#SignupdataPageModule', name: 'SignupdataPage', segment: 'signupdata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signupdata_signupdata__["a" /* SignupdataPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_play_video_play_video__["a" /* PlayVideoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_view_modal_view__["a" /* ModalViewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_play_video_play_video__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_view_modal_view__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { "title": " Home", "component": __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { "title": " Login", "component": __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */] },
            { "title": " Register", "component": __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */] },
            { "title": " PlayVideo", "component": __WEBPACK_IMPORTED_MODULE_7__pages_play_video_play_video__["a" /* PlayVideoPage */] },
            { "title": " Model-view", "component": __WEBPACK_IMPORTED_MODULE_8__pages_modal_view_modal_view__["a" /* ModalViewPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/app/app.html"*/`<ion-menu [content]="content">\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header color="dark">\n        <ion-title class="menu-side" ><h1>Menu</h1></ion-title>\n      </ion-list-header>\n      <button menuClose ion-item no-padding item-bcg class="main-menu" *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon ></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = (function () {
    function SigninPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.gotoSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/signin/signin.html"*/`<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>signin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>Sign In</ion-card-header>\n    <ion-item>\n      <ion-label floating color="primary" >Email/UserName</ion-label>\n      <ion-input type = "text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Password</ion-label>\n      <ion-input type = "password"></ion-input>\n    </ion-item>\n    <button ion-button color="light" class="btn-sigin">Submit </button>\n    <p>OR</p>\n    <button ion-button color="#8b9dc3" class="facebook">\n      <ion-icon name="logo-facebook"></ion-icon>\n      Sign In With facebook\n    </button>\n    <p>OR</p>\n    <button ion-button color="light" class="signUp" (click)="gotoSignup()">Don\'t have an acount.SignIn here.</button>\n\n    <b><p class="para">Welcome {{email}}</p></b>\n  </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signupdata_signupdata__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    SignupPage.prototype.signup = function () {
        console.log(this.fname);
        console.log(this.email);
        console.log(this.pswd);
        console.log(this.address);
        console.log(this.mobile);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signupdata_signupdata__["a" /* SignupdataPage */], {
            fname: this.fname,
            email: this.email,
            pswd: this.pswd,
            address: this.address,
            mobile: this.mobile
        });
    };
    SignupPage.prototype.showModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__signupdata_signupdata__["a" /* SignupdataPage */], {
            fname: this.fname
        });
        modal.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/signup/signup.html"*/`<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>Sign Up</ion-card-header>\n    <ion-item>\n      <ion-label floating color="primary" >Full Name</ion-label>\n      <ion-input type = "text" [(ngModel)]="fname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Email</ion-label>\n      <ion-input type = "email"[(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Password</ion-label>\n      <ion-input type = "password" [(ngModel)]="pswd"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Address</ion-label>\n      <ion-input type = "text" [(ngModel)]="address"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="primary">Mobile Number</ion-label>\n      <ion-input type = "tel" [(ngModel)]="mobile"></ion-input>\n    </ion-item>\n    <button ion-button  color="light" class="btn-signup"  (click)="signup()">Submit </button>\n    <p>OR</p>\n    <button ion-button  color="light" class="btn-signIn" (click)="signin()" >Already have an acount!!SignIn here.</button>\n  </ion-card>\n</ion-content>\n`/*ion-inline-end:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalViewPage = (function () {
    function ModalViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = navParams.get("name");
        console.log(name);
    }
    ModalViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalViewPage');
    };
    ModalViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-view',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/modal-view/modal-view.html"*/`<!--\n  Generated template for the ModalViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>ModalView</ion-title>\n    <button ></button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <b><p class="message"> Hi {{name}},\n        Welcome to cafe. </p></b>\n</ion-content>\n`/*ion-inline-end:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/modal-view/modal-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModalViewPage);
    return ModalViewPage;
}());

//# sourceMappingURL=modal-view.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayVideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlayVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayVideoPage = (function () {
    function PlayVideoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlayVideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayVideoPage');
    };
    PlayVideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-play-video',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/play-video/play-video.html"*/`<!--\n  Generated template for the PlayVideoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>playVideo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding color class="container">\n  <video autoplay src="../assets/imgs/video.mp4" controls>\n  </video>\n</ion-content>\n`/*ion-inline-end:"/Users/saurabh/XcodeProjects/ionic-hotel-UI-demo/src/pages/play-video/play-video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PlayVideoPage);
    return PlayVideoPage;
}());

//# sourceMappingURL=play-video.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map