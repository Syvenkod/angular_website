import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GetDataService } from '../shared/get-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CatalogComponent implements OnInit, Product {

  constructor(private getDataService: GetDataService) {
   }
   products:any;
   category: string;
   description: string;
   id:number;
   image: string;
   price: number;
   title: string;


  ngOnInit(): void {
    this.getDataService.getData().subscribe(res => {
      this.products = res;
      console.log(res);
    })
  }
  page: number = 1;


  // Carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', '',],
    responsive: {
      1024: {
        items: 1
      }
    },
    // nav: true
  }
    slides = [
      {id: '1', img: "assets/slides/slide_1.jpg"},
      {id: '2', img: "assets/slides/slide_2.jpg"},
      {id: '3', img: "assets/slides/slide_3.jpg"},
    ];
}
