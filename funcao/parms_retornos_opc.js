// Parametros e retornos são opcionais!
function area(largura, altura) {
    const area = altura * largura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}
console.log(area(5, 2)) // 5 * 2
console.log(area(2)) // NaN
console.log(area()) // NaN
console.log(area(5, 3, 2)) // Vai pegar apenas os DOIS primeiros parametros.
console.log(area(5, 5)) // Valor acima do permitido!! `${area}`