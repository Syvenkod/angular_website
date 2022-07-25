"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainRoute = void 0;
var core_1 = require("@angular/core");
var get_data_service_1 = require("../../shared/get-data.service");
var catalog_component_1 = require("../catalog/catalog.component");
var basket_component_1 = require("../basket/basket.component");
var footer_component_1 = require("../footer/footer.component");
var contacts_component_1 = require("../contacts/contacts.component");
var about_us_component_1 = require("../about-us/about-us.component");
var main_component_1 = require("../main.component");
var common_1 = require("@angular/common");
var MainRoute = /** @class */ (function () {
    function MainRoute() {
    }
    MainRoute = __decorate([
        core_1.NgModule({
            declarations: [
                catalog_component_1.CatalogComponent,
                basket_component_1.BasketComponent,
                contacts_component_1.ContactsComponent,
                footer_component_1.FooterComponent,
                about_us_component_1.AboutUsComponent,
                main_component_1.MainComponent
            ],
            imports: [
                common_1.CommonModule,
            ],
            providers: [get_data_service_1.GetDataService]
        })
    ], MainRoute);
    return MainRoute;
}());
exports.MainRoute = MainRoute;
