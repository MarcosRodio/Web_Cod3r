const obj = {};

obj.nome = "Marcos";
obj.idade = 38;
obj.peso = 133.4;

console.log(obj);

const {idade, peso} = obj;

console.log("idade = " + idade, "\nPeso = " +peso);

const [a, b, c, d, e] = [10, 5, 2, 3, 7];

const soma = a + b + c + d + e;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / c;
const modulo = e % 2;

console.log(soma);
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)



