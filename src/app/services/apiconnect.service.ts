import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

//ESTO HAY QUE SACAR!!
// import { RespuestaComparas } from '../interfaces/comparas.model';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local prueba   
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL   

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearRegistro( registro: any, apiEntidad: string ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/${ apiEntidad }`, registro)
      .pipe(
        map( (resp: any) => {
          return registro;
        })
      );
  }

  // ----------- LISTAR LOS REGISTROS --------------------------
  getEntidad( filtro: string, apiEntidad: string ) {

    // return this.http.get(`${ this.url}/comparas`)  // anda
    return this.http.get(`${ this.url }/${ apiEntidad }/${ filtro }`)  
      .pipe(
        map( this.crearArreglo ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArreglo( entidadObj: object ) {
    const entidad: any = [];
    // console.log('obj:', comparasObj);    //desactivar

    if ( entidadObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( entidadObj ).forEach ( key => {
      const consulta: any = entidadObj[key];
      // proveedor.idConsulta = key;

      entidad.push ( consulta );

    });

    return entidad;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getRegistro( id: string, apiEntidad: string ) {

    return this.http.get(`${ this.url }/${ apiEntidad }/${ id }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarRegistro( registro: any, apiEntidad: string, idRegistro: string ) {

    // Para no enviar el Id cuando estoy actualizando
    const registroTemp = {
      ...registro    // trae todos los campos
    };

    // console.log('registroTemp antes:', registroTemp);
    // delete registroTemp.idCompara;  //no se para que sirve
    // console.log('registroTemp despues:', registroTemp);

    // nombreId = `registro.${ nombreId }`; 
    // console.log('el valor del id es:', nombreId);

    // console.log('id registro:', idRegistro);
    return this.http.put(`${ this.url }/${ apiEntidad }/${ idRegistro }`, registroTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarEntidad( idCompara: string, apiEntidad: string ) {

    return this.http.delete(`${ this.url }/${ apiEntidad }/${ idCompara }`);

  }

}
