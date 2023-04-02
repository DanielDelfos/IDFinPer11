import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { ConsultaModel } from '../models/consulta.model';
import { map, delay } from 'rxjs/operators';
import { RespuestaIvaCompras } from '../interfaces/ivacompras.model';


@Injectable({
  providedIn: 'root'
})
export class IvacomprasService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/delfosbd7-des/us-central1/api';  // Desarrollo Local
  private url = 'https://us-central1-delfosbd7-des.cloudfunctions.net/api';  // Desarrollo Web
  // private url = 'https://us-central1-delfosbd7-prod.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }

  crearIvaCompra( ivaCompra: RespuestaIvaCompras ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/consultas`, ivaCompra)
      .pipe(
        map( (resp: any) => {
          // ivaCompra.idConsulta = resp.idConsulta;
          return ivaCompra;
        })
      );
  }


  actualizarIvaCompra( ivaCompra: RespuestaIvaCompras ) {

    // Para no enviar el Id cuando estoy actualizando
    const ivaCompraTemp = {
      ...ivaCompra    // trae todos los campos
    };
    // delete ivaCompraTemp.idConsulta;

    // return this.http.put(`${ this.url }/consultas/${ ivaCompra.idConsulta }`, ivaCompraTemp);

  }

  // Obtener listado
  getConsultas() {
    return this.http.get<RespuestaIvaCompras>(`${ this.url}/consultas`);
      // .pipe(
      //   map( this.crearArreglo ),
      //   delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      // );
  }

  // Transformar lo obtenido en un arreglo para listado
  private crearArreglo( consultasObj: object ) {
    const consultas: RespuestaIvaCompras[] = [];

    if ( consultasObj === null ) { return []; }   // Validar por si no hay registros

    Object.keys ( consultasObj ).forEach( key => {

      const consulta: RespuestaIvaCompras = consultasObj[key];
      // ivaCompra.idConsulta = key;
      // console.log(consulta.idConsulta);
      consultas.push( consulta );

    });

    console.log('consultas:', consultas);

    return 'consultas';

  }

    // Obtener un registro por id
/*     getIvaCompra( idConsulta: string ) {

      return this.http.get(`${ this.url }/ivacompra/${ idConsulta }`);

    }
 */
}


