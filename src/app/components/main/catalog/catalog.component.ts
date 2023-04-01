import { Product } from './../../models/product';
import { CardComponent } from './card/card.component';
import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { GetDataService } from '../../service/get-data.service';
import { MatDialog} from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class CatalogComponent implements OnInit, Product {

  constructor(private getDataService: GetDataService,
              public dialog: MatDialog,
              private cartService: CartService) {}

   products: any | undefined;
   category:string;
   categories:Array<string> | undefined;
   description: string;
   id:number;
   image: string;
   price: number;
   title: string;
   page: number = 1;
   currentValue: any | undefined;
   clickedProduct: any | undefined;
   sort: string | undefined;
   filtered: boolean = false;


  ngOnInit(): void {
    this.getAllProducts();
    this.getDataService.getCategoriesData().subscribe(ct => {
      this.categories = ct;});
  }

  getAllProducts(){
    this.getDataService.getProductData().subscribe(responce => {
      this.products = responce;
    })
    this.sort = 'Price';
  }

  showCategory(category){
    this.getDataService.getCategoryData(category).subscribe(categ => {
      this.products = categ;
    })
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

}
