import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

export class CatalogComponent implements OnInit, Product {

  constructor(private getDataService: GetDataService) {}
   products:any;
   category:string;
   categories:any;
   description: string;
   id:number;
   image: string;
   price: number;
   title: string;
   page: number = 1;


  ngOnInit(): void {
    this.getDataService.getProductData().subscribe(res => {
      this.products = res;
      console.log(res);})
    this.getDataService.getCategoriesData().subscribe(ct => {
      this.categories = ct;
    })
  }

  showCategory(category){
    this.getDataService.getCategoryData(category).subscribe(categ => {
      this.products = categ;
    })
  }


}
