import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // <<<< import it here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
// import { ServicioComponent } from './Componentes/servicio/servicio.component';
import { UsuarioService } from './Servicios/usuario.service';
import { LoginUsuarioComponent } from './Componentes/login-usuario/login-usuario.component';
import { IngresosUsuariosComponent } from './Componentes/ingresos-usuarios/ingresos-usuarios.component';
// import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginUsuarioComponent,
    IngresosUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
