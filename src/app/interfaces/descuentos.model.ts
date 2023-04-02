// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de solicitudes de cupones de descuento (alta en sitio web)
// Un registro por cada solicitud

// Tipos de campos probados: string, Date, number?, boolean?

export class RespuestaDescuentos {

    idDescuento: string;
    interesadoNombreDescuento: string;
    interesadoEmailDescuento: string;
    interesadoCelularDescuento: string;

    //Funcionales:
    estadoDescuento: string;  // A revisar (nuevo) / Revisado (modificable en CRM)
    fechaDescuento: Date; // modificable en CRM

    //Complementarios:
    comentariosDescuento: string;  


    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}