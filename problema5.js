function selectTarget(enemy1, enemy2) {
    const { name: name1, distance: distance1, speed: speed1, priority: priority1 } = enemy1;
    const { name: name2, distance: distance2, speed: speed2, priority: priority2 } = enemy2;

    if (priority1 > priority2) {
        return name1;
    } else if (priority2 > priority1) {
        return name2;
    } else if (priority1 === priority2){
        return name1;
    } else {
        if (distance1 < distance2) {
            return name1;
        } else if (distance2 < distance1) {
            return name2;
        } else {
            if (speed1 > speed2) {
                return name1;
            } else {
                return name2;
            }
        }
    }
}

function getEnemyInfo(enemyNumber) {
    const name = prompt(`Ingrese el nombre del enemigo ${enemyNumber}:`);
    const distance = parseInt(prompt(`Ingrese la distancia del enemigo ${enemyNumber}:`), 10);
    const speed = parseInt(prompt(`Ingrese la velocidad del enemigo ${enemyNumber}:`), 10);
    const priority = parseInt(prompt(`Ingrese la prioridad del enemigo ${enemyNumber}:`), 10);
    return { name, distance, speed, priority };
}

while (true) {
    const enemy1 = getEnemyInfo(1);
    const enemy2 = getEnemyInfo(2);

    const target = selectTarget(enemy1, enemy2);
    alert(`El objetivo a atacar es: ${target}`);
    
    const continuePrompt = prompt("¿Quieres continuar? (si/no):").toLowerCase();
    if (continuePrompt !== 'si') {
        break;
    }
}
