const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar.bind(pessoa);
falar();

function Pessoa(){
    this.idade = 0;
    const self = this; // da pra tirar essa linha e substituir self por this utilizando o bind la em baixo.

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa