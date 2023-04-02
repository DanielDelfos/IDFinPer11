import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiniestrosPage } from './siniestros.page';

const routes: Routes = [
  {
    path: '',
    component: SiniestrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiniestrosPageRoutingModule {}
