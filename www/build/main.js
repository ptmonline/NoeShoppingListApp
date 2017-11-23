webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_llistat_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_global_helper__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__llistat_llistat__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductesPage = (function () {
    function ProductesPage(navCtrl, navParams, _llistatCompra, _globalHelper) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._llistatCompra = _llistatCompra;
        this._globalHelper = _globalHelper;
        (this.navParams.data.length) ? this.llistatCompra = this.navParams.data : this.llistatCompra = [];
        this._llistatCompra.getData().subscribe(function (data) {
            _this.llistatInicial = data;
        });
    }
    ProductesPage.prototype.saveItem = function (item, producta, titul, id) {
        var comp = { id: id, titul: titul, producta: producta };
        if (!this._globalHelper.checkUniq(comp, this.llistatCompra)) {
            this.llistatCompra.push(comp);
        }
        item.close();
    };
    ProductesPage.prototype.toggleSection = function (i) {
        if (this.llistatInicial != null) {
            for (var x = 0; x < this.llistatInicial; x++) {
                !this.llistatInicial.llistat[x].open;
            }
            this.llistatInicial.llistat[i].open = !this.llistatInicial.llistat[i].open;
        }
    };
    ProductesPage.prototype.done = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__llistat_llistat__["a" /* LlistatPage */], this.llistatCompra);
    };
    ProductesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productes',template:/*ion-inline-start:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\pages\productes\productes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Noe Shopping List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding *ngIf="llistatInicial">\n\n  <div class="content-list">\n\n    <ion-list *ngFor="let item of llistatInicial.llistat; let i = index" class="accordion-list">\n\n      <ion-list-header (click)="toggleSection(i)" [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">{{item.title}}</ion-list-header>\n\n      <div *ngIf="item.open" class="product-section">\n\n        <ion-item-sliding #slidingItem *ngFor="let ite of item.items">\n\n          <ion-item>{{ite}}</ion-item>\n\n          <ion-item-options side="right">\n\n            <button ion-button expandable (click)="saveItem(slidingItem, ite, item.title, item.id)">\n\n              AFEGIR\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button (click)="done()">Veura llistat compra</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\pages\productes\productes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_llistat_service__["a" /* LlistatCompraService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_llistat_service__["a" /* LlistatCompraService */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_global_helper__["a" /* GlobalHelper */]])
    ], ProductesPage);
    return ProductesPage;
}());

//# sourceMappingURL=productes.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalHelper = (function () {
    function GlobalHelper() {
    }
    GlobalHelper.prototype.checkUniq = function (obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].producta === obj.producta) {
                return true;
            }
        }
        return false;
    };
    GlobalHelper.prototype.removeItem = function (obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].producta === obj.producta) {
                list.splice(i, 1);
                return list;
            }
        }
    };
    GlobalHelper.prototype.getColor = function (id) {
        switch (id) {
            case 1: {
                return 'rgba(205,211,153,0.5)';
            }
            case 2: {
                return 'rgba(211,159,153,0.5)';
            }
            case 3: {
                return 'rgba(178,223,219,0.5)';
            }
            case 4: {
                return 'rgba(224,242,241,0.5)';
            }
            case 5: {
                return 'rgba(38,166,154,0.5)';
            }
            case 6: {
                return 'rgba(0,150,136,0.5)';
            }
            case 7: {
                return 'rgba(167,255,235,0.5)';
            }
            case 8: {
                return 'rgba(100,255,218,0.5)';
            }
            case 9: {
                return 'rgba(144,202,249,0.5)';
            }
            case 10: {
                return 'rgba(187,222,251,0.5)';
            }
            case 11: {
                return 'rgba(130,177,255,0.5)';
            }
            case 12: {
                return 'rgba(178,235,242,0.5)';
            }
            case 13: {
                return 'rgba(0,188,212,0.5)';
            }
            case 14: {
                return 'rgba(255,204,128,0.5)';
            }
            case 15: {
                return 'rgba(188,170,164,0.5)';
            }
            case 16: {
                return 'rgba(161,136,127,0.5)';
            }
            case 17: {
                return 'rgba(255,171,145,0.5)';
            }
            case 18: {
                return 'rgba(255,205,210,0.5)';
            }
            case 19: {
                return 'rgba(248,187,208,0.5)';
            }
        }
    };
    GlobalHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalHelper);
    return GlobalHelper;
}());

//# sourceMappingURL=global.helper.js.map

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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LlistatCompraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LlistatCompraService = (function () {
    function LlistatCompraService(http) {
        this.http = http;
    }
    LlistatCompraService.prototype.getData = function () {
        return this.http.get('../assets/json/data.json').map(function (data) {
            return data;
        });
    };
    LlistatCompraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LlistatCompraService);
    return LlistatCompraService;
}());

