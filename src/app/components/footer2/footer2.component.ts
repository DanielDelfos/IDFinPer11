import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss'],
})
export class Footer2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Funcion para ir a un pagina
  irPagina( paginaAir: string) {
    // toma la página como parámetro de la función, debe incluir la / antes
    this.router.navigate([paginaAir]);
  }
}
