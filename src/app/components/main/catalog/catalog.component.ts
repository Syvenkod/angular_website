import { ChangeDetectionStrategy, Component, OnInit, AfterContentChecked} from '@angular/core';
import { GetDataService } from '../../shared/get-data.service';

interface Product{
  readonly category: string;
  readonly description: string;
  readonly id:number;
  readonly image: string;
  readonly price: number;
  readonly title: string;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class CatalogComponent implements OnInit, Product, AfterContentChecked {

  constructor(private getDataService: GetDataService) {}
   products: any | undefined;
   category:string;
   categories:any;
   description: string;
   id:number;
   image: string;
   price: number;
   title: string;
   page: number = 1;
   selected ='';
   currentValue: any;


  ngOnInit(): void {
    this.getDataService.getProductData().subscribe(res => {
      this.products = res;
      console.log(this.products);});
    this.getDataService.getCategoriesData().subscribe(ct => {
      this.categories = ct;});
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
        this.getDataService.getProductData().subscribe(res => {
          this.products = res;});
        break;
          case 'Sort by increase':
            this.getPriceInc();
           break;
            case 'Sort by decrease':
              this.getPriceDec();
              break;
    }
  }

}
