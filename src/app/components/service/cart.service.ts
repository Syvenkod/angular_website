import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: Product[] = [];
  badgeContent: number = 0;

  addToCart(product: Product) {
    this.items.push(product);
    this.badgeContent++;
  }

  getItems() {
    return this.items;
  }

  getBadgeContent() {
    return this.badgeContent;
  }

  clearCart() {
    this.items = [];
    this.badgeContent = 0;
    return this.items;
  }
}

