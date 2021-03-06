webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_llistat_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_global_helper__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__llistat_llistat__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_storage_helper__ = __webpack_require__(203);
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
    function ProductesPage(navCtrl, navParams, _llistatCompra, alertCtrl, _globalHelper) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._llistatCompra = _llistatCompra;
        this.alertCtrl = alertCtrl;
        this._globalHelper = _globalHelper;
        (this.navParams.data.length) ? this.llistatCompra = this.navParams.data : this.llistatCompra = [];
        var stored_data = __WEBPACK_IMPORTED_MODULE_6__helpers_storage_helper__["a" /* StorageApp */].get(ProductesPage_1.stored_archiu);
        if (stored_data != null && stored_data.length && !this.llistatCompra.length)
            this.getListQuestion();
        this._llistatCompra.getData().subscribe(function (data) {
            _this.llistatInicial = data;
        });
    }
    ProductesPage_1 = ProductesPage;
    ProductesPage.prototype.getListQuestion = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ARXIU',
            message: 'Vols recuperar el llistat guardat?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_6__helpers_storage_helper__["a" /* StorageApp */].set(ProductesPage_1.stored_archiu, '');
                        __WEBPACK_IMPORTED_MODULE_6__helpers_storage_helper__["a" /* StorageApp */].set(ProductesPage_1.stored_nomllistat, '');
                        _this.llistatCompra = [];
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.llistatCompra = __WEBPACK_IMPORTED_MODULE_6__helpers_storage_helper__["a" /* StorageApp */].get(ProductesPage_1.stored_archiu);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__llistat_llistat__["a" /* LlistatPage */], _this.llistatCompra);
                    }
                }
            ]
        });
        alert.present();
    };
    ProductesPage.prototype.saveItem = function (item, producta, titul, id) {
        var comp = { id: id, titul: titul, producta: producta };
        if (!this._globalHelper.checkUniq(comp, this.llistatCompra)) {
            this.llistatCompra.push(comp);
        }
        item.close();
    };
    ProductesPage.prototype.toggleSection = function (i) {
        if (this.llistatInicial != null) {
            for (var x = 0; x < this.llistatInicial.llistat.length; x++) {
                if (x != i) {
                    this.llistatInicial.llistat[x].open = false;
                }
            }
            this.llistatInicial.llistat[i].open = !this.llistatInicial.llistat[i].open;
        }
    };
    ProductesPage.prototype.done = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__llistat_llistat__["a" /* LlistatPage */], this.llistatCompra);
    };
    ProductesPage.stored_archiu = 'stored_archiu';
    ProductesPage.stored_nomllistat = 'stored_nomllistat';
    ProductesPage = ProductesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productes',template:/*ion-inline-start:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\pages\productes\productes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <div class="toolbar-background">\n\n      <ion-title>productes</ion-title>\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding *ngIf="llistatInicial">\n\n  <div class="content-list">\n\n    <ion-list *ngFor="let item of llistatInicial.llistat; let i = index" class="accordion">\n\n      <ion-list-header (tap)="toggleSection(i)" [ngClass]="{\'accordion__header accordion__header--active\': item.open, \'accordion__header\': !item.open}"\n\n        [ngStyle]="(item.open) ? {\'background-color\':_globalHelper.getColor(item.id)} : {\'background-color\' : \'\'}" class="txt--center">\n\n        <span>{{item.title}}</span>\n\n      </ion-list-header>\n\n      <div *ngIf="item.open" class="accordion__content"  [ngStyle]="{\'border-bottom-color\': _globalHelper.getColor(item.id)}" >\n\n        <ion-item-sliding #slidingItem *ngFor="let ite of item.items">\n\n          <ion-item>\n\n            <span class="pal20">{{ite}}</span>\n\n          </ion-item>\n\n          <ion-item-options side="right">\n\n            <button ion-button expandable (tap)="saveItem(slidingItem, ite, item.title, item.id)">\n\n              AFEGIR\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button color="food" class="pull--right" (tap)="done()">LLISTAT</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\pages\productes\productes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_llistat_service__["a" /* LlistatCompraService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_llistat_service__["a" /* LlistatCompraService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_global_helper__["a" /* GlobalHelper */]])
    ], ProductesPage);
    return ProductesPage;
    var ProductesPage_1;
}());

