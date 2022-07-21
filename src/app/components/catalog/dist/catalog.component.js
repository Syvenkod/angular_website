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
        // Carousel
        this.customOptions = {
            autoplay: true,
            autoplayTimeout: 8000,
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            navSpeed: 2000,
            navText: ['', '',],
            responsive: {
                1024: {
                    items: 1
                }
            }
        };
        this.slides = [
            { id: '1', img: "assets/slides/slide_1.jpg" },
            { id: '2', img: "assets/slides/slide_2.jpg" },
            { id: '3', img: "assets/slides/slide_3.jpg" },
        ];
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataService.getData().subscribe(function (res) {
            _this.products = res;
            console.log(res);
        });
    };
    CatalogComponent = __decorate([
        core_1.Component({
            selector: 'app-catalog',
            templateUrl: './catalog.component.html',
            styleUrls: ['./catalog.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], CatalogComponent);
    return CatalogComponent;
}());
exports.CatalogComponent = CatalogComponent;
