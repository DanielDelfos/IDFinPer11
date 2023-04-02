// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de Frases (Salmos o sitas Biblicas) a mostrar en el Sitio, en la cruz
// Un registro por cada frase

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaFrases {
    //Principales
    idFrase: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    dia: number;
    mes: number;
    fraseTexto: string;

    //Funcionales (tx) o de clasificación (maestros)

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