import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableroutesPageRoutingModule } from './availableroutes-routing.module';

import { AvailableroutesPage } from './availableroutes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableroutesPageRoutingModule
  ],
  declarations: [AvailableroutesPage]
})
export class AvailableroutesPageModule {}
