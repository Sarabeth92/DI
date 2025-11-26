// getPosts.js

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

        // 5) MODIFICACION: Ordenar por titulo asc
        const ordenados = posts.sort((a, b) => a.title.localeCompare(b.title));
        return ordenados;

    } catch (error) {
        console.error("Error obteniendo los posts:", error);
        return [];
    }
}
