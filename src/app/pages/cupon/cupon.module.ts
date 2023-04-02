import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuponPageRoutingModule } from './cupon-routing.module';

import { CuponPage } from './cupon.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuponPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CuponPage]
})
export class CuponPageModule {}
