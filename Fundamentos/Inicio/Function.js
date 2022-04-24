function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);

function soma(a, b = 0) {
  total = a + b;
  return total;
}

console.log(soma(2,6))


const imprimirSub = function (a, b){
    console.log(a - b);
}

imprimirSub(2,6);

const soma1 = (a, b) => {
    return a + b;
}

console.log(soma1(10, 13));

const sub2 = (a, b) => a - b;

console.log(sub2(10,2));
