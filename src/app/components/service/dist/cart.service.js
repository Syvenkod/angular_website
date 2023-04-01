"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CartService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CartService = /** @class */ (function () {
    function CartService() {
        this.badgeContent = 0;
        this.cart = new rxjs_1.BehaviorSubject({ items: [] });
    }
    CartService.prototype.addToCart = function (item) {
        var items = __spreadArrays(this.cart.value.items);
        var itemInCart = items.find(function (_item) { return _item.id === item.id; });
        if (itemInCart) {
            itemInCart.quantity += 1;
        }
        else {
            items.push(item);
        }
        this.cart.next({ items: items });
    };
    CartService.prototype.removeQuantity = function (item) {
        var itemForRemove;
        var filteredItems = this.cart.value.items.map(function (_item) {
            if (_item.id === item.id) {
                _item.quantity--;
                if (_item.quantity === 0) {
                    itemForRemove = _item;
                }
            }
            return _item;
        });
        if (itemForRemove) {
            filteredItems = this.removeFromCart(itemForRemove, false);
        }
        this.cart.next({ items: filteredItems });
    };
    CartService.prototype.clearCart = function () {
        this.cart.next({ items: [] });
    };
    CartService.prototype.getTotal = function (items) {
        return items.
            map(function (item) { return item.price * item.quantity; })
            .reduce(function (prev, current) { return prev + current; }, 0);
    };
    CartService.prototype.removeFromCart = function (item, update) {
        if (update === void 0) { update = true; }
        var filteredItems = this.cart.value.items.filter(function (_item) { return _item.id !== item.id; });
        if (update) {
            this.cart.next({ items: filteredItems });
        }
        return filteredItems;
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
