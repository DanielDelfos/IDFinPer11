import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { MercadoPagosService } from '../../services/mercado-pagos.service';
import { RespuestaMercadoPagos } from '../../interfaces/mercado-pagos.model';

// SDK de Mercado Pago
// const mercadopago = require ('mercadopago');
// declare var mercadopago: any;  //esta!!
// var mercadopago = require('mercadopago');  //puede ser
// import * as mercadopago from 'mercadopago/index.js'
// declare var mercadopagoApi: any;
//import mercadopagoCtrl = require('./mercadopago');


@Component({
  selector: 'app-mpagos',
  templateUrl: './mpagos.page.html',
  styleUrls: ['./mpagos.page.scss'],
})
export class MpagosPage implements OnInit {

  loading: any;
  pago = new RespuestaMercadoPagos();
  @ViewChild(IonContent, {static: true}) content: IonContent;

  constructor( private loadingCtrl: LoadingController,
                public toastCtrl: ToastController,
                private mercadoPagosServ: MercadoPagosService,
                private menuCtrl: MenuController,
                private router: Router ) { 
                  // Credenciales
                  // mercadopagofirebase deploy.configure({
                    //access_token: 'TEST-3625256403502780-061702-5bee16f8b5bc191bf77ad9038d92ced7-260988322'
                  //});

                  // mercadopago.setPublishableKey("TEST-3625256403502780-061702-5bee16f8b5bc191bf77ad9038d92ced7-260988322"); 
                }

  ngOnInit() {
    // Credenciales
    // console.log('log 1 mercado pago:', mercadopago.payment);
    // mercadopago.configure({
    //   access_token: 'TEST-3625256403502780-061702-5bee16f8b5bc191bf77ad9038d92ced7-260988322'
    // });
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
    peticion = this.mercadoPagosServ.crearMercadoPago( this.pago );
    mensajeUser = 'Enviado OK! En breve le responderemos.';

  
    // Crea un objeto de preferencia para Mercado Pago
    let preference = {
      items: [
        {
          title: 'Mi producto',
          unit_price: 100,
          quantity: 1,
        }
      ]
    };
    // mercadopago.preferences.create(preference)  //no anda


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
      color
    });
    toast.present();
  }

  // Menu hamburguesa  SACAR???
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  // Funcion para ir a un pagina  SACAR???
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
