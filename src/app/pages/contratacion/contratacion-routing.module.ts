import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratacionPage } from './contratacion.page';

const routes: Routes = [
  {
    path: '',
    component: ContratacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratacionPageRoutingModule {}
