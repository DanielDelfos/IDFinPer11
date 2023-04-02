import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoberturasprodPage } from './coberturasprod.page';

const routes: Routes = [
  {
    path: '',
    component: CoberturasprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoberturasprodPageRoutingModule {}
