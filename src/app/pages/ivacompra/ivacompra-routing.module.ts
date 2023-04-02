import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvacompraPage } from './ivacompra.page';

const routes: Routes = [
  {
    path: '',
    component: IvacompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IvacompraPageRoutingModule {}
