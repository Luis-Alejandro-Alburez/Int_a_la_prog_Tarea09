// Función para leer los datos de los enemigos y determinar cuál está más cerca
function seleccionarObjetivo() {
    // Leer nombre y distancia del primer enemigo
    let nombreEnemigo1 = prompt("Introduce el nombre del primer enemigo:");
    let distanciaEnemigo1 = parseFloat(prompt("Introduce la distancia del primer enemigo:"));

    // Leer nombre y distancia del segundo enemigo
    let nombreEnemigo2 = prompt("Introduce el nombre del segundo enemigo:");
    let distanciaEnemigo2 = parseFloat(prompt("Introduce la distancia del segundo enemigo:"));

    // Comparar las distancias y determinar cuál está más cerca o seleccionar el primero si son iguales
    if (distanciaEnemigo1 < distanciaEnemigo2) {
        //console.log(`El objetivo más cercano para atacar es: ${nombreEnemigo1}`);
        alert(`El objetivo más cercano para atacar es: ${nombreEnemigo1}`);
    } else if (distanciaEnemigo2 < distanciaEnemigo1) {
        //console.log(`El objetivo más cercano para atacar es: ${nombreEnemigo2}`);
        alert(`El objetivo más cercano para atacar es: ${nombreEnemigo2}`);
    } else {
        //console.log(`El objetivo más cercano para atacar es: ${nombreEnemigo1}`);
        alert(`El objetivo más cercano para atacar es: ${nombreEnemigo1}`);
    }
}

// Llamar a la función
seleccionarObjetivo();
