import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvaventasPage } from './ivaventas.page';

const routes: Routes = [
  {
    path: '',
    component: IvaventasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IvaventasPageRoutingModule {}
