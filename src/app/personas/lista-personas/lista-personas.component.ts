import { Component, OnInit } from '@angular/core';
import { ListaPersonasService } from 'src/app/servicios/lista-personas.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  lista:any;
  constructor(public listaService:ListaPersonasService) { }

  ngOnInit(): void {
    this.listaService.getLista().subscribe(
      (r) => {this.lista= r; console.log(r)},
      (err) => {console.error(err)}
    )
  }
  public nombres: String='';
  public apellidos: String='';

}
