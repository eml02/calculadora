function suma(sumando1, sumando2) {
    sumando1 = Number(sumando1);
    sumando2 = Number(sumando2);
    return sumando1 + sumando2;
}

function resta(minuendo, sustraendo) {
    minuendo = Number(minuendo);
    sustraendo = Number(sustraendo);
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
    factor1 = Number(factor1);
    factor2 = Number(factor2);
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
let resultado = 0;


function analizarValorDisplay(valorActualDisplay) {
    valorDisplayAnterior = valorActualDisplay.substring(0, valorActualDisplay.length -1);
    ultimoCaracter = valorActualDisplay[(valorActualDisplay.length -1)];
    if (valorActualDisplay == "0") {
        return 0; // display en 0
    } else if (!listaOperadores.some(r=>valorActualDisplay.includes(r))) {
        return 1; // display incluye numeros sin operador
    } else if (listaOperadores.includes(ultimoCaracter)) {
        return 2;
    } else if (sonNumerosSeparadosPorUnOperador(valorActualDisplay) == true) {
        return 3;
    }
}

function sonNumerosSeparadosPorUnOperador(cadena) {
    let flag = 0;
    listaOperadores.forEach((operador) => {
        if (cadena.split(operador).length > 1) {
            flag = 1;
        }
    });
    if (flag == 1) {
        return true;
    } else {
        return false;
    }
}


function limpiarPantalla() {
    document.getElementById('calcDisplay').value = 0;
    numero1 = 0;
    numero2 = 0;
    operador1 = '';
    resultado = 0;
}

function actualizarDisplay(caracter) {
    let valorActualDisplay = document.getElementById('calcDisplay').value; // obtiene el string actual del campo calcDisplay (antes de actualizar con el caracter nuevo)
    console.log(valorActualDisplay);
    let estadoDisplay = analizarValorDisplay(valorActualDisplay);
    switch (estadoDisplay) {
        case 0:
            if (listaOperadores.includes(caracter)) {
                numero1 = 0;
                operador1 = caracter;
                document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value + caracter;
            } else if (caracter == "=") {
                document.getElementById('calcDisplay').value = "0";                
            } else {
                document.getElementById('calcDisplay').value = caracter;
            }
            break;
        case 1: 
            if (listaOperadores.includes(caracter)) {
                numero1 = valorActualDisplay;
                operador1 = caracter;
                console.log("numero1: ", numero1);
                console.log("operador", operador1);
                document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value + caracter;
            } else if (caracter == "=") {
                document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value;
            } else {
                document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value + caracter;
            }
            break;
        case 2:
            if (listaOperadores.includes(caracter)) {
                //borrar el operador anterior reemplazar por el recien ingresado
                operador1 = caracter;
                document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value.slice(0,-1) + caracter;
            } else if (caracter == "=") {
                document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value;
            } else {
                document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value + caracter;
            }
            break;
        case 3:
            document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value + caracter; // actualiza el display
            //console.log(numero1, operador1);
            if (listaOperadores.includes(caracter)) {
                numero2 = valorActualDisplay.split(operador1)[1];
                resultado = operate(operador1, numero1, numero2);
                numero1 = resultado;
                operador1 = caracter;
                document.getElementById('calcDisplay').value = resultado + caracter;
            } else if (caracter == "=") {
                numero2 = valorActualDisplay.split(operador1)[1];
                resultado = operate(operador1, numero1, numero2);
                document.getElementById('calcDisplay').value = resultado;
            }
        default:
            break;
    }

    //document.getElementById('calcDisplay').value = document.getElementById('calcDisplay').value + caracter; // actualiza el display
    console.log(estadoDisplay);
    

}

