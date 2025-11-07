// Seleciona os elementos do DOM
const form = document.getElementById('form');
const dataNascimento = document.getElementById('dataNascimento');
const calculateButton = document.getElementById('calculate');
const valueSpan = document.querySelector('#years #value');
const yearsLabel = document.querySelector('#years span:last-child');
const descriptionSpan = document.querySelector('#description span');

// Função para calcular a idade
function calcularIdade(event) {
    event.preventDefault(); // Previne o envio do formulário
    
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
    yearsLabel.textContent = '';
    valueSpan.textContent = ` ${idade} anos`;
    
    // Mensagem personalizada baseada na idade
    let mensagem = '';
    if (idade < 12) {
        mensagem = `Você é uma criança! (${meses} meses e ${dias} dias a mais)`;
    } else if (idade < 18) {
        mensagem = `Você é adolescente! (${meses} meses e ${dias} dias a mais)`;
    } else if (idade < 30) {
        mensagem = `Você é jovem adulto! (${meses} meses e ${dias} dias a mais)`;
    } else if (idade < 60) {
        mensagem = `Você é adulto!  (${meses} meses e ${dias} dias a mais)`;
    } else {
        mensagem = `Você é sênior!  (${meses} meses e ${dias} dias a mais)`;
    }
    
    descriptionSpan.textContent = mensagem;
    
    // Mostra o resultado com animação
    document.getElementById('result').style.display = 'block';
}

// Adiciona evento de submit no formulário
form.addEventListener('submit', calcularIdade);

// Adiciona evento de click no botão
calculateButton.addEventListener('click', calcularIdade);