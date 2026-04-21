const inputConta = document.querySelector("#totalConta");
const botoesGorjeta = document.querySelectorAll(".tip-btn");
const displayGorjeta = document.querySelector("#valorGorjeta");
const displayTotal = document.querySelector("#totalFinal");
const divResultado = document.querySelector("#resultado");

let porcentagemAtual = 0.15; 

function atualizarCalculo() {
    const conta = parseFloat(inputConta.value);

    if (isNaN(conta) || conta <= 0) {
        divResultado.classList.add("hidden");
        return;
    }

    const valorGorjeta = conta * porcentagemAtual;
    const valorTotal = conta + valorGorjeta;

    const formatar = (valor) => valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    displayGorjeta.innerText = formatar(valorGorjeta);
    displayTotal.innerText = formatar(valorTotal);
    divResultado.classList.remove("hidden");
}

botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", () => {
        
        botoesGorjeta.forEach(b => b.classList.remove("active"));
        
        botao.classList.add("active");
        
        porcentagemAtual = parseFloat(botao.dataset.percent);
        
        atualizarCalculo();
    });
});

inputConta.addEventListener("input", atualizarCalculo);
