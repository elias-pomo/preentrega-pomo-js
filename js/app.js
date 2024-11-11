
/* ALGORITMO CON CONDICIONAL */
function mayorMenor() {

    let numero1 = parseInt(prompt("ingresa el primer numero: "));
    let numero2 = parseInt(prompt("ingresa el segundo numero: "));

    if (numero1 > numero2) {
        alert("el numero " + numero1 + " es mayor");
    }
    else if (numero2 > numero1) {
        alert("el numero " + numero2 + " es mayor");
    }
    else {
        alert("los numeros son iguales");
    }
}
/* ALGORITMO CON CONDICIONAL */

/* ------------------------- */

/* ALGORITMO CON CICLO */

function sueldo() {
    let n = parseInt(prompt("ingrese el valor de N:"));

    for (let i = 1; i <= n; i++) {
        let horasTrabajadas = parseInt(prompt("ingrese las horas trabajadas:"));
        if (horasTrabajadas <= 180) {
            sueldoTotal = horasTrabajadas * 560;
        } else {
            let horasExtras = horasTrabajadas - 180;
            let sueldoBase = 180 * 560;
            sueldoTotal = sueldoBase + (horasExtras * 600);
        }
        console.log("el sueldo total del empleado es: " + sueldoTotal);
        alert("el sueldo total del empleado es: " + sueldoTotal);
    }
}

/* ALGORITMO CON CICLO */

/* ------------------------- */

/* SIMULADOR INTERACTIVO */

function calcularPropina() {
    const total = parseFloat(document.getElementById("totalCuenta").value);
    const porcentaje = parseFloat(document.getElementById("porcentajePropina").value);
    propina = (total * (porcentaje / 100)).toFixed(2);
    document.getElementById("resultado").innerText = `Propina: $${propina}`;
}

