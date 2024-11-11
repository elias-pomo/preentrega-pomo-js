/*let IngresarNumero = parseInt(prompt("ingresar numnero"));



for(let i = 0; i < 10; i++)
{
    let Resultado = IngresarNumero * i;
    alert(IngresarNumero + "x" + i + "=" + Resultado);
}
*/
/*
for(let i=1;i<=20;i++)
{
    let ingresarnombre = prompt("ingresar nombre");
    alert("turno N°" + i + "nombre: " + ingresarnombre)
}*/

/*for(let i = 0; i < 100; i++)
{
    if(i % 3 ===0 && i % 5 === 0)
    {
        console.log("fizzbuzz");
    }
    else if(1 % 3 === 0)
    {
        console.log("fizz");
    }
    else if(i % 5 === 0)
    {
        console.log("buzz");
    }
}*/



function usuario() {
    debugger
    console.log('Entramos');
    let nombreUsuario = prompt('nombreUsuario')
    alert('el nombre de usuario es: ' + nombreUsuario);
}

usuario();

// Proyecto Coderhouse de Jesus Janeiro **Juego de Piedra papel o tijera**.

// Se define la funcion juegoUsuario que recibe como parametro la eleccion del usuario y se usa un switch para determinar que eleccion hizo el usuario por medio de alertas

const juegoUsuario = (eleccionUsuario) => {
    switch (eleccionUsuario) {
        case "papel":
            alert("Elegiste Papel");
            return "papel";
        case "piedra":
            alert("Elegiste Piedra");
            return "piedra";
        case "tijera":
            alert("Elegiste Tijera");
            return "tijera";
        default:
            alert("Elección no válida, intenta de nuevo");
            return null;
    }
};

// Se define la funcion juegoMaquina que recibe como parametro la eleccion de la maquina y se usa un switch para determinar que eleccion hizo la maquina por medio de alertas
const juegoMaquina = (eleccionMaquina) => {
    switch (eleccionMaquina) {
        case 0:
            alert("La máquina eligió Piedra");
            return "piedra";
        case 1:
            alert("La máquina eligió Papel");
            return "papel";
        case 2:
            alert("La máquina eligió Tijera");
            return "tijera";
    }
};

// Se define la funcion jugar que llama a las funciones juegoUsuario y juegoMaquina y compara las elecciones de ambos para determinar el ganador.
const jugar = () => {
    const eleccionUsuario = prompt("Elige: Piedra, Papel o Tijera").toLowerCase();
    const usuario = juegoUsuario(eleccionUsuario);
    if (!usuario) {
        return;
    }

    const eleccionMaquina = Math.floor(Math.random() * 3);
    const maquina = juegoMaquina(eleccionMaquina);

    if (usuario === maquina) {
        alert("Empate");
        return;
    }

    switch (usuario) {
        case "piedra":
            if (maquina === "tijera") {
                alert("Ganaste");
            } else {
                alert("Perdiste");
            }
            break;
        case "papel":
            if (maquina === "piedra") {
                alert("Ganaste");
            } else {
                alert("Perdiste");
            }
            break;
        case "tijera":
            if (maquina === "papel") {
                alert("Ganaste");
            } else {
                alert("Perdiste");
            }
            break;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const $recargar = document.querySelector(".recargar-btn");

    $recargar.addEventListener("click", () => {
        jugar();
    });
}); 

/* let numero = parseInt(prompt("Ingresa un número: "));

if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}


for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
}


// Simulador de cálculo de interés
let monto = parseFloat(prompt("Ingresa el monto inicial: "));
let tasaInteres = parseFloat(prompt("Ingresa la tasa de interés anual (%): "));
let años = parseInt(prompt("Ingresa la cantidad de años: "));

for (let i = 1; i <= años; i++) {
    monto += monto * (tasaInteres / 100);
    console.log("Año " + i + ": " + monto.toFixed(2));
}

console.log("Monto final después de " + años + " años: " + monto.toFixed(2)); */
let inicio = parseInt(prompt("Ingresa el inicio del rango: "));
let fin = parseInt(prompt("Ingresa el fin del rango: "));

console.log(`Números primos entre ${inicio} y ${fin}:`);

for (let numero = inicio; numero <= fin; numero++) {
    let esPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }


    if (esPrimo && numero > 1) {
        console.log(numero);
    }
}