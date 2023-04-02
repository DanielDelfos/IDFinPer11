import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { environment, firebaseConfig } from 'src/environments/environment';


@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss'],
})
export class Header2Component implements OnInit {

  textoMensaje: string;
  entornoApp: string;
  entornoBase: string;

  constructor( public toastCtrl: ToastController) { }

  ngOnInit() {

    //Verifico el entorno de la App
    if ( environment.production ) {
      this.entornoApp = 'Publicado'

    } else {
      this.entornoApp = 'Local'
    }

    //Verifico el entorno real o pruebas del Firebase
    this.entornoBase = environment.urlCloudFunctionsTipo;
    // console.log('projectId:', firebaseConfig.projectId);

  }

  // Funcion mensaje bíblico
  listarMensajeBiblia() {
    
    this.textoMensaje = 'La gente se fija en las apariencias, pero yo me fijo en el corazón. (1 Samuel 16:7b)';

    // Llamar al mensaje tipo tostada
    this.presentToast(this.textoMensaje);

  }

  // Funcion para crear el mensaje tipo tostada
  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 6000,
      position: 'top',
      color: 'primary'
    });
    toast.present();
  }

}
