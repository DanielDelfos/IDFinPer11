import { Component, OnInit, Input } from '@angular/core';
import { DomController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() tituloPagina: string;

  constructor( private menuCtrl: MenuController,
               private router: Router,
               private domCtrl: DomController ) { }

  ngOnInit() {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  // Funcion para ir a un pagina
  irPagina( paginaAir: string) {
    // toma la página como parámetro de la función, debe incluir la / antes
    this.router.navigate([paginaAir]);
  }

  // Control del menu (prueba para identificar el segmento cliqueado)
  // menuClic ( event: any ) {
    // console.log(event)
  // }
  
}
