import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route2Component } from './route2.component';
import { RouterModule, Routes } from '@angular/router';

import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{path:'route2', component: Route2Component}]

@NgModule({
  declarations: [Route2Component],
  imports: [
    CommonModule,
     RouterModule.forChild(routes),
      MatGridListModule,
      MatSelectModule,
      MatButtonToggleModule,
     MatIconModule, MatCardModule,MatInputModule,FormsModule
  ]
})
export class Route2Module { }
