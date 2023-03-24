import { AfterContentChecked, AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './components/service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked {
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  title = 'Spilo store';
  LogoImage: string = 'assets/image/spilo-logo.png';
  badgeContent: any;
  items: any;
  headerDesktop: HTMLElement;

  ngOnInit(): void {
    this.headerDesktop = document.querySelector<HTMLElement>('.menu-desktop');

  }
  ngAfterContentChecked(): void {
    this.badgeContent = this.cartService.getBadgeContent();
    this.items = this.cartService.getItems();
      }

  ngAfterViewInit(): void {
    this.updateHeaderClass();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateHeaderClass();
  }

  private updateHeaderClass(): void {
    const url = this.activatedRoute.snapshot['_routerState'].url;
    if (window.pageYOffset > 0 || url !== '/main') {
      this.headerDesktop.classList.add('fix-menu-desktop');
    } else {
      this.headerDesktop.classList.remove('fix-menu-desktop');
    }
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
