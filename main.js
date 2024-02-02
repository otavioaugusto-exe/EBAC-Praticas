const form = document.getElementById("form-numero");

function existeNum (numA, numB) {
    return ((isNaN(numA) || isNaN(numB)) || (numA == "" || numB == ""));
};

function validaForm (numA, numB) {
    return numA < numB
}

form.addEventListener('submit', function(e) {
    let = formValido = false;
    e.preventDefault();

    const numA = document.getElementById("numero-a")
    const numB = document.getElementById("numero-b")
    const mensagemForm = document.getElementById("mensagem-form")

    if (!existeNum(numA.value, numB.value)) {
        if (validaForm (numA.value, numB.value)) {
            mensagemForm.classList.remove("mensagem-erro")
            mensagemForm.classList.add("mensagem-sucesso");
            mensagemForm.innerHTML = "Número B é maior, formulário enviado!"; 
        } else {
            mensagemForm.classList.remove("mensagem-sucesso")
            mensagemForm.classList.add("mensagem-erro");
            mensagemForm.innerHTML = "Número B deve ser maior que número A!"; 
        }
    }else {
        mensagemForm.classList.remove
        mensagemForm.classList.add("mensagem-erro");
        mensagemForm.innerHTML = "Insira números nos campos";    
    }
}
);