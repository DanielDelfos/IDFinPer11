import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolbeneficioPage } from './solbeneficio.page';

const routes: Routes = [
  {
    path: '',
    component: SolbeneficioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolbeneficioPageRoutingModule {}
