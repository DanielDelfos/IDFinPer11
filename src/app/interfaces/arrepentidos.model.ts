// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Maestro de productos (seguros en el sitio web)
// Un registro por producto

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaArrepentidos {
    //Principales
    idArrepentido: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombreArrep: string;
    dniCuilArrep: string;
    emailArrep: string;
    telefonoArrep: string

    //Funcionales (tx) o de clasificación (maestros)
    recibioPolizaArrep: boolean;   //falta pasar a numero
    nroPolizaArrep: string;    //falta pasar boolean

    //Especiales: 


    //Complementarios (notas y otros)
    comentariosArrep: string;

    //Vinculados y desde otras tablas

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}