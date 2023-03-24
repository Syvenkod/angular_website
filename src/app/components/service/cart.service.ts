// import { Injectable } from '@angular/core';
// import { Product } from '../models/product';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor() { }

//   items: Product[] = [];
//   badgeContent: number = 0;

//   addToCart(product: Product) {
//     this.items.push(product);
//     this.badgeContent++;
//   }

//   getItems() {
//     return this.items;
//   }

//   getBadgeContent() {
//     return this.badgeContent;
//   }

//   clearCart() {
//     this.items = [];
//     this.badgeContent = 0;
//     return this.items;
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];
  private badgeContent: number = 0;

  private itemsSubject = new BehaviorSubject<Product[]>(this.items);
  items$ = this.itemsSubject.asObservable();

  private badgeContentSubject = new BehaviorSubject<number>(this.badgeContent);
  badgeContent$ = this.badgeContentSubject.asObservable();

  constructor() { }

  addToCart(product: Product) {
    this.items = [...this.items, product];
    this.badgeContent++;
    this.itemsSubject.next(this.items);
    this.badgeContentSubject.next(this.badgeContent);
  }

  clearCart() {
    this.items = [];
    this.badgeContent = 0;
    this.itemsSubject.next(this.items);
    this.badgeContentSubject.next(this.badgeContent);
  }
}
