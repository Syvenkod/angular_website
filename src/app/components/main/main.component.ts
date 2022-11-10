import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  trigger,
  style,
  animate,
  transition,
  group,
  query,
  animateChild,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('query', [
      transition(':enter', [
        style({ height: 0 }),
        group([
          animate(500, style({ height: '*' })),
          query(':enter', [
            style({ opacity: 0, transform: 'scale(0)'}),
            animate(2000, style({ opacity: 1, transform: 'scale(1)' }))
          ]),
          // query('.btn', [
          //   style({ transform: 'translateX(-100%)'}),
          //   animate('.7s 500ms ease-in', style({ transform: 'translateX(0)' }))
          // ]),
        ]),
      ]),
      // transition(':leave', [
      //   style({ height: '*' }),
      //   group([
      //     animate('500ms 500ms', style({ height: '0'})),
      //     query(':leave', [
      //       style({ opacity: 1, transform: 'scale(1)'}),
      //       animate(1500, style({ opacity: 0, transform: 'scale(0)' }))
      //     ]),
      //     query('.btn', [
      //       style({ transform: 'translateX(0)'}),
      //       animate('.7s ease-out', style({ transform: 'translateX(-100%)' }))
      //     ]),
      //   ]),
      // ]),
    ]),
    // trigger('animateMe', [
    //   transition('* <=> *', animate('500ms cubic-bezier(.68,-0.73,.26,1.65)', keyframes([
    //     style({ backgroundColor: "transparent", color: '*', offset: 0 }),
    //     style({ backgroundColor: "blue", color: 'white', offset: 0.2 }),
    //     style({ backgroundColor: "transparent", color: '*', offset: 1 })
    //   ])))
    // ]),
  ]
})
export class MainComponent implements OnInit, AfterContentChecked {

  constructor() { }
  show = true;

  ngOnInit(): void {
    setInterval(()=>this.show = !this.show, 4000)
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
    nav: false
  }
    slides = [
      {id: '1', img: "assets/slides/slide-01.jpg", title: "Women Collection 2018", desc: "NEW SEASON", btn: "Shop Now"},
      {id: '2', img: "assets/slides/slide-02.jpg", title: "Men New-Season", desc: "Jackets & Coats", btn: "Shop Now"},
      {id: '3', img: "assets/slides/slide-03.jpg", title: "Men Collection 2018", desc: "New arrivals", btn: "Shop Now"},
      {id: '4', img: "assets/slides/slide-04.jpg", title: "Women Collection 2018", desc: "New arrivals", btn: "Shop Now"},
    ];

    ngAfterContentChecked(): void {
      // this.show = !this.show
    }
}
