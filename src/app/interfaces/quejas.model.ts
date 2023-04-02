export class RespuestaQueja {
    idQueja: string;
    interesadoNombre: string;
    interesadoTelefono: string;
    interesadoCelular: string;
    interesadoHoraContacto: string;
    interesadoEmail: string;
    interesadoDni: string;
    interesadoLocalidad: string;
    interesadoProvincia: string;
    quejaMensaje: string;
    esCliente: boolean;

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}