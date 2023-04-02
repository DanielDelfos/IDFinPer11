import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CobproddetallePageRoutingModule } from './cobproddetalle-routing.module';

import { CobproddetallePage } from './cobproddetalle.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CobproddetallePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CobproddetallePage]
})
export class CobproddetallePageModule {}
