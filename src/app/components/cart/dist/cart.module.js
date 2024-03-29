"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var cart_component_1 = require("./cart.component");
var material_module_1 = require("src/app/material.module");
var routes = [
    { path: '', component: cart_component_1.CartComponent }
];
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        core_1.NgModule({
            declarations: [
                cart_component_1.CartComponent
            ],
            imports: [
                common_1.CommonModule,
                material_module_1.MaterialModule,
                router_1.RouterModule.forChild(routes)
            ]
        })
    ], CartModule);
    return CartModule;
}());
exports.CartModule = CartModule;
