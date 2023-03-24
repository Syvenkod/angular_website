"use strict";
// import { AfterContentChecked, Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CartService } from './components/service/cart.service';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit, AfterContentChecked {
//   constructor(public router: Router,
//               private activatedRoute: ActivatedRoute,
//               private cartService  : CartService
//               ) {}
//   title = 'Spilo store';
//   LogoImage: string = 'assets/image/spilo-logo.png';
//   headerDesktop: HTMLElement;
//   badgeContent: number;
//   items: any [] | undefined;
//   ngOnInit(): void {
//     this.headerDesktop = document.querySelector<HTMLElement>('.menu-desktop');
//   }
//   ngAfterContentChecked(): void {
//     let url = this.activatedRoute.snapshot['_routerState'].url;
//     if (window.pageYOffset > 0 || url !== "/main")
//       {this.headerDesktop.classList.add('fix-menu-desktop')}
//       else
//          {this.headerDesktop.classList.remove('fix-menu-desktop')}
//     this.badgeContent = this.cartService.getBadgeContent();
//     this.items = this.cartService.getItems();
//   }
//   clearCart(){
//     this.cartService.clearCart();
//   }
// }
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, cartService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.title = 'Spilo store';
        this.LogoImage = 'assets/image/spilo-logo.png';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.badgeContent = this.cartService.badgeContent$;
        this.items = this.cartService.items$;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.updateHeaderClass();
    };
    AppComponent.prototype.onWindowScroll = function () {
        this.updateHeaderClass();
    };
    AppComponent.prototype.updateHeaderClass = function () {
        var url = this.activatedRoute.snapshot['_routerState'].url;
        if (window.pageYOffset > 0 || url !== '/main') {
            this.headerDesktop.classList.add('fix-menu-desktop');
        }
        else {
            this.headerDesktop.classList.remove('fix-menu-desktop');
        }
    };
    AppComponent.prototype.clearCart = function () {
        this.cartService.clearCart();
    };
    __decorate([
        core_1.ViewChild('headerDesktop')
    ], AppComponent.prototype, "headerDesktop");
    __decorate([
        core_1.HostListener('window:scroll')
    ], AppComponent.prototype, "onWindowScroll");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
