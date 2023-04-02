import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, MenuController, LoadingController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { RespuestaConsultasSitio } from '../../interfaces/consultas-sitio.model';
import { ConsultasSitioService } from '../../services/consultas-sitio.service';

@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html',
  styleUrls: ['./form-consulta.component.scss'],
})
export class FormConsultaComponent implements OnInit {

  @Input() vuelveApagina: string;
  @Input() consultaDesde: string;

  loading: any;
  consultaSitio = new RespuestaConsultasSitio();
  @ViewChild(IonContent, {static: true}) content: IonContent;

  constructor( private loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private consultasSitioServ: ConsultasSitioService,
    private menuCtrl: MenuController,
    private router: Router ) { }

  ngOnInit() {}

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
      color
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
