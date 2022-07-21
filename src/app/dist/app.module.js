"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var get_data_service_1 = require("./components/shared/get-data.service");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var catalog_component_1 = require("./components/catalog/catalog.component");
var basket_component_1 = require("./components/basket/basket.component");
var page404_component_1 = require("./components/page404/page404.component");
var footer_component_1 = require("./components/footer/footer.component");
var contacts_component_1 = require("./components/contacts/contacts.component");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var ngx_pagination_1 = require("ngx-pagination");
var animations_1 = require("@angular/platform-browser/animations");
var card_1 = require("@angular/material/card");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                catalog_component_1.CatalogComponent,
                basket_component_1.BasketComponent,
                contacts_component_1.ContactsComponent,
                page404_component_1.Page404Component,
                footer_component_1.FooterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                ngx_owl_carousel_o_1.CarouselModule,
                card_1.MatCardModule,
                ngx_pagination_1.NgxPaginationModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule
            ],
            providers: [get_data_service_1.GetDataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
