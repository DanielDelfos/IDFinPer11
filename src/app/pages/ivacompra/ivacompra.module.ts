import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvacompraPageRoutingModule } from './ivacompra-routing.module';

import { IvacompraPage } from './ivacompra.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvacompraPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IvacompraPage]
})
export class IvacompraPageModule {}
