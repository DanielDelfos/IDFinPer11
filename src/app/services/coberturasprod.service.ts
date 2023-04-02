import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaCoberturasprod } from '../interfaces/coberturasprod.model';

@Injectable({
  providedIn: 'root'
})
export class CoberturasprodService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL   

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearCoberturaprod( coberturaprod: RespuestaCoberturasprod ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/coberturasprod`, coberturaprod)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return coberturaprod;
        })
      );
  }

  // ----------- LISTAR LOS REGISTROS --------------------------
  getCoberturasprod( filtro: string ) {

    // return this.http.get(`${ this.url}/coberturasprod`)  // anda
    return this.http.get(`${ this.url}/coberturasprod/${ filtro }`)  
      .pipe(
        map( this.crearArregloProd ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloProd( coberturasprodObj: object ) {
    const coberturasprod: RespuestaCoberturasprod[] = [];
    // console.log('obj:', coberturasprodObj);    //desactivar

    if ( coberturasprodObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( coberturasprodObj ).forEach ( key => {
      const consulta: RespuestaCoberturasprod = coberturasprodObj[key];
      // proveedor.idConsulta = key;

      coberturasprod.push ( consulta );

    });

    return coberturasprod;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getCoberturaprod( idCoberturaprod: string ) {

    return this.http.get(`${ this.url }/coberturaprod/${ idCoberturaprod }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarCoberturaprod( coberturaprod: RespuestaCoberturasprod ) {

    // Para no enviar el Id cuando estoy actualizando
    const coberturaprodTemp = {
      ...coberturaprod    // trae todos los campos
    };
    delete coberturaprodTemp.idCoberturaprod;

    return this.http.put(`${ this.url }/coberturasprod/${ coberturaprod.idCoberturaprod }`, coberturaprodTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarCoberturaprod( idCoberturaprod: string) {

    return this.http.delete(`${ this.url }/coberturasprod/${ idCoberturaprod }`);

  }
  
}
