import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizacionesPageRoutingModule } from './personalizaciones-routing.module';

import { PersonalizacionesPage } from './personalizaciones.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizacionesPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [PersonalizacionesPage]
})
export class PersonalizacionesPageModule {}
