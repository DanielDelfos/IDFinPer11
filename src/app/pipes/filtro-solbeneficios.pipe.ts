import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroSolbeneficios'
})
export class FiltroSolbeneficiosPipe implements PipeTransform {

  transform( arreglo: any[], 
    texto: string,
    columna: string): any {

      // console.log(arreglo);

      if ( texto === '' ) {
      return arreglo;
      }

      texto = texto.toLowerCase();

      return arreglo.filter( item => {
      return item[columna].toLowerCase()  // Busco solo en el interesado?
          .includes( texto );
      });

    }

}
