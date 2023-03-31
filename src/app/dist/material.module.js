"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/material/core");
var menu_1 = require("@angular/material/menu");
var icon_1 = require("@angular/material/icon");
var badge_1 = require("@angular/material/badge");
var sidenav_1 = require("@angular/material/sidenav");
var card_1 = require("@angular/material/card");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var select_1 = require("@angular/material/select");
var divider_1 = require("@angular/material/divider");
var snack_bar_1 = require("@angular/material/snack-bar");
var table_1 = require("@angular/material/table");
var datepicker_1 = require("@angular/material/datepicker");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                icon_1.MatIconModule,
                core_2.MatCommonModule,
                menu_1.MatMenuModule,
                badge_1.MatBadgeModule,
                sidenav_1.MatSidenavModule,
                card_1.MatCardModule,
                dialog_1.MatDialogModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                select_1.MatSelectModule,
                divider_1.MatDividerModule,
                snack_bar_1.MatSnackBarModule,
                table_1.MatTableModule,
                core_2.MatNativeDateModule,
                datepicker_1.MatDatepickerModule,
            ],
            exports: [
                icon_1.MatIconModule,
                core_2.MatCommonModule,
                menu_1.MatMenuModule,
                badge_1.MatBadgeModule,
                sidenav_1.MatSidenavModule,
                card_1.MatCardModule,
                dialog_1.MatDialogModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                select_1.MatSelectModule,
                divider_1.MatDividerModule,
                snack_bar_1.MatSnackBarModule,
                table_1.MatTableModule,
                core_2.MatNativeDateModule,
                datepicker_1.MatDatepickerModule,
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
