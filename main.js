    // Función posición final
function calcularPosicionFinal(velocidad, posicionInicial, tiempo) {
    return posicionInicial + (velocidad * tiempo);
  }
  
    // Ciclos
  do {
    let velocidad = parseFloat(prompt("Ingresa la velocidad (en metros por segundo):"));
    let posicionInicial = parseFloat(prompt("Ingresa la posición inicial (en metros):"));
    let tiempo = parseFloat(prompt("Ingresa el tiempo (en segundos):"));
  
    // Validación de tiempo negativo
    if (tiempo < 0) {
      alert("El tiempo no puede ser negativo.");
    } else {
    // Calculo función
      let posicionFinal = calcularPosicionFinal(velocidad, posicionInicial, tiempo);
  
    // Resultado
      alert("La posición final después de " + tiempo + " segundos es: " + posicionFinal + " metros.");
    }
    
  } while (confirm("¿Deseas calcular otra posición?"));
  