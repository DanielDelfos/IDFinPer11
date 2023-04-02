import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaQueja } from '../interfaces/quejas.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuejasService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL   

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime
  
  constructor( private http: HttpClient ) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearQueja( queja: RespuestaQueja ) {
    // console.log(consulta);

    //para pruebas lo cambio a 2
    return this.http.post(`${ this.url }/quejas`, queja)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return queja;
        })
      );
  }

}
