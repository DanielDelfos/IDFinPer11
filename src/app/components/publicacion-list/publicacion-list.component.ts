import { Component, OnInit, ViewChild, Input  } from '@angular/core';
import { Router } from '@angular/router';

import { IonList, ToastController, ActionSheetController, PopoverController, IonContent } from '@ionic/angular';

import { RespuestaPublicaciones } from '../../interfaces/publicaciones.model';
import { PublicacionesService } from '../../services/publicaciones.service';
import { PopProveedoresComponent } from '../../components/pop-proveedores/pop-proveedores.component';


@Component({
  selector: 'app-publicacion-list',
  templateUrl: './publicacion-list.component.html',
  styleUrls: ['./publicacion-list.component.scss'],
})
export class PublicacionListComponent implements OnInit {

  @Input() llamadoDesde: string;

  @ViewChild('lista', {static: false}) lista: IonList;   // para traer la lista del html
  @ViewChild(IonContent, {static: true}) content: IonContent;

  publicaciones: RespuestaPublicaciones[] = [];
  cargandoLista = false;
  textoBuscar = '';
  filtro: string = '';  // lo uso para enviarlo al api rest en get listados

  constructor( private publicacionesService: PublicacionesService,
    public toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private router: Router ) { }

  ngOnInit() {
            // Desplegando lista y mensajes
            this.ListarPublicaciones();
  }

    // Funcion desplegar la api, lista registros y mensajes adicionales
    ListarPublicaciones() {
      // console.log('listando...');
      this.cargandoLista = true;
  
      // Asigno el filtro a usar
      if ( this.llamadoDesde == 'inicio' ) {
        this.filtro = 'publicadas';  
        // console.log( 'filtro promociones') ;
  
      } else {
          if ( this.llamadoDesde == 'blog' ) {
            this.filtro = 'publicadas';  
      
          } else {
              if ( this.llamadoDesde == 'empresas' ) {  // desde aca cambiar
                this.filtro = 'empresas';  
          
              } else {
                if ( this.llamadoDesde == 'kits' ) {
                  this.filtro = 'kits';  
            
                } else {
                  if ( this.llamadoDesde == 'kitsInicio' ) {
                    this.filtro = 'kits';  
              
                  } else {
                    console.log( 'filtro no identificado!!') ;  // no deberia pasar!!
              
                  }
            
                }
              }
      
          }
      }
  
      // Llamo al get del servicio
      this.publicacionesService.getPublicaciones( this.filtro)
        .subscribe( resp => {
  
          // console.log('Resp:', resp);  // Solo para test
          this.publicaciones = resp;
          // console.log('item:', this.productos);
          this.cargandoLista = false;
  
          // Llamar al mensaje tipo tostada
          this.presentToast('Se obtuvieron todos los datos');
  
        });
  
  
    }
  
    // Funcion de Borrar registro
    // (llamada por funcion pregunta)
    borrarPublicacion( publicacion: RespuestaPublicaciones, i: number ) {
  
      this.publicaciones.splice(i, 1);    // borra el registro en memoria
      this.publicacionesService.borrarPublicacion(publicacion.idPublicacion ).subscribe();
      // console.log('borrar:', proveedor.idConsulta);
    }
  
    // Para refresh de la lista
    doRefreshProductos( event ) {
      // console.log('Begin async operation');
  
      this.ListarPublicaciones();
      event.target.complete();   // terminar el refresh
    }
  
    // Buscador de productos
    buscarPublicaciones( event ) {
      // console.log('busqueda: ', event);
      this.textoBuscar = event.detail.value;
  
    }
  
    // Falta desarrollar Favoritos
  /*   favoritoProveedor( proveedor: Respuesta  ) {
      console.log('favorito:', proveedor.idConsulta);
      this.lista.closeSlidingItems();  // para cerrar el desplazamiento en el item
    } */
  
    // Funcion para crear el mensaje tipo tostada
    async presentToast( message: string ) {
      const toast = await this.toastCtrl.create({
        message,
        duration: 2000,
        color: 'primary'
      });
      toast.present();
    }
  
    // Funcion para crear ventanas emergentes (pregunta si elimina el proveedor?)
    // (llamada por boton borrar en html)
    async preguntaBorrarPub( publicacion: RespuestaPublicaciones, i: number) {
      const actionSheet = await this.actionSheetCtrl.create({
        header: '¿ELIMINA LA PUBLICACION?',
        backdropDismiss: false,
        buttons: [{
          text: 'Borrar',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'rojo',
          handler: () => {
            console.log('Delete clicked');
            this.borrarPublicacion( publicacion, i );
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    }
  
    // Mas herramientas sobre el listado de proveedores (boton more) todavia no lo uso
    async productoMore( evento ) {
      const popover = await this.popoverCtrl.create({
        component: PopProveedoresComponent,             // Falta crear pop productos!!!
        event: evento
      });
      await popover.present();
      // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
    }


}
