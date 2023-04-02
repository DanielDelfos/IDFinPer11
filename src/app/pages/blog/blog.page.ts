import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

import { LoadingController, ToastController, PopoverController, ActionSheetController, IonContent } from '@ionic/angular';

import { RespuestaPublicaciones } from '../../interfaces/publicaciones.model';
import { PublicacionesService } from '../../services/publicaciones.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  loading: any;
  publicacion = new RespuestaPublicaciones();
  @ViewChild(IonContent, {static: true}) content: IonContent;

  constructor( private loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private publicacionesServ: PublicacionesService,
    private route: ActivatedRoute,
    private popoverCtrl: PopoverController,
    private actionSheetCtrl: ActionSheetController,
    private router: Router ) { }

  ngOnInit() {

    // Obtener el id (no funciona con idConsulta)
    const id = this.route.snapshot.paramMap.get('id');
    // console.log('id url:', id);

    if ( id !== 'nuevo' ) {
        this.publicacionesServ.getPublicacion( id )
          .subscribe( (resp: RespuestaPublicaciones)  => {
            this.publicacion = resp;
            this.publicacion.idPublicacion = id;

      });

    // const hoy: Date = new Date();
    // this.consulta.fechaConsulta = hoy;
    }

  }

  suscribiteBlog( formulario: NgForm ) {

    // Falta desarrollar

    // Mensaje aviso luego del guardar
    let mensajeUser = '';
    mensajeUser = 'Registrado OK! En breve le responderemos.';
    // Mostrar mensaje a usuario
    this.presentToast(mensajeUser, 'success');

    
  };


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
