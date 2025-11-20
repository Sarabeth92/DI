//Ejercicios: fetch + Promesas + async/await + métodos de arrays

//1. Filtra y transforma posts
/*Enunciado: Descarga los posts y quédate solo con los de userId = 1. Devuelve un array de títulos en mayúsculas.

    async function getUppercaseTitlesByUser(userId = 1) {
    // 1) fetch posts
    // 2) json
    // 3) filter por userId
    // 4) map a títulos en mayúsculas
    }*/
   export async function getUppercaseTitlesByUser(userId = 1) {
        try {
            // 1) Descargar los posts
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            // 2) Convertir a JSON
            const posts = await response.json();

            // 3) Filtrar por userId
            const filtrados = posts.filter(post => post.userId === userId);

            // 4) Transformar los títulos a MAYÚSCULAS
            const titulosMayus = filtrados.map(post => post.title.toUpperCase());

            return titulosMayus;

        } catch (error) {
            console.error("Error obteniendo los posts:", error);
            return [];
        }
    }

    import { getUppercaseTitlesByUser } from "./getPosts.js";
    
    async function main() {
        const titulos = await getUppercaseTitlesByUser(1);
        console.log("Títulos en mayúsculas del userId = 1:");
        console.log(titulos);
    }
    
    main();

//2. Suma de precios (reduce)
/*Enunciado: Descarga los productos de Fake Store API y calcula el precio total de los productos con category = 'electronics'.

    async function totalElectronics() {
    // GET https://fakestoreapi.com/products
    // filter por category === 'electronics'
    // reduce sumando price
    }*/
   export async function totalElectronics() {
        try {
            // 1) Descargar productos
            const response = await fetch("https://fakestoreapi.com/products");

            // 2) Convertir a JSON
            const productos = await response.json();

            // 3) Filtrar solo electrónicos
            const electronics = productos.filter(p => p.category === "electronics");

            // 4) Sumar precios con reduce
            const total = electronics.reduce((acum, prod) => acum + prod.price, 0);

            return total;

        } catch (error) {
            console.error("Error obteniendo productos:", error);
            return 0;
        }
    }

    import { totalElectronics } from "./productos.js";
    
    async function main() {
        const total = await totalElectronics();
        console.log("Total de la categoría electronics:", total);
    }
    
    main();

//3. Combinación con Promise.all
/*Enunciado: Descarga usuarios y posts en paralelo. Devuelve una lista de objetos { userName, postsCount }, ordenada descendentemente por postsCount.

    async function usersWithPostCount() {
    // Promise.all([fetch users, fetch posts])
    // Para cada usuario, cuenta cuántos posts tiene
    // Devuelve [{ userName, postsCount }] ordenado por postsCount desc
    }*/
    export async function usersWithPostCount() {
        try {
            // 1) Ejecutar ambas descargas en paralelo
            const [usersRes, postsRes] = await Promise.all([
                fetch("https://jsonplaceholder.typicode.com/users"),
                fetch("https://jsonplaceholder.typicode.com/posts")
            ]);

            // 2) Pasar a JSON en paralelo también
            const [users, posts] = await Promise.all([
                usersRes.json(),
                postsRes.json()
            ]);

            // 3) Para cada usuario, contar sus posts
            const resultado = users.map(user => {
                const postCount = posts.filter(post => post.userId === user.id).length;

                return {
                    userName: user.name,
                    postsCount: postCount
                };
            });

            // 4) Ordenar descendentemente por postsCount
            resultado.sort((a, b) => b.postsCount - a.postsCount);

            return resultado;

        } catch (error) {
            console.error("Error obteniendo datos:", error);
            return [];
        }
    }

    import { usersWithPostCount } from "./usersPosts.js";

    async function main() {
        const lista = await usersWithPostCount();
        console.log(lista);
    }

    main();

//4. Pipeline: buscar, filtrar, normalizar, ordenar
/*Enunciado: De JSONPlaceholder, toma comments, filtra los que contengan la palabra 'qui' en body, normaliza email a minúsculas, y ordénalos por postId asc y después por email asc.

    async function cleanComments() {
    // GET /comments
    // filter body includes 'qui' (case-insensitive)
    // map: email a minúsculas
    // sort por postId, luego email
    }*/
   export async function cleanComments() {
        try {
            // 1) Descargar comentarios
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            const comments = await response.json();

            // 2) Filtrar por palabra "qui" en body (ignorando mayúsculas/minúsculas)
            const filtrados = comments.filter(comment =>
                comment.body.toLowerCase().includes("qui")
            );

            // 3) Normalizar email a minúsculas
            const normalizados = filtrados.map(comment => ({
                ...comment,
                email: comment.email.toLowerCase()
            }));

            // 4) Ordenar por postId asc, luego por email asc
            normalizados.sort((a, b) => {
                if (a.postId !== b.postId) {
                    return a.postId - b.postId;
                }
                return a.email.localeCompare(b.email);
            });

            return normalizados;

        } catch (error) {
            console.error("Error procesando comentarios:", error);
            return [];
        }
    }

    import { cleanComments } from "./cleanComments.js";

    async function main() {
        const resultado = await cleanComments();
        console.log(resultado);
    }

    main();

