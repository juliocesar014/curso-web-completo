const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// usando o template string:

const template = `
    Olá
    ${nome}!`  // interpolação usa $

console.log(concatenacao)
console.log(template)

// expressoes....
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado!')}`)
