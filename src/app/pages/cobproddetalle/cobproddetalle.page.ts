import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LoadingController, ToastController, PopoverController, ActionSheetController, IonContent } from '@ionic/angular';

import { RespuestaCobproddetalles } from '../../interfaces/cobproddetalles.model';
import { ApiconnectService } from '../../services/apiconnect.service';
import { PopProveedorComponent } from 'src/app/components/pop-proveedor/pop-proveedor.component';


@Component({
  selector: 'app-cobproddetalle',
  templateUrl: './cobproddetalle.page.html',
  styleUrls: ['./cobproddetalle.page.scss'],
})
export class CobproddetallePage implements OnInit {


  loading: any;
  cobproddetalle = new RespuestaCobproddetalles();
  @ViewChild(IonContent, {static: true}) content: IonContent;
  apiEntidad: string = '';  //para ejecutar la API REST 


  constructor( private loadingCtrl: LoadingController,
               public toastCtrl: ToastController,
               private apiconnectService: ApiconnectService,
               private route: ActivatedRoute,
               private popoverCtrl: PopoverController,
               private actionSheetCtrl: ActionSheetController,
               private router: Router ) { }

  ngOnInit() {

    // Obtener el id (no funciona con idConsulta)
    const id = this.route.snapshot.paramMap.get('id');
    // console.log('id url:', id);

    if ( id !== 'nuevo' ) {

      this.apiEntidad = 'cobproddetalle';

      this.apiconnectService.getRegistro( id, this.apiEntidad )
          .subscribe( (resp: RespuestaCobproddetalles)  => {
            this.cobproddetalle = resp;
            this.cobproddetalle.idCobproddetalle = id;
            // console.log('marca:', this.cobproddetalle.marcaCotProd)

        });

    // const hoy: Date = new Date();
    // this.consulta.fechaConsulta = hoy;
    }

  }

  // -----------FUNCIONES PRINCIPALES ------------------

  guardar( formulario: NgForm ) {

    // Verifico si ya existe al Id para actualizar
    let peticion: Observable<any>;
    // console.log(this.consulta);

    // Llamar al mensaje de espera, esperar y cerrarlo
    this.presentLoading('Guardando...').then( () => {
      // setTimeout( () => {
      //    this.loading.dismiss();
      // }, 2500);
    });


    // Mensaje aviso luego del guardar
    let mensajeUser = '';

    if ( this.cobproddetalle.idCobproddetalle ) {

      // Existe y lo actualizo
      this.apiEntidad = 'cobproddetalles';
      peticion = this.apiconnectService.actualizarRegistro( this.cobproddetalle, this.apiEntidad, this.cobproddetalle.idCobproddetalle );
      mensajeUser = 'OK! Se actualizaron los datos';

    } else {

      // No existe, agrego un documento
      this.apiEntidad = 'cobproddetalles';
      peticion = this.apiconnectService.crearRegistro( this.cobproddetalle, this.apiEntidad );
      mensajeUser = 'OK! Se guardaron datos nuevos';

    }

    // Llamo a la peticion
    peticion.subscribe ( resp => {
      this.loading.dismiss();  // mensaje de procesando
      // console.log('resp:', resp);   // no devuelve el ID, revisar
      // this.proveedor = resp;

      // Mostrar mensaje a usuario
      this.presentToast(mensajeUser, 'success');

      // Redirigo a la lista
      // this.router.navigateByUrl('/cobproddetalles/todos');
      this.router.navigateByUrl(`/cobproddetalles/${ this.cobproddetalle.idCoberturaprod }`);

    });

  }

  // -----------FUNCIONES ADICIONALES ------------------
  // Funcion para crear el mensaje de espera
  async presentLoading( message: string) {
    this.loading = await this.loadingCtrl.create({
      message
      // duration: 2000
    });
    return this.loading.present();

  }

  // Funcion para crear el mensaje tipo tostada
  async presentToast( message: string, color: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 4000,
      color: 'primary'
    });
    toast.present();
  }

  // Mas herramientas sobre el proveedor (boton more) FALTA!!
  async cobproddetalleMore( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopProveedorComponent,
      event: evento
    });
    await popover.present();
    // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
  }

  // Herramientas de control de scrool
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