//# sourceMappingURL=llistat.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LlistatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_global_helper__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productes_productes__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__archiu_archiu__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LlistatPage = (function () {
    function LlistatPage(navCtrl, navParams, _globalHelper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._globalHelper = _globalHelper;
        this.compraLlistat = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.orderBy(this.navParams.data, 'id');
        (this.compraLlistat.length) ? this.active = true : this.active = false;
    }
    LlistatPage.prototype.deleteItem = function (item, producta, titul, id) {
        var comp = { id: id, titul: titul, producta: producta };
        this.compraLlistat = this._globalHelper.removeItem(comp, this.compraLlistat);
        item.close();
    };
    LlistatPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__productes_productes__["a" /* ProductesPage */], this.compraLlistat);
    };
    LlistatPage.prototype.close = function () {
        this.active = false;
        this.compraLlistat = [];
        this.back();
    };
    LlistatPage.prototype.archivar = function () {
        this.archiveDate = new Date;
        this.archiveDate = this.archiveDate.toDateString();
        // StorageApp.set(ArchiuComponent.stored_archiu);
        console.log(this.archiveDate);
    };
    LlistatPage.prototype.archiu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__archiu_archiu__["a" /* ArchiuComponent */], { llistat: this.compraLlistat, data: this.archiveDate });
    };
    LlistatPage.stored_archiu = 'stored_archiu';
    LlistatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-llistat',template:/*ion-inline-start:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\pages\llistat\llistat.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title pull--left>\n\n      <span>Llista de la Compra</span>\n\n      <div  class="item__titul">{{archiveDate}}</div>\n\n    </ion-title>\n\n    <!-- <ion-buttons end> -->\n\n      <button pull--right ion-button color="dark" (tap)="close()" *ngIf="active">borrar</button>\n\n      <button pull--right ion-button color="secondary" (tap)="archivar()">guardar</button>\n\n      <button pull--right ion-button color="danger" (tap)="archiu()">Archiu</button>\n\n		<!-- </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-sliding #slidingItem *ngFor="let item of compraLlistat">\n\n      <ion-item [ngStyle]="{\'background-color\':_globalHelper.getColor(item.id)}">\n\n        <span class="item__titul">{{item.titul}}</span>\n\n        <span class="item__producta">{{item.producta}}</span>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button expandable (click)="deleteItem(slidingItem, item.producta, item.titul, item.id)">\n\n          BORRAR\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button (click)="back()">Torna a llistat productes</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\pages\llistat\llistat.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__helpers_global_helper__["a" /* GlobalHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__helpers_global_helper__["a" /* GlobalHelper */]) === "function" && _c || Object])
    ], LlistatPage);
    return LlistatPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=llistat.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_llistat_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_helpers_global_helper__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_llistat_llistat__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_productes_productes__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_archiu_archiu__ = __webpack_require__(283);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_llistat_llistat__["a" /* LlistatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_productes_productes__["a" /* ProductesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_archiu_archiu__["a" /* ArchiuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    menuType: 'push',
                    platforms: {
                        ios: {
                            menuType: 'overlay',
                        }
                    }
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_llistat_llistat__["a" /* LlistatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_productes_productes__["a" /* ProductesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_archiu_archiu__["a" /* ArchiuComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__services_llistat_service__["a" /* LlistatCompraService */],
                __WEBPACK_IMPORTED_MODULE_8__pages_helpers_global_helper__["a" /* GlobalHelper */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_productes_productes__ = __webpack_require__(101);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_productes_productes__["a" /* ProductesPage */];
        this.testtext = "this is a test";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchiuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_storage_helper__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArchiuComponent = (function () {
    function ArchiuComponent(navParams) {
        this.navParams = navParams;
        this.archiuList = [];
        console.log(this.navParams.data);
        var storedarchiu = __WEBPACK_IMPORTED_MODULE_2__helpers_storage_helper__["a" /* StorageApp */].get(ArchiuComponent_1.stored_archiu);
        if (storedarchiu != null) {
            this.archiuList = storedarchiu;
        }
    }
    ArchiuComponent_1 = ArchiuComponent;
    ArchiuComponent.stored_archiu = 'stored_archiu';
    ArchiuComponent = ArchiuComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'archiu-page',template:/*ion-inline-start:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\pages\archiu\archiu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Archiu Llistes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<h1>Hola</h1>'/*ion-inline-end:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\pages\archiu\archiu.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _a || Object])
    ], ArchiuComponent);
    return ArchiuComponent;
    var ArchiuComponent_1, _a;
}());

//# sourceMappingURL=archiu.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageApp; });
var StorageApp = (function () {
    function StorageApp() {
    }
    StorageApp.getStorage = function (isPersistent) {
        if (isPersistent == true)
            return localStorage;
        else
            return sessionStorage;
    };
    StorageApp.set = function (key, data, isPersistent) {
        var _storage = StorageApp.getStorage(isPersistent);
        if (_storage != null) {
            try {
                if (data == null)
                    _storage.removeItem(key);
                else {
                    if (typeof data == 'object')
                        _storage.setItem(key, JSON.stringify(data));
                    else
                        _storage.setItem(key, data);
                }
            }
            catch (e) {
                console.log("error al guradar en el storage: " + key, data);
            }
        }
        else {
            // todo
        }
    };
    StorageApp.get = function (key, isPersistent) {
        var _storage = StorageApp.getStorage(isPersistent);
        if (_storage != null) {
            var valor = _storage.getItem(key);
            try {
                return JSON.parse(valor);
            }
            catch (e) {
                return valor;
            }
        }
        else {
            //todo
        }
    };
    StorageApp.remove = function (key, isPersistent) {
        var _storage = StorageApp.getStorage(isPersistent);
        if (_storage != null) {
            _storage.removeItem(key);
        }
        else {
            // todo
        }
    };
    StorageApp.clear = function (key, isPersistent) {
        var _storage = StorageApp.getStorage(isPersistent);
        if (_storage != null) {
            _storage.clear();
        }
        else {
            //todo
        }
    };
    return StorageApp;
}());

//# sourceMappingURL=storage.helper.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map