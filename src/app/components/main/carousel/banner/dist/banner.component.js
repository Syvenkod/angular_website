"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BannerComponent = void 0;
var core_1 = require("@angular/core");
var BannerComponent = /** @class */ (function () {
    function BannerComponent(commonService, router) {
        this.commonService = commonService;
        this.router = router;
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent.prototype.goToShop = function (category) {
        this.router.navigateByUrl('catalog');
        this.commonService.clickedCategory(category);
    };
    BannerComponent = __decorate([
        core_1.Component({
            selector: 'app-banner',
            templateUrl: './banner.component.html',
            styleUrls: ['./banner.component.scss']
        })
    ], BannerComponent);
    return BannerComponent;
}());
exports.BannerComponent = BannerComponent;
