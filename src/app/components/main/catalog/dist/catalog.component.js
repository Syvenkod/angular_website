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
    function CatalogComponent(getDataService, dialog, cartService, commonService) {
        this.getDataService = getDataService;
        this.dialog = dialog;
        this.cartService = cartService;
        this.commonService = commonService;
        this.page = 1;
        this.filtered = false;
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.category$.subscribe(function (_category) {
            _this.category = _category;
        });
        this.getAllProducts(this.category);
        this.categoriesDescription = this.getDataService.getCategoriesData().subscribe(function (responce) {
            _this.categories = responce;
        });
    };
    CatalogComponent.prototype.getAllProducts = function (category) {
        var _this = this;
        this.productsDescription = this.getDataService.getProductData(category).subscribe(function (responce) {
            _this.products = responce;
        });
        this.sort = 'Price';
    };
    CatalogComponent.prototype.getPriceInc = function () {
        this.products.sort(function (a, b) { return (a.price - b.price); });
        this.sort = 'Increase';
    };
    CatalogComponent.prototype.getPriceDec = function () {
        this.products.sort(function (a, b) { return (b.price - a.price); });
        this.sort = 'Decrease';
    };
    CatalogComponent.prototype.addToCart = function (product) {
        this.cartService.addToCart({
            product: product.image,
            name: product.title,
            price: product.price,
            quantity: 1,
            id: product.id
        });
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
    CatalogComponent.prototype.ngOnDestroy = function () {
        if (this.productsDescription) {
            this.productsDescription.unsubscribe();
        }
        if (this.categoriesDescription) {
            this.categoriesDescription.unsubscribe();
        }
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
