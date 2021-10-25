import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginBServiceService {
  private Api_login = 'http://127.0.0.1:8000/api/cliente/login';
  constructor(private http: HttpClient) { 
    console.log('Servicio LOGIN')
  }

   getLogin() {
      return this.http.get(this.Api_login)
    }
    
}
