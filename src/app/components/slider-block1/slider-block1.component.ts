import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedConstants } from '../../shared/shared.constants';

import SwiperCore, {
  // SwiperOptions,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  EffectFade,
  Controller } from 'swiper';

SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Virtual,
    Zoom,
    Autoplay,
    Thumbs,
    EffectFade,
    Controller
  ]);

import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-slider-block1',
  templateUrl: './slider-block1.component.html',
  styleUrls: ['./slider-block1.component.scss']
})
export class SliderBlock1Component implements OnInit {

  TEAMWORK1:string = SharedConstants.PROFILESWK_PATHS.teamwork1;
  TEAMWORK2:string = SharedConstants.PROFILESWK_PATHS.teamwork2;
  TEAMWORK3:string = SharedConstants.PROFILESWK_PATHS.teamwork3;
  TEAMWORK4:string = SharedConstants.PROFILESWK_PATHS.teamwork4;

  @ViewChild('swiperFaded', {static:false}) swiperFaded?: SwiperComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper($swiper:any){
    console.log($swiper);
  }

  onSlideChange(){
    console.log('slide change');
  }

}
