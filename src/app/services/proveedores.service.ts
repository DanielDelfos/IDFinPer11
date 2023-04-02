import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaProveedores } from '../interfaces/proveedores.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/delfosbd7-des/us-central1/api';  // Desarrollo Local
  private url = 'https://us-central1-delfosbd7-des.cloudfunctions.net/api';  // Desarrollo Web
  // private url = 'https://us-central1-delfosbd7-prod.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime


  constructor( private http: HttpClient) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearProveedor( proveedor: RespuestaProveedores ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/consultas`, proveedor)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return proveedor;
        })
      );
  }

  // ----------- LISTAR LOS REGISTROS --------------------------
  getProveedores() {
    return this.http.get(`${ this.url}/consultas`)
      .pipe(
        map( this.crearArregloProv ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloProv( provedoresObj: object ) {
    const proveedores: RespuestaProveedores[] = [];
    // console.log('obj:', provedoresObj);

    if ( provedoresObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( provedoresObj ).forEach ( key => {
      const consulta: RespuestaProveedores = provedoresObj[key];
      // proveedor.idConsulta = key;

      proveedores.push ( consulta );

    });

    return proveedores;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getProveedor( idConsulta: string ) {

    return this.http.get(`${ this.url }/consulta/${ idConsulta }`);

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarProveedor( proveedor: RespuestaProveedores ) {

    // Para no enviar el Id cuando estoy actualizando
    const proveedorTemp = {
      ...proveedor    // trae todos los campos
    };
    delete proveedorTemp.idConsulta;

    return this.http.put(`${ this.url }/consultas/${ proveedor.idConsulta }`, proveedorTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarProveedor( idConsulta: string) {

    return this.http.delete(`${ this.url }/consultas/${ idConsulta }`);

  }

}
