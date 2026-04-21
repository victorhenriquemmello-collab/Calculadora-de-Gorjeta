const inputConta = document.querySelector("#totalConta");
const selectGorjeta = document.querySelector("#porcentagemGorjeta");
const displayGorjeta = document.querySelector("#valorGorjeta");
const displayTotal = document.querySelector("#totalFinal");
const divResultado = document.querySelector("#resultado");
function atualizarCalculo() {
    const conta = parseFloat(inputConta.value);
    const taxa = parseFloat(selectGorjeta.value);
    
    if (isNaN(conta) || conta <= 0) {
        divResultado.classList.add("hidden");
        return;
    }

    const valorGorjeta = conta * taxa;
    const valorTotal = conta + valorGorjeta;

    const formatar = (valor) => {
        return valor.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    displayGorjeta.innerText = formatar(valorGorjeta);
    displayTotal.innerText = formatar(valorTotal);

    divResultado.classList.remove("hidden");
}

inputConta.addEventListener("input", atualizarCalculo);
selectGorjeta.addEventListener("change", atualizarCalculo);
