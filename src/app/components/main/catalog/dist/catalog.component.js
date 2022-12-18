"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CatalogComponent = void 0;
var product_1 = require("./../../models/product");
var card_component_1 = require("./card/card.component");
var core_1 = require("@angular/core");
var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(getDataService, dialog) {
        this.getDataService = getDataService;
        this.dialog = dialog;
        this.page = 1;
        this.selected = '';
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataService.getProductData().subscribe(function (res) {
            _this.products = res;
            console.table(_this.products);
        });
        this.getDataService.getCategoriesData().subscribe(function (ct) {
            _this.categories = ct;
        });
    };
    CatalogComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.getDataService.getProductData().subscribe(function (res) {
            _this.products = res;
        });
    };
    CatalogComponent.prototype.showCategory = function (category) {
        var _this = this;
        this.getDataService.getCategoryData(category).subscribe(function (categ) {
            _this.products = categ;
        });
    };
    CatalogComponent.prototype.getPriceInc = function () {
        this.products.sort(function (a, b) { return (a.price - b.price); });
        return this.products;
    };
    CatalogComponent.prototype.getPriceDec = function () {
        this.products.sort(function (a, b) { return (b.price - a.price); });
        return this.products;
    };
    CatalogComponent.prototype.ngAfterContentChecked = function () {
        switch (this.selected) {
            case 'None':
                this.getAllProducts();
                break;
            case 'Sort by increase':
                this.getPriceInc();
                break;
            case 'Sort by decrease':
                this.getPriceDec();
                break;
        }
    };
    CatalogComponent.prototype.openDialog = function (enterAnimationDuration, exitAnimationDuration) {
        var _this = this;
        var dialogRef = this.dialog.open(card_component_1.CardComponent, {
            width: '80%',
            height: 'auto',
            enterAnimationDuration: enterAnimationDuration,
            exitAnimationDuration: exitAnimationDuration,
            data: this.clickedProduct = new Set < product_1.Product > ,
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.clickedProduct = {};
        });
    };
    CatalogComponent = __decorate([
        core_1.Component({
            selector: 'app-catalog',
            templateUrl: './catalog.component.html',
            styleUrls: ['./catalog.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.Default
        })
    ], CatalogComponent);
    return CatalogComponent;
}());
exports.CatalogComponent = CatalogComponent;
