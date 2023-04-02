import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaBeneficios } from '../interfaces/beneficios.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiosService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearBeneficio( beneficio: RespuestaBeneficios ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/beneficios`, beneficio)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return beneficio;
        })
      );
  }

  // ----------- LISTAR LOS REGISTROS --------------------------
  getBeneficios( filtro: string ) {

    // return this.http.get(`${ this.url}/beneficios`)  // anda
    return this.http.get(`${ this.url}/beneficios/${ filtro }`)  
      .pipe(
        map( this.crearArregloProd ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloProd( beneficiosObj: object ) {
    const beneficios: RespuestaBeneficios[] = [];
    // console.log('obj:', beneficiosObj);    //desactivar

    if ( beneficiosObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( beneficiosObj ).forEach ( key => {
      const consulta: RespuestaBeneficios = beneficiosObj[key];
      // proveedor.idConsulta = key;

      beneficios.push ( consulta );

    });

    return beneficios;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getBeneficio( idBeneficio: string ) {

    return this.http.get(`${ this.url }/beneficio/${ idBeneficio }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarBeneficio( beneficio: RespuestaBeneficios ) {

    // Para no enviar el Id cuando estoy actualizando
    const beneficioTemp = {
      ...beneficio    // trae todos los campos
    };
    delete beneficioTemp.idBeneficio;

    return this.http.put(`${ this.url }/beneficios/${ beneficio.idBeneficio }`, beneficioTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarBeneficio( idBeneficio: string) {

    return this.http.delete(`${ this.url }/beneficios/${ idBeneficio }`);

  }
  
}
