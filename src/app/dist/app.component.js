"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.title = 'Spilo store';
        this.LogoImage = 'assets/image/spilo-logo.png';
        this.mobile = false;
        this.desktop = true;
        this._cart = { items: [] };
        this.itemsQuantity = 0;
    }
    Object.defineProperty(AppComponent.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        set: function (cart) {
            this._cart = cart;
            this.itemsQuantity = cart.items
                .map(function (item) { return item.quantity; })
                .reduce(function (prev, current) { return prev + current; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerDesktop = document.querySelector('.menu-desktop');
        this.cartService.cart.subscribe(function (_cart) {
            _this.cart = _cart;
        });
    };
    AppComponent.prototype.onWindowScroll = function () {
        this.updateHeaderClass();
    };
    AppComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth <= 576) {
            this.desktop = false;
            this.mobile = true;
        }
        else {
            this.desktop = true;
            this.mobile = false;
        }
    };
    AppComponent.prototype.updateHeaderClass = function () {
        if (window.scrollY > 0 || this.router.url !== '/main') {
            this.headerDesktop.classList.add('fix-menu-desktop');
        }
        else {
            this.headerDesktop.classList.remove('fix-menu-desktop');
        }
    };
    AppComponent.prototype.clearCart = function () {
        this.cartService.clearCart();
    };
    AppComponent.prototype.getTotal = function (items) {
        return this.cartService.getTotal(items);
    };
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "cart");
    __decorate([
        core_1.HostListener('window:scroll')
    ], AppComponent.prototype, "onWindowScroll");
    __decorate([
        core_1.HostListener('window:resize', ['$event'])
    ], AppComponent.prototype, "onResize");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
