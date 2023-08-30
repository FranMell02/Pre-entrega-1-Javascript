
// Variables
var velocidad = parseFloat(prompt("Ingresa la velocidad (en metros por segundo):"));
var posicionInicial = parseFloat(prompt("Ingresa la posición inicial (en metros):"));
var tiempo = parseFloat(prompt("Ingresa el tiempo (en segundos):"));

// Calculo
var posicionFinal = posicionInicial + (velocidad * tiempo);

// Resultado
alert("La posición final después de " + tiempo + " segundos es: " + posicionFinal + " metros.");