import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IonList, ToastController, ActionSheetController, PopoverController, IonContent } from '@ionic/angular';

import { RespuestaCotizamodelos } from '../../interfaces/cotizamodelos.model';
import { CotizamodelosService } from '../../services/cotizamodelos.service';
import { PopProveedoresComponent } from '../../components/pop-proveedores/pop-proveedores.component';

@Component({
  selector: 'app-cotizamodelos',
  templateUrl: './cotizamodelos.page.html',
  styleUrls: ['./cotizamodelos.page.scss'],
})
export class CotizamodelosPage implements OnInit {

  @Input() llamadoDesde: string;

  @ViewChild('lista', {static: false}) lista: IonList;   // para traer la lista del html
  @ViewChild(IonContent, {static: true}) content: IonContent;

  cotizamodelos: RespuestaCotizamodelos[] = [];
  cargandoLista = false;
  textoBuscar = '';
  filtro: string = '';  // lo uso para enviarlo al api rest en get listados

  constructor( private cotizamodelosService: CotizamodelosService,
               public toastCtrl: ToastController,
               private actionSheetCtrl: ActionSheetController,
               private popoverCtrl: PopoverController,
               private router: Router ) {  // personalizar

  }

  ngOnInit() {
    // Desplegando lista y mensajes
    this.ListarCotizamodelos();

  }

  // Funcion desplegar la api, lista registros y mensajes adicionales
  ListarCotizamodelos() {
    // console.log('listando...');

    this.cargandoLista = true;
    this.filtro = 'todos';

    this.cotizamodelosService.getCotizamodelos( this.filtro )
      .subscribe( resp => {

        // console.log('Resp:', resp);  // Solo para test
        this.cotizamodelos = resp;
        // console.log('item:', this.cotizamodelos);
        this.cargandoLista = false;

        // Llamar al mensaje tipo tostada
        this.presentToast('Se obtuvieron todos los datos');

      });


  }

  // Funcion de Borrar registro
  // (llamada por funcion pregunta)
  borrarCotizamodelo( cotizamodelo: RespuestaCotizamodelos, i: number ) {

    this.cotizamodelos.splice(i, 1);    // borra el registro en memoria
    this.cotizamodelosService.borrarCotizamodelo(cotizamodelo.idCotizamodelo ).subscribe();
    // console.log('borrar:', proveedor.idConsulta);
  }

  // Para refresh de la lista
  doRefreshCotizamodelos( event ) {
    // console.log('Begin async operation');

    this.ListarCotizamodelos();
    event.target.complete();   // terminar el refresh
  }

  // Buscador de cotizamodelos
  buscarCotizamodelos( event ) {
    // console.log('busqueda: ', event);
    this.textoBuscar = event.detail.value;

  }

  // Falta desarrollar Favoritos 
  favoritoCotizamodelo( cotizamodelo ) {
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
  async preguntaBorrarProd( cotizamodelo: RespuestaCotizamodelos, i: number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿ELIMINA EL PRODUCTO?',
      backdropDismiss: false,
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          console.log('Delete clicked');
          this.borrarCotizamodelo( cotizamodelo, i );
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
  async cotizamodelosMore( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopProveedoresComponent,             // Falta crear pop cotizamodelos!!!
      event: evento
    });
    await popover.present();
    // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
  }

}
