var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// let procura dentro do menor escopo para o maior
// var tem escopo global, funcao
// let tem escopo global, funcao, bloco