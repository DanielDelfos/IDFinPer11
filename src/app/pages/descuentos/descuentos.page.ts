// SON CUPONES DE DESCUENTO EN EL SITIO WEB

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IonList, ToastController, ActionSheetController, PopoverController, IonContent } from '@ionic/angular';

import { RespuestaDescuentos } from '../../interfaces/descuentos.model';
import { DescuentosService } from '../../services/descuentos.service';
import { PopProveedoresComponent } from '../../components/pop-proveedores/pop-proveedores.component';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.page.html',
  styleUrls: ['./descuentos.page.scss'],
})
export class DescuentosPage implements OnInit {

  @Input() llamadoDesde: string;

  @ViewChild('lista', {static: false}) lista: IonList;   // para traer la lista del html
  @ViewChild(IonContent, {static: true}) content: IonContent;

  descuentos: RespuestaDescuentos[] = [];
  cargandoLista = false;
  textoBuscar = '';
  filtro: string = '';  // lo uso para enviarlo al api rest en get listados

  constructor( private descuentosService: DescuentosService,
    public toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private router: Router ) { }

  ngOnInit() {

                // Desplegando lista y mensajes
                this.ListarDescuentos();

  }


  // Funcion desplegar la api, lista registros y mensajes adicionales
  ListarDescuentos() {
    // console.log('listando...');

    this.cargandoLista = true;
    // this.filtro = 'publicadas';
    this.filtro = 'todos';

    this.descuentosService.getDescuentos( this.filtro )
      .subscribe( resp => {

        // console.log('Resp:', resp);  // Solo para test
        this.descuentos = resp;
        // console.log('item:', this.productos);
        this.cargandoLista = false;

        // Llamar al mensaje tipo tostada
        this.presentToast('Se obtuvieron todos los datos');

      });


  }

  // Funcion de Borrar registro
  // (llamada por funcion pregunta)
  borrarDescuento( descuento: RespuestaDescuentos, i: number ) {

    this.descuentos.splice(i, 1);    // borra el registro en memoria
    this.descuentosService.borrarDescuento(descuento.idDescuento ).subscribe();
    // console.log('borrar:', proveedor.idConsulta);
  }

  // Para refresh de la lista
  doRefreshDescuentos( event ) {
    // console.log('Begin async operation');

    this.ListarDescuentos();
    event.target.complete();   // terminar el refresh
  }

  // Buscador 
  buscarDescuentos( event ) {
    // console.log('busqueda: ', event);
    this.textoBuscar = event.detail.value;

  }

  // Falta desarrollar Favoritos 
  favoritoDescuento( descuento ) {
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
  async preguntaBorrarPub( descuento: RespuestaDescuentos, i: number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿ELIMINA EL PUBLIACION?',
      backdropDismiss: false,
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          console.log('Delete clicked');
          this.borrarDescuento( descuento, i );
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
  async descuentosMore( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopProveedoresComponent,             // Falta crear pop publicaciones!!!
      event: evento
    });
    await popover.present();
    // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
  }

}
