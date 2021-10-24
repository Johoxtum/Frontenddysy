import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { NuevaPersonaComponent } from './personas/nueva-persona/nueva-persona.component';
import { ListaPersonasComponent } from './personas/lista-personas/lista-personas.component';
import { EditarComponent } from './personas/editar/editar.component';
import { RegistrarComponent } from './productos/registrar/registrar.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    NuevaPersonaComponent,
    ListaPersonasComponent,
    EditarComponent,
    RegistrarComponent,
    ListaProductosComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
