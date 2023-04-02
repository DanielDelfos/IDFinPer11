import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { RespuestaCotizaAutos } from '../../interfaces/cotiza-autos.model';
import { CotizaautosService } from '../../services/cotizaautos.service';

// Declar variable para cotizador automotor (anda!!)
declare var wokanInitWebpack: any;

@Component({
  selector: 'app-cotizaauto',
  templateUrl: './cotizaauto.page.html',
  styleUrls: ['./cotizaauto.page.scss'],
})
export class CotizaautoPage implements OnInit {
  
  // Declar variable para cotizador automotor (no anda acá)
  // wokanInitWebpack: any;
  // sid: string = '529@5dea767c16384';
  // mainColor: string = '#513F95';

  loading: any;
  cotizaAuto = new RespuestaCotizaAutos();
  @ViewChild(IonContent, {static: true}) content: IonContent;


  constructor( private loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private cotizaautosService: CotizaautosService,
    private menuCtrl: MenuController,
    private router: Router)
      {
        // Cargo la función para el cotizador, el cliente y el color 
        // Anda!! pero no carga de nuevo la pagina de error
        wokanInitWebpack({ sid:'529@5dea767c16384', mainColor:'#513F95' });
      }
      
      ngOnInit() { 
        // Inicializo el cotizador (no anda!!)
        // this.initCotizador();
        // this.wokanInitWebpack( '529@5dea767c16384', '#513F95' );
      }


  // -----------FUNCIONES PRINCIPALES ------------------

  // Llamar a la función wokanInit (inicializar el cotizador) (no Anda!!)
  // initCotizador() {
    //Inicializo y paso cliente y color
    //console.log('wokanInit');
    //this.wokanInitWebpack({ sid:'529@5dea767c16384', mainColor:'#513F95' }).subscribe();
  // }

  // Llamar a la función wokanInit (inicializar el cotizador) (no anda!!)
  // wokanInitWebpack({ sid: string, mainColor: string }) {
  // }

  // Guardar la solicitud de cotización y enviar el email
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
    peticion = this.cotizaautosService.crearConsultaSitio( this.cotizaAuto );
    mensajeUser = 'Enviado OK! En breve le responderemos.';
  

    // Llamo a la peticion
    peticion.subscribe ( resp => {
      this.loading.dismiss();  // mensaje de procesando
      // console.log('resp:', resp);   // no devuelve el ID, revisar
      // this.proveedor = resp;

      // Mostrar mensaje a usuario
      this.presentToast(mensajeUser, 'success');

      // Redirigo 
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

  // Herramientas de control de scrool y desplazamientos a links
  ScrollStart() {
    this.content.scrollToTop();
  }

  ScrollEnd() {
    this.content.scrollToBottom();
  }

}
