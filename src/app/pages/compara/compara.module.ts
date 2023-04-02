import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComparaPageRoutingModule } from './compara-routing.module';

import { ComparaPage } from './compara.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComparaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComparaPage]
})
export class ComparaPageModule {}
