import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanesPageRoutingModule } from './planes-routing.module';

import { PlanesPage } from './planes.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanesPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [PlanesPage]
})
export class PlanesPageModule {}
