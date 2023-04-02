import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CobproddetallePage } from './cobproddetalle.page';

const routes: Routes = [
  {
    path: '',
    component: CobproddetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CobproddetallePageRoutingModule {}
