import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../Servicios/usuario.service';
import { ServiciosClinicaService } from '../../Servicios/servicios-clinica.service';
import { Usuario } from '../../Modelos/usuario';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  EsNuevo: boolean; 
  EsFormularioVisible: boolean;
  EsModificacion: boolean;
  EsIdentificacionVisible: boolean;
  ListaUsuario: any = []; //Modelo list
  ListaServiciosClinica: any = []; //Modelo list
  @Input() usuario: Usuario;  //Class object   ///1. Declacion
  constructor(
    private usuarioService: UsuarioService,
    private serviciosClinicaService: ServiciosClinicaService,
    private router:Router
    
  ) {
     this.usuario = new Usuario();  // 2. Assignancion o inicialization
     this.EsNuevo = false; 
     this.EsFormularioVisible = false;
     this.EsModificacion = false;
     this.EsIdentificacionVisible = true;
   }

  ngOnInit(): void {
    this.cargarUsuarios(null);
    this.cargarServiciosClinica();
  }

  cargarUsuarios(identificacion : any) : any {
     this.usuarioService.getUsuarios(identificacion)
        .subscribe((data: any) => {
          debugger;
          if (data.success){
            
            if(identificacion){
              return data.result ;
            }else{
              this.ListaUsuario = data.result;
            }
          }
      });
  }

  redireccionarIngresos(identificacion:any){
    // scope: alcance.
    // this es usado para variables de esta clase pero que son globales
    // pero si no tiene this significa que la variable es de alcance local
    this.router.navigate(['/ingresos-del-usuario/' + identificacion ]);
  }

  cargarServiciosClinica() {
     this.serviciosClinicaService.getServicios()
        .subscribe((data: any) => {
          debugger;
          if (data.success){
            // va a contener los servicios de la clinica,  almacenar en la varaibloe local  ListaServiciosClinica del componente
            this.ListaServiciosClinica = data.result;
          }
      });
  }

  crearUsuario(){
    const datos= this.usuario;  // 3. Colecto lo que almacenarion en la variable local usuario, de tipo Usuario
    // debugger;
     this.usuarioService.postUsuario(datos)
      .subscribe((data: any) => {
        debugger;
        if (data.success){
            this.usuario = new Usuario();  // Reset to clean
            this.EsFormularioVisible = false;  //Oculto el formulario de nuevo
            this.cargarUsuarios(null);
        }
        alert(data.message);
      });
  }

  nuevoBtnClick(){
    this.EsFormularioVisible = true;
    this.EsModificacion = false;
    this.EsNuevo = true;
  }

  cancelarBtnClick(){
    this.usuario = new Usuario();
    this.EsFormularioVisible = false;
    this.EsNuevo = false; 
    this.EsModificacion = false;
    this.EsIdentificacionVisible = true;
  }

  cargarParaModificarUsuario(identificacion : number){
    // const u =  this.cargarUsuarios(identificacion);
    // debugger;
    this.EsFormularioVisible = true;
    this.usuarioService.getUsuarios(identificacion)
    .subscribe((data: any) => {
      debugger;
        if (data.success){
          const u =  data.result;
          //Poblamos los datos obetnidos
          this.usuario.identificacion = u.identificacion;
          this.usuario.direccion = u.direccion;
          this.usuario.nombres = u.nombres;
          this.usuario.telefono = u.telefono;
          this.EsNuevo = false;
          this.EsModificacion = true;
          this.EsIdentificacionVisible = false;
        }
    });
  }

  modificarUsuario(){
    const datos= this.usuario;  // 3. Colecto lo que almacenarion en la variable local usuario, de tipo Usuario
    // debugger;
     this.usuarioService.updateUsuario(datos)
      .subscribe((data: any) => {
        debugger;
        if (data.success){
            this.usuario = new Usuario();  // Reset to clean
            this.EsFormularioVisible = false;  //Oculto el formulario de nuevo
            this.cargarUsuarios(null);
        }
        alert(data.message);
      });
  }

  eliminarUsuario(identificacion : number){
    this.usuarioService.deleteUsuario(identificacion)
    .subscribe((data: any) => {
       // debugger;
      if (data.success){
          this.cargarUsuarios(null);
      }
      alert(data.message);
    });
  }
}
