import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/Modelos/login-usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  @Input() loginUsuario: LoginUsuario;
  constructor(
    private usuarioService: UsuarioService,
    private router:Router
  ) { 
    this.loginUsuario = new LoginUsuario(); 

    
  }

  ngOnInit(): void {
  }
  // //Polimorfimo
  // loginVisitas(id:number) {
  // }

  loginVisitas() {
    this.usuarioService.loginUsuarios(this.loginUsuario.identificacion, this.loginUsuario.password)
      .subscribe((data: any) => {
        alert(data.message);
        if (data.success){
          // http://localhost:4200/ingresos-del-usuario/1234
          // Redireccionar a la ruta de ingresos de usuarios
          this.router.navigate(['/ingresos-del-usuario/' + this.loginUsuario.identificacion ]);
        }
          
     });
  }
}
