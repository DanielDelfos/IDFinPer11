// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de consultas por Comparar mi contrato vigente (page compara en el sitio web)
// Un registro por cada consulta

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaCompanias {
    //Principales
    idCompania: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombreCompania: string;
    contactosEmisionesCompania: string;
    emailsEmisionesCompania: string;
    
    //Funcionales (tx) o de clasificación (maestros)

    //Especiales: Caracteristicas del cotizador (modelo)


    //Complementarios (notas y otros)
    notasInternasCompania: string;

    //Vinculados y desde otras tablas

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}