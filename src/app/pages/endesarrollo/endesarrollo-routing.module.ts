import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndesarrolloPage } from './endesarrollo.page';

const routes: Routes = [
  {
    path: '',
    component: EndesarrolloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndesarrolloPageRoutingModule {}
