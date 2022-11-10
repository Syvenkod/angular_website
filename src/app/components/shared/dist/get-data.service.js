"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GetDataService = void 0;
var core_1 = require("@angular/core");
var card_1 = require("./card");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var GetDataService = /** @class */ (function () {
    function GetDataService(http) {
        this.http = http;
    }
    // Products
    GetDataService.prototype.getProductData = function () {
        return this.http.get('https://fakestoreapi.com/products')
            .pipe(operators_1.catchError(this.handleError));
    };
    // Cart
    GetDataService.prototype.getCartData = function () {
        return this.http.get('https://fakestoreapi.com/carts')
            .pipe(operators_1.map(function (crd) {
            var newDataArray = [];
            for (var key in crd) {
                newDataArray.push(new card_1.Card(crd[key].id, crd[key].userId, crd[key].date, crd[key].products));
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
        return this.http.get('https://fakestoreapi.com/users')
            .pipe(operators_1.catchError(this.handleError));
    };
    // Categories
    GetDataService.prototype.getCategoriesData = function () {
        return this.http.get('https://fakestoreapi.com/products/categories')
            .pipe(operators_1.catchError(this.handleError));
    };
    GetDataService.prototype.getCategoryData = function (category) {
        return this.http.get("https://fakestoreapi.com/products/category/" + category)
            .pipe(operators_1.catchError(this.handleError));
    };
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
