export class RespuestaSiniestros {
    idSiniestro: string;
    
    // interesadoNombre: string;
    // interesadoDNICUIL: string;
    // interesadoEmail: string;
    // siniestroMensaje: string;
    // interesadoTelefono: string;
    // hasta acá es el formulario 1 (tu opinion) creo que no lo uso mas, verificar!!

    // formulario 2 (aviso de siniestro) FALTA SEPARAR EN OTRA API!!
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
    aseguradoPolizaNro: string;
    aseguradoTelefAlternativo: string;
    aseguradoAutoMarca: string;
    aseguradoAutoModelo: string;
    aseguradoAutoAnio: string;
    aseguradoAutoPatente: string;
    
    conductorNombre: string;
    conductorTelefono: string;
    conductorCelular: string;
    conductorDniCuit: string;
    conductorFNacimiento: string;
    conductorDomicCalleNro: string;
    conductorDomicLocalidad: string;
    conductorDomicProvincia: string;
    conductorEmail: string;
    
    terceroNombre: string;
    terceroTelefono: string;
    terceroCelular: string;
    terceroDniCuit: string;
    terceroFNacimiento: string;
    terceroEmail: string;
    terceroDomicCalleNro: string;
    terceroDomicLocalidad: string;
    terceroDomicProvincia: string;
    terceroCiaSeguro: string;
    terceroPolizaNro: string;
    terceroTelefAlternativo: string;
    terceroAutoMarca: string;
    terceroAutoModelo: string;
    terceroAutoAnio: string;
    terceroAutoPatente: string;

    conduc3roNombre: string;
    conduc3roTelefono: string;
    conduc3roCelular: string;
    conduc3roDniCuit: string;
    conduc3roFNacimiento: string;
    conduc3roDomicCalleNro: string;
    conduc3roDomicLocalidad: string;
    conduc3roDomicProvincia: string;
    conduc3roEmail: string;

    accidenteFecha: string;
    accidenteHora: string;
    accidenteLugar: string;
    accidenteLocalidad: string;
    accidenteProvincia: string;
    accidenteDetalle: string;

    //Funcionales (tx) o de clasificación (maestros)
    estado: string;  // A revisar (nuevo) / Revisado (modificable en CRM)
    fechaSolicitud: Date; // modificable en CRM

    notasInternas: string;

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}