// carregando os items UF do select
window.addEventListener('DOMContentLoaded', function() {
    let select = document.querySelector('select');
    let disabled = document.getElementById('option-disabled');
    disabled.textContent = 'Por favor, espere...';
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
        .then(resp => resp.json())
        .then(data => {
            disabled.textContent = 'Escolha um estado';
            let dataSorted = data.sort((a, b) => a.nome.localeCompare(b.nome));
            for (let item of dataSorted) {
                let option = document.createElement('option');
                option.value = item.sigla;
                option.textContent = item.nome;
                select.appendChild(option);
            }
        })
        .catch(error => {
            console.log(error);
            disabled.textContent = 'Sem conexão';
        });
});

// carregando a informação do estado
let select = document.querySelector('select');
select.addEventListener('change', function (event) {
    let sigla = event.target.value;
    let head = document.getElementById('uf-head');
    let ul = document.querySelector('ul');
    head.innerHTML = '<p>Por favor, espere...</p>';
    ul.innerHTML = '';
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`)
        .then(resp => resp.json())
        .then(data => {
            let uf = data[0].microrregiao.mesorregiao.UF.nome;
            head.innerHTML = '';
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            h2.textContent = `Nome: ${uf}`;
            p.textContent = `Número de municípios: ${data.length}`;
            head.appendChild(h2);
            head.appendChild(p);
            for (let item of data) {
                let li = document.createElement('li');
                li.textContent = item.nome;
                ul.appendChild(li);
            }
        })
        .catch(error => {
            console.log(error);
            head.innerHTML = '<p>Sem conexão</p>';
        });
});