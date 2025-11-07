// Seleciona os elementos do DOM
const form = document.getElementById('form');
const dataNascimento = document.getElementById('dataNascimento');
const calculateButton = document.getElementById('calculate');
const valueSpan = document.querySelector('#value');
const descriptionSpan = document.querySelector('#description span');
const resultDiv = document.querySelector('.infos'); // MUDEI AQUI

// Função para calcular a idade
function calcularIdade(event) {
    event.preventDefault();
    
    // Pega a data de nascimento
    const dataNasc = new Date(dataNascimento.value);
    
    // Validação - verifica se a data foi preenchida
    if (!dataNascimento.value) {
        alert('Por favor, selecione sua data de nascimento!');
        return;
    }
    
    // Pega a data atual
    const dataAtual = new Date();
    
    // Validação - verifica se a data não é futura
    if (dataNasc > dataAtual) {
        alert('A data de nascimento não pode ser no futuro!');
        return;
    }
    
    // Calcula a idade
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const mesNascimento = dataNasc.getMonth();
    const diaAtual = dataAtual.getDate();
    const diaNascimento = dataNasc.getDate();
    
    // Ajusta a idade se ainda não fez aniversário este ano
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    
    // Calcula meses e dias adicionais
    let meses = mesAtual - mesNascimento;
    if (meses < 0) {
        meses += 12;
    }
    if (diaAtual < diaNascimento) {
        meses--;
        if (meses < 0) {
            meses = 11;
        }
    }
    
    let dias = diaAtual - diaNascimento;
    if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(dataAtual.getFullYear(), mesAtual, 0).getDate();
        dias += ultimoDiaMesAnterior;
    }
    
    // Exibe o resultado 
    valueSpan.textContent = `${idade} anos`;
    
    // Mensagem personalizada baseada na idade
    let mensagem = '';
    if (idade < 12) {
        mensagem = `Você é uma criança! (${meses} meses e ${dias} dias a mais)`;
    } else if (idade < 18) {
        mensagem = `Você é adolescente! (${meses} meses e ${dias} dias a mais)`;
    } else if (idade < 30) {
        mensagem = `Você é jovem adulto! (${meses} meses e ${dias} dias a mais)`;
    } else if (idade < 60) {
        mensagem = `Você é adulto! (${meses} meses e ${dias} dias a mais)`;
    } else {
        mensagem = `Você é sênior! (${meses} meses e ${dias} dias a mais)`;
    }
    
    descriptionSpan.textContent = mensagem;
    
    // Mostra o resultado
    resultDiv.style.display = 'block';
}

// MUDEI AQUI: Como o botão é type="button", precisa do evento click
calculateButton.addEventListener('click', calcularIdade);
