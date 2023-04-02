import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitsPage } from './kits.page';

const routes: Routes = [
  {
    path: '',
    component: KitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitsPageRoutingModule {}
