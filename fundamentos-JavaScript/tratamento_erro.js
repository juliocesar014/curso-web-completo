function tratarErroELancar(erro) {
    // throw new Error('Ocorreu um erro....')
    // trhow 10
    // trhow True
    throw 'Houve um erro, favor verificar'
}


function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Finalizado.')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)