import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaPublicaciones } from '../interfaces/publicaciones.model';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL  

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime


  constructor( private http: HttpClient ) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearPublicacion( publicacion: RespuestaPublicaciones ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/publicaciones`, publicacion)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return publicacion;
        })
      );
  }
  
  // ----------- LISTAR LOS REGISTROS --------------------------
  getPublicaciones( filtro: string ) {

    // return this.http.get(`${ this.url}/productos`)  // anda
    return this.http.get(`${ this.url}/publicaciones/${ filtro }`)  
      .pipe(
        map( this.crearArregloPublic ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloPublic( publicacionesObj: object ) {
    const publicaciones: RespuestaPublicaciones[] = [];
    // console.log('obj:', productosObj);    //desactivar

    if ( publicacionesObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( publicacionesObj ).forEach ( key => {
      const consulta: RespuestaPublicaciones = publicacionesObj[key];
      // proveedor.idConsulta = key;

      publicaciones.push ( consulta );

    });

    return publicaciones;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getPublicacion( idPublicacion: string ) {

    return this.http.get(`${ this.url }/publicacion/${ idPublicacion }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarPublicacion( publicacion: RespuestaPublicaciones ) {

    // Para no enviar el Id cuando estoy actualizando
    const publicacionTemp = {
      ...publicacion    // trae todos los campos
    };
    delete publicacionTemp.idPublicacion;

    return this.http.put(`${ this.url }/publicaciones/${ publicacion.idPublicacion }`, publicacionTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarPublicacion( idPublicacion: string) {

    return this.http.delete(`${ this.url }/publicaciones/${ idPublicacion }`);

  }

}
