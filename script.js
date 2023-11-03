function changeBackgroundColor() {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const radiosSexo = document.querySelectorAll('input[name="sexo"]:checked').length;
    const radiosNacionalidade = document.querySelectorAll('input[name="nacionalidade"]:checked').length;
    const aceitaTermos = document.getElementById("aceitaTermos").value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked').length;
    const body = document.body;

    if (nome === "Maria" && idade > 10 && radiosSexo === 1 && radiosNacionalidade === 1 && aceitaTermos === "Sim" && checkboxes === 5) {
        body.style.backgroundColor = "pink";
    } else {
        body.style.backgroundColor = "";
    }
}