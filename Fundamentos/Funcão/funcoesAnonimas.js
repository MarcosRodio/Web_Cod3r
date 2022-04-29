const soma = function(x,y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(2,4);

imprimirResultado(4, 6, soma)

imprimirResultado(5, 5 , function(x, y){
    return x-y
})

imprimirResultado(10, 9 , (X, Y) => X * Y);

const pessoa = {
    falar:function(){
        console.log("Falei Porra!!")
    }

}

pessoa.falar();