// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de consultas por Comparar mi contrato vigente (page compara en el sitio web)
// Un registro por cada consulta

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaComparas {
    //Principales
    idCompara: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombreInteresadoComp: string;
    emailInteresadoComp: string;
    comentariosContratoComp: string;
    horarioInteresadoComp: string;
    telefonoInteresadoComp: string;

    //Funcionales (tx) o de clasificación (maestros)
    estadoComp: string;  // A revisar (nuevo) / Revisado (modificable en CRM)
    fechaSolicitudComp: Date; // modificable en CRM

    //Especiales: Caracteristicas del cotizador (modelo)


    //Complementarios (notas y otros)
    notasInternasComp: string;

    //Vinculados y desde otras tablas

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}