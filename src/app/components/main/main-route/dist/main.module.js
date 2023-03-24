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
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var about_us_component_1 = require("../about-us/about-us.component");
var button_1 = require("@angular/material/button");
var main_component_1 = require("../main.component");
var common_1 = require("@angular/common");
var card_1 = require("@angular/material/card");
var carousel_component_1 = require("../carousel/carousel.component");
var select_1 = require("@angular/material/select");
var icon_1 = require("@angular/material/icon");
var search_filter_pipe_1 = require("../../shared/search-filter.pipe");
var divider_1 = require("@angular/material/divider");
var banner_component_1 = require("../carousel/banner/banner.component");
var google_maps_1 = require("@angular/google-maps");
var dialog_1 = require("@angular/material/dialog");
var snack_bar_1 = require("@angular/material/snack-bar");
var ngx_sweetalert2_1 = require("@sweetalert2/ngx-sweetalert2");
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
                card_1.MatCardModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                select_1.MatSelectModule,
                icon_1.MatIconModule,
                divider_1.MatDividerModule,
                google_maps_1.GoogleMapsModule,
                dialog_1.MatDialogModule,
                main_routing_module_1.MainRoutingModule,
                snack_bar_1.MatSnackBarModule,
                ngx_sweetalert2_1.SweetAlert2Module
            ],
            providers: [get_data_service_1.GetDataService]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
