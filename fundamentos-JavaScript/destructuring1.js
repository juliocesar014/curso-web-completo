// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    end: {
        rua: 'Abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa // removendo dentro do objeto nome e idade do objeto pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { end: { rua, numero, cep } } = pessoa
console.log(rua, numero, cep)