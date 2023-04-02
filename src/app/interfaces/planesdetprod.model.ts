export class RespuestaPlanDets {
    // Principales
    idPlanDet: string;
    nombreInternoPlanDet: string;
    
    //Funcionales
    detalleVisiblePlanDet: string; // detalle $ importe
    estadoPlanDet: string;  // Vigente, No vigente (para filtros del API)
    ordenPlanDet: string;   // para ordenar como lo busco en la API
    
    //Especiales (vinculos a otras tablas)
    idPlan: string; 

    // Complementarios
    notasPlanDet: string;

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}