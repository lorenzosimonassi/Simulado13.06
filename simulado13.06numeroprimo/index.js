function verificarPrimo() {
    var numero = parseInt(document.getElementById('numero').value);

    if (numero < 2) {
      exibirResultado(numero + ' não é um número primo.');
      return false;
    }

    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        exibirResultado(numero + ' não é um número primo.');
        return false;
      }
    }

    exibirResultado(numero + ' é um número primo.');
    return false;
  }

  function exibirResultado(mensagem) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
  }