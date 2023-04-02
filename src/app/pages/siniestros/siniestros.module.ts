import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiniestrosPageRoutingModule } from './siniestros-routing.module';

import { SiniestrosPage } from './siniestros.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiniestrosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [SiniestrosPage]
})
export class SiniestrosPageModule {}
