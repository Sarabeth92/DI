// usersPosts.js

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