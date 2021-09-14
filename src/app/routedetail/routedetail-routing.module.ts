import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutedetailPage } from './routedetail.page';

const routes: Routes = [
  {
    path: '',
    component: RoutedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutedetailPageRoutingModule {}
