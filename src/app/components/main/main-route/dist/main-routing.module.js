"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var catalog_component_1 = require("../catalog/catalog.component");
var contacts_component_1 = require("../contacts/contacts.component");
var about_us_component_1 = require("../about-us/about-us.component");
var routes = [
    { path: 'catalog', component: catalog_component_1.CatalogComponent },
    { path: 'about-us', component: about_us_component_1.AboutUsComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'card', loadChildren: function () { return Promise.resolve().then(function () { return require("../catalog/card/card.module"); }).then(function (card) { return card.CardModule; }); } },
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());
exports.MainRoutingModule = MainRoutingModule;
