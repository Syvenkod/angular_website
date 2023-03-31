"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var card_component_1 = require("./card.component");
var ngx_sweetalert2_1 = require("@sweetalert2/ngx-sweetalert2");
var material_module_1 = require("src/app/material.module");
var routes = [
    { path: '', component: card_component_1.CardComponent }
];
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        core_1.NgModule({
            declarations: [
                card_component_1.CardComponent
            ],
            imports: [
                common_1.CommonModule,
                material_module_1.MaterialModule,
                router_1.RouterModule.forChild(routes),
                ngx_sweetalert2_1.SweetAlert2Module
            ]
        })
    ], CardModule);
    return CardModule;
}());
exports.CardModule = CardModule;
