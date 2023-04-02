import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComparasPageRoutingModule } from './comparas-routing.module';

import { ComparasPage } from './comparas.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComparasPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [ComparasPage]
})
export class ComparasPageModule {}
