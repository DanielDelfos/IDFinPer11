import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiniestroPage } from './siniestro.page';

const routes: Routes = [
  {
    path: '',
    component: SiniestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiniestroPageRoutingModule {}
