import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaProductos } from '../interfaces/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local   
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL  

  //  private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime

  constructor( private http: HttpClient ) { }

  // ----------- CREAR UN REGISTRO --------------------------
  crearProducto( producto: RespuestaProductos ) {
    // console.log(consulta);

    return this.http.post(`${ this.url }/productos`, producto)
      .pipe(
        map( (resp: any) => {
          // proveedor.idConsulta = resp.idConsulta;
          return producto;
        })
      );
  }

  // ----------- LISTAR LOS REGISTROS --------------------------
  getProductos( filtro: string ) {

    // return this.http.get(`${ this.url}/productos`)  // anda
    return this.http.get(`${ this.url}/productos/${ filtro }`)  
      .pipe(
        map( this.crearArregloProd ), // el map usa primera argumento (resp) y lo pasa como parametro
        delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
      );
  }

  // Crear Arreglo para listar
  private crearArregloProd( productosObj: object ) {
    const productos: RespuestaProductos[] = [];
    // console.log('obj:', productosObj);    //desactivar

    if ( productosObj === null ) { return []; }  // Validar por si no hay registros

    Object.keys ( productosObj ).forEach ( key => {
      const consulta: RespuestaProductos = productosObj[key];
      // proveedor.idConsulta = key;

      productos.push ( consulta );

    });

    return productos;
  }

  // ----------- OBTENER UN REGISTRO --------------------------  
    // Obtener un registro por id
  getProducto( idProducto: string ) {

    return this.http.get(`${ this.url }/producto/${ idProducto }`);  

  }


  // ----------- ACTUALIZAR UN REGISTRO --------------------------
  actualizarProducto( producto: RespuestaProductos ) {

    // Para no enviar el Id cuando estoy actualizando
    const productoTemp = {
      ...producto    // trae todos los campos
    };
    delete productoTemp.idProducto;

    return this.http.put(`${ this.url }/productos/${ producto.idProducto }`, productoTemp);

  }

  // ----------- BORRAR UN REGISTRO --------------------------
  borrarProducto( idProducto: string) {

    return this.http.delete(`${ this.url }/productos/${ idProducto }`);

  }
  
}
