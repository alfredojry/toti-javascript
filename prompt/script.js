console.log('Seja bem-vindo!');
let nome = prompt('Digite seu nome');
let sobrenome = prompt('Digite seu sobrenome');
let idade = prompt('Digite sua idade');
let estado = prompt('Digite seu estado');
let obj = { nome, sobrenome, idade, estado }
console.table(obj);