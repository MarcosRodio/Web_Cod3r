function soma(){
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}
console.log("Sem Parametros = "+ soma());
console.log("Passando Paramentros = " + soma(10,20,30,40));

function soma1(a, b, c){
    a = isNaN(a) ? 1 : a;
    b = isNaN(b) ? 1 : b;
    c = isNaN(c) ? 1 : c;

    return a + b + c;
}

console.log(soma1(), soma1(5,5,5));
console.log(soma1(15, 15, 15));

//valor padrao do es2015

function soma2(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma2(10,20,30), soma2(), soma2(0,0,0))