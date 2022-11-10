"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.show = true;
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
            },
            nav: false
        };
        this.slides = [
            { id: '1', img: "assets/slides/slide-01.jpg", title: "Women Collection 2018", desc: "NEW SEASON", btn: "Shop Now" },
            { id: '2', img: "assets/slides/slide-02.jpg", title: "Men New-Season", desc: "Jackets & Coats", btn: "Shop Now" },
            { id: '3', img: "assets/slides/slide-03.jpg", title: "Men Collection 2018", desc: "New arrivals", btn: "Shop Now" },
            { id: '4', img: "assets/slides/slide-04.jpg", title: "Women Collection 2018", desc: "New arrivals", btn: "Shop Now" },
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { return _this.show = !_this.show; }, 4000);
    };
    MainComponent.prototype.ngAfterContentChecked = function () {
        // this.show = !this.show
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss'],
            animations: [
                animations_1.trigger('query', [
                    animations_1.transition(':enter', [
                        animations_1.style({ height: 0 }),
                        animations_1.group([
                            animations_1.animate(500, animations_1.style({ height: '*' })),
                            animations_1.query(':enter', [
                                animations_1.style({ opacity: 0, transform: 'scale(0)' }),
                                animations_1.animate(2000, animations_1.style({ opacity: 1, transform: 'scale(1)' }))
                            ]),
                        ]),
                    ]),
                ]),
            ]
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
