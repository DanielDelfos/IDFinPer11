import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @ViewChild(IonContent, {static: true}) content: IonContent;
  
  constructor( private router: Router) { }

  ngOnInit() {}

  // Funcion para ir a un pagina
  irPagina( paginaAir: string) {
    // toma la página como parámetro de la función, debe incluir la / antes
    this.router.navigate([paginaAir]);
  }

  // Herramientas de control de scrool y desplazamientos a marcas (NO ANDAN)
  ScrollStart() {
    this.content.scrollToTop(300);  // 300 para un efecto
  }

  ScrollEnd() {
    this.content.scrollToBottom(300);
  }  
 
  scrollToLabel(label) {
    var titleELe = document.getElementById(label);
    this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
  }

}
