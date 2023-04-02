import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoberturasprodPageRoutingModule } from './coberturasprod-routing.module';

import { CoberturasprodPage } from './coberturasprod.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoberturasprodPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [CoberturasprodPage]
})
export class CoberturasprodPageModule {}
