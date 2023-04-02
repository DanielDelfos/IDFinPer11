import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { IonSlides, IonContent,
         LoadingController, ActionSheetController, ToastController } from '@ionic/angular';

import { UsuarioModel } from '../../interfaces/usuario.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;  // falta un argumento?
  @ViewChild(IonContent, {static: true}) content: IonContent;

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;
  loading: any;

  constructor( private auth: AuthService,
               private router: Router,
               private loadingCtrl: LoadingController,
               public toastCtrl: ToastController,
               private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {
    this.slides.lockSwipes( false );  // al final no bloqueo el movimiento del slide

    // Verifico si existe el usuario en local storage
    if ( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }

  }

  // Formulario de login
  login( formulario: NgForm ) {
    // console.log('valido:', formulario.valid);
    // console.log('form:', formulario);

    // Llamar al mensaje de espera, esperar y cerrarlo
    this.presentLoading('Validando usuario...').then( () => {
    });

    this.auth.login( this.usuario )
      .subscribe( resp => {

        // console.log('resp:', resp);
        // Swal.close();

        if ( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.loading.dismiss();  // saco mensaje de validando
        this.presentToast('Usuario correcto');  // Llamar al mensaje tipo tostada

        // Redirigo al inicio
        this.router.navigateByUrl('/inicio');

      }, (err) => {

        // console.log(err.error.error.message);
        this.loading.dismiss();  // saco mensaje de validando

        // Muestro ventana de error
        this.avisoErrorLogin(err.error.error.message);

      });
  }


  // Botones para desplazarse entre slides
  mostrarLogin( formLogin: NgForm ) {
    this.slides.slideTo(2);
  }

  mostrarInfo( formInfo: NgForm) {
    this.slides.slideTo(1);
  }

  mostrarBienvenido( formInfo: NgForm) {
    this.slides.slideTo(0);
  }

  // Herramientas de control de scrool
  ScrollStart() {
    this.content.scrollToTop();
  }

  ScrollEnd() {
    this.content.scrollToBottom();
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

  // Funcion para crear ventanas emergentes (pregunta si elimina el proveedor?)
  // (llamada por boton borrar en html)
  async avisoErrorLogin( msgError) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'ERROR AL VALIDAR EL USUARIO',
      subHeader: 'Revise e intente nuevamente:',
      backdropDismiss: false,
      buttons: [{
        text: msgError,
        role: 'destructive',
        icon: 'alert-circle-outline',
        cssClass: 'rojo',
        handler: () => {
          // console.log('Delete clicked');
          // this.borrarProveedor( proveedor, i );
        }
      }, {
        text: 'Cerrar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
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

}

