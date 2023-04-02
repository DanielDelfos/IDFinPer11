import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescuentoPageRoutingModule } from './descuento-routing.module';

import { DescuentoPage } from './descuento.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescuentoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DescuentoPage]
})
export class DescuentoPageModule {}
