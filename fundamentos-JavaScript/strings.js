const escola = 'Cod3r'

console.log(escola.charAt(0))  // charAt -> mostra a letra que você escolher.
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))



console.log(escola.charCodeAt(3)) // valor do caracterer na tabela ascii/unicode

console.log(escola.indexOf('3'))  // qual indice o elemento pode ser encontrado no array

console.log(escola.substring(1)) // imprimir valores a partir do indice 1
console.log(escola.substring(2)) // imprimir valores a partir do indice 2
console.log(escola.substring(0, 3)) // imprimir valores a partir do indice 0 até o 3, sem incluir o 3

console.log('Escola: ' + escola + '!') // concatenação

console.log(escola.replace(3, 'e')) // no indice 3 alterar para -> 'e'
console.log(escola)

console.log('Ana, Maria, Pedro'.split(',')) // transformar sting em array "como se fosse uma lista" 