class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let pessoas = [];
console.log('Adeus console, adeus prompt!!!');

let form  = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
});

let inputSumit = document.getElementById('submit');
inputSumit.addEventListener('click', function () {
    let nome = document.getElementById('nome').value;
    let idade = parseInt(document.getElementById('idade').value);
    if (!nome && !idade) {
        console.log('Entrada inválida');
        return null;
    }
    nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();
    let pessoa = new Pessoa(nome, idade);
    pessoas.push(pessoa);
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    let li = document.createElement('li');
    li.textContent = pessoa.nome;
    let list = document.getElementById('list');
    list.appendChild(li);
    let paragrafo = document.getElementById('analise');
    paragrafo.textContent = `${maisVelho().nome} com ${maisVelho().idade} anos é o/a mais velho/a.`;
});

function maisVelho() {
    if (pessoas.length == 1) return pessoas[0];
    let pessoasOrdenado = pessoas.sort((a, b) => b.idade - a.idade);
    return pessoasOrdenado[0];
}