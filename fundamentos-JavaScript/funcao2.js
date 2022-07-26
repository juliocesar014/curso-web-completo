// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)


// Armazenando uma função arrow em uma variável
// => substitui o nome function
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 8))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))

const imprimir2 = a => console.log(a)
imprimir2('Legal')