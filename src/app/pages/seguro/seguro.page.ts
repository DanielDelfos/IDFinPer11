import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LoadingController, ToastController, PopoverController, ActionSheetController, IonContent } from '@ionic/angular';

import { RespuestaProductos } from '../../interfaces/productos.model';
import { ProductosService } from '../../services/productos.service';
import { PopProveedorComponent } from 'src/app/components/pop-proveedor/pop-proveedor.component';


@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.page.html',
  styleUrls: ['./seguro.page.scss'],
})
export class SeguroPage implements OnInit {

  loading: any;
  producto = new RespuestaProductos();
  @ViewChild(IonContent, {static: true}) content: IonContent;


  constructor( private loadingCtrl: LoadingController,
               public toastCtrl: ToastController,
               private productosServ: ProductosService,
               private route: ActivatedRoute,
               private popoverCtrl: PopoverController,
               private actionSheetCtrl: ActionSheetController,
               private router: Router) { }

  ngOnInit() {

    // Obtener el id (no funciona con idConsulta)
    const id = this.route.snapshot.paramMap.get('id');
    // console.log('id url:', id);

    if ( id !== 'nuevo' ) {
        this.productosServ.getProducto( id )
          .subscribe( (resp: RespuestaProductos)  => {
            this.producto = resp;
            this.producto.idProducto = id;

      });

    // const hoy: Date = new Date();
    // this.consulta.fechaConsulta = hoy;
    }

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

}
