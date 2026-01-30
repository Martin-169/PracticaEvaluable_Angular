import { Injectable } from '@angular/core';
import Empleado from '../models/Empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  empleados: Empleado[];

  constructor(){
    this.empleados = [
      {
        id: 1,
        nombre: "Alberto",
        apellidos: "Martínez Sabrafin",
        telefono: 123847218,
        correo: "amartinez@iessonferrer.net",
        categoria: "DWES"
      }
    ]
  }

  addEmpleado(empleado: Empleado){
    empleado.id = this.empleados.length + 1
    this.empleados.push(empleado);
  }
  removeEmpleado(id: number){
    this.empleados = this.empleados.filter(e => e.id != id);
  }
}
