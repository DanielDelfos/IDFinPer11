// La parte de registro de usuario, no lo uso (no arme el form)

import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../interfaces/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyBqfX33pUWnUfdl26cQWZuII1J98Q4vFKU';

  // Crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  userToken: string;


  constructor( private http: HttpClient ) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel ) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/accounts:signInWithPassword?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        // console.log('Entro en el mapa del RXJS');
        // tslint:disable-next-line: no-string-literal
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );
  }


  // ----------- Manejo de usuarios ------------------
  nuevoUsuario( usuario: UsuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/accounts:signUp?key=${ this.apikey }`,
      authData
    ).pipe(
      map( resp => {
        // console.log('Entro en el mapa del RXJS');
        // tslint:disable-next-line: no-string-literal
        this.guardarToken( resp['idToken'] );
      })
    );

  }

  // ------------- Manejo de Token-----------------
  private guardarToken( idToken: string ) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);  // guardar el token

    let hoy = new Date();
    hoy.setSeconds( 3600 );  // le sumo una hora

    localStorage.setItem( 'expira', hoy.getTime().toString() );

  }

  leerToken() {

    // Verifico si exite
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;

  }

  // Lo uso para el guard
  estaAutenticado(): boolean {

    // Verifico que exista el Token
    if ( this.userToken.length < 2 ) {
      return false;
    }

    // Controlo si expiro el Token
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    // Comparo contra la fecha y hora actual
    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }

  }

}


