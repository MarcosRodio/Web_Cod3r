function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0;
  //metodo publico (this é responsável por deixar publico)
  this.acelerar = function () {
    if (velocidadeAtual <= velocidadeMaxima) {
      velocidadeAtual += delta;
    }
    if (velocidadeAtual >= velocidadeMaxima) {
      velocidadeAtual = velocidadeMaxima;
      console.log(`Desacelera Corno, vai morrer...`);
    }
  };
  // metodo publico
  this.frear = function () {
    if (velocidadeAtual <= 0) {
      velocidadeAtual = 0;
      console.log(`Para de frear Corno e vai a pé...`);
    } else {
      velocidadeAtual -= delta;
    }
  };
  // metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro();

uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(`Velocidade Atual - ${uno.getVelocidadeAtual()} km/h`);
uno.frear();
uno.frear();
console.log(`Velocidade Atual - ${uno.getVelocidadeAtual()} km/h`);
uno.frear();
uno.frear();
uno.frear();
uno.frear();

const ferrari = new Carro(350, 50);

ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();


