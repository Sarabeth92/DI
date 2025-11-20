// main.js
//1.
import { getUppercaseTitlesByUser } from "./getPosts.js";

async function main() {
    const titulos = await getUppercaseTitlesByUser(1);
    console.log("Títulos en mayúsculas del userId = 1:");
    console.log(titulos);
}

main();

//2.
import { totalElectronics } from "./productos.js";

async function main() {
    const total = await totalElectronics();
    console.log("Total de la categoría electronics:", total);
}

main();

//3.
import { usersWithPostCount } from "./usersPosts.js";

async function main() {
    const lista = await usersWithPostCount();
    console.log(lista);
}

main();

//4. 
import { cleanComments } from "./cleanComments.js";

async function main() {
    const resultado = await cleanComments();
    console.log(resultado);
}

main();
