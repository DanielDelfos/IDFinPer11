import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaCupones } from '../interfaces/cupones.model';

@Injectable({
  providedIn: 'root'
})
export class CuponesService {

    // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL  

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }

  
  // ----------- CREAR UN REGISTRO --------------------------
  crearCupon( cupon: RespuestaCupones ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/cupones`, cupon)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return cupon;
        })
      );
  }
  
  // ----------- LISTAR LOS REGISTROS --------------------------
  getCupones( filtro: string ) {

    // return this.http.get(`${ this.url}/productos`)  // anda
    return this.http.get(`${ this.url}/cupones/${ filtro }`)  
      .pipe(
        map( this.crearArregloPublic ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloPublic( cuponesObj: object ) {
    const cupones: RespuestaCupones[] = [];
    // console.log('obj:', productosObj);    //desactivar

    if ( cuponesObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( cuponesObj ).forEach ( key => {
      const consulta: RespuestaCupones = cuponesObj[key];
      // proveedor.idConsulta = key;

      cupones.push ( consulta );

    });

    return cupones;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getCupon( idCupon: string ) {

    return this.http.get(`${ this.url }/cupon/${ idCupon }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarCupon( cupon: RespuestaCupones ) {

    // Para no enviar el Id cuando estoy actualizando
    const cuponTemp = {
      ...cupon    // trae todos los campos
    };
    delete cuponTemp.idCupon;

    return this.http.put(`${ this.url }/cupones/${ cupon.idCupon }`, cuponTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarCupon( idCupon: string) {

    return this.http.delete(`${ this.url }/cupones/${ idCupon }`);

  }

}
