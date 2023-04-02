import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniaPage } from './compania.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniaPageRoutingModule {}
