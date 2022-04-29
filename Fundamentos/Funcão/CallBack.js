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