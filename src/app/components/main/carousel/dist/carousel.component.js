"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarouselComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var carousel_animations_1 = require("./carousel.animations");
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(service, router) {
        this.service = service;
        this.router = router;
        this.animationType = carousel_animations_1.AnimationType.Fade;
        this.animationTitle = carousel_animations_1.AnimationType.Scale;
        this.animationDescription = carousel_animations_1.AnimationType.Flip;
        this.animationButton = carousel_animations_1.AnimationType.JackInTheBox;
        this.currentSlide = 0;
        this.show = true;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getSlides().subscribe(function (res) {
            _this.slides = res;
        });
        setInterval(function () { return _this.onNextClick(); }, 5000);
    };
    CarouselComponent.prototype.onPreviousClick = function () {
        var previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    };
    CarouselComponent.prototype.onNextClick = function () {
        var next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
    };
    CarouselComponent.prototype.goToShop = function () {
        this.router.navigateByUrl('catalog');
    };
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.scss'],
            animations: [
                animations_1.trigger("slideAnimation", [
                    /* scale */
                    animations_1.transition("void => scale", [
                        animations_1.useAnimation(carousel_animations_1.scaleIn, { params: { time: "1500ms" } })
                    ]),
                    animations_1.transition("scale => void", [
                        animations_1.useAnimation(carousel_animations_1.scaleOut, { params: { time: "1500ms" } })
                    ]),
                    /* fade */
                    animations_1.transition("void => fade", [
                        animations_1.useAnimation(carousel_animations_1.fadeIn, { params: { time: "1000ms" } })
                    ]),
                    animations_1.transition("fade => void", [
                        animations_1.useAnimation(carousel_animations_1.fadeOut, { params: { time: "1000ms" } })
                    ]),
                    /* flip */
                    animations_1.transition("void => flip", [
                        animations_1.useAnimation(carousel_animations_1.flipIn, { params: { time: "1000ms" } })
                    ]),
                    animations_1.transition("flip => void", [
                        animations_1.useAnimation(carousel_animations_1.flipOut, { params: { time: "1000ms" } })
                    ]),
                    /* JackInTheBox */
                    animations_1.transition("void => jackInTheBox", [
                        animations_1.useAnimation(carousel_animations_1.jackIn, { params: { time: "2000ms" } })
                    ]),
                    animations_1.transition("jackInTheBox => void", [
                        animations_1.useAnimation(carousel_animations_1.jackOut, { params: { time: "2000ms" } })
                    ])
                ])
            ]
        })
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
