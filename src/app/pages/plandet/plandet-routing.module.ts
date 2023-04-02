import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlandetPage } from './plandet.page';

const routes: Routes = [
  {
    path: '',
    component: PlandetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlandetPageRoutingModule {}
