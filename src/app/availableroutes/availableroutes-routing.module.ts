import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableroutesPage } from './availableroutes.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableroutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableroutesPageRoutingModule {}
