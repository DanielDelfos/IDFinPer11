// import { toDate, formatDate } from '@angular/common/src/i18n/format_date';
// import { DatePipe } from '@angular/common';


export interface RespuestaIvaCompras {

    results: IvaCompraResults[];
}

export interface IvaCompraResults {
    idConsulta: string;
    interesado: string;
    producto: string;
    // "?"" para opcional o requerido?
    // fechaConsulta?: Date;
    // medioConsulta: string;
    // publicidad: string;
    // otrosConsulta: string;
    // estado: string;
    // siguiendo: boolean;
    // etiqueta: string;
    // otrosSeguimiento: string;
}

    // Al inicializar la instancia (cuando es class)
    // constructor() {
        // Valores por defecto

        // fechaConsulta como hoy
        // this.fechaConsulta = new Date();    // anda, pero no lo asigna a la pantalla html,

        // Otras pruebas fechaConsulta
        // this.fechaConsulta = new DatePipe().transform(Date(), 'dd/mm/yyyy');
        // console.log(this.fechaConsulta);

        // this.fechaConsulta =  this.fechaConsulta | date:'yyyy-MM-dd';  // da error
        // console.log( this.fechaConsulta ); // muestra hoy

        // const hoy = new Date();
        // this.fechaConsulta =  {{ hoy | date:'yyyy-MM-dd' }}  // da error
        // this.hoy = Date.now();

        // Otros valores por defecto
        // this.comentarios = 'valor por defecto'; SI ANDA!!
    // }
