import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any | undefined;

  constructor( private cartService  : CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.items$;
  }


}
