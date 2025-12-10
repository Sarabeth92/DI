# Attendance Dashboard - React + Vite + TailwindCSS

Aplicación web desarrollada con **React**, **Vite** y **TailwindCSS** para gestionar y visualizar el estado de asistencia de un grupo de estudiantes.
Permite cambiar el estado individual de cada alumno (Present, Absent o Late) y los contadores superiores se actualizan automáticamente.

## 🚀 Puesta en marcha del proyecto

### 1️⃣ Requisitos previos

Asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node)

Puedes comprobar las versiones con:

```bash
node -v
npm -v
```

### 2️⃣ Instalación del proyecto

Descargar o clonar el repositorio.

Abrir la carpeta del proyecto en la terminal.

Instalar dependencias ejecutando:

```bash
npm install
```

### 3️⃣ Ejecutar la aplicación en modo desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una URL similar a:

```bash
http://localhost:5173
```

Ábrela en tu navegador para ver la aplicación en funcionamiento.

## 📦 Dependencias utilizadas

### Dependencias principales

React

React DOM

Vite

TailwindCSS

## ✨ Funcionalidades implementadas

### ✔ Gestión de asistencia

Cada estudiante tiene un estado actual editable:

_Present_

_Absent_

_Late_

Los botones de cada tarjeta permiten cambiar ese estado individualmente.

### ✔ Actualización automática de contadores

Los contadores superiores muestran en tiempo real:

Total de estudiantes

Cuántos están presentes

Cuántos ausentes

Cuántos llegan tarde

Los valores cambian automáticamente cuando se modifica el estado de cualquier alumno.

### ✔ Componentes modulares

El proyecto está dividido de forma clara en componentes:

**Header** → barra superior con iconos

**Contador** → tarjetas con totales

**Students** → tarjetas individuales con avatar y botones

**Buscador** → componente decorativo

**App** → lógica principal y estado global

## 📁 Estructura del proyecto

```bash
src/
├─ components/
│ ├─ Header.jsx
│ ├─ Contador.jsx
│ ├─ Students.jsx
│ ├─ Buscador.jsx
├─ data/
│ └─ students.js
├─ App.jsx
└─ main.jsx
```

## 🎨 Diseño y estilos

Todo el diseño está construido con **TailwindCSS**.

La interfaz es responsiva mediante grid.

Iconos cargados desde _Material Symbols de Google_.

No se utilizan archivos CSS adicionales.

## 🧠 Lógica principal

El estado global de estudiantes se gestiona con useState.

Cada estudiante tiene la propiedad “status”, inicializada como "absent".

Al pulsar **Present / Absent / Late**:

Se actualiza el estado del alumno.

React vuelve a renderizar.

Los contadores recalculan automáticamente.

## 👩‍💻 Autoría

Proyecto realizado por **Sara Pérez García-Jove**
para el módulo _Desarrollo de Interfaces_ de 2º DAM.
