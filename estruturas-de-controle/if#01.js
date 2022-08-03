function soBoaNoticia(nota) {
    if (nota >= 7) {
        return 'Aprovado com ' + nota
    }
}

console.log(soBoaNoticia(7))

function seForVerdadeEuFalo(valor) {
    if (valor) {
        return 'É verdade.... ' + valor
    }
}

console.log(seForVerdadeEuFalo())
console.log(seForVerdadeEuFalo(null))
console.log(seForVerdadeEuFalo(undefined))
console.log(seForVerdadeEuFalo(0))
console.log(seForVerdadeEuFalo(''))
console.log(seForVerdadeEuFalo(-1))
console.log(seForVerdadeEuFalo(' '))
console.log(seForVerdadeEuFalo('?'))
console.log(seForVerdadeEuFalo([]))
console.log(seForVerdadeEuFalo([1, 2, 3]))
console.log(seForVerdadeEuFalo({}))