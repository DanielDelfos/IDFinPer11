import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratacionesPageRoutingModule } from './contrataciones-routing.module';

import { ContratacionesPage } from './contrataciones.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratacionesPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [ContratacionesPage]
})
export class ContratacionesPageModule {}
