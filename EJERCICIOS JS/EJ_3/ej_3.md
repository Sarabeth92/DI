# Ejercicio 3 
## Sara Pérez, 2º DAM

## Ejercicios de Módulos en JavaScript

### 1. Exportar e importar constantes
```js
    //Crea un archivo constantes.js que contenga varias constantes como el nombre de la app, la versión y el autor.*/
    export const NOMBRE_APP = "La Lloreria";
    export const VERSION = "1.0.0";
    export const AUTOR = "Sara";

    //Importa esas constantes en app.js y muéstralas en consola.
    import { NOMBRE_APP, VERSION, AUTOR } from "./constantes.js";
    
    console.log("Nombre de la app:", NOMBRE_APP);
    console.log("Versión:", VERSION);
    console.log("Autor:", AUTOR);
```
### 2. Funciones matemáticas
```js
    //En operaciones.js crea y exporta funciones para sumar, restar, multiplicar y dividir.*/
    export function sumar(a, b) {
    return a + b;
    }

    export function restar(a, b) {
        return a - b;
    }

    export function multiplicar(a, b) {
        return a * b;
    }

    export function dividir(a, b) {
        if (b === 0) {
            return "Error: no se puede dividir entre 0";
        }
        return a / b;
    }

    //En main.js importa esas funciones y prueba varias operaciones.
    import { sumar, restar, multiplicar, dividir } from "./operaciones.js";
    
    console.log("Suma:", sumar(10, 5));           // 15
    console.log("Resta:", restar(10, 5));         // 5
    console.log("Multiplicación:", multiplicar(10, 5)); // 50
    console.log("División:", dividir(10, 5));     // 2
    console.log("División entre cero:", dividir(10, 0)); // Error
```
### 3. Exportación por defecto
```js
    //Crea un archivo saludos.js que tenga una exportación por defecto con una función saludar(nombre).*/
    export default function saludar(nombre) {
    return `Hola, ${nombre}! Bienvenido/a :)`;
    }

    //Importa esa función en index.js y úsala con tu nombre.
    import saludar from "./saludos.js";
    console.log(saludar("Sara")); // Hola, Sara! Bienvenido/a :)
```
### 4. Combinar exportaciones
```js
//En utils.js exporta:

    //Una constante llamada APP_NAME.
    export const APP_NAME = "Lloreria 2.0";

    //Una función mayusculas(texto) que convierta un string a mayúsculas.
    export function mayusculas(texto) {
        return texto.toUpperCase();
    }

    //Haz una exportación por defecto con una función que reciba un array de strings y devuelva el primero.
    export default function primero(array) {
        if (!Array.isArray(array) || array.length === 0) {
            return "Error: el array está vacío o no es válido";
        }
        return array[0];
    }

    //En app.js importa todo y pruébalo.
    import primero, { APP_NAME, mayusculas } from "./utils.js";
    
    console.log("Nombre de la app:", APP_NAME);
    console.log("Mayúsculas:", mayusculas("dinosaur rules"));
    console.log("Primer elemento:", primero(["Sara", "Athene", "Noctua"]));
```
### 5. Importar con alias
```js
    //En matematicas.js exporta dos funciones: areaCirculo(radio) y areaCuadrado(lado).
    export function areaCirculo(radio) {
    return Math.PI * radio * radio;
    }

    export function areaCuadrado(lado) {
        return lado * lado;
    }

    //En main.js importa esas funciones con alias (circulo, cuadrado) y 
    //calcula las áreas de un círculo de radio 5 y un cuadrado de lado 4.
    import { areaCirculo as circulo, areaCuadrado as cuadrado } from "./matematicas.js";
    
    console.log("Área del círculo (r=5):", circulo(5));
    console.log("Área del cuadrado (lado=4):", cuadrado(4));
```
### 6. Importar todo con * as
```js
    //En personas.js exporta varias constantes con nombres de personas.
    export const PERSONA1 = "Sara";
    export const PERSONA2 = "Atenea";
    export const PERSONA3 = "Noctua";
    export const PERSONA4 = "Kat";

    //En main.js impórtalas todas bajo un objeto:
    import * as nombres from "./personas.js";
    
    console.log(nombres.PERSONA1);
    console.log(nombres.PERSONA2);
    console.log(nombres.PERSONA3);
    console.log(nombres.PERSONA4);
```