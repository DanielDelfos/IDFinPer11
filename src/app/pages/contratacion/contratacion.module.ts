import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratacionPageRoutingModule } from './contratacion-routing.module';

import { ContratacionPage } from './contratacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContratacionPage]
})
export class ContratacionPageModule {}
