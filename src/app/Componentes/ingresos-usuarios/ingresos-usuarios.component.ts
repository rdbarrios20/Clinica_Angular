import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngresoService } from 'src/app/Servicios/ingreso/ingreso.service';

@Component({
  selector: 'app-ingresos-usuarios',
  templateUrl: './ingresos-usuarios.component.html',
  styleUrls: ['./ingresos-usuarios.component.css']
})
export class IngresosUsuariosComponent implements OnInit {
  ListaIngresos: any = [];
  identificacionUsuarioCargado : any;
  constructor(
    private ingresoService:IngresoService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.identificacionUsuarioCargado  =this.activatedRoute.snapshot.paramMap.get("__identificacion");
    this.ingresosByUsuario(this.identificacionUsuarioCargado);

    // Este metodo se llama cuando se carga este componente
    // this.ingresosByUsuario(988958);
  }
 
  // obtener todos los ingresos (lista) del usuario por su identificacion
  ingresosByUsuario(identificacion : any) : any {
    this.ingresoService.ingresosByUsuario(identificacion)
      .subscribe((data: any) => {
        if (data.success){
            this.ListaIngresos = data.result;
        }else{
            alert(data.message);
        }
    });
  }
}
