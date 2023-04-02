export class RespuestaPlanes {
    idPlan: string;
    idProducto: string;
    nombrePlan: string;
    cuotaValorPlan: string;     //falta pasar a numero para cálculos
    cuotaFrecuenciaPLan: string;   
    sumaAseguradaPlan: string;    
    comentariosPlan: string;    
    notasPlan: string;
    vigenciaDesdePlan: Date;    //todavia no valido nada
    estadoPlan: string;  // Vigente, No vigente (para filtros del API)
    ordenPlan: string;   // para ordenar como lo busco en la API

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}