import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  UrlApi = 'http://localhost:8000/api/'

  constructor(private httpClient: HttpClient) { }

  ingresosByUsuario(_identificacion: any){
    const param = {
      identificacion : _identificacion
    };
    const data = this.httpClient.post(this.UrlApi + 'ingresos-usuario', param)
        .pipe(
          map( response => {
            // debugger;
            return response;
        } )
    );
    return data;
  }
}

