# Aplicación Angular – Gestión de Empleados (IES Son Ferrer)

Esta aplicación web, desarrollada en **Angular**, permite visualizar, añadir y eliminar empleados del instituto **IES Son Ferrer**.  
El proyecto simula una pequeña base de datos gestionada desde el navegador, utilizando **servicios** y **formularios**.

---

## Secciones principales

### Inicio
Página de bienvenida e introducción.

### Empleados
Listado de los empleados actuales, con opción para eliminarlos.

### Formulario
Formulario reactivo para añadir nuevos empleados con validaciones.

---

## Instalación y ejecución

### 1 Clonar el repositorio
```bash
git clone https://github.com/Martin-169/PracticaEvaluable_Angular.git
```

### 2 Entrar al proyecto
```bash
cd PracticaEvaluable_Angular/proyecto_evaluable
```

### 3 Instalar dependencias
```bash
npm install
```

### 4 Ejecutar el servidor de desarrollo
```bash
ng serve -o
```
### 5 Abrir la aplicación en el navegador

Define las rutas principales:

/ → Home

/empleados → Empleados

/formulario → EmpleFormPage

## pages/home
Componente: Home  
Función: Página de bienvenida con logotipo y texto explicativo.

## pages/empleados
Componente: Empleados  
Función:
Lista los empleados del servicio EmpleadoService.
Permite eliminarlos mediante removeEmpleado().

## pages/emple-form-page
Componente: EmpleFormPage  
Función:
Contiene el formulario FormularioEmpl.
Incluye el Header.

## formulario-empl
Componente: FormularioEmpl  
Función: Gestiona el formulario reactivo para crear empleados.

Al enviar:
Llama a addEmpleado()
Resetea el formulario

## services/empleado-service.ts
Clase: EmpleadoService  
Función: Gestiona la lista de empleados en memoria.

Métodos:
addEmpleado(empleado)
removeEmpleado(id)

## models/Empleado.ts
Interfaz:

id: number

nombre: string

apellidos: string

telefono: number

correo: string

categoria: string


## components/header
Componente: Header  
Función: Barra de navegación con enlaces a:

Home

Empleados

Formulario

##app.component.ts / app.component.html
Componente raíz con <router-outlet> para cargar páginas dinámicamente.
