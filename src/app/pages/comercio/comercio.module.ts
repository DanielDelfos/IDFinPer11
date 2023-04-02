import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComercioPageRoutingModule } from './comercio-routing.module';

import { ComercioPage } from './comercio.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComercioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComercioPage]
})
export class ComercioPageModule {}
