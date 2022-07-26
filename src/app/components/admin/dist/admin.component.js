"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.AdminComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(getDataService) {
        this.getDataService = getDataService;
        this.columnsToDisplay = ['id', 'userId', 'date', 'products'];
        this.columnsToDisplayWithExpand = __spreadArrays(this.columnsToDisplay, ['expand']);
        this.date = new Date();
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataService.getCardData().subscribe(function (res) {
            _this.cardsSource = res;
        });
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            styleUrls: ['./admin.component.scss'],
            templateUrl: './admin.component.html',
            animations: [
                animations_1.trigger('detailExpand', [
                    animations_1.state('collapsed', animations_1.style({ height: '0px', minHeight: '0' })),
                    animations_1.state('expanded', animations_1.style({ height: '*' })),
                    animations_1.transition('expanded <=> collapsed', animations_1.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ]
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
