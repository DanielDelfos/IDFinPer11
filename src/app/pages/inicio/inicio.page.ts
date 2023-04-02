import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonContent, IonSlides, ToastController, LoadingController } from '@ionic/angular';
// import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //a borrar
  tmpEmail: string;
  tmpCelular: string;

  loading: any;
  entornoProduccion: any;

  @ViewChild(IonContent, {static: true}) content: IonContent;
  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;  
  @ViewChild('slideDos', {static: true}) slidesDos: IonSlides; 
  @ViewChild('slideComercial', {static: true}) slidesComercial: IonSlides; 

  // Parametros para el slide (guarda que está para varios slides)
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    autoplay: true,
    speed: 800,
    slidesPerView: 1.1,
    spaceBetween: 0
  };

  constructor( private loadingCtrl: LoadingController,
               private menuCtrl: MenuController,
               // private router: Router,
               public toastCtrl: ToastController ) { }

  ngOnInit() {

    //Busco si el entorno
    this.entornoProduccion = environment.production;
    
   }

  guardarOfertas( formulario: NgForm ) {

    // Falta desarrollar

    // Mensaje aviso luego del guardar
    let mensajeUser = '';
    mensajeUser = 'Enviado OK! En breve le responderemos.';
    // Mostrar mensaje a usuario
    this.presentToast(mensajeUser, 'success');

    
  };

  toggleMenu() {
    this.menuCtrl.toggle();
  }


  // Funcion para links a llamadas telefonicas o whatsapp
  // Habre una ventana pero no me convence, pruebo despues compartir contacto o algo en el telefono
/*   boton_telefono( tipo: string ) {

    console.log('llamada tipo:', tipo);
    //window.open("https://www.w3schools.com/php/",'_system', 'location=yes');
    window.open("https://www.w3schools.com/php/",'_blank', 'location=yes,toolbar=yes');
    
  }
 */

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


  // Funcion para ir a un pagina
  // lo cambié por [routerLink]="['/inicio']"
  // irPagina( paginaAir: string) {
  //   // toma la página como parámetro de la función, debe incluir la / antes
  //   this.router.navigate([paginaAir]);
  // }

  // Herramientas de control de scrool y desplazamientos a links
  ScrollStart() {
    this.content.scrollToTop();
  }

  ScrollEnd() {
    this.content.scrollToBottom();
  }

  // Botones para desplazarse entre slides
  // Parametro el nro. de slide a ir, empieza con 0
  irAslide(slideNumero: number) {
    this.slides.slideTo(slideNumero);
  }
  // Parametro el nro. de slide a ir, empieza con 0
  irAslideDos(slideNumero: number) {
    this.slidesDos.slideTo(slideNumero);
  }
  // Parametro el nro. de slide a ir, empieza con 0
  irAslideComercial(slideNumero: number) {
    this.slidesComercial.slideTo(slideNumero);
  }

}
