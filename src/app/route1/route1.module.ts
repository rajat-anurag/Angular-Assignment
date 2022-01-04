import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './route1.component';
import { MatCardModule } from '@angular/material/card';



const routes: Routes = [{path:'route1', component: Route1Component}]


@NgModule({
  declarations: [Route1Component],
  imports: [
    CommonModule,
     RouterModule.forChild(routes), MatCardModule
  ]
})
export class Route1Module { }
