import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionesPageRoutingModule } from './promociones-routing.module';

import { PromocionesPage } from './promociones.page';
import { ComponentsModule } from '../../components/components.module';
// import { HideHeader2Directive } from '../../directives/hide-header2.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PromocionesPage]
})
export class PromocionesPageModule {}
