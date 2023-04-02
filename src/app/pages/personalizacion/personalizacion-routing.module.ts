import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizacionPage } from './personalizacion.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizacionPageRoutingModule {}
