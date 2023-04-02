import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LoadingController, ToastController, PopoverController, ActionSheetController, IonContent } from '@ionic/angular';

import { RespuestaFrases } from '../../interfaces/frases.model';
import { ApiconnectService } from '../../services/apiconnect.service';
import { PopProveedorComponent } from 'src/app/components/pop-proveedor/pop-proveedor.component';

import { Papa } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-frase',
  templateUrl: './frase.page.html',
  styleUrls: ['./frase.page.scss'],
})
export class FrasePage implements OnInit {


  loading: any;
  frase = new RespuestaFrases();
  @ViewChild(IonContent, {static: true}) content: IonContent;
  apiEntidad: string = '';  //para ejecutar la API REST 

  csvData: any[] = [];    
  headerRow: any[] = [];
  filaActualCSV: number = 0;

  constructor( private loadingCtrl: LoadingController,
               public toastCtrl: ToastController,
               private apiconnectService: ApiconnectService,
               private route: ActivatedRoute,
               private popoverCtrl: PopoverController,
               private actionSheetCtrl: ActionSheetController,
               private papa: Papa,
               private http: HttpClient,
               private router: Router ) { }

  ngOnInit() {

    // Obtener el id (no funciona con idConsulta)
    const id = this.route.snapshot.paramMap.get('id');
    // console.log('id url:', id);

    if ( id !== 'nuevo' ) {

      this.apiEntidad = 'frase';

      this.apiconnectService.getRegistro( id, this.apiEntidad )
          .subscribe( (resp: RespuestaFrases)  => {
            this.frase = resp;
            this.frase.idFrase = id;
            // console.log('marca:', this.frases.marcaCotProd)

        });

    // const hoy: Date = new Date();
    // this.consulta.fechaConsulta = hoy;
    }

    this.filaActualCSV = 0;

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

    if ( this.frase.idFrase ) {

      // Existe y lo actualizo
      this.apiEntidad = 'frases';
      peticion = this.apiconnectService.actualizarRegistro( this.frase, this.apiEntidad, this.frase.idFrase );
      mensajeUser = 'OK! Se actualizaron los datos';

    } else {

      // No existe, agrego un documento
      this.apiEntidad = 'frases';
      peticion = this.apiconnectService.crearRegistro( this.frase, this.apiEntidad );
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
      this.router.navigateByUrl('/frases');

    });

  }

  // PROCESO DE IMPORT DESDE CSV---------------------
  importarCSV(){
    //console.log('empece el import CSV');

    this.http.get('./assets/imports/frases.csv', {
      responseType: 'text'
    }).subscribe(
      // data => console.log('data csv: ', data),  
      data => this.extractData(data),
      err => console.log('error csv: ', err)
    )

  }

  extractData(res) {
    let csvData = res || '';

    //pruebo insertar
    let peticion: Observable<any>;
    // Mensaje aviso luego del guardar
    let mensajeUser = '';

    //let jsonData: any[] = [];
    // jsonData = this.papa.unparse(csvData);
    // console.log('data json: ', this.papa.unparse(csvData));

    this.papa.parse(csvData, {
      complete: parsedData => {
        // console.log('log1:', parsedData); //no se porque me trae 2 de 4?
        //console.log('log2:', parsedData.data.splice(0,1));  //anda (encabezado)

        //this.headerRow = parsedData.data.splice(0,1)[0]; //para sacar el encabezado
        this.csvData = parsedData.data[0];
        //console.log('csvData: ', this.csvData);  //anda data sin encabezado (salida array)
        
        //console.log('csvData tipo: ', typeof this.csvData);
        //console.log('csvData tipo: ', typeof this.frase);

        //this.frase = parsedData.data[this.filaActualCSV]; //anda pasando la fila a importar
        //this.frase = parsedData.data;   //no anda la api intentando insertar
        // this.comercio = this.csvData; 
        //console.log('data comercio: ', this.frase);
        
        //Grabo luego del leer el CSV, --SOLO ANDA DE A UNO CON LA API ACTUAL!!
        this.apiEntidad = 'frases';
        
        //var i //contador par ciclo for (no anda, no se porque)
        //for (i=0;i<=20;i++) {
          //console.log('contador a: ',i);
                    
          this.frase = parsedData.data[this.filaActualCSV]; //anda pasando la fila a importar
          //console.log('data comercio: ', this.frase);
          
          peticion = this.apiconnectService.crearRegistro( this.frase, this.apiEntidad );

        //}
        
        mensajeUser = 'OK! Se guardaron datos nuevos';

      },
      header: true
    })

    // Llamo a la peticion
    peticion.subscribe ( resp => {
      // this.loading.dismiss();  // mensaje de procesando
      // console.log('resp:', resp);   // no devuelve el ID, revisar
      // this.proveedor = resp;

      // Mostrar mensaje a usuario
      this.presentToast(mensajeUser, 'success');

      // Redirigo a la lista
      // this.router.navigateByUrl('/frases');

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
  async fraseMore( evento ) {
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


}
