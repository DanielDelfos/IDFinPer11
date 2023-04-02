import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IonList, ToastController, ActionSheetController, PopoverController, IonContent } from '@ionic/angular';

import { RespuestaCoberturasprod } from '../../interfaces/coberturasprod.model';
import { CoberturasprodService } from '../../services/coberturasprod.service';
import { PopProveedoresComponent } from '../../components/pop-proveedores/pop-proveedores.component';

@Component({
  selector: 'app-coberturasprod',
  templateUrl: './coberturasprod.page.html',
  styleUrls: ['./coberturasprod.page.scss'],
})
export class CoberturasprodPage implements OnInit {


  @Input() llamadoDesde: string;

  @ViewChild('lista', {static: false}) lista: IonList;   // para traer la lista del html
  @ViewChild(IonContent, {static: true}) content: IonContent;

  coberturasprod: RespuestaCoberturasprod[] = [];
  cargandoLista = false;
  textoBuscar = '';
  filtro: string = '';  // lo uso para enviarlo al api rest en get listados

  constructor( private coberturasprodService: CoberturasprodService,
               public toastCtrl: ToastController,
               private actionSheetCtrl: ActionSheetController,
               private popoverCtrl: PopoverController,
               private route: ActivatedRoute,
               private router: Router ) {  // personalizar

  }

  ngOnInit() {

    // Obtener el id (si vengo de un producto, para filtrar)
    const id = this.route.snapshot.paramMap.get('id'); //idProducto
    // console.log('id url:', id);

    if ( id !== 'todos' ) {
      this.filtro = id;

    // const hoy: Date = new Date();
    // this.consulta.fechaConsulta = hoy;
    } else {
      this.filtro = 'todos';

    }  

    // Desplegando lista y mensajes
    this.ListarCoberturasprod();

  }

  // Funcion desplegar la api, lista registros y mensajes adicionales
  ListarCoberturasprod() {
    // console.log('listando...');

    this.cargandoLista = true;
    // this.filtro = 'todos';   //ya lo defino en el init

    this.coberturasprodService.getCoberturasprod( this.filtro )
      .subscribe( resp => {

        // console.log('Resp:', resp);  // Solo para test
        this.coberturasprod = resp;
        // console.log('item:', this.coberturasprod);
        this.cargandoLista = false;

        // Llamar al mensaje tipo tostada
        this.presentToast('Se obtuvieron todos los datos');

      });


  }

  // Funcion de Borrar registro
  // (llamada por funcion pregunta)
  borrarCoberturaprod( coberturaprod: RespuestaCoberturasprod, i: number ) {

    this.coberturasprod.splice(i, 1);    // borra el registro en memoria
    this.coberturasprodService.borrarCoberturaprod(coberturaprod.idCoberturaprod ).subscribe();
    // console.log('borrar:', proveedor.idConsulta);
  }

  // Para refresh de la lista
  doRefreshCoberturasprod( event ) {
    // console.log('Begin async operation');

    this.ListarCoberturasprod();
    event.target.complete();   // terminar el refresh
  }

  // Buscador de coberturasprod
  buscarCoberturasprod( event ) {
    // console.log('busqueda: ', event);
    this.textoBuscar = event.detail.value;

  }

  // Falta desarrollar Favoritos 
  favoritoCoberturaprod( coberturaprod ) {
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
  async preguntaBorrarProd( coberturaprod: RespuestaCoberturasprod, i: number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿ELIMINA EL REGISTRO?',
      backdropDismiss: false,
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          console.log('Delete clicked');
          this.borrarCoberturaprod( coberturaprod, i );
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
  async coberturasprodMore( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopProveedoresComponent,             // Falta crear pop coberturasprod!!!
      event: evento
    });
    await popover.present();
    // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
  }


}
