"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainModule = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var get_data_service_1 = require("../../shared/get-data.service");
var catalog_component_1 = require("../catalog/catalog.component");
var basket_component_1 = require("../basket/basket.component");
var contacts_component_1 = require("../contacts/contacts.component");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var ngx_pagination_1 = require("ngx-pagination");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var about_us_component_1 = require("../about-us/about-us.component");
var button_1 = require("@angular/material/button");
var main_component_1 = require("../main.component");
var common_1 = require("@angular/common");
var card_1 = require("@angular/material/card");
var card_component_1 = require("../catalog/card/card.component");
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            declarations: [
                catalog_component_1.CatalogComponent,
                basket_component_1.BasketComponent,
                contacts_component_1.ContactsComponent,
                about_us_component_1.AboutUsComponent,
                main_component_1.MainComponent,
                card_component_1.CardComponent
            ],
            imports: [
                common_1.CommonModule,
                ngx_pagination_1.NgxPaginationModule,
                http_1.HttpClientModule,
                ngx_owl_carousel_o_1.CarouselModule,
                card_1.MatCardModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                button_1.MatButtonModule
            ],
            providers: [get_data_service_1.GetDataService]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
