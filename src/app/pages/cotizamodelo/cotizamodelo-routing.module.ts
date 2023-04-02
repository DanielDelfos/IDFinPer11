import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotizamodeloPage } from './cotizamodelo.page';

const routes: Routes = [
  {
    path: '',
    component: CotizamodeloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotizamodeloPageRoutingModule {}
