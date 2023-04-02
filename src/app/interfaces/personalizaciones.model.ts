// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de personalizaciones de productos (en el sitio web se asocian a la cotizacion de productos)
// Varios registros por cada producto

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaPersonalizaciones {
    //Principales
    idPersonalizacion: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombrePersonalizacion: string;
    comentariosPersonalizacion: string;

    //Funcionales (tx) o de clasificación (maestros)
    ordenPersonalizacion: string;


    //Especiales: Caracteristicas del cotizador (modelo)

    //Complementarios (notas y otros)
    notasInternasPersonalizacion: string;

    //Vinculados y desde otras tablas
    idProdPersonalizacion: string;

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}