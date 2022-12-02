import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/components/models/product';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../../../service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  constructor( @Inject(MAT_DIALOG_DATA) public data: Product,
              private route: ActivatedRoute,
              private cartService: CartService) {}

  clickedProduct: any|undefined;

  ngOnInit(): void {
    this.clickedProduct = this.data;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
