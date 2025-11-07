 const numeroInput = document.getElementById('numero');
        const verificadorButton = document.getElementById('verificador');
        const infosDiv = document.querySelector('.infos');
        const labelSpan = document.getElementById('label');
        const valueSpan = document.getElementById('value');
        const descriptionSpan = document.querySelector('#description span');
        verificadorButton.onclick = function() {
            
            const numero = parseInt(numeroInput.value);
            
            if (numeroInput.value === '' || isNaN(numero)) {
                alert('Digite um número válido!');
                return;
            }
            
            const isPar = numero % 2 === 0;
            
            if (isPar) {
                labelSpan.textContent = 'Esse número é:';
                valueSpan.textContent = ' PAR ✅';
                valueSpan.style.color = '#77d87e';
                descriptionSpan.textContent = 'O número ' + numero + ' é PAR!';
            } else {
                labelSpan.textContent = 'Esse número é:';
                valueSpan.textContent = ' ÍMPAR 🎯';
                valueSpan.style.color = '#fbbf24';
                descriptionSpan.textContent = 'O número ' + numero + ' é ÍMPAR!';
            }
            
            infosDiv.style.display = 'block';
        };