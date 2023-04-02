import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizamodeloPageRoutingModule } from './cotizamodelo-routing.module';

import { CotizamodeloPage } from './cotizamodelo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizamodeloPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CotizamodeloPage]
})
export class CotizamodeloPageModule {}
