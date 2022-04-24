function soBoaNota(nota) {
    if(nota>=7){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }
}

soBoaNota(10);

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota){
    if (nota.entre(9,10)){
        console.log("Quadro de Honra")
    } else if(nota.entre(7,8)){
        console.log("Muito Bom")
    }else if(nota<7){
        console.log("Foi mal")
    }
}

imprimirResultado(10)