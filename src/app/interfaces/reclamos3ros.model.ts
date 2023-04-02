import { EmpresasPageRoutingModule } from '../pages/empresas/empresas-routing.module';
// INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// Datos funcionales de la tabla (informativo)
// Registro de Reclamos de Siniestros por 3ros. (page reclamos2ros en el sitio web, altas)
// Un registro por cada reclamo

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaReclamos3ros {
    //Principales
    idReclamos3ro: string;  //despues del id, igual a la tabla en singular (para reemplazos)

    aseguradoNombre: string;
    aseguradoTelefono: string;
    aseguradoCelular: string;
    aseguradoDniCuit: string;
    aseguradoFNacimiento: string;
    aseguradoEmail: string;
    aseguradoDomicCalleNro: string;
    aseguradoDomicLocalidad: string;
    aseguradoDomicProvincia: string;
    aseguradoCiaSeguro: string;
    aseguradoAutoMarca: string;
    aseguradoAutoModelo: string;
    aseguradoAutoAnio: string;
    aseguradoAutoPatente: string;
      
    terceroNombre: string;
    terceroTelefono: string;
    terceroCelular: string;
    terceroDniCuit: string;
    terceroFNacimiento: string;
    terceroEmail: string;
    terceroCiaSeguro: string;
    terceroTelefAlternativo: string;
    terceroAutoMarca: string;
    terceroAutoModelo: string;
    terceroAutoAnio: string;
    terceroAutoPatente: string;

    accidenteFecha: string;
    accidenteHora: string;
    accidenteLugar: string;
    accidenteLocalidad: string;
    accidenteProvincia: string;
    accidenteDetalle: string;


    //Funcionales (tx) o de clasificación (maestros)
    estado: string;  // A revisar (nuevo) / Revisado (modificable en CRM)
    fechaSolicitud: Date; // modificable en CRM

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