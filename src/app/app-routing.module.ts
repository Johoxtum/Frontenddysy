import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { EditarComponent } from './personas/editar/editar.component';
import { ListaPersonasComponent } from './personas/lista-personas/lista-personas.component';
import { NuevaPersonaComponent } from './personas/nueva-persona/nueva-persona.component';
import { RegistrarComponent } from './productos/registrar/registrar.component';




const routes: Routes = [

  {path: 'crear_persona', component:NuevaPersonaComponent},
  {path: 'panel', component:PanelComponent},
  {path: 'lista_personas', component:ListaPersonasComponent},
  {path: 'editar_persona', component:EditarComponent},
  {path: 'registrar_producto', component:RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
