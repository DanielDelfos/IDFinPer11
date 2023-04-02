// ---INTERFACE DE DEFINICION DE TABLA
// Actualizar cambios en Sitio, en CRM y en API.

// ---Datos funcionales de la tabla (informativo)
// Maestro de productos (seguros en el sitio web)
// Un registro por producto

// Tipos de campos probados: string, Date, number?, boolean?
export class RespuestaProductos {
    //Principales (id, nombres)
    idProducto: string;  //despues del id, igual a la tabla en singular (para reemplazos)
    nombreProducto: string;
    descripCortaProd: string;
    descripLargaProd: string;

    //Funcionales (tx) o de clasificación (maestros)
    precioActualProd: string;   //falta pasar a numero
    esPromocionProd: string;    //falta pasar boolean
    categoriaProd: string;
    vigenciaHastaProd: Date;    //todavia no valido nada
    urlImagenProd: string;
    urlImagenIconoProd: string;
    urlImagenIcono2Prod: string;
    urlImagenBannerProd: string;
    palabrasClaveProd: string;
    cotizadorTipo: string;
    textoPersonalizacion: string;
    textoSubirImagen: string;

    //Especiales: Caracteristicas del cotizador (modelo)
    marcaCotProd: boolean;    // Desde acá biciletas
    modeloCotProd: boolean;
    anioCotProd: boolean;

    //Complementarios (notas y otros)
    notasIntProd: string;

    //Vinculados y desde otras tablas
    idCompaniaProd: string;     

    // Otros campos a evaluar:
    // fecha de vigencia o estado
    // Orden que no sea el alfabético

    constructor() {
        // valores por default
        // this.interesado = 'Nueva consulta';
    }
}