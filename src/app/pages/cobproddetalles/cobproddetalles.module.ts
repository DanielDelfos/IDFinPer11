import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CobproddetallesPageRoutingModule } from './cobproddetalles-routing.module';

import { CobproddetallesPage } from './cobproddetalles.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CobproddetallesPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [CobproddetallesPage]
})
export class CobproddetallesPageModule {}
