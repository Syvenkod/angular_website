"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CatalogComponent = void 0;
var core_1 = require("@angular/core");
var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(getDataService) {
        this.getDataService = getDataService;
        this.page = 1;
        this.selected = 'None';
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataService.getProductData().subscribe(function (res) {
            _this.products = _this.productsNotSort = res;
            console.log(_this.products);
        });
        this.getDataService.getCategoriesData().subscribe(function (ct) {
            _this.categories = ct;
        });
        this.getDataService.getPriceInc().subscribe(function (inc) {
            _this.productsSortInc = inc;
            console.log(_this.productsSortInc);
        });
        this.getDataService.getPriceDec().subscribe(function (dec) {
            _this.productsSortDec = dec;
            console.log(_this.productsSortDec);
        });
    };
    CatalogComponent.prototype.showCategory = function (category) {
        var _this = this;
        this.getDataService.getCategoryData(category).subscribe(function (categ) {
            _this.products = categ;
        });
    };
    CatalogComponent.prototype.ngAfterContentChecked = function () {
        switch (this.selected) {
            case 'None':
                this.products = this.productsNotSort;
                break;
            case 'Sort by increase':
                this.products = this.productsSortInc;
                break;
            case 'Sort by decrease':
                this.products = this.productsSortDec;
                break;
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
