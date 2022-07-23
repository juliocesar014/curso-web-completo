// no array se utiliza []

const valores = [7.7, 8.9, 8.2, 6.3]
console.log(valores[0], valores[3])
console.log(valores[4])  // undefined

valores[4] = 10.4

console.log(valores)
console.log(valores.length) // quantidade de 'valores'

valores.push({ id: 3 }, false, null, 'teste') // adicionar coisas dentro de um array
console.log(valores)

console.log(valores.pop())  // remover ultimo valor do array, no caso 'teste'
delete valores[0] // deletar algo do array de acordo com o indice proposto
console.log(valores)

console.log(typeof (valores))  // tipo 
