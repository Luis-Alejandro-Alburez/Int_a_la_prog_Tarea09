// Función para obtener el enemigo más cercano
function getClosestEnemy(enemy1, distance1, enemy2, distance2) {
    if (distance1 < distance2) {
        return enemy1;
    } else if (distance2 < distance1) {
        return enemy2;
    } else {
        return enemy1; // En caso de empate, elige el primero
    }
}

// Función principal para ejecutar el programa en bucle
function main() {
    while (true) {
        // Leer el nombre y la distancia del primer enemigo
        const enemy1 = prompt("Introduce el nombre del primer enemigo:");
        const distance1 = parseFloat(prompt("Introduce la distancia del primer enemigo:"));

        // Leer el nombre y la distancia del segundo enemigo
        const enemy2 = prompt("Introduce el nombre del segundo enemigo:");
        const distance2 = parseFloat(prompt("Introduce la distancia del segundo enemigo:"));

        // Obtener el enemigo más cercano
        const closestEnemy = getClosestEnemy(enemy1, distance1, enemy2, distance2);

        // Mostrar el enemigo más cercano
        alert("El enemigo más cercano es: " + closestEnemy);
    }
}

// Llamada a la función principal
main();
