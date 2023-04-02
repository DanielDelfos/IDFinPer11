// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

export class RespuestaCategorias {
    // Tipos de campos probados: string, Date
    idCategoria: string;  //Campo clave
    nombreCategoria: string;
    iconoCategoria: string;
    notasCategoria: string;

    // Otras a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default en servicio o ts
        // this.interesado = 'Nueva consulta';
    }
}