const btnCalcular = document.querySelector("#calcular");

btnCalcular.addEventListener("click", () => {
    const conta = parseFloat(document.querySelector("#totalConta").value);
    const taxa = parseFloat(document.querySelector("#porcentagemGorjeta").value);

    if (isNaN(conta) || conta <= 0) {
        alert("Por favor, insira um valor válido para a conta.");
        return;
    }

    const gorjetaTotal = conta * taxa;
    const contaTotal = conta + gorjetaTotal;


    document.querySelector("#valorGorjeta").innerText = gorjetaTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    document.querySelector("#resultado").classList.remove("hidden");
});
