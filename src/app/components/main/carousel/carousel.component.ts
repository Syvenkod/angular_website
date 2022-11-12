import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut
} from "./carousel.animations";
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "1500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "1500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "1000ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "1000ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "1000ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "1000ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "2000ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "2000ms" } })
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  slides: any[] | undefined;
  animationType = AnimationType.Fade;
  animationTitle = AnimationType.Scale;
  animationDescription = AnimationType.Flip;
  animationButton = AnimationType.JackInTheBox;
  currentSlide = 0;
  show = true;

  constructor(private service: GetDataService) { }

  ngOnInit(): void {
    this.service.getSlides().subscribe(res =>{
      this.slides = res;
    })
    setInterval(() => this.onNextClick(), 8000)
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
