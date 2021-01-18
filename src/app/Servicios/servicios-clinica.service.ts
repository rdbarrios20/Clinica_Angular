import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciosClinicaService {

  UrlApi = 'http://localhost:8000/api/';
  constructor(private httpClient: HttpClient) { }

  getServicios(){
    const data = this.httpClient.get(this.UrlApi + 'servicios')
        .pipe(
          map( (response : any) => {
            // debugger;
            return response;
        } )
    );
    return data;
  }
}
