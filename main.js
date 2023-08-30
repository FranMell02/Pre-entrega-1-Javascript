
// Variables
let velocidad = parseFloat(prompt("Ingresa la velocidad (en metros por segundo):"));
let posicionInicial = parseFloat(prompt("Ingresa la posición inicial (en metros):"));
let tiempo = parseFloat(prompt("Ingresa el tiempo (en segundos):"));

// Calculo
let posicionFinal = posicionInicial + (velocidad * tiempo);

// Resultado
alert("La posición final después de " + tiempo + " segundos es: " + posicionFinal + " metros.");