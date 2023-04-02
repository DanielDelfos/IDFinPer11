import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IonList, ToastController, ActionSheetController, PopoverController, IonContent } from '@ionic/angular';

import { RespuestaSolbeneficios } from '../../interfaces/solbeneficios.model';
import { SolbeneficiosService } from '../../services/solbeneficios.service';
import { PopProveedoresComponent } from '../../components/pop-proveedores/pop-proveedores.component';


@Component({
  selector: 'app-solbeneficios',
  templateUrl: './solbeneficios.page.html',
  styleUrls: ['./solbeneficios.page.scss'],
})
export class SolbeneficiosPage implements OnInit {

  @Input() llamadoDesde: string;

  @ViewChild('lista', {static: false}) lista: IonList;   // para traer la lista del html
  @ViewChild(IonContent, {static: true}) content: IonContent;

  solbeneficios: RespuestaSolbeneficios[] = [];
  cargandoLista = false;
  textoBuscar = '';
  filtro: string = '';  // lo uso para enviarlo al api rest en get listados

  constructor( private solbeneficiosService: SolbeneficiosService,
               public toastCtrl: ToastController,
               private actionSheetCtrl: ActionSheetController,
               private popoverCtrl: PopoverController,
               private router: Router ) {  // personalizar

  }

  ngOnInit() {
    // Desplegando lista y mensajes
    this.ListarSolbeneficios();

  }

  // Funcion desplegar la api, lista registros y mensajes adicionales
  ListarSolbeneficios() {
    // console.log('listando...');

    this.cargandoLista = true;
    this.filtro = 'todos';

    this.solbeneficiosService.getSolbeneficios( this.filtro )
      .subscribe( resp => {

        // console.log('Resp:', resp);  // Solo para test
        this.solbeneficios = resp;
        // console.log('item:', this.solbeneficios);
        this.cargandoLista = false;

        // Llamar al mensaje tipo tostada
        this.presentToast('Se obtuvieron todos los datos');

      });


  }

  // Funcion de Borrar registro
  // (llamada por funcion pregunta)
  borrarSolbeneficio( solbeneficio: RespuestaSolbeneficios, i: number ) {

    this.solbeneficios.splice(i, 1);    // borra el registro en memoria
    this.solbeneficiosService.borrarSolbeneficio(solbeneficio.idSolbeneficio ).subscribe();
    // console.log('borrar:', proveedor.idConsulta);
  }

  // Para refresh de la lista
  doRefreshSolbeneficios( event ) {
    // console.log('Begin async operation');

    this.ListarSolbeneficios();
    event.target.complete();   // terminar el refresh
  }

  // Buscador de solbeneficios
  buscarSolbeneficios( event ) {
    // console.log('busqueda: ', event);
    this.textoBuscar = event.detail.value;

  }

  // Falta desarrollar Favoritos 
  favoritoSolbeneficio( solbeneficio ) {
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
  async preguntaBorrarProd( solbeneficio: RespuestaSolbeneficios, i: number) {
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
          this.borrarSolbeneficio( solbeneficio, i );
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
  async solbeneficiosMore( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopProveedoresComponent,             // Falta crear pop solbeneficios!!!
      event: evento
    });
    await popover.present();
    // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
  }

}
