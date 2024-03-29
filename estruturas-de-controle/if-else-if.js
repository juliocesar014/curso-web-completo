Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Parabéns, Quadro de honra!')
    }
    else if (nota.entre(7, 8.99)) {
        console.log('Aprovado.')
    }
    else if (nota.entre(4, 6.99)) {
        console.log('Recuperação.')
    }
    else if (nota.entre(0, 3.99)) {
        console.log('Reprovado.')
    }
    else {
        console.log('Nota inválida.')
    }
}
imprimirResultado(9.2)
imprimirResultado(6.4)
imprimirResultado(2.5)
imprimirResultado(-1)
imprimirResultado(11)