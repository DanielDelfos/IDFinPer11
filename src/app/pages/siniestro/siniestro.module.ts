import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiniestroPageRoutingModule } from './siniestro-routing.module';

import { SiniestroPage } from './siniestro.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiniestroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SiniestroPage]
})
export class SiniestroPageModule {}
