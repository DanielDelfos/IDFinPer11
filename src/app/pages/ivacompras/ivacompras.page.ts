import { Component, OnInit } from '@angular/core';
import { IvacomprasService } from '../../services/ivacompras.service';
import { IvaCompraResults } from '../../interfaces/ivacompras.model';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-ivacompras',
  templateUrl: './ivacompras.page.html',
  styleUrls: ['./ivacompras.page.scss'],
})
export class IvacomprasPage implements OnInit {

  loading: any;

  ivaCompras: IvaCompraResults[] = [];
  cargando = false;

  constructor( private ivacomprasService: IvacomprasService,
               private loadingCtrl: LoadingController,
               public toastCtrl: ToastController) { }

  ngOnInit() {

    // this.cargando = true; // REVISAR
/*     this.ivacomprasService.getConsultas()
      .subscribe ( resp => {
        console.log('resp:', resp);
        this.ivaCompras = resp.results;

        console.log('ivaCompras:', this.ivaCompras);

        // this.loading.dismiss();  // borro mensaje procesando
      }); */

    


    // ------ Llamar al mensaje de espera procesando, esperar y cerrarlo
    // this.presentLoading('Buscando...').then( () => {
      // setTimeout( () => {
      //     this.loading.dismiss();
      // }, 1500);
    // });

    // Llamar al mensaje tipo tostada
    this.presentToast('Se obtuvieron todos los datos');

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
  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
