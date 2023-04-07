import { HttpClient } from '@angular/common/http';
import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, CartItem } from '../models/cart';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = { items: []};
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor( private cartService  : CartService,
               private http: HttpClient) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart =_cart;
      this.dataSource = this.cart.items;
    })
  }

  clearAll():void{
    this.cartService.clearCart();
  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }

  onRemoveFromCart(item): void {
    this.cartService.removeFromCart(item);
  }

  addQuantity(item: CartItem): void{
    this.cartService.addToCart(item)
  }

  removeQuantity(item: CartItem): void{
    this.cartService.removeQuantity(item);
  }

  onCheckout(): void{
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51MsAHHEPXJzrCXNLfu2KeQB7ys1pDGTuipvJTN1NWtP4OBILYsrnEjT5Ucdy6PlB7ZoOfOkMlER6NAYBcbSwzjam00nTL87Kyh');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }
}
