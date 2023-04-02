// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Sobre esta entidad
// Solo lectura y actualizacion. Altas a mano en firestore

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaIndicadores {
    //Principales
    idIndicador: string;
    nombreIndicador: string;
    tituloTarjetaInd: string;
    subTituloTarjInd: string;
    grupoIndicador: string;
    ordenIndicador: string;
    entidadIndicador: string;

    //Funcionales (tx) o de clasificación (maestros)  
    valorTotalIndicador: string;
    valorNuevosInd: string;
    fechaActInd: Date;
    estadoIndicador: string; //Vigente - No vigente

    //Complementarios
    notasIndicador: string;   

    //Vinculados:

    // Otros campos a evaluar:

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}