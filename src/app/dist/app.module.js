"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var page404_component_1 = require("./components/page404/page404.component");
var main_module_1 = require("./components/main/main-route/main.module");
var footer_component_1 = require("./components/footer/footer.component");
var common_1 = require("@angular/common");
var core_2 = require("@angular/material/core");
var menu_1 = require("@angular/material/menu");
var icon_1 = require("@angular/material/icon");
var forms_1 = require("@angular/forms");
var ngx_sweetalert2_1 = require("@sweetalert2/ngx-sweetalert2");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                page404_component_1.Page404Component,
                footer_component_1.FooterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                main_module_1.MainModule,
                app_routing_module_1.AppRoutingModule,
                icon_1.MatIconModule,
                core_2.MatCommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                angular_fontawesome_1.FontAwesomeModule,
                menu_1.MatMenuModule,
                ngx_sweetalert2_1.SweetAlert2Module.forRoot()
            ],
            providers: [common_1.DatePipe],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
