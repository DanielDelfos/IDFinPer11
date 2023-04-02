import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaSolbeneficios } from '../interfaces/solbeneficios.model';

@Injectable({
  providedIn: 'root'
})
export class SolbeneficiosService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local   
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL   

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearSolbeneficio( Solbeneficio: RespuestaSolbeneficios ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/solbeneficios`, Solbeneficio)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return Solbeneficio;
        })
      );
  }

  // ----------- LISTAR LOS REGISTROS --------------------------
  getSolbeneficios( filtro: string ) {

    // return this.http.get(`${ this.url}/Solbeneficios`)  // anda
    return this.http.get(`${ this.url}/solbeneficios/${ filtro }`)  
      .pipe(
        map( this.crearArregloProd ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloProd( SolbeneficiosObj: object ) {
    const Solbeneficios: RespuestaSolbeneficios[] = [];
    // console.log('obj:', SolbeneficiosObj);    //desactivar

    if ( SolbeneficiosObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( SolbeneficiosObj ).forEach ( key => {
      const consulta: RespuestaSolbeneficios = SolbeneficiosObj[key];
      // proveedor.idConsulta = key;

      Solbeneficios.push ( consulta );

    });

    return Solbeneficios;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getSolbeneficio( idSolbeneficio: string ) {

    return this.http.get(`${ this.url }/solbeneficio/${ idSolbeneficio }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarSolbeneficio( Solbeneficio: RespuestaSolbeneficios ) {

    // Para no enviar el Id cuando estoy actualizando
    const SolbeneficioTemp = {
      ...Solbeneficio    // trae todos los campos
    };
    delete SolbeneficioTemp.idSolbeneficio;

    return this.http.put(`${ this.url }/solbeneficios/${ Solbeneficio.idSolbeneficio }`, SolbeneficioTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarSolbeneficio( idSolbeneficio: string) {

    return this.http.delete(`${ this.url }/solbeneficios/${ idSolbeneficio }`);

  }
  
}
