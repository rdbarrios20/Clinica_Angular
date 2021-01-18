export class Usuario {
  id: number;
  identificacion: number;
  nombres: string;
  direccion: string;
  telefono: string;
  id_paciente_admision : number;
  id_servicio : number;
  constructor() {
      this.id = 0;
      this.identificacion = 0;
      this.nombres = '';
      this.direccion = '';
      this.telefono = '';
      this.id_paciente_admision = 0;
      this.id_servicio = 1;
  }
}