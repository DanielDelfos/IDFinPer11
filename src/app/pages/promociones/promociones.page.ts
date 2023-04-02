import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController, MenuController, IonContent } from '@ionic/angular';
import { ConsultasSitioService } from '../../services/consultas-sitio.service';
import { Router } from '@angular/router';
import { RespuestaConsultasSitio } from '../../interfaces/consultas-sitio.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {

  loading: any;
  consultaSitio = new RespuestaConsultasSitio();
  @ViewChild(IonContent, {static: true}) content: IonContent;  
  
  constructor( private loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private consultasSitioServ: ConsultasSitioService,
    private menuCtrl: MenuController,
    private router: Router ) { }

  ngOnInit() {
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

  // No es una api consulta, agrego un documento
  peticion = this.consultasSitioServ.crearConsultaSitio( this.consultaSitio );
  mensajeUser = 'Enviado OK! En breve le responderemos.';


  // Llamo a la peticion
  peticion.subscribe ( resp => {
    this.loading.dismiss();  // mensaje de procesando
    // console.log('resp:', resp);   // no devuelve el ID, revisar
    // this.proveedor = resp;

    // Mostrar mensaje a usuario
    this.presentToast(mensajeUser, 'success');

    // Redirigo a la lista
    this.router.navigateByUrl('/inicio');

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

// Menu hamburguesa
toggleMenu() {
  this.menuCtrl.toggle();
}

// Funcion para ir a un pagina
irPagina( paginaAir: string) {
  // toma la página como parámetro de la función, debe incluir la / antes
  this.router.navigate([paginaAir]);
}

// Herramientas de control de scrool y desplazamientos a links
ScrollStart() {
  this.content.scrollToTop();
}

ScrollEnd() {
  this.content.scrollToBottom();
}

}
