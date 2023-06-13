function contarVogais() {
    var texto = document.getElementById('texto').value;
    var quantidadeVogais = 0;

    for (var i = 0; i < texto.length; i++) {
      var caractere = texto.charAt(i).toLowerCase();
      if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
        quantidadeVogais++;
      }
    }

    exibirResultado('A frase contém ' + quantidadeVogais + ' vogais.');
    return false;
  }

  function exibirResultado(mensagem) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
  }