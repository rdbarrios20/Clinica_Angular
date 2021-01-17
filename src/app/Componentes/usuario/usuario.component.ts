import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../Servicios/usuario.service';
import { Usuario } from '../../Modelos/usuario';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  EsNuevo: boolean; 
  EsModificacion: boolean;
  EsIdentificacionVisible: boolean;
  ListaUsuario: any = []; //Modelo list
  @Input() usuario: Usuario;  //Class object   ///1. Declacion
  constructor(
    private usuarioService: UsuarioService
  ) {
     this.usuario = new Usuario();  // 2. Assignancion o inicialization
     this.EsNuevo = false; 
     this.EsModificacion = false;
     this.EsIdentificacionVisible = true;
   }

  ngOnInit(): void {
    this.cargarUsuarios(null);
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

  crearUsuario(){
    const datos= this.usuario;  // 3. Colecto lo que almacenarion en la variable local usuario, de tipo Usuario
    // debugger;
     this.usuarioService.postUsuario(datos)
      .subscribe((data: any) => {
        debugger;
        if (data.success){
            this.usuario = new Usuario();  // Reset to clean
            this.EsNuevo = false;  //Oculto el formulario de nuevo
            this.cargarUsuarios(null);
        }
        alert(data.message);
      });
  }

  clcikNuevo(){

  }

  cancelarClick(){
    this.usuario = new Usuario();
    this.EsNuevo = false; 
    this.EsModificacion = false;
    this.EsIdentificacionVisible = true;
  }

  cargarParaModificarUsuario(identificacion : number){
    // const u =  this.cargarUsuarios(identificacion);
    // debugger;
    this.EsNuevo = false;
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
          this.EsNuevo = true;
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
            this.EsNuevo = false;  //Oculto el formulario de nuevo
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
