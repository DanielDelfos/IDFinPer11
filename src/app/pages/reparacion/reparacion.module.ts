import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReparacionPageRoutingModule } from './reparacion-routing.module';

import { ReparacionPage } from './reparacion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReparacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReparacionPage]
})
export class ReparacionPageModule {}
