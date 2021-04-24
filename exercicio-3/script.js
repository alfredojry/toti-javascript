class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let pessoas = [];
let continuar = 's';
console.log('Seja bem-vindo!');
while (continuar == 's') {
    let nome  = prompt('Digite o nome da pessoa');
    let idade = Number(prompt('Digite a idade da pessoa'));
    nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();
    pessoa = new Pessoa(nome, idade);
    pessoas.push(pessoa);
    console.log(`Registro de ${nome} com idade ${idade} com sucesso!`);
    continuar = prompt('Deseja registrar outra pessoa? (s / n)').toLowerCase();
}

if (pessoas.length > 1) {
    let arrPorIdade = pessoas.sort((a, b) => a.idade - b.idade);
    let maisVelho = arrPorIdade[arrPorIdade.length - 1];
    let maisNovo  = arrPorIdade[0];
    let message1 = `${maisVelho.nome} com ${maisVelho.idade} anos é o/a mais velho/a`;
    let message2 = `${maisNovo.nome} com ${maisNovo.idade} anos é o/a mais novo/a`;
    console.log(message1);
    console.log(message2);
} else console.log('Insuficientes pessoas para analizar.')