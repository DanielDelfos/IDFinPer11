// SON BENEFICIOS EN EL SITIO WEB

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IonList, ToastController, ActionSheetController, PopoverController, IonContent } from '@ionic/angular';

import { RespuestaCupones } from '../../interfaces/cupones.model';
import { CuponesService } from '../../services/cupones.service';
import { PopProveedoresComponent } from '../../components/pop-proveedores/pop-proveedores.component';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.page.html',
  styleUrls: ['./cupones.page.scss'],
})
export class CuponesPage implements OnInit {

  @Input() llamadoDesde: string;

  @ViewChild('lista', {static: false}) lista: IonList;   // para traer la lista del html
  @ViewChild(IonContent, {static: true}) content: IonContent;

  cupones: RespuestaCupones[] = [];
  cargandoLista = false;
  textoBuscar = '';
  filtro: string = '';  // lo uso para enviarlo al api rest en get listados

  constructor( private cuponesService: CuponesService,
    public toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private router: Router ) { }

  ngOnInit() {

            // Desplegando lista y mensajes
            this.ListarCupones();

  }


  // Funcion desplegar la api, lista registros y mensajes adicionales
  ListarCupones() {
    // console.log('listando...');

    this.cargandoLista = true;
    // this.filtro = 'publicadas';
    this.filtro = 'todos';

    this.cuponesService.getCupones( this.filtro )
      .subscribe( resp => {

        // console.log('Resp:', resp);  // Solo para test
        this.cupones = resp;
        // console.log('item:', this.productos);
        this.cargandoLista = false;

        // Llamar al mensaje tipo tostada
        this.presentToast('Se obtuvieron todos los datos');

      });


  }

  // Funcion de Borrar registro
  // (llamada por funcion pregunta)
  borrarCupon( cupon: RespuestaCupones, i: number ) {

    this.cupones.splice(i, 1);    // borra el registro en memoria
    this.cuponesService.borrarCupon(cupon.idCupon ).subscribe();
    // console.log('borrar:', proveedor.idConsulta);
  }

  // Para refresh de la lista
  doRefreshCupones( event ) {
    // console.log('Begin async operation');

    this.ListarCupones();
    event.target.complete();   // terminar el refresh
  }

  // Buscador 
  buscarCupones( event ) {
    // console.log('busqueda: ', event);
    this.textoBuscar = event.detail.value;

  }

  // Falta desarrollar Favoritos 
  favoritoCupon( cupon ) {
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
  async preguntaBorrarPub( cupon: RespuestaCupones, i: number) {
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
          this.borrarCupon( cupon, i );
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
  async cuponesMore( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopProveedoresComponent,             // Falta crear pop publicaciones!!!
      event: evento
    });
    await popover.present();
    // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
  }


}
