import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoberturaprodPage } from './coberturaprod.page';

const routes: Routes = [
  {
    path: '',
    component: CoberturaprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoberturaprodPageRoutingModule {}
