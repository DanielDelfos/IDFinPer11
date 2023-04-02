import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IonList, ToastController, ActionSheetController, PopoverController, IonContent } from '@ionic/angular';

import { RespuestaProveedores } from '../../interfaces/proveedores.model';
import { ProveedoresService } from '../../services/proveedores.service';
import { PopProveedoresComponent } from '../../components/pop-proveedores/pop-proveedores.component';



@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;   // para traer la lista del html
  @ViewChild(IonContent, {static: true}) content: IonContent;

  proveedores: RespuestaProveedores[] = [];
  cargandoLista = false;
  textoBuscar = '';

  constructor( private proveedoresService: ProveedoresService,
               public toastCtrl: ToastController,
               private actionSheetCtrl: ActionSheetController,
               private popoverCtrl: PopoverController,
               private router: Router ) {  // personalizar

  }

  ngOnInit() {

    // Desplegando lista y mensajes
    this.ListarProveedores();

  }

  // Funcion desplegar la api, lista registros y mensajes adicionales
  ListarProveedores() {
    // console.log('listando...');

    this.cargandoLista = true;
    this.proveedoresService.getProveedores()
      .subscribe( resp => {

        // console.log('Resp:', resp);  // Solo para test
        this.proveedores = resp;
        // console.log('item:', this.proveedores);
        this.cargandoLista = false;

        // Llamar al mensaje tipo tostada
        this.presentToast('Se obtuvieron todos los datos');

      });


  }

  // Funcion de Borrar registro
  // (llamada por funcion pregunta)
  borrarProveedor( proveedor: RespuestaProveedores, i: number ) {

    this.proveedores.splice(i, 1);    // borra el registro en memoria
    this.proveedoresService.borrarProveedor(proveedor.idConsulta ).subscribe();
    // console.log('borrar:', proveedor.idConsulta);
  }

  // Para refresh de la lista
  doRefreshProveedores( event ) {
    // console.log('Begin async operation');

    this.ListarProveedores();
    event.target.complete();   // terminar el refresh
  }


  // Buscador de proveedores
  buscarProveedores( event ) {
    // console.log('busqueda: ', event);
    this.textoBuscar = event.detail.value;

  }

  // Falta desarrollar Favoritos
  favoritoProveedor( proveedor: RespuestaProveedores ) {
    console.log('favorito:', proveedor.idConsulta);
    this.lista.closeSlidingItems();  // para cerrar el desplazamiento en el item
  }

  // Funcion para crear el mensaje tipo tostada
  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  // Funcion para crear ventanas emergentes (pregunta si elimina el proveedor?)
  // (llamada por boton borrar en html)
  async preguntaBorrarProv( proveedor: RespuestaProveedores, i: number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿ELIMINA EL PROVEEDOR?',
      backdropDismiss: false,
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          console.log('Delete clicked');
          this.borrarProveedor( proveedor, i );
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

  // Mas herramientas sobre el listoado de proveedores (boton more)
  async proveedoresMore( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopProveedoresComponent,
      event: evento
    });
    await popover.present();
    // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
  }

    // Herramientas de control de scrool y desplazamientos a links
    ScrollStart() {
      this.content.scrollToTop();
    }

    ScrollEnd() {
      this.content.scrollToBottom();
    }

    irAhome() {
      this.router.navigate(['/inicio']);
    }

    irAinfo() {
      this.router.navigate(['/endesarrollo']);
    }
}
