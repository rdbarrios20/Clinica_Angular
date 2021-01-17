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

  postUsuario (usuario : any){
    const params = {
      identificacion : usuario.identificacion,
      nombres : usuario.nombres,
      telefono : usuario.telefono,
      direccion : usuario.direccion,
      id_paciente : 333,
      id_servicio : 2
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
