import { Component, OnInit, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import { SharedConstants } from 'src/app/shared/shared.constants';
import { ProfilesService } from '../../services/profiles.service';

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
    Controller
  ]);

import { SwiperComponent } from 'swiper/angular';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-card-comments',
  templateUrl: './card-comments.component.html',
  styleUrls: ['./card-comments.component.scss']
})
export class CardCommentsComponent implements OnInit {

  ARROW_LEFT:string = SharedConstants.ICONS.ARROW_LEFT;
  ARROW_RIGHT:string = SharedConstants.ICONS.ARROW_RIGHT;

  @ViewChild('swiper', {static:false}) swiper?: SwiperComponent;

  profileItems:any = [];

  // config:SwiperOptions = {
  //   navigation: true,
  //   speed: 1000,
  //   loop: true,
  //   simulateTouch: true,
  //   spaceBetween: 0,
  //   pagination: { clickable: true },
  // }

  constructor( private profileServ:ProfilesService ) {
    this.profileItems = this.profileServ.profileList;
  }

  ngOnInit(): void {
  }

  onSwiper($swiper:any) {
    console.log($swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  slideNext(){
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  }

}
