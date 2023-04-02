import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CobproddetallesPage } from './cobproddetalles.page';

const routes: Routes = [
  {
    path: '',
    component: CobproddetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CobproddetallesPageRoutingModule {}
