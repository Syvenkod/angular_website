"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommonService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CommonService = /** @class */ (function () {
    function CommonService() {
        this.category$ = new rxjs_1.BehaviorSubject("");
    }
    CommonService.prototype.clickedCategory = function (data) {
        this.category$.next(data);
    };
    CommonService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;
