import { Component, OnInit } from '@angular/core';
import { SharedConstants } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  IMAGE_BG_PORTFOLIO:string = SharedConstants.PATHS.IMAGE_BG_PORTFOLIO;
  IMAGE_PORFOLIO1:string = SharedConstants.PATHS.IMAGE_PORTFOLIO1;
  IMAGE_PORFOLIO2:string = SharedConstants.PATHS.IMAGE_PORTFOLIO2;
  IMAGE_PORFOLIO3:string = SharedConstants.PATHS.IMAGE_PORTFOLIO3;
  IMAGE_PROFILE:string = SharedConstants.PATHS.IMAGE_PROFILE;
  IMAGE_PROFILE2:string = SharedConstants.PATHS.IMAGE_PROFILE2;

  constructor() { }

  ngOnInit(): void {
  }



}
