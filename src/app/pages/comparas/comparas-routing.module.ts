import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComparasPage } from './comparas.page';

const routes: Routes = [
  {
    path: '',
    component: ComparasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComparasPageRoutingModule {}
