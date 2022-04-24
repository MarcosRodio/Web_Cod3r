
//funcão
function fun1(){
    return "Hello Word";
}

//função sendo atribuida a uma constante/variavel
const a = fun1();


console.log(fun1());

console.log(a);

//função recebendo uma função como parametro
function fun2(fun){
    fun()
}
fun2(function (){console.log("Executando")})

function soma(a,b){
    return function(c){
        console.log(a +b +c);
    }
}
soma(10,10)(3);


function Area(altura, largura){
     return altura * largura;
}

console.log(Area(10,2));