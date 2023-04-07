import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/components/models/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../service/cart.service';
import { CartItem } from 'src/app/components/models/cart';

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
  productQuantity: number = 1;

  ngOnInit(): void {
    this.clickedProduct = this.data;
  }

  addQuantity(): void{
    this.productQuantity ++;
  }

  removeQuantity(): void{
    if (this.productQuantity === 1){
      return
     }
     this.productQuantity --;
  }

  addToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: this.productQuantity,
      id: product.id
    });
  }

}
