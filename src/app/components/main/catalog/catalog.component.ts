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
   products:any;
   productsNotSort: any;
   productsSortInc: any;
   productsSortDec: any;
   category:string;
   categories:any;
   description: string;
   id:number;
   image: string;
   price: number;
   title: string;
   page: number = 1;
   selected ='None';


  ngOnInit(): void {
    this.getDataService.getProductData().subscribe(res => {
      this.products = this.productsNotSort = res;
      console.log(this.products);});
    this.getDataService.getCategoriesData().subscribe(ct => {
      this.categories = ct;});
    this.getDataService.getPriceInc().subscribe(inc => {
      this.productsSortInc = inc;
      console.log(this.productsSortInc);});
    this.getDataService.getPriceDec().subscribe(dec => {
      this.productsSortDec = dec;
      console.log(this.productsSortDec);});

  }

  
  showCategory(category){
    this.getDataService.getCategoryData(category).subscribe(categ => {
      this.products = categ;
    })
  }

  ngAfterContentChecked(): void {
    switch (this.selected){
      case 'None':
        this.products = this.productsNotSort;
        break;
          case 'Sort by increase':
           this.products = this.productsSortInc;
           break;
            case 'Sort by decrease':
              this.products = this.productsSortDec;
              break;
    } 
  }

}
