import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ivacompras',
    loadChildren: () => import('./pages/ivacompras/ivacompras.module').then( m => m.IvacomprasPageModule)
  },
  {
    path: 'ivaventas',
    loadChildren: () => import('./pages/ivaventas/ivaventas.module').then( m => m.IvaventasPageModule)
  },
  {
    path: 'endesarrollo',
    loadChildren: () => import('./pages/endesarrollo/endesarrollo.module').then( m => m.EndesarrolloPageModule)
  },
  {
    path: 'ivacompra',
    loadChildren: () => import('./pages/ivacompra/ivacompra.module').then( m => m.IvacompraPageModule)
  },
  {
    path: 'proveedores',
    loadChildren: () => import('./pages/proveedores/proveedores.module').then( m => m.ProveedoresPageModule)
  },
  {
    path: 'proveedor/:id',
    loadChildren: () => import('./pages/proveedor/proveedor.module').then( m => m.ProveedorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'consultanos',
    loadChildren: () => import('./pages/consultanos/consultanos.module').then( m => m.ConsultanosPageModule)
  },
  {
    path: 'promociones',
    loadChildren: () => import('./pages/promociones/promociones.module').then( m => m.PromocionesPageModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./pages/empresas/empresas.module').then( m => m.EmpresasPageModule)
  },
  {
    path: 'siniestros',
    loadChildren: () => import('./pages/siniestros/siniestros.module').then( m => m.SiniestrosPageModule)
  },
  {
    path: 'quejas',
    loadChildren: () => import('./pages/quejas/quejas.module').then( m => m.QuejasPageModule)
  },
  {
    path: 'politicas',
    loadChildren: () => import('./pages/politicas/politicas.module').then( m => m.PoliticasPageModule)
  },
  {
    path: 'cotizaauto',
    loadChildren: () => import('./pages/cotizaauto/cotizaauto.module').then( m => m.CotizaautoPageModule)
  },
  {
    path: 'personales',
    loadChildren: () => import('./pages/personales/personales.module').then( m => m.PersonalesPageModule)
  },
  {
    path: 'beneficios',
    loadChildren: () => import('./pages/beneficios/beneficios.module').then( m => m.BeneficiosPageModule)
  },
  {
    path: 'mpagos',
    loadChildren: () => import('./pages/mpagos/mpagos.module').then( m => m.MpagosPageModule)
  },
  {
    path: 'compara/:id',
    loadChildren: () => import('./pages/compara/compara.module').then( m => m.ComparaPageModule)
  },
  {
    path: 'producto/:id',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'seguro/:id',
    loadChildren: () => import('./pages/seguro/seguro.module').then( m => m.SeguroPageModule)
  },
  {
    path: 'kits',
    loadChildren: () => import('./pages/kits/kits.module').then( m => m.KitsPageModule)
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./pages/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },
  {
    path: 'publicacion/:id',
    loadChildren: () => import('./pages/publicacion/publicacion.module').then( m => m.PublicacionPageModule)
  },
  {
    path: 'blog/:id',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'cupon/:id',
    loadChildren: () => import('./pages/cupon/cupon.module').then( m => m.CuponPageModule)
  },
  {
    path: 'cupones',
    loadChildren: () => import('./pages/cupones/cupones.module').then( m => m.CuponesPageModule)
  },
  {
    path: 'descuento/:id',
    loadChildren: () => import('./pages/descuento/descuento.module').then( m => m.DescuentoPageModule)
  },
  {
    path: 'descuentos',
    loadChildren: () => import('./pages/descuentos/descuentos.module').then( m => m.DescuentosPageModule)
  },
  {
    path: 'planes/:id',
    loadChildren: () => import('./pages/planes/planes.module').then( m => m.PlanesPageModule)
  },
  {
    path: 'plan/:id',
    loadChildren: () => import('./pages/plan/plan.module').then( m => m.PlanPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'categoria/:id',
    loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'indicadores',
    loadChildren: () => import('./pages/indicadores/indicadores.module').then( m => m.IndicadoresPageModule)
  },
  {
    path: 'indicador/:id',
    loadChildren: () => import('./pages/indicador/indicador.module').then( m => m.IndicadorPageModule)
  },
  {
    path: 'cotizamodelos',
    loadChildren: () => import('./pages/cotizamodelos/cotizamodelos.module').then( m => m.CotizamodelosPageModule)
  },
  {
    path: 'cotizamodelo/:id',
    loadChildren: () => import('./pages/cotizamodelo/cotizamodelo.module').then( m => m.CotizamodeloPageModule)
  },
  {
    path: 'coberturasprod/:id',
    loadChildren: () => import('./pages/coberturasprod/coberturasprod.module').then( m => m.CoberturasprodPageModule)
  },
  {
    path: 'coberturaprod/:id',
    loadChildren: () => import('./pages/coberturaprod/coberturaprod.module').then( m => m.CoberturaprodPageModule)
  },
  {
    path: 'solbeneficios',
    loadChildren: () => import('./pages/solbeneficios/solbeneficios.module').then( m => m.SolbeneficiosPageModule)
  },
  {
    path: 'solbeneficio/:id',
    loadChildren: () => import('./pages/solbeneficio/solbeneficio.module').then( m => m.SolbeneficioPageModule)
  },
  {
    path: 'comparas',
    loadChildren: () => import('./pages/comparas/comparas.module').then( m => m.ComparasPageModule)
  },
  {
    path: 'comercios',
    loadChildren: () => import('./pages/comercios/comercios.module').then( m => m.ComerciosPageModule)
  },
  {
    path: 'comercio/:id',
    loadChildren: () => import('./pages/comercio/comercio.module').then( m => m.ComercioPageModule)
  },
  {
    path: 'reclamos3ros',
    loadChildren: () => import('./pages/reclamos3ros/reclamos3ros.module').then( m => m.Reclamos3rosPageModule)
  },
  {
    path: 'reclamos3ro/:id',
    loadChildren: () => import('./pages/reclamos3ro/reclamos3ro.module').then( m => m.Reclamos3roPageModule)
  },
  {
    path: 'frases',
    loadChildren: () => import('./pages/frases/frases.module').then( m => m.FrasesPageModule)
  },
  {
    path: 'frase/:id',
    loadChildren: () => import('./pages/frase/frase.module').then( m => m.FrasePageModule)
  },
  {
    path: 'encuestas',
    loadChildren: () => import('./pages/encuestas/encuestas.module').then( m => m.EncuestasPageModule)
  },
  {
    path: 'encuesta/:id',
    loadChildren: () => import('./pages/encuesta/encuesta.module').then( m => m.EncuestaPageModule)
  },
  {
    path: 'siniestro/:id',
    loadChildren: () => import('./pages/siniestro/siniestro.module').then( m => m.SiniestroPageModule)
  },
  {
    path: 'reparaciones',
    loadChildren: () => import('./pages/reparaciones/reparaciones.module').then( m => m.ReparacionesPageModule)
  },
  {
    path: 'reparacion/:id',
    loadChildren: () => import('./pages/reparacion/reparacion.module').then( m => m.ReparacionPageModule)
  },
  {
    path: 'plandets/:id',
    loadChildren: () => import('./pages/plandets/plandets.module').then( m => m.PlandetsPageModule)
  },
  {
    path: 'plandet/:id',
    loadChildren: () => import('./pages/plandet/plandet.module').then( m => m.PlandetPageModule)
  },
  {
    path: 'cobproddetalles/:id',
    loadChildren: () => import('./pages/cobproddetalles/cobproddetalles.module').then( m => m.CobproddetallesPageModule)
  },
  {
    path: 'cobproddetalle/:id',
    loadChildren: () => import('./pages/cobproddetalle/cobproddetalle.module').then( m => m.CobproddetallePageModule)
  },
  {
    path: 'personalizaciones/:id',
    loadChildren: () => import('./pages/personalizaciones/personalizaciones.module').then( m => m.PersonalizacionesPageModule)
  },
  {
    path: 'personalizacion/:id',
    loadChildren: () => import('./pages/personalizacion/personalizacion.module').then( m => m.PersonalizacionPageModule)
  },
  {
    path: 'contratacion/:id',
    loadChildren: () => import('./pages/contratacion/contratacion.module').then( m => m.ContratacionPageModule)
  },
  {
    path: 'contrataciones',
    loadChildren: () => import('./pages/contrataciones/contrataciones.module').then( m => m.ContratacionesPageModule)
  },
  {
    path: 'companias/:id',
    loadChildren: () => import('./pages/companias/companias.module').then( m => m.CompaniasPageModule)
  },
  {
    path: 'compania/:id',
    loadChildren: () => import('./pages/compania/compania.module').then( m => m.CompaniaPageModule)
  },
  {
    path: 'configuracion/:id',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./pages/configuraciones/configuraciones.module').then( m => m.ConfiguracionesPageModule)
  },  
  {
    // a los nuevos, subir arriba de este
    // cuando no encuentra la página, si tiene login poner login (curso de cero, clase 214)
    // si es el abmc de una entiedad, ejemplo cupon, agregar el parametro del id
    path: '**',
    pathMatch: 'full', redirectTo: 'inicio'
  },
  {
    path: 'plan-dets', // para eliminar
    loadChildren: () => import('./pages/plan-dets/plan-dets.module').then( m => m.PlanDetsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }