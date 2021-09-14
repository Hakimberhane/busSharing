import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutedetailPageRoutingModule } from './routedetail-routing.module';

import { RoutedetailPage } from './routedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutedetailPageRoutingModule
  ],
  declarations: [RoutedetailPage]
})
export class RoutedetailPageModule {}
