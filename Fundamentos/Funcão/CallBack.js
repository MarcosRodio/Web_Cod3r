const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
}
fabricantes.forEach(imprimir);

console.log(`\n`);
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

console.log(`\n`);
fabricantes.forEach(fabricante => console.log(`==> ${fabricante}`))

// sem callback
const notas = [7.7, 8.8, 6.9, 5.4, 6.3, 9.4, 9.7]

let notasBaixas = [];

for ( i in notas){
    if (notas[i] <7){
        notasBaixas.push(notas[i]);
    }
}

for (i in notasBaixas){
    console.log(notasBaixas[i]);
}

console.log(notasBaixas);

// Com Callback

notasBaixas = notas.filter(function(nota){
    return nota < 8;
})
console.log(notasBaixas)

notasBaixas = notas.filter(nota => nota < 9)

//console.log(notasBaixas)

for (i in notasBaixas){
    console.log(`Posição ${i} do Vetor - ${notasBaixas[i]}`);
}