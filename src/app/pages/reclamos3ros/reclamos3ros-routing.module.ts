import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reclamos3rosPage } from './reclamos3ros.page';

const routes: Routes = [
  {
    path: '',
    component: Reclamos3rosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reclamos3rosPageRoutingModule {}
