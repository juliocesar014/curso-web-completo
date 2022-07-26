{ { { { var sera = 'Será????' } } } }

console.log(sera)



// Na Função a variável só é visivel dentro da função
function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local)  : Se tentamos executar ela fora da função: Será inexistente.