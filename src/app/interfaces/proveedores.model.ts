/* export interface RespuestaProveedores {
    results: RespuestaProveedor[];
} */

/* export interface RespuestaProveedores {
    idConsulta: string;
    interesado: string;
    producto: string;
} */

export class RespuestaProveedores {
    idConsulta: string;
    interesado: string;
    producto: string;

    constructor() {
        // valores por default
        this.interesado = 'Nuevo proveedor';
    }
}
