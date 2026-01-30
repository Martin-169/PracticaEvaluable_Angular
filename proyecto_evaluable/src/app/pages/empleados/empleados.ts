import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { EmpleadoService } from '../../services/empleado-service';

@Component({
  selector: 'app-empleados',
  imports: [Header],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css',
})
export class Empleados {
  constructor(public empleadoService: EmpleadoService) {}
  
  //Metodo para llamar al metodo de eliminar al empleado usando el id de cada uno
  borrar(id: number){
    this.empleadoService.removeEmpleado(id);
  }
}

