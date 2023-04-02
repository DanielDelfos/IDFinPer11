import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrasePage } from './frase.page';

const routes: Routes = [
  {
    path: '',
    component: FrasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrasePageRoutingModule {}
