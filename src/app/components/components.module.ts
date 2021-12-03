import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// My components
import { CardCommentsComponent } from './card-comments/card-comments.component';
import { SliderBlock1Component } from './slider-block1/slider-block1.component';



@NgModule({
  declarations: [
    CardCommentsComponent,
    SliderBlock1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardCommentsComponent,
    SliderBlock1Component
  ]
})
export class ComponentsModule { }
