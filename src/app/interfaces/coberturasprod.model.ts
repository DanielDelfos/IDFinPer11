// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Maestro de productos (seguros en el sitio web)
// Un registro por producto

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaCoberturasprod {
    //Principales (id y titulos)
    idCoberturaprod: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombreInternoCobP: string;

    //Funcionales (tx) o de clasificación (maestros)
    tituloCobP: string;
    detalleCobP: string;
    ordenCobP: string;

    //Especiales: 

    //Complementarios (notas y otros)
    notasInternasCobP: string;

    //Vinculados y desde otras tablas
    idProductoCobP: string;

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}