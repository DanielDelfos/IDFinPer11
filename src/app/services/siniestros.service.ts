// NO LO USO, EN CRM USO EL APICONNECT

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaSiniestros } from '../interfaces/siniestros.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SiniestrosService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL   

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime
  
  constructor( private http: HttpClient ) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearSiniestro( siniestro: RespuestaSiniestros ) {
    // console.log(consulta);

    //para pruebas lo cambio a 2
    return this.http.post(`${ this.url }/siniestros`, siniestro)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return siniestro;
        })
      );
  }


  // ----------- LISTAR LOS REGISTROS --------------------------
  getSiniestros( filtro: string ) {

    // return this.http.get(`${ this.url}/siniestros`)  // anda
    return this.http.get(`${ this.url}/siniestros/${ filtro }`)  
      .pipe(
        map( this.crearArregloProd ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloProd( siniestrosObj: object ) {
    const siniestros: RespuestaSiniestros[] = [];
    // console.log('obj:', siniestrosObj);    //desactivar

    if ( siniestrosObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( siniestrosObj ).forEach ( key => {
      const consulta: RespuestaSiniestros = siniestrosObj[key];
      // proveedor.idConsulta = key;

      siniestros.push ( consulta );

    });

    return siniestros;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getSiniestro( idSiniestro: string ) {

    return this.http.get(`${ this.url }/siniestro/${ idSiniestro }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarSiniestro( siniestro: RespuestaSiniestros ) {

    // Para no enviar el Id cuando estoy actualizando
    const siniestroTemp = {
      ...siniestro    // trae todos los campos
    };
    delete siniestroTemp.idSiniestro;

    return this.http.put(`${ this.url }/siniestros/${ siniestro.idSiniestro }`, siniestroTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarSiniestro( idSiniestro: string) {

    return this.http.delete(`${ this.url }/siniestros/${ idSiniestro }`);

  }  

}
