const notas = [2.5, 6.8, 9.5, 7.7, 8.4]

for (let i in notas) {
    console.log(`Nota: ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`)
}