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

let listaOperadores = ["+", "-", "*", "/"];
let numero1 = 0;
let numero2 = 0;
let operador = '';


function actualizarDisplay(valor) {
    let valorActualDisplay = document.getElementById('calcDisplay').value;
    if (listaOperadores.includes(valor) && valorActualDisplay == 0) {
        document.getElementById('calcDisplay').value = 0;
    } else if (listaOperadores.includes(valor) && listaOperadores.includes(valorActualDisplay[valorActualDisplay.length -1])) {
        document.getElementById('calcDisplay').value = valorActualDisplay.substring(0, valorActualDisplay.length -1) + valor;
        
        
    } else if (valorActualDisplay == 0) {
        document.getElementById('calcDisplay').value = valor;
    } else {
        document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value + valor;
    }
    analizarValor(valor);
}

function analizarValor(valor) {
    if (listaOperadores.includes(valor) && numero1 == 0) {
        
    }
}

function limpiarPantalla() {
    document.getElementById('calcDisplay').value = 0;
}