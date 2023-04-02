import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaPlanes } from '../interfaces/planes-prod.model';

@Injectable({
  providedIn: 'root'
})
export class PlanesProdService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCIO REAL   

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime
  

  constructor( private http: HttpClient ) { }

    // ----------- CREAR UN REGISTRO --------------------------
    crearPlan( plan: RespuestaPlanes ) {
      // console.log(consulta);

      return this.http.post(`${ this.url }/planes`, plan)
        .pipe(
          map( (resp: any) => {
            // proveedor.idConsulta = resp.idConsulta;
            return plan;
          })
        );
    }
 
    // ----------- LISTAR LOS REGISTROS --------------------------
    getPlanes( filtro: string ) {

      // return this.http.get(`${ this.url}/productos`)  // anda
      return this.http.get(`${ this.url}/planes/${ filtro }`)  
        .pipe(
          map( this.crearArregloPlan ), // el map usa primera argumento (resp) y lo pasa como parametro
          delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
        );
    }
  
    // Crear Arreglo para listar
    private crearArregloPlan( planesObj: object ) {
      const planes: RespuestaPlanes[] = [];
      // console.log('obj:', productosObj);    //desactivar
  
      if ( planesObj === null ) { return []; }  // Validar por si no hay registros
  
      Object.keys ( planesObj ).forEach ( key => {
        const consulta: RespuestaPlanes = planesObj[key];
        // proveedor.idConsulta = key;
  
        planes.push ( consulta );
  
      });
  
      return planes;
    }
  
    // ----------- OBTENER UN REGISTRO --------------------------  
      // Obtener un registro por id
    getPlan( idPlan: string ) {
  
      return this.http.get(`${ this.url }/plan/${ idPlan }`);  
  
    }
  
  
    // ----------- ACTUALIZAR UN REGISTRO --------------------------
    actualizarPlan( plan: RespuestaPlanes ) {
  
      // Para no enviar el Id cuando estoy actualizando
      const planTemp = {
        ...plan    // trae todos los campos
      };
      delete planTemp.idPlan;
  
      return this.http.put(`${ this.url }/planes/${ plan.idPlan }`, planTemp);
  
    }
  
    // ----------- BORRAR UN REGISTRO --------------------------
    borrarPlan( idPlan: string) {
  
      return this.http.delete(`${ this.url }/planes/${ idPlan }`);
  
    }

}
