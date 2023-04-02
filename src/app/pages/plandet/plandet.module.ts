import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlandetPageRoutingModule } from './plandet-routing.module';

import { PlandetPage } from './plandet.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlandetPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlandetPage]
})
export class PlandetPageModule {}
