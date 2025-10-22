//Declaración de variables
//1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.
let nombre = "Sara";
console.log(nombre);

//2. Declara una constante PI con el valor 3.1416. Intenta reasignarla y observa el error.
const PI = 3.1416;
//PI = 3.14;
console.log(PI);

//3. Declara una variable edad sin asignarle valor. Luego asígnale un número y muestra el resultado.
let edad;
edad = 33;
console.log(edad);


//Tipos de datos
//1. Crea variables de tipo string, number, boolean, null y undefined. Imprime cada una junto con typeof
let palabra = "dinosaurio";
let numero = 42;
let extinto = true;
let nulo = null;
let sinDefinir;
console.log(palabra, typeof palabra);
console.log(numero, typeof numero);
console.log(extinto, typeof extinto);
console.log(nulo, typeof nulo);
console.log(sinDefinir, typeof sinDefinir);

//2. Convierte un número a cadena usando String() y una cadena a número usando Number().
let digito = 6;
let digitoStr = String(digito);
console.log(digitoStr, typeof digitoStr);

let letras = "9";
let letrasNum = Number(letras);
console.log(letrasNum, typeof letrasNum);


//Objetos
//1. Crea un objeto persona con propiedades: nombre, edad, ciudad
let persona = {
    nombre: "Sara",
    edad: 33,
    ciudad: "Sotrondio"
};
console.log(persona);

//2. Accede a las propiedades usando dot notation (obj.propiedad) y bracket notation (obj["propiedad"]).
console.log(persona.nombre);
console.log(persona["edad"]);   
console.log(persona.ciudad);
console.log(persona["ciudad"]); 

//3. Añade una nueva propiedad profesion al objeto persona
persona.profesion = "Cetrera";
console.log(persona);
console.table(persona);

//4. Usa desestructuración para extraer nombre y edad en variables e imprimelas
let { nombre: nom, edad: ed } = persona;
console.log(nom);
console.log(ed);


//Funciones
//1. Crea una función saludar(nombre) que devuelva "Hola, ".
function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log(saludar("Sara"));

//2. Crea una función sumar(a, b) que devuelva la suma de dos números.
function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 7));
//3. Escribe una función flecha que multiplique dos números
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 9));
//4. Crea una función esMayorDeEdad(edad) que devuelva true si la edad es mayor o igual a 18, de lo contrario false.
function mayor(edad){
    if(edad >= 18){
        return true;
    }else{
        return false;       
    }
}
console.log(mayor(25));
console.log(mayor(15));

function esMayorDeEdad(edad) {
    return edad >= 18;
}
console.log(esMayorDeEdad(20));
console.log(esMayorDeEdad(16));