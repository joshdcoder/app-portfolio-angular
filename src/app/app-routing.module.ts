import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path:'inicio', component: HomeComponent},
  { path:'**', component:HomeComponent},
  { path:'', redirectTo:'/inicio', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{
    anchorScrolling:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
