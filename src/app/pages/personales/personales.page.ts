import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personales',
  templateUrl: './personales.page.html',
  styleUrls: ['./personales.page.scss'],
})
export class PersonalesPage implements OnInit {

  @ViewChild(IonContent, {static: true}) content: IonContent;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  // Funcion para ir a un pagina
  irPagina( paginaAir: string) {
    // toma la página como parámetro de la función, debe incluir la / antes
    this.router.navigate([paginaAir]);
  }

  // Herramientas de control de scrool y desplazamientos a links
  ScrollStart() {
    this.content.scrollToTop();
  }

  ScrollEnd() {
    this.content.scrollToBottom();
  }  

}
