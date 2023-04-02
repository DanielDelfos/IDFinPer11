import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProveedorPageRoutingModule } from './proveedor-routing.module';
import { ProveedorPage } from './proveedor.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProveedorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProveedorPage]
})
export class ProveedorPageModule {}
