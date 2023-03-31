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
var get_data_service_1 = require("../../service/get-data.service");
var main_routing_module_1 = require("../main-route/main-routing.module");
var catalog_component_1 = require("../catalog/catalog.component");
var contacts_component_1 = require("../contacts/contacts.component");
var ngx_pagination_1 = require("ngx-pagination");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var about_us_component_1 = require("../about-us/about-us.component");
var main_component_1 = require("../main.component");
var common_1 = require("@angular/common");
var carousel_component_1 = require("../carousel/carousel.component");
var search_filter_pipe_1 = require("../../shared/search-filter.pipe");
var banner_component_1 = require("../carousel/banner/banner.component");
var google_maps_1 = require("@angular/google-maps");
var ngx_sweetalert2_1 = require("@sweetalert2/ngx-sweetalert2");
var material_module_1 = require("src/app/material.module");
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            declarations: [
                catalog_component_1.CatalogComponent,
                contacts_component_1.ContactsComponent,
                about_us_component_1.AboutUsComponent,
                main_component_1.MainComponent,
                carousel_component_1.CarouselComponent,
                banner_component_1.BannerComponent,
                search_filter_pipe_1.SearchFilterPipe,
            ],
            imports: [
                common_1.CommonModule,
                ngx_pagination_1.NgxPaginationModule,
                http_1.HttpClientModule,
                material_module_1.MaterialModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                google_maps_1.GoogleMapsModule,
                main_routing_module_1.MainRoutingModule,
                ngx_sweetalert2_1.SweetAlert2Module
            ],
            providers: [get_data_service_1.GetDataService]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
