function suma(sumando1, sumando2) {
    return sumando1 + sumando2;
}

function resta(minuendo, sustraendo) {
    if ((minuendo => 0)) {
        if (sustraendo < 0) {
            return minuendo - sustraendo;
        } else {
            return minuendo - sustraendo;
        }
    } else if (minuendo < 0) {
        if (sustraendo < 0) {
            return minuendo + sustraendo;
        } else {
            return minuendo - sustraendo;
        }
    }
    
}

function multiplicacion(factor1, factor2) {
    return factor1 * factor2;
}

function division(dividendo, divisor) {
    return Number.parseFloat(dividendo / divisor).toFixed(2); // dos digitos despues de la coma
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
let operador1 = '';


function actualizarDisplay(valor) {
    let valorActualDisplay = document.getElementById('calcDisplay').value; // obtiene el string actual del campo calcDisplay
    let valorDisplayAnterior = valorActualDisplay.substring(0, valorActualDisplay.length -1); // el valor del campo calcDisplay menos el ultimo caracter ingresado
    if (listaOperadores.includes(valor) && valorActualDisplay == 0) {
        document.getElementById('calcDisplay').value = 0;
        //cuando ingresa un operador y el display esta en 0, mantener el 0 en el display
    } else if (listaOperadores.includes(valor) && listaOperadores.includes(valorActualDisplay[valorActualDisplay.length -1])) {
        document.getElementById('calcDisplay').value = valorDisplayAnterior + valor;
        operador1 = valor;
        //cuando el display no es 0, el valor nuevo es un operador y el ultimo valor ingresado era un operador tambien, reemplazar el operador
    } else if (valorActualDisplay == 0) {
        document.getElementById('calcDisplay').value = valor;
        // si el display esta en 0 y el valor no es un operador, reemplazar el display por el nuevo valor
    } else if (listaOperadores.includes(valor) && operador1 == '') {
        operador1 = valor;
        document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value + valor;
        // el valor ingresado es un operador (luego de numeros), guardar en una variable
    } else if ((listaOperadores.includes(valor) && operador1 != '') || (valor == "=")){
        // el valor es un operador luego de un numero y habiendo ya un operador en display
        console.log("calctime");
        if (valorActualDisplay[0] == "-") {
            console.log("negartivo");
            let valorActualDisplayMenosSignoNeg = valorActualDisplay.substring(1);
            let numeros = valorActualDisplayMenosSignoNeg.split(operador1);
            numero1 = -Number(numeros[0]);
            numero2 = Number(numeros[1]);
        } else {
            let numeros = valorActualDisplay.split(operador1);
            numero1 = Number(numeros[0]);
            numero2 = Number(numeros[1]);
        }
        console.log("nmuimero 1", numero1);
        console.log("nmuimero 2", numero2);
        console.log("oper 1", operador1);
        let resultado = operate(operador1, numero1, numero2);
        console.log("resultado: ", resultado);
        numero1 = 0;
        numero2 = 0;
        if (valor != "="){
            operador1 = valor;
            document.getElementById('calcDisplay').value = resultado + valor;
        } else { 
            document.getElementById('calcDisplay').value = resultado;
            operador1 = '';
        }

    } else {
        document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value + valor;
    }
    analizarValorDisplay(valor);
}

function analizarValorDisplay(valor) {
    //console.log("a")
}

function limpiarPantalla() {
    document.getElementById('calcDisplay').value = 0;
    numero1 = 0;
    numero2 = 0;
    operador1 = '';
}
