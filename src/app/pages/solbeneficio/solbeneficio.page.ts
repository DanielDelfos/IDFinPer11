import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LoadingController, ToastController, PopoverController, ActionSheetController, IonContent } from '@ionic/angular';

import { RespuestaSolbeneficios } from '../../interfaces/solbeneficios.model';
import { SolbeneficiosService } from '../../services/solbeneficios.service';
import { PopProveedorComponent } from 'src/app/components/pop-proveedor/pop-proveedor.component';

@Component({
  selector: 'app-solbeneficio',
  templateUrl: './solbeneficio.page.html',
  styleUrls: ['./solbeneficio.page.scss'],
})
export class SolbeneficioPage implements OnInit {


  loading: any;
  solbeneficio = new RespuestaSolbeneficios();
  @ViewChild(IonContent, {static: true}) content: IonContent;

  constructor( private loadingCtrl: LoadingController,
               public toastCtrl: ToastController,
               private solbeneficiosServ: SolbeneficiosService,
               private route: ActivatedRoute,
               private popoverCtrl: PopoverController,
               private actionSheetCtrl: ActionSheetController,
               private router: Router ) { }

  ngOnInit() {

    // Obtener el id (no funciona con idConsulta)
    const id = this.route.snapshot.paramMap.get('id');
    // console.log('id url:', id);

    if ( id !== 'nuevo' ) {
        this.solbeneficiosServ.getSolbeneficio( id )
          .subscribe( (resp: RespuestaSolbeneficios)  => {
            this.solbeneficio = resp;
            this.solbeneficio.idSolbeneficio = id;
            // console.log('marca:', this.solbeneficio.marcaCotProd)

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

    if ( this.solbeneficio.idSolbeneficio ) {
      // Existe y lo actualizo
      peticion = this.solbeneficiosServ.actualizarSolbeneficio( this.solbeneficio );
      mensajeUser = 'OK! Se actualizaron los datos';
    } else {
      // No existe, agrego un documento
      peticion = this.solbeneficiosServ.crearSolbeneficio( this.solbeneficio );
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
      this.router.navigateByUrl('/solbeneficios');

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
  async solbeneficioMore( evento ) {
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
