import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultanosPage } from './consultanos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultanosPageRoutingModule {}
