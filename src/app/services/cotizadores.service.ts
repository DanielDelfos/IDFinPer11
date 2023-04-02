import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaCotizadores } from '../interfaces/cotizadores.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CotizadoresService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local REAL PRODUCCION   

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }


  // ----------- CREAR UN REGISTRO --------------------------
  crearCotizador( cotizador: RespuestaCotizadores, cotizadorTipo: string, nombreProducto: string ) {
    // console.log('cotizador:', cotizador);
    
    cotizador.cotizadorTipo = cotizadorTipo;
    cotizador.nombreProducto = nombreProducto;

    return this.http.post(`${ this.url }/cotizadores/${ cotizadorTipo }`, cotizador)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return cotizador;
        })
      );
  }

}
