// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de solicitudes del club de beneficios (alta en sitio web)
// Un registro por cada solicitud

// Tipos de campos probados: string, Date, number?, boolean?

export class RespuestaSolbeneficios {

    idSolbeneficio: string;
    interesadoNombreSolbeneficio: string;
    interesadoEmailSolbeneficio: string;
    interesadoCelularSolbeneficio: string;

    //Funcionales:
    estadoSolbeneficio: string;  // A revisar (nuevo) / Revisado (modificable en CRM)
    fechaSolbeneficio: Date; // modificable en CRM

    //Complementarios:
    comentariosSolbeneficio: string;  


    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}