import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// My components
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