//# sourceMappingURL=productes.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalHelper = (function () {
    function GlobalHelper(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
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
                return 'rgba(0,165,114,0.5)';
            }
            case 2: {
                return 'rgba(46,139,87,0.5)';
            }
            case 3: {
                return 'rgba(178,223,219,0.5)';
            }
            case 4: {
                return 'rgba(152,251,152,0.5)';
            }
            case 5: {
                return 'rgba(38,166,154,0.5)';
            }
            case 6: {
                return 'rgba(63,122,77,0.5)';
            }
            case 7: {
                return 'rgba(167,255,235,0.5)';
            }
            case 8: {
                return 'rgba(100,255,218,0.5)';
            }
            case 9: {
                return 'rgba(0,78,56,0.5)';
            }
            case 10: {
                return 'rgba(80,220,11,0.5)';
            }
            case 11: {
                return 'rgba(57,255,20,0.5)';
            }
            case 12: {
                return 'rgba(1,121,111,0.5)';
            }
            case 13: {
                return 'rgba(103,146,103,0.5)';
            }
            case 14: {
                return 'rgba(11,102,35,0.5)';
            }
            case 15: {
                return 'rgba(41,171,135,0.5)';
            }
            case 16: {
                return 'rgba(138,154,91,0.5)';
            }
            case 17: {
                return 'rgba(199,234,70,0.5)';
            }
            case 18: {
                return 'rgba(208,240,192,0.5)';
            }
            case 19: {
                return 'rgba(75,83,32,0.5)';
            }
        }
    };
    GlobalHelper.prototype.presentLoadingCustom = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'guardant',
            cssClass: 'llistat__spinner',
            showBackdrop: false,
            duration: 1000
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        loading.present();
    };
    GlobalHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
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
        return this.http.get('./assets/json/data.json').map(function (data) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_global_helper__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productes_productes__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_storage_helper__ = __webpack_require__(203);
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
    function LlistatPage(navCtrl, navParams, _globalHelper, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._globalHelper = _globalHelper;
        this.alertCtrl = alertCtrl;
        this.nomguardat = __WEBPACK_IMPORTED_MODULE_5__helpers_storage_helper__["a" /* StorageApp */].get(LlistatPage_1.stored_nomllistat);
        if (this.nomguardat != null) {
            this.nomLlistat = this.nomguardat;
        }
        this.compraLlistat = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.orderBy(this.navParams.data, 'id');
        (this.compraLlistat.length) ? this.active = true : this.active = false;
    }
    LlistatPage_1 = LlistatPage;
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
        this.nomguardat = '';
        __WEBPACK_IMPORTED_MODULE_5__helpers_storage_helper__["a" /* StorageApp */].set(LlistatPage_1.stored_archiu, this.compraLlistat);
        __WEBPACK_IMPORTED_MODULE_5__helpers_storage_helper__["a" /* StorageApp */].set(LlistatPage_1.stored_nomllistat, this.nomguardat);
        this.back();
    };
    LlistatPage.prototype.archivar = function () {
        var _this = this;
        if (this.nomguardat == null || this.nomguardat == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'nom llistat',
                inputs: [{
                        name: 'nom',
                        placeholder: 'nom del llistat'
                    }],
                buttons: [{
                        text: 'Guardar',
                        handler: function (data) {
                            _this.nomLlistat = data;
                            __WEBPACK_IMPORTED_MODULE_5__helpers_storage_helper__["a" /* StorageApp */].set(LlistatPage_1.stored_nomllistat, _this.nomLlistat);
                            _this._globalHelper.presentLoadingCustom();
                        }
                    }, {
                        text: 'Cancelar'
                    }]
            });
            alert_1.present();
        }
        else {
            this._globalHelper.presentLoadingCustom();
        }
        __WEBPACK_IMPORTED_MODULE_5__helpers_storage_helper__["a" /* StorageApp */].set(LlistatPage_1.stored_archiu, this.compraLlistat);
    };
    LlistatPage.stored_archiu = 'stored_archiu';
    LlistatPage.stored_nomllistat = 'stored_nomllistat';
    LlistatPage = LlistatPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-llistat',template:/*ion-inline-start:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\pages\llistat\llistat.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title pull--left>\n\n      <span class="item--header" *ngIf="nomLlistat">{{nomLlistat.nom}}</span>\n\n    </ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-sliding #slidingItem *ngFor="let item of compraLlistat">\n\n      <ion-item [ngStyle]="{\'background-color\':_globalHelper.getColor(item.id)}">\n\n        <span class="item--titul pal10">{{item.titul}}</span>\n\n        <span class="item--producta">{{item.producta}}</span>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button expandable (click)="deleteItem(slidingItem, item.producta, item.titul, item.id)">\n\n          BORRAR\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button color="food" (click)="back()">productes</button>\n\n    <button ion-button color="food_borrar" (tap)="close()" *ngIf="active">borrar</button>\n\n    <button ion-button color="food_guardar" (tap)="archivar()">guardar</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\ce9\Documents\personal\NoeShoppingListApp\src\pages\llistat\llistat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_global_helper__["a" /* GlobalHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LlistatPage);
    return LlistatPage;
    var LlistatPage_1;
}());

//# sourceMappingURL=llistat.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageApp; });
var StorageApp = (function () {
    function StorageApp() {
    }
    StorageApp.getStorage = function (isPersistent) {
        if (isPersistent == true)
            return sessionStorage;
        else
            return localStorage;
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

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_llistat_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_helpers_global_helper__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_llistat_llistat__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_productes_productes__ = __webpack_require__(101);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_productes_productes__["a" /* ProductesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    menuType: 'push',
                    platforms: {
                        android: {
                            activator: 'highlight'
                        }
                    }
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_llistat_llistat__["a" /* LlistatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_productes_productes__["a" /* ProductesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__services_llistat_service__["a" /* LlistatCompraService */],
                __WEBPACK_IMPORTED_MODULE_8__pages_helpers_global_helper__["a" /* GlobalHelper */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map