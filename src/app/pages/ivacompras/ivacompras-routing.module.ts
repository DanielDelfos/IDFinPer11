import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvacomprasPage } from './ivacompras.page';

const routes: Routes = [
  {
    path: '',
    component: IvacomprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IvacomprasPageRoutingModule {}
