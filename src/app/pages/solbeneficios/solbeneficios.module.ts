import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolbeneficiosPageRoutingModule } from './solbeneficios-routing.module';

import { SolbeneficiosPage } from './solbeneficios.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolbeneficiosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [SolbeneficiosPage]
})
export class SolbeneficiosPageModule {}
