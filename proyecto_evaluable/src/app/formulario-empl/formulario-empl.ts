import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpleadoService } from '../services/empleado-service';
import { FormGroup, FormControl } from '@angular/forms';
import Empleado from '../models/Empleado';

@Component({
  selector: 'app-formulario-empl',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-empl.html',
  styleUrl: './formulario-empl.css',
})
export class FormularioEmpl {

  formularioEmpl: FormGroup

  nombre: FormControl;
  apellidos: FormControl;
  telefono: FormControl;
  correo: FormControl;
  categoria: FormControl;  

  constructor(public empleadoService: EmpleadoService) {

    this.nombre = new FormControl('', Validators.required);
    this.apellidos = new FormControl('', Validators.required);
    this.telefono = new FormControl('', [
      Validators.required, 

      //Validador que mide si el telefono mide mas de 11 numeros
      Validators.maxLength(11),

      //Validador que mide si el telefono mide al menos 9 numeros
      Validators.minLength(9)
    ]);
    this.correo = new FormControl('', [
      Validators.required,

      //Validador que mira si lo que se ha escrito tiene la estructura de un email
      Validators.email
    ]);
    this.categoria = new FormControl<Empleado['categoria'] | ''>('', Validators.required);

    this.formularioEmpl = new FormGroup({
      nombre: this.nombre,
      apellidos: this.apellidos,
      telefono: this.telefono,
      correo: this.correo,
      categoria: this.categoria
    });

  }

  //Metodo para manejar el submit del formulario
  handleSubmit(){
    this.empleadoService.addEmpleado(this.formularioEmpl.value)

    //Limpiamos el formulario después de enviar
    this.formularioEmpl.reset();
  }
}
