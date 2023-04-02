import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotizaautoPage } from './cotizaauto.page';

const routes: Routes = [
  {
    path: '',
    component: CotizaautoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotizaautoPageRoutingModule {}
