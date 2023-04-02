// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Maestro de campos a pedir por producto, en la cotización (paso 3) 
// Un registro por producto, marcar que aplica para ese producto
// AL FINAL NO USO ESTA TABLA, POR AHORA!!

// Tipos de campos probados: string, Date, number?
export class RespuestaCotizamodelos {
    //Principales
    idCotizamodelo: string;   
    
    //Funcionales (tx) o de clasificación (maestros)
    marcaCotMod: boolean;    // Desde acá biciletas
    modeloCotMod: boolean;
    anioCotMod: boolean;
    //bolso protegido no lleva
    
    //Complementarios (notas y otros)
    notasCotMod: string;
    
    //Vinculados y desde otras tablas
    idProducto: string;
    nombreProducto: string;

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}