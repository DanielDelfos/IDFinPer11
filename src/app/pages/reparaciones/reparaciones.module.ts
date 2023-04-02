import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReparacionesPageRoutingModule } from './reparaciones-routing.module';

import { ReparacionesPage } from './reparaciones.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReparacionesPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [ReparacionesPage]
})
export class ReparacionesPageModule {}
