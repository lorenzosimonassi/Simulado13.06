function gerarCorAleatoria() {
    var letrasHex = '0123456789ABCDEF';
    var cor = '#';

    for (var i = 0; i < 6; i++) {
      var indiceAleatorio = Math.floor(Math.random() * 16);
      cor += letrasHex[indiceAleatorio];
    }

    return cor;
  }

  function exibirCorAleatoria() {
    var colorBox = document.querySelector('.color-box');
    var corAleatoria = gerarCorAleatoria();
    colorBox.style.backgroundColor = corAleatoria;
  }

  exibirCorAleatoria();