import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, CartItem } from '../models/cart';

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

  constructor( private cartService  : CartService) { }

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
}
