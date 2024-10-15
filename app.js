function somar(){
    var dado1 = parseInt(document.getElementById("dadoUm").value);
    var dado2 = parseInt(document.getElementById("dadoDois").value);
    var resultado = soma(dado1, dado2);
    document.getElementById("resultadoFacil").value = resultado;
}

function subtrair(){
    var dado1 = parseInt(document.getElementById("dadoUm").value);
    var dado2 = parseInt(document.getElementById("dadoDois").value);
    var resultado = subitracao(dado1, dado2);
    document.getElementById("resultadoFacil").value = resultado;
}
function multiplicar(){
    var dado1 = parseInt(document.getElementById("dadoUm").value);
    var dado2 = parseInt(document.getElementById("dadoDois").value);
    var resultado = multiplicação(dado1, dado2);
    document.getElementById("resultadoFacil").value = resultado;
}
function dividir(){
    var dado1 = parseInt(document.getElementById("dadoUm").value);
    var dado2 = parseInt(document.getElementById("dadoDois").value);
    var resultado = divisao(dado1, dado2);
    document.getElementById("resultadoFacil").value = resultado;
}

function multiplicação(x,y){
     var multiplicar = x * y;
     return multiplicar;
}

function soma(x,y){
    var somar = x + y;
    return somar;
}

function subitracao(x,y){
    var subitrair = x - y;
    return subitrair;
}

function divisao(x,y){
    var dividir = x / y;
    return dividir;
}

function ficaVermelho(){
    let div = document.getElementById("botaoSoma");
    div.style.color = "red";
}

function ficaPreto(){
    let div = document.getElementById("botaoSoma");
    div.style.color = "black";
}
function ficaVermelho1(){
    let div = document.getElementById("botaoSubtrai");
    div.style.color = "red";
}

function ficaPreto1(){
    let div = document.getElementById("botaoSubtrai");
    div.style.color = "black";
}
function ficaVermelho2(){
    let div = document.getElementById("botaoMultiplica");
    div.style.color = "red";
}

function ficaPreto2(){
    let div = document.getElementById("botaoMultiplica");
    div.style.color = "black";
}
function ficaVermelho3(){
    let div = document.getElementById("botaoDivide");
    div.style.color = "red";
}

function ficaPreto3(){
    let div = document.getElementById("botaoDivide");
    div.style.color = "black";
}


