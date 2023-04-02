// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Maestro de Comercios, por ahora solo para asociar a Beneficios y enviar email.
// Un registro por cada comercio

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaComercios {
    //Principales
    idComercio: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombreNegocioCome: string;
    nombreContactoCome: string;
    telefonoContactoCome: string;
    
    //Funcionales (tx) o de clasificación (maestros)
    
    
    //Especiales: para beneficios
    emailBeneficioCome: string;
    

    //Complementarios (notas y otros)
    notasInternasCome: string;

    //Vinculados y desde otras tablas

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}