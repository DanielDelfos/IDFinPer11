import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndesarrolloPageRoutingModule } from './endesarrollo-routing.module';

import { EndesarrolloPage } from './endesarrollo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndesarrolloPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EndesarrolloPage]
})
export class EndesarrolloPageModule {}
