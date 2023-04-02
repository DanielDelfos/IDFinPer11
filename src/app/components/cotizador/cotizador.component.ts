//Falta cambiar service e interface especifico para cotizador

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { RespuestaCotizadores } from '../../interfaces/cotizadores.model';
import { CotizadoresService } from '../../services/cotizadores.service';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss'],
})
export class CotizadorComponent implements OnInit {

  @Input() nombreProducto: string;
  @Input() cotizadorTipo: string;

  loading: any;
  cotizador = new RespuestaCotizadores();
  tieneCotizadorTipo: boolean = true;

  @ViewChild(IonContent, {static: true}) content: IonContent;
  
  constructor( private loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private cotizadoresServ: CotizadoresService,
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
    this.presentLoading('Enviando...').then( () => {
      // setTimeout( () => {
      //    this.loading.dismiss();
      // }, 2500);
    });


    // Verificar si el producto tiene definico el tipo de cotizador 
    // (al final creo que no lo uso)
    if ( this.cotizadorTipo == null || this.cotizadorTipo == undefined 
      || this.cotizadorTipo == "null" || this.cotizadorTipo == "undefined"
      || this.cotizadorTipo == "") 
          { this.tieneCotizadorTipo = false;
            this.cotizadorTipo = 'undefined'; } 
    else { this.tieneCotizadorTipo = true; }

    // Valores por defecto
    this.cotizador.fechaCotizacion = new Date();   //hoy y hora actual
    // console.log('date:', this.cotizador.fechaCotizacion);
    // console.log('toLocate:', this.cotizador.fechaCotizacion.toLocaleString());
    // this.cotizador.fechaCotizacion = this.cotizador.fechaCotizacion - (1);
    // var date = this.cotizador.fechaCotizacion.subtract(2, 'hours');

    // Mensaje aviso luego del guardar
    let mensajeUser = '';

    // No es una api consulta, agrego un documento
    peticion = this.cotizadoresServ.crearCotizador( this.cotizador, this.cotizadorTipo, this.nombreProducto );
    mensajeUser = 'Enviado OK! En breve le responderemos.';
  

    // Llamo a la peticion
    peticion.subscribe ( resp => {
      this.loading.dismiss();  // mensaje de procesando
      // console.log('resp:', resp);   // no devuelve el ID, revisar
      // this.proveedor = resp;

      // Mostrar mensaje a usuario
      this.presentToast(mensajeUser, 'success');

      // Redirigo a la pagina que llamo al componente (no hace falta y no anda)
      // console.log('vuelvo:', this.vuelveApagina)
      // this.router.navigateByUrl(this.vuelveApagina);    
      // Vuelvo al inicio, me parece q queda mejor
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
