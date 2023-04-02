import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaIndicadores } from '../interfaces/indicadores.model';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL   

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearIndicador( indicador: RespuestaIndicadores ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/indicadores`, indicador)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return indicador;
        })
      );
  }

  // ----------- LISTAR LOS REGISTROS --------------------------
  getIndicadores( filtro: string ) {

    // return this.http.get(`${ this.url}/indicadores`)  // anda
    return this.http.get(`${ this.url}/indicadores/${ filtro }`)  
      .pipe(
        map( this.crearArregloProd ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloProd( indicadoresObj: object ) {
    const indicadores: RespuestaIndicadores[] = [];
    // console.log('obj:', indicadoresObj);    //desactivar

    if ( indicadoresObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( indicadoresObj ).forEach ( key => {
      const consulta: RespuestaIndicadores = indicadoresObj[key];
      // proveedor.idConsulta = key;

      indicadores.push ( consulta );

    });

    return indicadores;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getIndicador( idIndicador: string ) {

    return this.http.get(`${ this.url }/indicador/${ idIndicador }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarIndicador( indicador: RespuestaIndicadores ) {

    // Para no enviar el Id cuando estoy actualizando
    const indicadorTemp = {
      ...indicador    // trae todos los campos
    };
    delete indicadorTemp.idIndicador;

    return this.http.put(`${ this.url }/indicadores/${ indicador.idIndicador }`, indicadorTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarIndicador( idIndicador: string) {

    return this.http.delete(`${ this.url }/indicadores/${ idIndicador }`);

  }
  
}
