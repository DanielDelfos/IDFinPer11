import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LoadingController, ToastController, PopoverController, ActionSheetController, IonContent } from '@ionic/angular';

import { RespuestaEncuestas } from '../../interfaces/encuestas.model';
import { ApiconnectService } from '../../services/apiconnect.service';
import { PopProveedorComponent } from 'src/app/components/pop-proveedor/pop-proveedor.component';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.page.html',
  styleUrls: ['./encuesta.page.scss'],
})
export class EncuestaPage implements OnInit {



  loading: any;
  encuesta = new RespuestaEncuestas();
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

      this.apiEntidad = 'encuesta';

      this.apiconnectService.getRegistro( id, this.apiEntidad )
          .subscribe( (resp: RespuestaEncuestas)  => {
            this.encuesta = resp;
            this.encuesta.idEncuesta = id;
            // console.log('marca:', this.encuesta.marcaCotProd)

        });

    // const hoy: Date = new Date();
    // this.consulta.fechaConsulta = hoy;
    }

  }

  // -----------FUNCIONES PRINCIPALES ------------------

  guardar( formulario: NgForm ) {

    // Verifico si ya existe al Id para actualizar
    let peticion: Observable<any>;
    // console.log('encuesta:', this.encuesta);

    // Llamar al mensaje de espera, esperar y cerrarlo
    this.presentLoading('Guardando...').then( () => {
      // setTimeout( () => {
      //    this.loading.dismiss();
      // }, 2500);
    });


    // Mensaje aviso luego del guardar
    let mensajeUser = '';

    if ( this.encuesta.idEncuesta ) {

      // Existe y lo actualizo
      this.apiEntidad = 'encuestas';
      peticion = this.apiconnectService.actualizarRegistro( this.encuesta, this.apiEntidad, this.encuesta.idEncuesta );
      mensajeUser = 'OK! Se actualizaron los datos';

    } else {

      // No existe, agrego un documento
      this.apiEntidad = 'encuestas';
      peticion = this.apiconnectService.crearRegistro( this.encuesta, this.apiEntidad );
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
      this.router.navigateByUrl('/encuestas');

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
  async encuestaMore( evento ) {
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
