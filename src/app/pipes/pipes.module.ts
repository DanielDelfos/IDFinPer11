import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroProveedoresPipe } from './filtro-proveedores.pipe';
import { FiltroProductosPipe } from './filtro-productos.pipe';
import { FiltroPublicacionesPipe } from './filtro-publicaciones.pipe';
import { FiltroCuponesPipe } from './filtro-cupones.pipe';
import { FiltroDescuentosPipe } from './filtro-descuentos.pipe';
import { FiltroPlanesProdPipe } from './filtro-planes-prod.pipe';
import { FiltroCategoriasPipe } from './filtro-categorias.pipe';
import { FiltroIndicadoresPipe } from './filtro-indicadores.pipe';
import { FiltroCotizamodelosPipe } from './filtro-cotizamodelos.pipe';
import { FiltroCoberturasprodPipe } from './filtro-coberturasprod.pipe';
import { FiltroBeneficiosPipe } from './filtro-beneficios.pipe';
import { FiltroSolbeneficiosPipe } from './filtro-solbeneficios.pipe';
import { FiltroListados1Pipe } from './filtro-listados1.pipe';



@NgModule({
  declarations: [FiltroProveedoresPipe, FiltroProductosPipe, FiltroPublicacionesPipe, FiltroCuponesPipe, FiltroDescuentosPipe, FiltroPlanesProdPipe, FiltroCategoriasPipe, FiltroIndicadoresPipe, FiltroCotizamodelosPipe, FiltroCoberturasprodPipe, FiltroBeneficiosPipe, FiltroSolbeneficiosPipe, FiltroListados1Pipe],
  exports: [FiltroProveedoresPipe, 
            FiltroProductosPipe, 
            FiltroPublicacionesPipe,
            FiltroCuponesPipe,
            FiltroDescuentosPipe,
            FiltroPlanesProdPipe,
            FiltroCategoriasPipe,
            FiltroIndicadoresPipe,
            FiltroCotizamodelosPipe,
            FiltroCoberturasprodPipe,
            FiltroBeneficiosPipe,
            FiltroSolbeneficiosPipe,
            FiltroListados1Pipe
           ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
