import { Product } from './../../models/product';
import { CardComponent } from './card/card.component';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { GetDataService } from '../../service/get-data.service';
import { MatDialog} from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class CatalogComponent implements OnInit, OnDestroy {

  constructor(private getDataService: GetDataService,
              public dialog: MatDialog,
              private cartService: CartService) {}


   products: Array<Product>| undefined;
   categories: Array<string> | undefined;
   page: number = 1;
   currentValue: string | undefined;
   clickedProduct: any | undefined;
   sort: string | undefined;
   filtered: boolean = false;
   productsDescription: Subscription | undefined;
   categoriesDescription: Subscription | undefined;


  ngOnInit(): void {
    this.getAllProducts();
    this.categoriesDescription = this.getDataService.getCategoriesData().subscribe(responce => {
      this.categories = responce;});
  }

  getAllProducts(category?: string){
    this.productsDescription = this.getDataService.getProductData(category).subscribe(responce => {
      this.products = responce;
    })
    this.sort = 'Price';
  }

  getPriceInc(): void {
    this.products.sort((a,b) => (a.price - b.price))
    this.sort = 'Increase';
  }

  getPriceDec(): void{
    this.products.sort((a,b) => (b.price - a.price))
    this.sort = 'Decrease';
  }

  addToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(CardComponent, {
       width: '80%',
       height: 'auto',
       enterAnimationDuration,
       exitAnimationDuration,
       data: this.clickedProduct = new Set<Product>,
       autoFocus: false
     });
     dialogRef.afterClosed().subscribe(result =>{
      this.clickedProduct = {};
     })
   }

   ngOnDestroy(): void {
    if (this.productsDescription) {
      this.productsDescription.unsubscribe();
    }
    if (this.categoriesDescription){
      this.categoriesDescription.unsubscribe();
    }
  }
}
