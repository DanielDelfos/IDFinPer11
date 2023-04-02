import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicadorPage } from './indicador.page';

const routes: Routes = [
  {
    path: '',
    component: IndicadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicadorPageRoutingModule {}
