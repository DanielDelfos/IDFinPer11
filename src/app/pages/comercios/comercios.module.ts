import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComerciosPageRoutingModule } from './comercios-routing.module';

import { ComerciosPage } from './comercios.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComerciosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [ComerciosPage]
})
export class ComerciosPageModule {}
