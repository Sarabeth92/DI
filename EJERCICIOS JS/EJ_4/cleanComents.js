// cleanComments.js

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