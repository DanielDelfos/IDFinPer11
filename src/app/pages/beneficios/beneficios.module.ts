import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiosPageRoutingModule } from './beneficios-routing.module';

import { BeneficiosPage } from './beneficios.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [BeneficiosPage]
})
export class BeneficiosPageModule {}
