function operacionYComparacion(a, b, c, d) {
    // Suma los dos primeros argumentos
    let suma1 = a + b;
    // Suma los dos últimos argumentos
    let suma2 = c + d;
    // Multiplica las dos sumas
    let resultado = suma1 * suma2;

    // Compara el resultado con 50
    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

// Ejemplo de uso de la función
operacionYComparacion(10, 20, 5, 6); // Ejecutar la función con valores de ejemplo
