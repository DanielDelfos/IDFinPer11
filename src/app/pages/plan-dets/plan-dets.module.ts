import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanDetsPageRoutingModule } from './plan-dets-routing.module';

import { PlanDetsPage } from './plan-dets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanDetsPageRoutingModule
  ],
  declarations: [PlanDetsPage]
})
export class PlanDetsPageModule {}
