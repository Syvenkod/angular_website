import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Carousel
  customOptions: OwlOptions = {
    autoplay : true,
    autoplayTimeout: 8000,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 2000,
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
