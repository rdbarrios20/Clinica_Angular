export class Usuario {
  id: number;
  identificacion: number;
  nombres: string;
  direccion: string;
  telefono: string;
  constructor() {
      this.id = 0;
      this.identificacion = 0;
      this.nombres = '';
      this.direccion = '';
      this.telefono = '';
  }
}