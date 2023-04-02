import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit {

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit() {}

  salir() {
    // console.log('salí');
    this.auth.logout();  // destruye el token
    this.router.navigateByUrl('/login');
  }

}
