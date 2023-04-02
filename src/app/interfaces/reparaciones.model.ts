// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de consultas por solicitud de Cotizacion para Reparaciones (page reparacion en sitio web) 
// Un registro por cada solicitud de cotizacion

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaReparaciones {
    //Principales
    idReparacion: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombreInteresado: string;
    emailInteresado: string;
    comentarios: string;
    horarioInteresado: string;
    telefonoInteresado: string;

    //Funcionales (tx) o de clasificación (maestros)
    estado: string;  // A revisar (nuevo) / Revisado (modificable en CRM)
    fechaSolicitud: Date; // modificable en CRM

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