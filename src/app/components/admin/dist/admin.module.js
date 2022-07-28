"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var admin_component_1 = require("./admin.component");
var table_1 = require("@angular/material/table");
var icon_1 = require("@angular/material/icon");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var routes = [
    { path: '', component: admin_component_1.AdminComponent }
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                admin_component_1.AdminComponent
            ],
            imports: [
                common_1.CommonModule,
                table_1.MatTableModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                core_2.MatNativeDateModule,
                datepicker_1.MatDatepickerModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                router_1.RouterModule.forChild(routes)
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
