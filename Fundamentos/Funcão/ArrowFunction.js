let dobro = function (a) {
    return 2 * a;
}

console.log(dobro(4));

dobro = (a) => {return "O número é: " + 3 * a};


console.log(dobro(4));

dobro = (a) => `O Numero é: ${4 * a}`;

console.log(dobro(4));

let ola = () => console.log("Olá...");

ola ();

ola = ()=> {return "Teste do OOOOLLLÀÀÀÀ"}; 

console.log(ola());

let tabuada = (a) => {
    
    console.log(`\nTabuada do ${a}...\n`)
    for (let i = 1; i <= 10; i++) {
        console.log(`${a} x ${i} = ${a*i}` );
       }

}

tabuada(1);

function Pessoa(){
    this.idade = 0

setInterval(() =>{
    this.idade++
    console.log(this.idade)
},1000)
}

new Pessoa();