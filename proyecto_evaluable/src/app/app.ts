import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioEmpl } from './formulario-empl/formulario-empl';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioEmpl],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_evaluable');
}
