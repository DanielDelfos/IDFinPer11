import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizacionesPage } from './personalizaciones.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizacionesPageRoutingModule {}
