import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Empleados } from './pages/empleados/empleados';
import { EmpleFormPage } from './pages/emple-form-page/emple-form-page';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'empleados', component: Empleados},
    { path: 'formulario', component: EmpleFormPage}
];
