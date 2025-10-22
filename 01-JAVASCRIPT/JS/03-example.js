//objetos
let persona= {
    nombre: "Laura", //Propiedad
    edad: 25,
    estudiante: true
};

console.log(persona);
console.table(persona);
console.log(typeof persona);

console.log(persona.nombre); //Laura
console.log(persona["edad"]); //25

//Modificar propiedades
persona.edad=30;
persona["estudiante"]= false;

persona.ciudad= "Sotrondio";
console.log(persona);

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.estudiante);
console.log(persona.ciudad);

const {nombre, edad, estudiante, ciudad} = persona;
console.log(nombre);
console.log(edad);
console.log(ciudad);

const newPerson= {
    ...persona,
    estadoCivil: "soltera"
};
console.log(newPerson);

const noSuma = function (a, ...rest) {
    return rest[1];
}
console.log(noSuma(1,2,3,4));

let pi= 3.1416;
console.log(typeof pi + ": "+ pi);