import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitsPageRoutingModule } from './kits-routing.module';

import { KitsPage } from './kits.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [KitsPage]
})
export class KitsPageModule {}
