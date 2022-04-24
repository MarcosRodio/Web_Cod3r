function compras(trabalho1, trabalho2){

    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    //const comprartv2 = !!(trabalho1 ^ trabalho2);// bitwise  xor
    const comprartv32 = trabalho1 != trabalho2;
    const mantersaudavel = !comprarSorvete;

    return{comprarTV50, comprartv32, comprarSorvete, mantersaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
