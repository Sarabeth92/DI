// utils.js

// Exportación nombrada
export const APP_NAME = "Lloreria 2.0";

// Exportación nombrada
export function mayusculas(texto) {
    return texto.toUpperCase();
}

// Exportación por defecto
export default function primero(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return "Error: el array está vacío o no es válido";
    }
    return array[0];
}
