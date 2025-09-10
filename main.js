 const visor = document.querySelector("span");
    function printar(numero) {
      visor.textContent += numero;
    }

    function operador(simbolo) {
      visor.textContent += simbolo;
    }

    function apagar() {
      visor.textContent = "";
    }

    function apagarcarac() {
        visor.textContent = visor.textContent.toString().slice(0, -1);
    }

    function resultado() {
      visor.textContent = eval(visor.textContent);
    }