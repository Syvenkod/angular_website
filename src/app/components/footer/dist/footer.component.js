"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FooterComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(getDataService, router, subscribeForm) {
        this.getDataService = getDataService;
        this.router = router;
        this.subscribeForm = subscribeForm;
        this.facebook = free_brands_svg_icons_1.faFacebook;
        this.itstagram = free_brands_svg_icons_1.faInstagram;
        this.pinterest = free_brands_svg_icons_1.faPinterest;
        this.date = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataService.getCategoriesData().subscribe(function (ct) {
            _this.categories = ct;
        });
        this.form = this.subscribeForm.group({
            email: [null, [forms_1.Validators.required, forms_1.Validators.email]]
        });
    };
    FooterComponent.prototype.showCategory = function () {
        this.router.navigateByUrl('catalog');
    };
    FooterComponent.prototype.onSubmit = function (form) {
        console.log(form.value);
        this.form.reset();
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
