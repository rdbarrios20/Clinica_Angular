import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  UrlApi = 'http://localhost:8000/api/';

  constructor(private httpClient: HttpClient) { }

  //Obtienes los usuarios o el usuario especificio. Razon por la cual para hacer sobre carga se cambia de GET a POST
  getUsuarios(_identificacion: any){
    const param = {
      identificacion : _identificacion
    };
    const data = this.httpClient.post(this.UrlApi + 'usuarios', param)
        .pipe(
          map( response => {
            // debugger;
            return response;
        } )
    );
    return data;
  }

  loginUsuarios(_identificacion: any, _password: any){
    const param = {
      identificacion : _identificacion,
      password : _password
    };
    const data = this.httpClient.post(this.UrlApi + 'login', param)
        .pipe(
          map( response => {
            // debugger;
            return response;
        } )
    );
    return data;
  }


  postUsuario (usuario : any){
    const params = {
      identificacion : usuario.identificacion,
      nombres : usuario.nombres,
      telefono : usuario.telefono,
      direccion : usuario.direccion,
      id_paciente_admision : usuario.id_paciente_admision,
      identificacion_familiar : usuario.identificacion_familiar,
      nombre_familiar : usuario.nombre_familiar,
      id_servicio : usuario.id_servicio
    };

    const data = this.httpClient.post(this.UrlApi + 'nuevo-usuario', params)
        .pipe(
            map( response => {
                debugger;
                return response;
            } 
         )
    );
    return data;
  }

  updateUsuario (usuario : any){
    const params = {
      identificacion : usuario.identificacion,
      nombres : usuario.nombres,
      telefono : usuario.telefono,
      direccion : usuario.direccion,
      id_servicio : usuario.id_servicio,
      d_paciente_admision : usuario.d_paciente_admision,
      identificacion_familiar : usuario.identificacion_familiar,
      nombre_familiar : usuario.nombre_familiar
    };

    const data = this.httpClient.post(this.UrlApi + 'editar-usuario', params)
        .pipe(
            map( response => {
                debugger;
                return response;
            } 
         )
    );
    return data;
  }

  deleteUsuario (_identificacion: number){
    const param = {
      identificacion : _identificacion
    };
    const data = this.httpClient.post(this.UrlApi + 'eliminar-usuario', param)
        .pipe(
            map( response => {
                debugger;
                return response;
            } 
         )
    );
    return data;
  }
}
