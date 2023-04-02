import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizacionPageRoutingModule } from './personalizacion-routing.module';

import { PersonalizacionPage } from './personalizacion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PersonalizacionPage]
})
export class PersonalizacionPageModule {}
