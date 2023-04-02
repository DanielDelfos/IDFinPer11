import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoberturaprodPageRoutingModule } from './coberturaprod-routing.module';

import { CoberturaprodPage } from './coberturaprod.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoberturaprodPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CoberturaprodPage]
})
export class CoberturaprodPageModule {}
