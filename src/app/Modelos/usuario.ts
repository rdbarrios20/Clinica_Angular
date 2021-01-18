export class Usuario {
  id: number;
  identificacion: number;
  nombres: string;
  direccion: string;
  telefono: string;
  id_paciente_admision : number;
  identificacion_familiar : number;
  nombre_familiar : string
  id_servicio : number;
  constructor() {
      this.id = 0;
      this.identificacion = 0;
      this.nombres = '';
      this.direccion = '';
      this.telefono = '';
      this.id_paciente_admision = 0;
      this.identificacion_familiar = 0;
      this.nombre_familiar = '';
      this.id_servicio = 1;
  }
}