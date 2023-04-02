import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlandetsPage } from './plandets.page';

const routes: Routes = [
  {
    path: '',
    component: PlandetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlandetsPageRoutingModule {}
