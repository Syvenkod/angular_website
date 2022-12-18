import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './components/service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentChecked {
  constructor(public router: Router,
              private activatedRoute: ActivatedRoute,
              private cartService  : CartService
              ) {}

  title = 'Spilo store';
  LogoImage: string = 'assets/image/spilo-logo.png';
  headerDesktop: HTMLElement;
  badgeContent: number;


  ngOnInit(): void {
    this.headerDesktop = document.querySelector<HTMLElement>('.menu-desktop');
  }

  ngAfterContentChecked(): void {
    let url = this.activatedRoute.snapshot['_routerState'].url;
    if (window.pageYOffset > 0 || url !== "/main")
      {this.headerDesktop.classList.add('fix-menu-desktop')}
      else
         {this.headerDesktop.classList.remove('fix-menu-desktop')}
    this.badgeContent = this.cartService.getBadgeContent();
  }
}


