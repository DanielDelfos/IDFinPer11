import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { RespuestaCategorias } from '../interfaces/categorias.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  // Revisar que está en entorno desarrollo, pasar a base prueba (FALTA ENTORNO PRODUCCION)
  // private url = 'http://localhost:5000/imagenweb13/us-central1/api';  // Desarrollo Local
  // private url = 'http://localhost:5000/imagenweb13---orue-prod/us-central1/api';  // Desarrollo Local PRODUCCION REAL   

  // private url = 'https://us-central1-imagenweb13.cloudfunctions.net/api';  // Pruebas Web
  private url = ' https://us-central1-imagenweb13---orue-prod.cloudfunctions.net/api';  // PRODUCCION REAL

  // private url = 'https://us-central1-transportechiarottin-90652.cloudfunctions.net/api';  // Produccion Web
  // private url = 'https://delfosbd7-des.firebaseio.com';  //sin api con database realtime
  

  constructor( private http: HttpClient ) { }

    // ----------- CREAR UN REGISTRO --------------------------
    crearCategoria( categoria: RespuestaCategorias ) {
      // console.log(consulta);

      return this.http.post(`${ this.url }/categorias`, categoria)
        .pipe(
          map( (resp: any) => {
            // proveedor.idConsulta = resp.idConsulta;
            return categoria;
          })
        );
    }
 
    // ----------- LISTAR LOS REGISTROS --------------------------
    getCategorias( filtro: string ) {

      // return this.http.get(`${ this.url}/productos`)  // anda
      return this.http.get(`${ this.url}/categorias/${ filtro }`)  
        .pipe(
          map( this.crearArregloCategoria ), // el map usa primera argumento (resp) y lo pasa como parametro
          delay(0)   // para que se vea el cartel de cargando, medio segundo (500)
        );
    }
  
    // Crear Arreglo para listar
    private crearArregloCategoria( categoriasObj: object ) {
      const categorias: RespuestaCategorias[] = [];
      // console.log('obj:', productosObj);    //desactivar
  
      if ( categoriasObj === null ) { return []; }  // Validar por si no hay registros
  
      Object.keys ( categoriasObj ).forEach ( key => {
        const consulta: RespuestaCategorias = categoriasObj[key];
        // proveedor.idConsulta = key;
  
        categorias.push ( consulta );
  
      });
  
      return categorias;
    }
  
    // ----------- OBTENER UN REGISTRO --------------------------  
      // Obtener un registro por id
    getCategoria( idCategoria: string ) {
  
      return this.http.get(`${ this.url }/categoria/${ idCategoria }`);  
  
    }
  
  
    // ----------- ACTUALIZAR UN REGISTRO --------------------------
    actualizarCategoria( categoria: RespuestaCategorias ) {
  
      // Para no enviar el Id cuando estoy actualizando
      const categoriaTemp = {
        ...categoria    // trae todos los campos
      };
      delete categoriaTemp.idCategoria;
  
      return this.http.put(`${ this.url }/categorias/${ categoria.idCategoria }`, categoriaTemp);
  
    }
  
    // ----------- BORRAR UN REGISTRO --------------------------
    borrarCategoria( idCategoria: string) {
  
      return this.http.delete(`${ this.url }/categorias/${ idCategoria }`);
  
    }

}
