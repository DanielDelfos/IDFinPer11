import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicadoresPageRoutingModule } from './indicadores-routing.module';

import { IndicadoresPage } from './indicadores.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicadoresPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [IndicadoresPage]
})
export class IndicadoresPageModule {}
