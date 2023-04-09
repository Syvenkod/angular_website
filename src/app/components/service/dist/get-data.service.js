"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GetDataService = void 0;
var cart_list_1 = require("./../models/cart-list");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var BASE_URL = 'https://fakestoreapi.com';
var GetDataService = /** @class */ (function () {
    function GetDataService(http) {
        this.http = http;
    }
    // Products
    GetDataService.prototype.getProductData = function (category) {
        return this.http.get(BASE_URL + "/products" + (category ? '/category/' + category : ''))
            .pipe(operators_1.catchError(this.handleError));
    };
    // Cartlist
    GetDataService.prototype.getCartData = function () {
        return this.http.get(BASE_URL + "/carts")
            .pipe(operators_1.map(function (crd) {
            var newDataArray = [];
            for (var key in crd) {
                newDataArray.push(new cart_list_1.CartList(crd[key].id, crd[key].userId, crd[key].date, crd[key].products));
            }
            newDataArray.forEach(function (card) {
                card.date = new Date(card.date);
            });
            return newDataArray;
        }))
            .pipe(operators_1.catchError(this.handleError));
    };
    // Users
    GetDataService.prototype.getUserData = function () {
        return this.http.get(BASE_URL + "/users")
            .pipe(operators_1.catchError(this.handleError));
    };
    // Categories
    GetDataService.prototype.getCategoriesData = function () {
        return this.http.get(BASE_URL + "/products/categories")
            .pipe(operators_1.catchError(this.handleError));
    };
    // Slides
    GetDataService.prototype.getSlides = function () {
        return this.http.get('../../assets/slides.json')
            .pipe(operators_1.catchError(this.handleError));
    };
    // Error
    GetDataService.prototype.handleError = function (error) {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        }
        else {
            console.error("Backend returned code " + error.status + ", body was: ", error.error);
        }
        return rxjs_1.throwError(function () { return new Error('Something bad happened; please try again later.'); });
    };
    GetDataService = __decorate([
        core_1.Injectable()
    ], GetDataService);
    return GetDataService;
}());
exports.GetDataService = GetDataService;
