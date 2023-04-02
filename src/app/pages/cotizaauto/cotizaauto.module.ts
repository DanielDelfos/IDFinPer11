import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizaautoPageRoutingModule } from './cotizaauto-routing.module';

import { CotizaautoPage } from './cotizaauto.page';
import { ComponentsModule } from '../../components/components.module';

// Declar variable para cotizador automotor
// declare var wokanInitWebpack: any;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizaautoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CotizaautoPage]
})
export class CotizaautoPageModule {}

// Cargo la función para el cotizador, el cliente y el color
// Aca en el module para que se cargue una sola vez
// async prueba () {
//   wokanInitWebpack({ sid:'529@5dea767c16384', mainColor:'#513F95' });
// }
// como async no anda, solo acá, dejo de andar
  
