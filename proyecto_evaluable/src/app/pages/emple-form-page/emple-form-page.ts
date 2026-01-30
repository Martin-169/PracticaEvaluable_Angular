import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormularioEmpl } from '../../formulario-empl/formulario-empl';

@Component({
  selector: 'app-emple-form-page',
  imports: [Header, FormularioEmpl],
  templateUrl: './emple-form-page.html',
  styleUrl: './emple-form-page.css',
})
export class EmpleFormPage {

}
