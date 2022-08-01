// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 // local fisico onde sua variável foi definida

function exec() {
    const saudacao = 'Falaaaa' // contexto léxico 2 // 
    return saudacao
}

// Objetos são grupos alinhados de pares nome/valor chave/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90.0,
    end: {
        rua: ' Av. Epitácio Pessoa',
        numero: 1920
    }
}

console.log(saudacao)

console.log(exec())

console.log(cliente)