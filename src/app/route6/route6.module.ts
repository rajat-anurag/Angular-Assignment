import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route6Component } from './route6.component';
import { CustomDirective } from './custom.directive';
import { MatCardModule } from '@angular/material/card';


const routes: Routes = [{path:'route6', component: Route6Component}]


@NgModule({
  declarations: [Route6Component, CustomDirective],
  imports: [
    CommonModule,
     RouterModule.forChild(routes),MatCardModule
  ]
})
export class Route6Module { }
