// productos.js

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
