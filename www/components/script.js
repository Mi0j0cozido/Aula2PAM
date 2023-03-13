function CalcImc() {
    var imc, massa, altura, nome

    nome = document.getElementById('nome').value
    altura = document.getElementById('altura').value
    massa = document.getElementById('massa').value

    imc = (massa / (altura * altura)).toFixed(2)

    document.getElementById('resultado').textContent = nome+(", seu IMC é: ")+imc

    if(imc < 18.5){
        document.getElementById('tabela').textContent = ("Abaixo do Peso ideal")
    }
    else if(imc >= 18.5 && imc <= 24.9){
        document.getElementById('tabela').textContent = ("Peso ideal")
    }
    else if(imc >= 25 && imc <= 29.9){
        document.getElementById('tabela').textContent = ("Excesso de Peso")
    }
    else if(imc >= 30 && imc <= 34.9){
        document.getElementById('tabela').textContent = ("Obesidade classe I")
    }
    else if(imc >= 35 && imc <= 39.9){
        document.getElementById('tabela').textContent = ("Obesidade classe II")
    }
    else if(imc >= 40){
        document.getElementById('tabela').textContent = ("Obesidade classe III")
    }
    else{
        document.getElementById('tabela').textContent = ("Algo deu errado")
    }
}