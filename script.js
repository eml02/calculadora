function suma(sumando1, sumando2) {
    return sumando1 + sumando2;
}

function resta(minuendo, sustraendo) {
    return minuendo - sustraendo;
}

function multiplicacion(factor1, factor2) {
    return factor1 * factor2;
}

function division(dividendo, divisor) {
    return dividendo / divisor;
}

function operate(operador, numero1, numero2) {
    switch (operador) {
        case '+':
            return suma(numero1, numero2);
            break;
        case '-':
            return resta(numero1, numero2);
            break;
        case '*':
            return multiplicacion(numero1, numero2);
            break;
        case '/':
            return division(numero1, numero2);
            break;
        default:
            break;
    }
}

let operadores = ["+", "-", "*", "/"];

function agregarValor(valor) {
    if (operadores.includes(valor)) {
        let operando1 = document.getElementById('calcDisplay').value;
        let operador = valor;
        //console.log(operando1, "ssssssss", operador);
    } 
    document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value + valor;
    
    
}