import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultanosPageRoutingModule } from './consultanos-routing.module';

import { ConsultanosPage } from './consultanos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultanosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConsultanosPage]
})
export class ConsultanosPageModule {}
