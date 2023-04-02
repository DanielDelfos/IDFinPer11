// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de Detalle de Coberturas de Producto (hijo de coberturasprod)
// En el sitio, en un seguro, la lista de beneficios, de requisitos y otros.
// Un registro por cada detalle de la cobertura

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaCobproddetalles {
    //Principales
    idCobproddetalle: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombreInternoDetalle: string;
    descripcionDetalle: string;
    ordenDetalle: string;

    //Funcionales (tx) o de clasificación (maestros)

    //Especiales: Caracteristicas del cotizador (modelo)


    //Complementarios (notas y otros)
    notasInternasDet: string;

    //Vinculados y desde otras tablas
    idCoberturaprod: string;  

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}