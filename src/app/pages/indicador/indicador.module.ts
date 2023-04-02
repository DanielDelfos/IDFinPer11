import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicadorPageRoutingModule } from './indicador-routing.module';

import { IndicadorPage } from './indicador.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IndicadorPage]
})
export class IndicadorPageModule {}
