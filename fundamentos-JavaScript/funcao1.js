// função é um ação -> executa algo;
// bloco de código nomeado;
// função recebe parametros de entrada;
// final retorna algo.

// 1 Função sem Retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //  Resultado : NaN
imprimirSoma(2, 8, 4, 5, 6, 7, 8) //  Ele só vai considerar os dois primeiros elementos.
imprimirSoma() //  NaN

// 2 Função com Retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) //  Retorna a soma
console.log(soma(2)) //  Retorna 3, já que pré-definiu o valor de b
console.log(soma()) //  NaN