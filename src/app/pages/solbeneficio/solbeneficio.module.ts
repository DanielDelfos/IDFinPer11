import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolbeneficioPageRoutingModule } from './solbeneficio-routing.module';

import { SolbeneficioPage } from './solbeneficio.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolbeneficioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SolbeneficioPage]
})
export class SolbeneficioPageModule {}
