import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaCotizamodelos } from '../interfaces/cotizamodelos.model';

@Injectable({
  providedIn: 'root'
})
export class CotizamodelosService {


  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local REAL PRODUCCION   

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearCotizamodelo( cotizamodelo: RespuestaCotizamodelos ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/cotizamodelos`, cotizamodelo)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return cotizamodelo;
        })
      );
  }

  // ----------- LISTAR LOS REGISTROS --------------------------
  getCotizamodelos( filtro: string ) {

    // return this.http.get(`${ this.url}/cotizamodelos`)  // anda
    return this.http.get(`${ this.url}/cotizamodelos/${ filtro }`)  
      .pipe(
        map( this.crearArregloProd ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloProd( cotizamodelosObj: object ) {
    const cotizamodelos: RespuestaCotizamodelos[] = [];
    // console.log('obj:', cotizamodelosObj);    //desactivar

    if ( cotizamodelosObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( cotizamodelosObj ).forEach ( key => {
      const consulta: RespuestaCotizamodelos = cotizamodelosObj[key];
      // proveedor.idConsulta = key;

      cotizamodelos.push ( consulta );

    });

    return cotizamodelos;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getCotizamodelo( idCotizamodelo: string ) {

    return this.http.get(`${ this.url }/cotizamodelo/${ idCotizamodelo }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarCotizamodelo( cotizamodelo: RespuestaCotizamodelos ) {

    // Para no enviar el Id cuando estoy actualizando
    const cotizamodeloTemp = {
      ...cotizamodelo    // trae todos los campos
    };
    delete cotizamodeloTemp.idCotizamodelo;

    return this.http.put(`${ this.url }/cotizamodelos/${ cotizamodelo.idCotizamodelo }`, cotizamodeloTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarCotizamodelo( idCotizamodelo: string) {

    return this.http.delete(`${ this.url }/cotizamodelos/${ idCotizamodelo }`);

  }
  
}
