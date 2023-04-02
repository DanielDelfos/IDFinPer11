import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotizamodelosPage } from './cotizamodelos.page';

const routes: Routes = [
  {
    path: '',
    component: CotizamodelosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotizamodelosPageRoutingModule {}
