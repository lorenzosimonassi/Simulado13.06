function converterTemperatura() {
    // Obtém o valor do input
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);

    // Calcula a temperatura em Fahrenheit
    var fahrenheit = (celsius * 9 / 5) + 32;

    // Exibe o resultado
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "Temperatura em Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
}