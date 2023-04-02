// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Maestro de beneficios 
// AL FINAL UTILIZO CUPONES PARA BENEFICIOS (Y DESCUENTOS PARA CUPONES DE DESCUENTO)
// Un registro por cada beneficio

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaBeneficios {
    //Principales
    idBeneficio: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    tituloBenef: string;
    subtituloBenef: string;
    descripcionBenef: string;

    //Funcionales (tx) o de clasificación (maestros)
    urlImagenBenef: string;
    categoriaBenef: string;
    nivelBenef: string;
    estadoBenef: string;
    ordenBenef: string;
    
    //Especiales: 
    
    //Complementarios (notas y otros)
    comentariosIntBenef: string;

    //Vinculados y desde otras tablas

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}