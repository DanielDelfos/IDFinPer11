import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvacomprasPageRoutingModule } from './ivacompras-routing.module';

import { IvacomprasPage } from './ivacompras.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvacomprasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IvacomprasPage]
})
export class IvacomprasPageModule {}
