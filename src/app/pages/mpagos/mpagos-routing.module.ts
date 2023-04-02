import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MpagosPage } from './mpagos.page';

const routes: Routes = [
  {
    path: '',
    component: MpagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MpagosPageRoutingModule {}
