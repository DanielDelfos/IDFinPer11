import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reclamos3roPageRoutingModule } from './reclamos3ro-routing.module';

import { Reclamos3roPage } from './reclamos3ro.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reclamos3roPageRoutingModule,
    ComponentsModule
  ],
  declarations: [Reclamos3roPage]
})
export class Reclamos3roPageModule {}
