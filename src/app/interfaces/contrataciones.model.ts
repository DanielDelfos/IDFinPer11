// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de consultas por Comparar mi contrato vigente (page compara en el sitio web)
// Un registro por cada consulta

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaContrataciones {
    //Principales
    idContratacion: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombreInteresadoCont: string;
    emailInteresadoCont: string;
    telefonoInteresadoCont: string;
    dniCuilInteresadoCont: string;
    codigoPostalInteresadoCont: string;
    aclaracionesInteresadoCont: string;
    fechaSolicitudCont: Date; // modificable en CRM

    //Funcionales (tx) o de clasificación (maestros) 
    estadoInternoCont: string;  // A revisar (nuevo) / Revisado (modificable en CRM)

    //Especiales: Caracteristicas del cotizador (modelo)
    // datos del producto y plan
    idProductoCont: string;
    nombreProductoCont: string;
    precioActualProdCont: string;   
    esPromocionProdCont: string;    
    categoriaProdCont: string;
    // datos del plan
    idPlanCont: string;
    nombrePlanCont: string;
    cuotaValorPlanCont: string;     
    cuotaFrecuenciaPLanCont: string;   
    sumaAseguradaPlanCont: string;  

    // datos de la compañia
    idCompaniaProd: string;
    nombreCompania: string;
    contactosEmisionesCompania: string;
    emailsEmisionesCompania: string;    

    //agregados por configuracion CRM
    idConfiguracion: string;  
    enviaEmailsCompaniasConfig: string; // Si o No, envía los emails a las Compañias de Seguro
    enviaEmailsAreasConfig: string; // Si o No, envía los emails a las Areas de Internas de la empresa
    emailsAreaProduccionConfig: string;
    enviaEmailsPruebasConfig: string; // Si o No, envía los emails a cuentas de prueba
    emailsPruebasConfig: string;    

    //calculados durante procesos
    emailAvisoFrom: string;
    emailAvisoTo: string;
    emailAvisoCc: string;    
    emailCompaniaFrom: string;
    emailCompaniaTo: string;
    emailCompaniaCc: string;    

    //Complementarios (notas y otros)
    notasInternasCont: string;

    //Vinculados y desde otras tablas

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}