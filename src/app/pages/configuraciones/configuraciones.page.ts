import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IonList, ToastController, ActionSheetController, PopoverController, IonContent } from '@ionic/angular';

import { RespuestaConfiguraciones } from '../../interfaces/configuraciones.model';
import { ApiconnectService } from '../../services/apiconnect.service';
import { PopProveedoresComponent } from '../../components/pop-proveedores/pop-proveedores.component';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
})
export class ConfiguracionesPage implements OnInit {



  @Input() llamadoDesde: string;

  @ViewChild('lista', {static: false}) lista: IonList;   // para traer la lista del html
  @ViewChild(IonContent, {static: true}) content: IonContent;

  configuraciones: RespuestaConfiguraciones[] = [];
  cargandoLista = false;

  textoBuscar = '';
  filtro: string = '';  // lo uso para enviarlo al api rest en get listados
  apiEntidad: string = '';  //para ejecutar la API REST 

  constructor( private apiconnectService: ApiconnectService,  
               public toastCtrl: ToastController,
               private actionSheetCtrl: ActionSheetController,
               private popoverCtrl: PopoverController,
               private router: Router ) {  // personalizar

  }

  ngOnInit() {
    // Desplegando lista y mensajes
    this.ListarConfiguraciones();

  }

  // Funcion desplegar la api, lista registros y mensajes adicionales
  ListarConfiguraciones() {
    // console.log('listando...');

    this.cargandoLista = true;
    this.filtro = 'todos';
    this.apiEntidad = 'configuraciones';

    this.apiconnectService.getEntidad( this.filtro, this.apiEntidad )
      .subscribe( resp => {

        // console.log('Resp:', resp);  // Solo para test
        this.configuraciones = resp;
        // console.log('item:', this.configuraciones);
        this.cargandoLista = false;

        // Llamar al mensaje tipo tostada
        this.presentToast('Se obtuvieron todos los datos');

      });


  }

  // Funcion de Borrar registro
  // (llamada por funcion pregunta)
  borrarConfiguracion( configuracion: RespuestaConfiguraciones, i: number ) {

    this.configuraciones.splice(i, 1);    // borra el registro en memoria

    this.apiEntidad = 'configuraciones';
    this.apiconnectService.borrarEntidad(configuracion.idConfiguracion, this.apiEntidad ).subscribe();
    // console.log('borrar:', proveedor.idConsulta);
  }

  // Para refresh de la lista
  doRefreshConfiguraciones( event ) {
    // console.log('Begin async operation');

    this.ListarConfiguraciones();
    event.target.complete();   // terminar el refresh
  }

  // Buscador de configuraciones
  buscarConfiguraciones( event ) {
    // console.log('busqueda: ', event);
    this.textoBuscar = event.detail.value;

  }

  // Falta desarrollar Favoritos 
  favoritoConfiguracion( configuracion ) {
    // console.log('favorito:', proveedor.idConsulta);
    // this.lista.closeSlidingItems();  // para cerrar el desplazamiento en el item
  }

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
  async preguntaBorrarProd( configuracion: RespuestaConfiguraciones, i: number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿ELIMINA EL REGISTRO?',
      backdropDismiss: false,
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          // console.log('Delete clicked');
          this.borrarConfiguracion( configuracion, i );
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  // Mas herramientas sobre el listado de proveedores (boton more) todavia no lo uso
  async configuracionesMore( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopProveedoresComponent,             // Falta crear pop configuraciones!!!
      event: evento
    });
    await popover.present();
    // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
  }

}
