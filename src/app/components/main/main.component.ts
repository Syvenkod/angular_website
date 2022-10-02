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
    navText: ['<', '>',],
    responsive: {
      1024: {
        items: 1
      }
    },
    nav: true
  }
    slides = [
      {id: '1', img: "assets/slides/slide-01.jpg"},
      {id: '2', img: "assets/slides/slide-02.jpg"},
      {id: '3', img: "assets/slides/slide-03.jpg"},
      {id: '4', img: "assets/slides/slide-04.jpg"},
    ];
}
