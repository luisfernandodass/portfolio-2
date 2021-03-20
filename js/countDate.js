// Mostra no visor o resultado
function calculate(){
    var  i = document.getElementById('showResult');
    i.textContent = '12 + 17';

    function j(valor1, operador, valor2){
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
    
}
function add(value1, operation, value2){
     value1 = document.getElementById('').value;
     operation = document.getElementById('').value;
     value
}

// Função que limpa  a calculadora
function erase() {
    var out = document.getElementById('showResult');
    out.textContent = '';
}
