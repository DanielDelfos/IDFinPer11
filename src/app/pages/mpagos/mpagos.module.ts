import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MpagosPageRoutingModule } from './mpagos-routing.module';

import { MpagosPage } from './mpagos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MpagosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MpagosPage]
})
export class MpagosPageModule {}
