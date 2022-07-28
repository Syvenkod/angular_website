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
var GetDataService = /** @class */ (function () {
    function GetDataService(http, datepipe) {
        this.http = http;
        this.datepipe = datepipe;
    }
    GetDataService.prototype.getProductData = function () {
        return this.http.get('https://fakestoreapi.com/products');
    };
    GetDataService.prototype.getCardData = function () {
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
        }));
    };
    GetDataService.prototype.getUserData = function () {
        return this.http.get('https://fakestoreapi.com/users');
    };
    GetDataService.prototype.getCategoriesData = function () {
        return this.http.get('https://fakestoreapi.com/products/categories');
    };
    GetDataService.prototype.getCategoryData = function (category) {
        return this.http.get("https://fakestoreapi.com/products/category/" + category);
    };
    GetDataService = __decorate([
        core_1.Injectable()
    ], GetDataService);
    return GetDataService;
}());
exports.GetDataService = GetDataService;
