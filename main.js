const form = document.getElementById('form-add-contact');
const nomes = [];
const telefones = [];

let linhas = '';

const inputNome = document.getElementById('nome-contato');
const inputTelefone = document.getElementById('fone-contato');
const auxTel = 0;

inputTelefone.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) 
inputTelefone.addEventListener('change', (e) => mascaraTelefone(e.target.value)) 

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    inputTelefone.value = valor
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){       
  
    if(telefones.includes(inputTelefone.value)){        
        alert(`O telefone: ${inputTelefone.value} já foi inserido.`)
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);
        console.log(telefones)

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;        
        linha += `</tr>`;

        linhas += linha;           
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}