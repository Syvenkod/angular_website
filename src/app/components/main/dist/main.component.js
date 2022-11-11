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
var carousel_animations_1 = require("./carousel/carousel.animations");
var carousel_component_1 = require("./carousel/carousel.component");
var MainComponent = /** @class */ (function () {
    function MainComponent(service) {
        this.service = service;
        this.animationType = carousel_animations_1.AnimationType.Scale;
        this.animationTypes = [
            {
                name: "Scale",
                value: carousel_animations_1.AnimationType.Scale
            },
            {
                name: "Fade",
                value: carousel_animations_1.AnimationType.Fade
            },
            {
                name: "Flip",
                value: carousel_animations_1.AnimationType.Flip
            },
            {
                name: "Jack In The Box",
                value: carousel_animations_1.AnimationType.JackInTheBox
            }
        ];
    }
    MainComponent.prototype.setAnimationType = function (type) {
        var _this = this;
        this.animationType = type.value;
        setTimeout(function () {
            _this.carousel.onNextClick();
        });
    };
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        // setInterval(()=>this.show = !this.show, 4000)
        this.service.getSlides().subscribe(function (res) {
            _this.slides = res;
        });
    };
    MainComponent.prototype.ngAfterContentChecked = function () {
        // this.show = !this.show
    };
    __decorate([
        core_1.ViewChild(carousel_component_1.CarouselComponent)
    ], MainComponent.prototype, "carousel");
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
