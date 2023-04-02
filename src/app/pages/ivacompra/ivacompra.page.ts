import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { IvaCompraResults } from '../../interfaces/ivacompras.model';
import { NgForm } from '@angular/forms';
import { IvacomprasService } from '../../services/ivacompras.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ivacompra',
  templateUrl: './ivacompra.page.html',
  styleUrls: ['./ivacompra.page.scss'],
})
export class IvacompraPage implements OnInit {

  loading: any;
  // ivaCompra: IvaCompraResults = new IvaComprasModel();

  constructor(private loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private ivacomprasServ: IvacomprasService,
              private route: ActivatedRoute) { }

  ngOnInit() {

/*     // Obtener el id (no funciona con idConsulta)
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {
      this.ivacomprasServ.getIvaCompra( id )
        .subscribe( (resp: IvaComprasModel)  => {
          this.ivaCompra = resp;
          this.ivaCompra.idConsulta = id;

      });

      // const hoy: Date = new Date();
      // this.consulta.fechaConsulta = hoy;
    } */

  }


  guardar( form: NgForm ) {

    // Verifico si ya existe al Id para actualizar
    // let peticion: Observable<any>;
    // console.log(this.consulta);

    // ------ Llamar al mensaje de espera, esperar y cerrarlo
    // this.presentLoading('Guardando...').then( () => {
      // setTimeout( () => {
      //    this.loading.dismiss();
      // }, 2500);
    // });

    // if ( this.ivaCompra.idConsulta ) {
      // Existe y lo actualizo
      // peticion = this.ivacomprasServ.actualizarIvaCompra( this.ivaCompra );
    // } else {
      // No existe, agrego un documento
      // peticion = this.ivacomprasServ.crearIvaCompra( this.ivaCompra );
    // }

    /* peticion.subscribe ( resp => {
      this.loading.dismiss();  // mensaje de procesando
      console.log(resp);   // no devuelve el ID, revisar
      // this.ivaCompra = resp;
      this.presentToast('OK! Se guardaron datos', 'success');
    });
 */
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

}
