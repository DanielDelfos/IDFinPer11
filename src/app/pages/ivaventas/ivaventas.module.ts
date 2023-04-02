import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IvaventasPageRoutingModule } from './ivaventas-routing.module';

import { IvaventasPage } from './ivaventas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IvaventasPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [IvaventasPage]
})
export class IvaventasPageModule {}
