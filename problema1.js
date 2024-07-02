// Función para leer los datos de los enemigos y determinar cuál está más cerca
function enemigoMasCercano() {
    // Leer nombre y distancia del primer enemigo
    let nombreEnemigo1 = prompt("Introduce el nombre del primer enemigo:");
    let distanciaEnemigo1 = parseFloat(prompt("Introduce la distancia del primer enemigo:"));

    // Leer nombre y distancia del segundo enemigo
    let nombreEnemigo2 = prompt("Introduce el nombre del segundo enemigo:");
    let distanciaEnemigo2 = parseFloat(prompt("Introduce la distancia del segundo enemigo:"));

    // Comparar las distancias y determinar cuál está más cerca
    if (distanciaEnemigo1 < distanciaEnemigo2) {        
        alert(`El enemigo más cercano es: ${nombreEnemigo1}`);
    } else if (distanciaEnemigo2 < distanciaEnemigo1) {        
        alert(`El enemigo más cercano es: ${nombreEnemigo2}`);
    } else {        
        alert(`Ambos enemigos están a la misma distancia.`);
    }
}

// Llamar a la función
enemigoMasCercano();
