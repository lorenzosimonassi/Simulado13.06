function validatePassword() {
    var passwordInput = document.getElementById("password");
    var errorMessage = document.getElementById("error-message");
    var password = passwordInput.value;

    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (password.match(pattern)) {
      errorMessage.textContent = "";
      alert("Senha válida!");
    } else {
      errorMessage.textContent = "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.";
    }
  }