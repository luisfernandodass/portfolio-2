
/*
function toCount(){
    var firstDate = document.getElementById('inputDateStart').value; 
    var lastDate = document.getElementById('inputDateEnd').value;
    var time = firstDate - lastDate;

    var showTime = document.getElementById('result');
    showTime.textContent = time + ' dias';
}


function calculate(){
    var firstNumber = document.getElementById('seven').value;
    
    

    var lastNumber = document.getElementById('two').value;
    var time = firstDate - lastDate;

    var showTime = document.getElementById('result');
    showTime.textContent = time + ' dias';
}

function numbers(){
    var one = document.getElementById('one').textContent;
    var two = document.getElementById('two').textContent;
    var three = document.getElementById('three').textContent;
    var four = document.getElementById('four').textContent;
    var five = document.getElementById('five').textContent;
    var six = document.getElementById('six').textContent;
    var seven = document.getElementById('seven').textContent;
    var eight = document.getElementById('eight').textContent;
    var nine = document.getElementById('nine').textContent;
    

    var result = one + two;

    var showTime = document.getElementById('result');
    showTime.textContent = result;
}
*/
function vis(num) {
    if (typeof gvisor == 'undefined') {
        document.container.visor.value = '';
    }
    document.container.visor.value = document.container.visor.value + num;
    gvisor = 1;
}

// Função que limpa  a calculadora
function limpar() {
    document.container.visor.value = '';
}

// Funçao que executa as operações
function operacao(operador, valor1, valor2) {
    if (operador == "somar") {
        var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
        if (operador == "subtrair") {
            var valor = valor1 - valor2;
        } else {
            if (operador == "multiplicar") {
                var valor = valor1 * valor2;
            } else {
                var valor = valor1 / valor2;
            }
            return (valor);
        }
    }
}