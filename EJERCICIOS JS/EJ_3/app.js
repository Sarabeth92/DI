// app.js
import { NOMBRE_APP, VERSION, AUTOR } from "./constantes.js";

console.log("Nombre de la app:", NOMBRE_APP);
console.log("Versión:", VERSION);
console.log("Autor:", AUTOR);

// Importar la exportación por defecto y las nombradas
import primero, { APP_NAME, mayusculas } from "./utils.js";

console.log("Nombre de la app:", APP_NAME);
console.log("Mayúsculas:", mayusculas("dinosaur rules"));
console.log("Primer elemento:", primero(["Sara", "Athene", "Noctua"]));