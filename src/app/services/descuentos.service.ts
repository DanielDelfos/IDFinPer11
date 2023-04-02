import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaDescuentos } from '../interfaces/descuentos.model';

@Injectable({
  providedIn: 'root'
})
export class DescuentosService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL 

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime
    

  constructor( private http: HttpClient ) { }


  // ----------- CREAR UN REGISTRO --------------------------
  crearDescuento( descuento: RespuestaDescuentos ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/descuentos`, descuento)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return descuento;
        })
      );
  }
  
  // ----------- LISTAR LOS REGISTROS --------------------------
  getDescuentos( filtro: string ) {

    // return this.http.get(`${ this.url}/productos`)  // anda
    return this.http.get(`${ this.url}/descuentos/${ filtro }`)  
      .pipe(
        map( this.crearArregloPublic ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloPublic( descuentosObj: object ) {
    const descuentos: RespuestaDescuentos[] = [];
    // console.log('obj:', productosObj);    //desactivar

    if ( descuentosObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( descuentosObj ).forEach ( key => {
      const consulta: RespuestaDescuentos = descuentosObj[key];
      // proveedor.idConsulta = key;

      descuentos.push ( consulta );

    });

    return descuentos;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getDescuento( idDescuento: string ) {

    return this.http.get(`${ this.url }/descuento/${ idDescuento }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarDescuento( descuento: RespuestaDescuentos ) {

    // Para no enviar el Id cuando estoy actualizando
    const descuentoTemp = {
      ...descuento    // trae todos los campos
    };
    delete descuentoTemp.idDescuento;

    return this.http.put(`${ this.url }/descuentos/${ descuento.idDescuento }`, descuentoTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarDescuento( idDescuento: string) {

    return this.http.delete(`${ this.url }/descuentos/${ idDescuento }`);

  }


}
