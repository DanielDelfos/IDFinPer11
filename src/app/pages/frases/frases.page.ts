import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IonList, ToastController, ActionSheetController, PopoverController, IonContent } from '@ionic/angular';

import { RespuestaFrases } from '../../interfaces/frases.model';
import { ApiconnectService } from '../../services/apiconnect.service';
import { PopProveedoresComponent } from '../../components/pop-proveedores/pop-proveedores.component';

import { Papa } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';

import { Platform } from '@ionic/angular';
// import { File } from '@ionic-native/file/ngx';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-frases',
  templateUrl: './frases.page.html',
  styleUrls: ['./frases.page.scss'],
})
export class FrasesPage implements OnInit {



  @Input() llamadoDesde: string;

  @ViewChild('lista', {static: false}) lista: IonList;   // para traer la lista del html
  @ViewChild(IonContent, {static: true}) content: IonContent;

  frases: RespuestaFrases[] = [];
  cargandoLista = false;

  textoBuscar = '';
  filtro: string = '';  // lo uso para enviarlo al api rest en get listados
  apiEntidad: string = '';  //para ejecutar la API REST 

  constructor( private apiconnectService: ApiconnectService,  
               public toastCtrl: ToastController,
               private actionSheetCtrl: ActionSheetController,
               private popoverCtrl: PopoverController,
               private papa: Papa,
               private http: HttpClient,
               private plt: Platform,
               private router: Router ) {  // personalizar

  }

  ngOnInit() {

    //Valores por default
    this.filtro = 'estemes';

    // Desplegando lista y mensajes
    this.ListarFrases();

    // console.log('plataforma:', this.plt.is); //creo que devuelve win, cordoba

  }

  // Funcion desplegar la api, lista registros y mensajes adicionales
  ListarFrases() {
    // console.log('listando...');

    this.cargandoLista = true;
    this.apiEntidad = 'frases';

    this.apiconnectService.getEntidad( this.filtro, this.apiEntidad )
      .subscribe( resp => {

        // console.log('Resp:', resp);  // Solo para test
        this.frases = resp;
        // console.log('item:', this.frases);
        this.cargandoLista = false;

        // Llamar al mensaje tipo tostada
        this.presentToast('Se obtuvieron todos los datos');

      });


  }

  // Para exportar datos del listado a un archivo CSV
  exportCSV() {
    let csv = this.papa.unparse({
      // fields: this.headerRow,
      // fields: 'dia, mes, "fraseTexto"',  //encabezado no anda, pero no hace falta
      data: this.frases
    });

    // de acuerdo a la plataforma (celu o windows)
    if (this.plt.is('cordova')) {
      // ver esto del celu, no anda
      // this.file.writeFile(this.file.dataDirectory, 'data.csv', csv, {replace: true}).then( res => {
      //   this.socialSharing.share(null, null, res.nativeURL, null).then(e =>{
      //     // Success
      //   }).catch(e =>{
      //     console.log('Share failed:', e)
      //   });
      // }, err => {
      //   console.log('Error: ', err);
      // });

    } else {
      // Dummy implementation for Desktop download purpose
      var blob = new Blob([csv]);
      var a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'exportFrases.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  // la uso en exportCSV, falta ver como lo visualizo en html
  trackByFn(index: any, item: any) {
    return index;
  }

  // Funcion de Borrar registro
  // (llamada por funcion pregunta)
  borrarFrase( frase: RespuestaFrases, i: number ) {

    this.frases.splice(i, 1);    // borra el registro en memoria

    this.apiEntidad = 'frases';
    this.apiconnectService.borrarEntidad(frase.idFrase, this.apiEntidad ).subscribe();
    // console.log('borrar:', proveedor.idConsulta);
  }

  // Para refresh de la lista
  doRefreshFrases( event ) {
    // console.log('Begin async operation');

    this.ListarFrases();
    event.target.complete();   // terminar el refresh
  }

  // Buscador de frases
  buscarFrases( event ) {
    // console.log('busqueda: ', event);
    this.textoBuscar = event.detail.value;

  }

  // Filtros del listado
  seleccionFiltro() {
    //console.log('cambie filtro por:', filtroCambiado);
    //console.log('estado filtro:', this.filtro);

    // Desplegando lista y mensajes
    this.ListarFrases();

  }

  // Falta desarrollar Favoritos 
  favoritoFrase( frase ) {
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
  async preguntaBorrarProd( frase: RespuestaFrases, i: number) {
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
          this.borrarFrase( frase, i );
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
  async frasesMore( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopProveedoresComponent,             // Falta crear pop frases!!!
      event: evento
    });
    await popover.present();
    // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
  }


}
