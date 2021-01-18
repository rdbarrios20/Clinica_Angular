import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresosUsuariosComponent } from './Componentes/ingresos-usuarios/ingresos-usuarios.component';
import { LoginUsuarioComponent } from './Componentes/login-usuario/login-usuario.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';


const routes: Routes = [
  { path: 'login-visitantes', component: LoginUsuarioComponent },
  { path: 'admin-usuarios', component: UsuarioComponent },
  { path: 'ingresos-del-usuario/:__identificacion', component: IngresosUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
