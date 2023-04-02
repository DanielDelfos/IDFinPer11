export class RespuestaCotizadores {
    idConsultaSitio: string;
    interesadoNombre: string;
    interesadoEmail: string;
    interesadoTelefono: string;
    interesadoDNICUIL: string;
    aclaraciones: string;
    cotizadorTipo: string;
    nombreProducto: string;
    fechaCotizacion: Date;
    cuacionGarantia: string;
    hogarComTasacion: string;
    hogarComMetros2: string;
    hogarComIncendio: boolean;
    hogarComRobo: boolean;
    hogarComRespCivil: boolean;
    hogarComCristales: boolean;
    hogarComTecnico: boolean;
    hogarComAnimalesD: boolean;
    hogarComNotebooks: boolean;
    hogarComCelulares: boolean;
    hogarComBicicletas: boolean;
    hogarComBolsoP: boolean;
    artCUIT: string;
    artMasaSalarial: string;
    artCantEmpleados: string;
    artVidaOblig: boolean;
    artConvenioMerc: boolean;
    artVisaEmpRurales: boolean;
    artOptativos: boolean;
    vidaFecNacimiento: Date;
    vidaSumaAseg: string;
    bicicletaCobertura: string;
    
    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}