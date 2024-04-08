let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

let arrPessoas = []

function cadastrar() {

    let pessoa = {

        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        categoria: document.getElementById('categoria').value,
        peso: document.getElementById('peso').value,
        altura: document.getElementById('altura').value

    }

    arrPessoas.push(pessoa)
    console.log(arrPessoas);

    let imc = calcularIMC(peso, altura)

    div.innerHTML =
        `NOME: ${pessoa.nome} ${pessoa.sobrenome}
    CATEGORIA: ${pessoa.categoria}
    IMC: ${calcularIMC(pessoa.peso, pessoa.altura).toFixed(2)}
    CLASSIFICAÇÃO: ${classificacao(calcularIMC(pessoa.peso, pessoa.altura))}`

    console.log(nome, sobrenome, categoria, peso, altura, imc);

    classificacao(imc)

    imprimirDados();
}

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificacao(imc) {
    if (imc <= 18.5) {
        return ("Abaixo do peso");
    } else if (imc >= 18.6 && imc < 24.9) {
        return ("Peso normal");
    } else if (imc >= 25.0 && imc < 29.9) {
        return ("Sobrepeso");
    } else if (imc >= 30.0 && imc < 34.9) {
        return ("Obesidade Grau I");
    } else if (imc >= 35.0 && imc < 39.9) {
        return ("Obesidade Grau II");
    } else if (imc >= 40.0) {
        return ("Obesidade Grau III");
    } else {
        return ("Obesidade");

    }
}

function imprimirDados() {

    div.innerHTML = ''

    for (let i = 0; i < arrPessoas.length; i++) {

        div.innerHTML += ` 
            <tr>
                <td> ${arrPessoas[i].nome} ${arrPessoas[i].sobrenome}</td>
                <td>${arrPessoas[i].categoria}</td>
                <td>${calcularIMC(arrPessoas[i].peso, arrPessoas[i].altura).toFixed(2)} -
                    ${classificacao(calcularIMC(arrPessoas[i].peso, arrPessoas[i].altura))} </td>
            </tr> `


    }

}




btn.addEventListener('click', cadastrar)