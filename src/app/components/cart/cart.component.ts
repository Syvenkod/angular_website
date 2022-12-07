import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor( private cartService  : CartService) { }

  ngOnInit(): void {
  }

}