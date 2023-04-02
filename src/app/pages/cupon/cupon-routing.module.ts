import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuponPage } from './cupon.page';

const routes: Routes = [
  {
    path: '',
    component: CuponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuponPageRoutingModule {}
