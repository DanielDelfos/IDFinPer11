import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LoadingController, ToastController, PopoverController, ActionSheetController, IonContent } from '@ionic/angular';

import { RespuestaPublicaciones } from '../../interfaces/publicaciones.model';
import { PublicacionesService } from '../../services/publicaciones.service';
import { PopProveedorComponent } from 'src/app/components/pop-proveedor/pop-proveedor.component';
import { FirestorageService } from '../../services/firestorage.service';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {

  loading: any;
  publicacion = new RespuestaPublicaciones();
  @ViewChild(IonContent, {static: true}) content: IonContent;

  newImage = '';

  //para el contadores de caracteres en un campo (de Ionic V6, no anda)
  // customCounterFormatter(inputLength: number, maxLength: number) {
  //   return `${maxLength - inputLength} characters remaining`;
  // }

  constructor( private loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private publicacionesServ: PublicacionesService,
    private route: ActivatedRoute,
    private popoverCtrl: PopoverController,
    private actionSheetCtrl: ActionSheetController,
    private firestorageService: FirestorageService,
    private router: Router) { }

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
  
      if ( this.publicacion.idPublicacion ) {
        // Existe y lo actualizo
        peticion = this.publicacionesServ.actualizarPublicacion( this.publicacion );
        mensajeUser = 'OK! Se actualizaron los datos';
      } else {
        // No existe, agrego un documento
        peticion = this.publicacionesServ.crearPublicacion( this.publicacion );
        mensajeUser = 'OK! Se guardaron datos nuevos';
      }
  
      // Llamo a la peticion
      peticion.subscribe ( resp => {
        this.loading.dismiss();  // mensaje de procesando
        // console.log('resp:', resp);   // no devuelve el ID, revisar
        // this.proveedor = resp;
  
        // Mostrar mensaje a usuario
        this.presentToast(mensajeUser, 'success');
  
        // Redirigo a la lista
        this.router.navigateByUrl('/publicaciones');
  
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
  
    // Mas herramientas sobre el proveedor (boton more) FALTA!!
    async publicacionMore( evento ) {
      const popover = await this.popoverCtrl.create({
        component: PopProveedorComponent,
        event: evento
      });
      await popover.present();
      // this.popoverCtrl.dismiss();  // Falta ver como desactivo, luego del clic.
    }
  
    // Herramientas de control de scrool
    ScrollStart() {
      this.content.scrollToTop();
    }
  
    ScrollEnd() {
      this.content.scrollToBottom();
    }
  
    irAhome() {
      this.router.navigate(['/inicio']);
    }
  
    irAinfo() {
      this.router.navigate(['/endesarrollo']);
    }

    // Para subir una imagen
    async newImageUpload(event: any) {
      // console.log('imagen a subir:', file);

      // Primera prueba, solo muestra la imagen seleccionada local
      // if (event.target.files && event.target.files[0]) {
      //   // Uso biblioteca para manejar archivos
      //   const reader = new FileReader();
      //   reader.onload = ((image) => {
      //     this.newImage = image.target.result as string;
      //   });
      //   reader.readAsDataURL(event.target.files[0]);
      // }

      // Definir el lugar y archivo a subir (solo un archivo por id)
      const path = 'publicaciones';
      const name = this.publicacion.idPublicacion;  //asumo el nombre como id 
      const file = event.target.files[0];

      this.presentLoading('Subiendo imagen...').then( () => {
      });

      // Llamar al servicio
      // console.log('iniciando servicio')
      const res = await this.firestorageService.upLoadImage(file, path, name);
      // console.log('recibi res de la promesa:', res);     

      // Reemplazo la anterior URL por la nueva
      this.publicacion.urlImagenPublic = res;

      this.loading.dismiss(); //cerrando emergente
      let mensajeUser = 'OK! imagen subida, recuerde guardar cambios.';
      this.presentToast(mensajeUser, 'success');

    }

}
