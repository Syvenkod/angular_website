import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  badgeContent: number = 0;
  cart = new BehaviorSubject<Cart>({items: []})

  addToCart(item: CartItem): void{
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart){
      itemInCart.quantity +=1;
    } else {
      items.push(item);
    }

    this.cart.next({items});
  }

  removeQuantity(item: CartItem): void{
    let itemForRemove: CartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) =>{
      if (_item.id === item.id){
        _item.quantity--;

        if (_item.quantity === 0) {
          itemForRemove = _item;
        }
      }
      return _item;
    })
      if (itemForRemove){
        filteredItems = this.removeFromCart(itemForRemove, false);
      }
      this.cart.next({ items: filteredItems});
  }

  clearCart(): void {
    this.cart.next({ items: []})
  }

  getTotal(items: Array<CartItem>): number{
    return items.
    map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem>{
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );
    if (update){
      this.cart.next({items: filteredItems});
    }
    return filteredItems;
  }


}


