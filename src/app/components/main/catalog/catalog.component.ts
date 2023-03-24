import { Product } from './../../models/product';
import { CardComponent } from './card/card.component';
import { ChangeDetectionStrategy, Component, OnInit, AfterContentChecked} from '@angular/core';
import { GetDataService } from '../../service/get-data.service';
import { MatDialog} from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class CatalogComponent implements OnInit, Product, AfterContentChecked {

  constructor(private getDataService: GetDataService,
              public dialog: MatDialog,
              private cartService: CartService) {}

   products: any | undefined;
   category:string;
   categories:any|undefined;
   description: string;
   id:number;
   image: string;
   price: number;
   title: string;
   page: number = 1;
   selected ='';
   currentValue: any | undefined;
   clickedProduct: any | undefined;


  ngOnInit(): void {
    this.getDataService.getProductData().subscribe(res => {
      this.products = res;
      console.table(this.products);});
    this.getDataService.getCategoriesData().subscribe(ct => {
      this.categories = ct;});
  }

  getAllProducts(){
    this.getDataService.getProductData().subscribe(res => {
      this.products = res;
    })
  }

  showCategory(category){
    this.getDataService.getCategoryData(category).subscribe(categ => {
      this.products = categ;
    })
  }

  getPriceInc(){
    this.products.sort((a,b) => (a.price - b.price))
    return this.products;
  }

  getPriceDec(){
    this.products.sort((a,b) => (b.price - a.price))
    return this.products;
  }


  ngAfterContentChecked(): void {
    switch (this.selected){
      case 'None':
        this.getAllProducts();
        break;
          case 'Sort by increase':
            this.getPriceInc();
           break;
            case 'Sort by decrease':
              this.getPriceDec();
              break;
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
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
