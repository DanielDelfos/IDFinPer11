import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reclamos3rosPageRoutingModule } from './reclamos3ros-routing.module';

import { Reclamos3rosPage } from './reclamos3ros.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reclamos3rosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [Reclamos3rosPage]
})
export class Reclamos3rosPageModule {}
