let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let signo = document.getElementById("signo");
let divisible = document.getElementById("divisible");
let mostrarResultado = document.getElementById("mostrarResultado");
let reset = document.getElementById("reset");

divisible.addEventListener("click", () => {
    let num1Value = parseInt(num1.value);
    let num2Value = parseInt(num2.value);
    calculadora(num1Value, num2Value);
});

reset.addEventListener("click", () => {
    resetear();
});

function calculadora(number1, number2) {
    let signoValue = signo.value; // Obtener el valor del signo

    if (signoValue === "+") {
        mostrarResultado.innerHTML = number1 + number2;
    } else if (signoValue === "-") {
        mostrarResultado.innerHTML = number1 - number2;
    } else if (signoValue === "*") {
        mostrarResultado.innerHTML = number1 * number2;
    } else if (signoValue === "/") {
        mostrarResultado.innerHTML = number1 / number2; // Cambio en la división
    } else {
        mostrarResultado.innerHTML = "Unknown value";
    }
}

function resetear() {
    num1.value = "";
    num2.value = "";
    signo.value = ""; // También restablecer el valor del signo
    mostrarResultado.innerHTML = "";
}