const [a] = [10]
console.log(a)

const [n1, n2, n3, n4, n5 = 0] = [1, 3, 5, 4]
console.log(n1, n2, n3, n4, n5)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // Não utilizar na prática.
console.log(nota)