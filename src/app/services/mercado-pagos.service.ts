import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaMercadoPagos } from '../interfaces/mercado-pagos.model';

@Injectable({
  providedIn: 'root'
})
export class MercadoPagosService {

   // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }

    // ----------- CREAR UN REGISTRO --------------------------
    crearMercadoPago( mercadoPago: RespuestaMercadoPagos ) {
      // console.log(consulta);
  
      return this.http.post(`${ this.url }/mercadoPago`, mercadoPago)
        .pipe(
          map( (resp: any) => {
            // proveedor.idConsulta = resp.idConsulta;
            return mercadoPago;
          })
        );
    }


}
