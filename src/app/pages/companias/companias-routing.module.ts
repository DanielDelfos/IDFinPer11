import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniasPage } from './companias.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniasPageRoutingModule {}
