// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de consultas por Comparar mi contrato vigente (page compara en el sitio web)
// Un registro por cada consulta

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaConfiguraciones {
    //Principales
    idConfiguracion: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombreConfig: string;  //aparce en listas

    //Funcionales (tx) o de clasificación (maestros)
    enviaEmailsCompaniasConfig: string; // Si o No, envía los emails a las Compañias de Seguro
    enviaEmailsAreasConfig: string; // Si o No, envía los emails a las Areas de Internas de la empresa
    emailsAreaRecepcionConfig: string;
    emailsAreaProduccionConfig: string;
    emailsAreaCobranzaConfig: string;
    emailsAreaClubConfig: string;
    enviaEmailsPruebasConfig: string; // Si o No, envía los emails a cuentas de prueba
    emailsPruebasConfig: string;

    //Especiales: 
    estadoConfig: string;  // Vigente (a tomar, solo un registro como config.), No vigente (omito)

    //Complementarios (notas y otros)
    notasInternasConfig: string;

    //Vinculados y desde otras tablas

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}