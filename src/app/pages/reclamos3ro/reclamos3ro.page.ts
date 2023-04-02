import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LoadingController, ToastController, PopoverController, ActionSheetController, IonContent } from '@ionic/angular';

import { RespuestaReclamos3ros } from '../../interfaces/reclamos3ros.model';
import { ApiconnectService } from '../../services/apiconnect.service';
import { PopProveedorComponent } from 'src/app/components/pop-proveedor/pop-proveedor.component';

@Component({
  selector: 'app-reclamos3ro',
  templateUrl: './reclamos3ro.page.html',
  styleUrls: ['./reclamos3ro.page.scss'],
})
export class Reclamos3roPage implements OnInit {


  loading: any;
  reclamos3ro = new RespuestaReclamos3ros();
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

      this.apiEntidad = 'reclamos3ro';

      this.apiconnectService.getRegistro( id, this.apiEntidad )
          .subscribe( (resp: RespuestaReclamos3ros)  => {
            this.reclamos3ro = resp;
            this.reclamos3ro.idReclamos3ro = id;
            // console.log('marca:', this.reclamos3ro.marcaCotProd)

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

    if ( this.reclamos3ro.idReclamos3ro ) {

      // Existe y lo actualizo
      this.apiEntidad = 'reclamos3ros';
      peticion = this.apiconnectService.actualizarRegistro( this.reclamos3ro, this.apiEntidad, this.reclamos3ro.idReclamos3ro );
      mensajeUser = 'OK! Se actualizaron los datos';

    } else {

      // No existe, agrego un documento
      this.apiEntidad = 'reclamos3ros';
      peticion = this.apiconnectService.crearRegistro( this.reclamos3ro, this.apiEntidad );
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
      this.router.navigateByUrl('/reclamos3ros');

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
  async reclamos3roMore( evento ) {
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
