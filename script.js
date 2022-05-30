
var numeroSecreto = parseInt(Math.random() * 11); //Se esse codigo ficar fora do escopo ele sera gerado apenas uma vez
console.log(numeroSecreto)
function Chutar(){
   // var numeroSecreto = parseInt(Math.random() * 11); // aqui dentro toda vez que clicar no botao será gerado um novo numero
    var resultado = document.getElementById("resultado");
    var dica = document.getElementById("dica");
    var chute = parseInt(document.getElementById("valor").value);
    
    if(chute == numeroSecreto){
        resultado.innerHTML = "Você Acertou";
    } else if (chute > 10 || chute < 0 ){
        resultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
        resultado.innerHTML = "Você Errou";
    }

    if (chute == numeroSecreto){
        dica.innerHTML = "Parabéns"
    } else if(numeroSecreto >= 0 && numeroSecreto <= 5){
        dica.innerHTML = "Numero entre 0 e 5"
    } else if (numeroSecreto >= 6 && numeroSecreto <= 10){
        dica.innerHTML = "Número entre 6 e 10"
    }
};

