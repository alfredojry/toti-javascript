let input = document.querySelector('input[type="number"]');
let button = document.querySelector('input[type="button"]');
let form = document.querySelector('form');

form.addEventListener('submit', e => {e.preventDefault();});
form.addEventListener('submit', toDo);

button.addEventListener('click', toDo)

// Função do listener
function toDo() {
    let div = document.getElementById('mensagem');
    let cpf = input.value;
    if (formatoCerto(cpf)) {
        let v1 = verificador1(cpf);
        let v2 = verificador2(cpf, v1);
        let digitosInseridos = cpf.slice(-2);
        if (`${v1}${v2}` == digitosInseridos) {
            div.innerHTML = '<p>CPF certo</p>';
        } else div.innerHTML = '<p>CPF impossível</p>';
        console.log(`CPF : ${cpf} | Dígitos: ${v1} & ${v2}`)
    } else div.innerHTML = '<p>Formato inválido</p>';
}

// Funções de ajuda matemática

function formatoCerto(cpf) {
    let regex = /^\d{11}$/;
    return regex.test(cpf);
}

function verificador1(cpf) {
    let digitos = cpf.split('').map(Number).slice(0, 9).reverse();
    let v1 = 0;
    for (let i = 0; i < digitos.length; i++) {
        v1 += digitos[i] * (9 - i % 10);
    }
    v1 %= 11;
    v1 %= 10;
    return v1;
}

function verificador2(cpf, v1) {
    let digitos = cpf.split('').map(Number).slice(0, 9).reverse();
    let v2 = 0;
    for (let i = 0; i < digitos.length; i++) {
        v2 += digitos[i] * (9 - (i + 1) % 10);
    }
    v2 += v1 * 9;
    v2 %= 11;
    v2 %= 10;
    return v2;
}

(function () {
    let cpf = '70826636250';
    let v1 = verificador1(cpf);
    let v2 = verificador2(cpf, v1)
    console.log(`CPF : ${cpf} | Dígitos: ${v1} & ${v2}`)
})();

(function () {
    let cpf = '70826635288';
    let v1 = verificador1(cpf);
    let v2 = verificador2(cpf, v1)
    console.log(`CPF : ${cpf} | Dígitos: ${v1} & ${v2}`)
})();