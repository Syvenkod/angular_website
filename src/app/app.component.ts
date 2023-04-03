import { Component, HostListener, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart, CartItem } from './components/models/cart';
import { CartService } from './components/service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  title = 'Spilo store';
  LogoImage: string = 'assets/image/spilo-logo.png';
  headerDesktop: HTMLElement;
  mobile: boolean = false;
  desktop: boolean = true;

  private _cart: Cart = { items: []};
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }
  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  ngOnInit(): void {
    this.headerDesktop = document.querySelector<HTMLElement>('.menu-desktop');
    this.cartService.cart.subscribe((_cart) => {
      this.cart =_cart;
    })
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateHeaderClass();
  }

  @HostListener('window:resize', ['$event'])
	onResize(event) {
    	if (event.target.innerWidth <= 576){
      this.desktop = false;
      this.mobile = true;
    } else {
      this.desktop = true;
      this.mobile = false;
      }
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

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }
}
