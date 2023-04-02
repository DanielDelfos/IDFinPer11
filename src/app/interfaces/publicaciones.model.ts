export class RespuestaPublicaciones {
    idPublicacion: string;
    tituloPublicacion: string;
    inicioPublicacion: string;
    restoPublicacion: string;
    estadoPublicacion: string;  // En elaboración, Publicada
    ordenPublicacion: string;    // falta definir tipo numero
    urlImagenPublic: string;  
    urlImagenLocalPublic: string;  
    comentariosPublic: string;

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}