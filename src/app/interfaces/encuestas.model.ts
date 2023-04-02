// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de Encuestas, luego de cada formulario (solo alta en Sitio)
// Un registro por cada encuesta

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaEncuestas {
    //Principales
    idEncuesta: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombrePagina: string;
    puntajePagina: number;
    puntajeSitio: number;
    comentarios: string;

    //Funcionales (tx) o de clasificación (maestros)
    estado: string;  // A revisar (nuevo) / Revisado (modificable en CRM)
    fechaAlta: Date; // modificable en CRM

    //Especiales: Caracteristicas del cotizador (modelo)


    //Complementarios (notas y otros)
    notasInternas: string;

    //Vinculados y desde otras tablas

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}