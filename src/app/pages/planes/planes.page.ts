import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IonList, ToastController, ActionSheetController, PopoverController, IonContent } from '@ionic/angular';

import { RespuestaPlanes } from '../../interfaces/planes-prod.model';
import { PlanesProdService } from '../../services/planes-prod.service';
import { PopProveedoresComponent } from '../../components/pop-proveedores/pop-proveedores.component';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
})
export class PlanesPage implements OnInit {

  @Input() llamadoDesde: string;

  @ViewChild('lista', {static: false}) lista: IonList;   // para traer la lista del html
  @ViewChild(IonContent, {static: true}) content: IonContent;

  planes: RespuestaPlanes[] = [];
  cargandoLista = false;
  textoBuscar = '';
  filtro: string = '';  // lo uso para enviarlo al api rest en get listados

  constructor( private planesService: PlanesProdService,
    public toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private route: ActivatedRoute,
    private router: Router ) { }

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
        this.ListarPlanes();
  }

  // Funcion desplegar la api, lista registros y mensajes adicionales
  ListarPlanes() {
    // console.log('listando...');  

    this.cargandoLista = true;
    // this.filtro = 'todos';  //ya lo defino en el init

    this.planesService.getPlanes( this.filtro )
      .subscribe( resp => {

        // console.log('Resp:', resp);  // Solo para test
        this.planes = resp;
        // console.log('item:', this.productos);
        this.cargandoLista = false;

        // Llamar al mensaje tipo tostada
        this.presentToast('Se obtuvieron todos los datos');

      });


  }

  // Funcion de Borrar registro
  // (llamada por funcion pregunta)
  borrarPlan( plan: RespuestaPlanes, i: number ) {

    this.planes.splice(i, 1);    // borra el registro en memoria
    this.planesService.borrarPlan(plan.idPlan ).subscribe();
    // console.log('borrar:', proveedor.idConsulta);
  }

  // Para refresh de la lista
  doRefreshProductos( event ) {
    // console.log('Begin async operation');

    this.ListarPlanes();
    event.target.complete();   // terminar el refresh
  }

  // Buscador de registros
  buscarPlanes( event ) {
    // console.log('busqueda: ', event);
    this.textoBuscar = event.detail.value;

  }

  // Falta desarrollar Favoritos 
  favoritoPlan( plan ) {
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
  async preguntaBorrarPlan( plan: RespuestaPlanes, i: number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿ELIMINA EL PLAN?',
      backdropDismiss: false,
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          console.log('Delete clicked');
          this.borrarPlan( plan, i );
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
  async planesMore( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopProveedoresComponent,             // Falta crear pop productos!!!
      event: evento
    });
    await popover.present();
    // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
  }
  
}
