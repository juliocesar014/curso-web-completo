// Estratégia 1 para gerar valor padrão.
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log('O resultado é:', soma1())
console.log('O resultado é: ' + soma1(1, 2, 3))
console.log(`O resultado é:`, soma1(2, 3, 4))

// Estratégia 2 para gerar valor padrão.
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = b !== undefined ? b : 1
    c = c !== undefined ? c : 1
    return a + b + c
}
console.log('O resultado é: ' + soma2())