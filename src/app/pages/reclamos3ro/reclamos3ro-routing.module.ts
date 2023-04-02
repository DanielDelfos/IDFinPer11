import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reclamos3roPage } from './reclamos3ro.page';

const routes: Routes = [
  {
    path: '',
    component: Reclamos3roPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reclamos3roPageRoutingModule {}
