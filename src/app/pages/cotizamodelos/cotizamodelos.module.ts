import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizamodelosPageRoutingModule } from './cotizamodelos-routing.module';

import { CotizamodelosPage } from './cotizamodelos.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizamodelosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [CotizamodelosPage]
})
export class CotizamodelosPageModule {}
