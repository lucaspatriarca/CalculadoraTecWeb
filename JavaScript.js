
var exec_ponto = 1;
var exec_oper = 1;


function numero_pegar(num){
    var tela = document.getElementById("resultado");
    tela.value = tela.value + num;
}

function resetar_tela(){
    document.getElementById("resultado").value = null;
}


function pega_operacao(operador){
    var tela = document.getElementById("resultado");
    if (exec_oper == 1){
        tela.value = tela.value + operador;
        exec_oper += 1;
    }
}

function pega_ponto(operador){
    var tela = document.getElementById("resultado");
    if (exec_ponto == 1){
        tela.value = tela.value + operador;
        exec_ponto += 1;
    } else if (exec_oper == 2 && exec_ponto == 2){
        tela.value = tela.value + operador;
        exec_ponto += 1;
    }
}

function somar(){
    var tela = document.getElementById("resultado");
    var ultimo_item = tela.value.length - 1;

    if (isNaN(tela.value[ultimo_item])){
        tela.value = "_Erro de operação_"
    } else {
        var resultado = eval(tela.value);
        tela.value = resultado
    }
}
