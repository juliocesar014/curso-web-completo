function compras(trabalho1, trabalho2) {
    const ComprarSorverte = trabalho1 || trabalho2 // or
    const ComprarTv50 = trabalho1 && trabalho2 // and
    const ComprarTv32 = trabalho1 != trabalho2 // diferente de (xor)
    const ManterSaudavel = !ComprarSorverte // negação de comprarSorvete

    return { ComprarSorverte, ComprarTv50, ComprarTv32, ManterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))