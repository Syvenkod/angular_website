"use strict";
// import { Injectable } from '@angular/core';
// import { Product } from '../models/product';
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
// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   constructor() { }
//   items: Product[] = [];
//   badgeContent: number = 0;
//   addToCart(product: Product) {
//     this.items.push(product);
//     this.badgeContent++;
//   }
//   getItems() {
//     return this.items;
//   }
//   getBadgeContent() {
//     return this.badgeContent;
//   }
//   clearCart() {
//     this.items = [];
//     this.badgeContent = 0;
//     return this.items;
//   }
// }
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CartService = /** @class */ (function () {
    function CartService() {
        this.items = [];
        this.badgeContent = 0;
        this.itemsSubject = new rxjs_1.BehaviorSubject(this.items);
        this.items$ = this.itemsSubject.asObservable();
        this.badgeContentSubject = new rxjs_1.BehaviorSubject(this.badgeContent);
        this.badgeContent$ = this.badgeContentSubject.asObservable();
    }
    CartService.prototype.addToCart = function (product) {
        this.items = __spreadArrays(this.items, [product]);
        this.badgeContent++;
        this.itemsSubject.next(this.items);
        this.badgeContentSubject.next(this.badgeContent);
    };
    CartService.prototype.clearCart = function () {
        this.items = [];
        this.badgeContent = 0;
        this.itemsSubject.next(this.items);
        this.badgeContentSubject.next(this.badgeContent);
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
