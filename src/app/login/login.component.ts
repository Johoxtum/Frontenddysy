import { Component, OnInit } from '@angular/core';
import { LoginBServiceService } from '../servicios/login-bservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any;
  constructor( public loginService:LoginBServiceService) { 
    
  }

  ngOnInit(){

    this.loginService.getLogin().subscribe(
      (r) => {this.login= r; console.log(r)},
      (err) => {console.error(err)}
      
    )
  }
  
  public usuario: String='';
  public password: String='';

}
