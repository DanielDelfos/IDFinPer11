import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopProveedorComponent } from './pop-proveedor/pop-proveedor.component';
import { PopProveedoresComponent } from './pop-proveedores/pop-proveedores.component';
import { Footer2Component } from './footer2/footer2.component';
import { BotonComponent } from './boton/boton.component';
import { FormConsultaComponent } from './form-consulta/form-consulta.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { Header2Component } from './header2/header2.component';
import { ProductoList2Component } from './producto-list2/producto-list2.component';
import { PublicacionListComponent } from './publicacion-list/publicacion-list.component';
import { IndicadoresListaComponent } from './indicadores-lista/indicadores-lista.component';


@NgModule({
  entryComponents: [
    PopProveedorComponent,
    PopProveedoresComponent
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PopProveedorComponent,
    PopProveedoresComponent,
    Footer2Component,
    BotonComponent,
    FormConsultaComponent,
    ProductoListComponent,
    CotizadorComponent,
    Header2Component,
    ProductoList2Component,
    PublicacionListComponent,
    IndicadoresListaComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PopProveedorComponent,
    PopProveedoresComponent,
    Footer2Component,
    BotonComponent,
    FormConsultaComponent,
    ProductoListComponent,
    CotizadorComponent,
    Header2Component,
    ProductoList2Component,
    PublicacionListComponent,
    IndicadoresListaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
