# Ejercicio 2 
## Sara Pérez, 2º DAM

## Arrays y métodos básicos

```js
/*1. Declara un array con al menos 5 nombres de personas.
    -Añade un nombre al final.
    -Elimina el primero.
    -Busca si existe un nombre concreto con includes().*/
let nombres = ["Ana", "Luis", "Marta", "Pedro", "Sofía"];
nombres.push("Carlos");
console.log(nombres);
nombres.shift();
console.log(nombres);
let existe = nombres.includes("Marta");
console.log("¿Existe Marta?", existe);
existe = nombres.includes("Paco");
console.log("¿Existe Paco?", existe);

//2. Ordena el array [4, 1, 9, 3, 7] de forma ascendente y descendente.
let numeros = [4, 1, 9, 3, 7];
numeros.sort((a, b) => a - b);
console.log("Ascendente:", numeros);
numeros.sort((a, b) => b - a);
console.log("Descendente:", numeros);
```


## Desestructuración de arrays
```js
/*1. Dado el array ["manzana", "pera", "plátano", "naranja"]:
    -Extrae en variables fruta1 y fruta2 los dos primeros.
    -Usa el operador rest para guardar el resto en un nuevo array.*/
let frutas = ["manzana", "pera", "plátano", "naranja"];
let [fruta1, fruta2, ...restoFrutas] = frutas;
console.log("Fruta 1:", fruta1);
console.log("Fruta 2:", fruta2);
console.log("Resto de frutas:", restoFrutas);

/*2. Intercambia los valores de dos variables usando desestructuración
    let a = 100;
    let b = 200;*/
let a = 100;
let b = 200;
[a, b] = [b, a];
console.log("a:", a);
console.log("b:", b);

/*3. Extrae el color azul del array anidado:
    let colores = ["rojo", ["verde", "azul", "amarillo"]];*/
let colores = ["rojo", ["verde", "azul", "amarillo"]];
let [ , [ , colorAzul ]] = colores;
console.log("Color azul:", colorAzul);
```


## Recorrido de arrays con for
```js
/*1. Crea un array con los números del 1 al 5 y muéstralos en consola con:
    -Un for clásico.
    -Un for...of.
    -Un for...in.*/
let numerosArray = [1, 2, 3, 4, 5];
//For clásico
for (let i = 0; i < numerosArray.length; i++) { 
    console.log("For clásico:", numerosArray[i]);
}
//For...of
for (let numero of numerosArray) {
    console.log("For...of:", numero);
}
//For...in
for (let index in numerosArray) {
    console.log("For...in:", numerosArray[index]);
}   

//2. Recorre el array ["HTML", "CSS", "JavaScript", "React"] con un for clásico e imprime "Posición X: Valor Y"
let lenguajes = ["HTML", "CSS", "JavaScript", "React"];
for (let i = 0; i < lenguajes.length; i++) {
    console.log(`Posición ${i}: Valor ${lenguajes[i]}`);
}   

//3. Recorre un array al revés (for con decremento).
let numerosReves = [10, 20, 30, 40, 50];
for (let i = numerosReves.length - 1; i >= 0; i--) {
    console.log("Array al revés:", numerosReves[i]);
}
```

## Recorridos con forEach, filter y map
```js
//1. Dado el array ["Ana", "Luis", "Marta", "Pedro"], recórrelo con forEach e imprime un saludo para cada nombre.
let personas = ["Ana", "Luis", "Marta", "Pedro"];
personas.forEach(nombre => {
    console.log(`Hola, ${nombre}!`);
}); 

//2. Crea un array de números [2, 4, 6, 8] y usa forEach para mostrar el doble de cada número.
let numerosForEach = [2, 4, 6, 8];
numerosForEach.forEach(num => {
    console.log(`Doble de ${num} es ${num * 2}`);
});

//3. Dado el array [5, 12, 8, 130, 44], usa filter para obtener solo los números mayores que 10.
let numerosFilter = [5, 12, 8, 130, 44];
let mayoresQueDiez = numerosFilter.filter(num => num > 10);
console.log("Números mayores que 10:", mayoresQueDiez);

//4. Crea un array con nombres ["Ana", "Alberto", "Bea", "Carlos"] y filtra los que empiecen por la letra A.
let nombresFilter = ["Ana", "Alberto", "Bea", "Carlos"];
let empiezanPorA = nombresFilter.filter(nombre => nombre.startsWith("A"));
console.log("Nombres que empiezan por A:", empiezanPorA);

//5. Dado un array de edades [15, 18, 21, 12, 30], usa filter para obtener solo las que representen mayores de edad (≥18).
let edadFilter = [15, 18, 21, 12, 30];
let mayoresEdad = edadFilter.filter(num => num >= 18);
console.log("Mayores de edad:", mayoresEdad);

//6. Dado el array [1, 2, 3, 4, 5], usa map para obtener un nuevo array con los números elevados al cuadrado
let numerosMap = [1, 2, 3, 4, 5];
let cuadrados = numerosMap.map(num => num ** 2);
console.log("Números al cuadrado:", cuadrados);

//7. Crea un array con precios [10, 20, 30] y usa map para calcular el precio con IVA (21%) incluido
let precios = [10, 20, 30];
let preciosConIVA = precios.map(precio => precio * 1.21);
console.log("Precios con IVA:", preciosConIVA);

//8. Dado el array ["html", "css", "javascript"], usa map para poner en mayúsculas cada palabra.
let tecnologias = ["html", "css", "javascript"];
let tecnologiasMayusculas = tecnologias.map(tecnologia => tecnologia.toUpperCase());
console.log("Tecnologías en mayúsculas:", tecnologiasMayusculas);

/*9. Dado el array [3, 8, 12, 5, 7, 20]:
    -Usa filter para quedarte con los pares.
    -Luego, usa map para multiplicarlos por 10*/
let numerosCombinado = [3, 8, 12, 5, 7, 20];
let paresMultiplicados = numerosCombinado
    .filter(num => num % 2 === 0)
    .map(num => num * 10);
console.log("Números pares multiplicados por 10:", paresMultiplicados);

/*10. Dado el array de objetos:
    let alumnos = [
    { nombre: "Ana", nota: 7 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Marta", nota: 9 }
    ];
    
    -Filtra solo los alumnos con nota ≥ 5.
    -Usa map para obtener un array solo con sus nombres.
    -Recorre el resultado con forEach e imprime: "Alumno aprobado: NOMBRE"*/
let alumnos = [
    { nombre: "Ana", nota: 7 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Marta", nota: 9 }
];
let alumnosAprobados = alumnos
    .filter(alumno => alumno.nota >= 5)
    .map(alumno => alumno.nombre);
alumnosAprobados.forEach(nombre => {
    console.log(`Alumno aprobado: ${nombre}`);
});
```

