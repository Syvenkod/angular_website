import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
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
import { AnimationType } from "./carousel/carousel.animations";
import { CarouselComponent } from "./carousel/carousel.component";
import { GetDataService } from '../service/get-data.service';

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
  @ViewChild(CarouselComponent) carousel: CarouselComponent;
  constructor(private service: GetDataService) { }
  // show = true;
  slides: any[];

  animationType = AnimationType.Scale;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];

  setAnimationType(type) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }

  ngOnInit(): void {
    // setInterval(()=>this.show = !this.show, 4000)
    this.service.getSlides().subscribe(res =>{
      this.slides = res;
    })
  }

  ngAfterContentChecked(): void {
      // this.show = !this.show
    }
}
