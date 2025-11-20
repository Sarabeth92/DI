// main.js

import { sumar, restar, multiplicar, dividir } from "./operaciones.js";

console.log("Suma:", sumar(10, 5));           // 15
console.log("Resta:", restar(10, 5));         // 5
console.log("Multiplicación:", multiplicar(10, 5)); // 50
console.log("División:", dividir(10, 5));     // 2
console.log("División entre cero:", dividir(10, 0)); // Error


import { areaCirculo as circulo, areaCuadrado as cuadrado } from "./matematicas.js";

console.log("Área del círculo (r=5):", circulo(5));
console.log("Área del cuadrado (lado=4):", cuadrado(4));

import * as nombres from "./personas.js";

console.log(nombres.PERSONA1);
console.log(nombres.PERSONA2);
console.log(nombres.PERSONA3);
console.log(nombres.PERSONA4);