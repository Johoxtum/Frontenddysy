import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaPersonasService {

  private Api_lista = 'http://127.0.0.1:8000/api/cliente/,mostrar';
  constructor( private http: HttpClient) { 
    console.log('Servicio Lista')
  }

  getLista() {
    return this.http.get(this.Api_lista)
  }
}


