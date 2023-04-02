import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlandetsPageRoutingModule } from './plandets-routing.module';

import { PlandetsPage } from './plandets.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlandetsPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [PlandetsPage]
})
export class PlandetsPageModule {}
