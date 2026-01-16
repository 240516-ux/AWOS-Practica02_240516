// Personalización de salidas a Consola
// ================================
const bg = "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `
background: ${bg};
color: white;
border-radius: 6px;
padding: 4px;
font-size: 1.0rem;
font-weight: bold;
`;

console.log("%c1.- Ejercicio 01: Declaración de Variables", style_console);

// 1. VAR
// ================================
var miNombre = "Alan";
var misApellidos;

console.warn("-- Declaración de Variables utilizando VAR --");

console.log("El valor de la variable miNombre es =", miNombre);
console.log("El valor de la variable misApellidos es =", misApellidos);

// undefined: variable no inicializada
misApellidos = "Cruz Baltazar";
console.log("El valor de la variable misApellidos es =", misApellidos);

// actualización de variable
miNombre = "Alan Alejandro";
console.log("Hola,", miNombre, misApellidos);

// 2. CONST
// ================================
console.warn("-- Declaración de Variables utilizando CONST --");

const miMatricula = "240516";
console.log("El valor actual de la constante miMatricula es:", miMatricula);

// 3. LET
// ================================
console.warn("-- Declaración de Variables utilizando LET --");

let miFechaNacimiento = new Date("2000-01-01");

function calcularEdad(fechaNacimiento) {
    const fechaHoy = new Date();
    const milisegundosPorDia = 24 * 60 * 60 * 1000;
    const diasVividos = (fechaHoy - fechaNacimiento) / milisegundosPorDia;
    let edad = diasVividos / 365.25;
    edad = Math.floor(edad);
    return edad;
}

console.log("El valor de la variable miFechaNacimiento es:", miFechaNacimiento);

let miEdad = calcularEdad(miFechaNacimiento);
console.log("Después de ejecutar la función calcularEdad(), puedo saber que tienes:", miEdad, "años.");

let esMayorDeEdad;
let esMenorDeEdad;

if (miEdad >= 18) {
    esMayorDeEdad = true;
    esMenorDeEdad = false;
} else {
    esMayorDeEdad = false;
    esMenorDeEdad = true;
}

console.log(
    "En base a tu edad puedo deducir que el valor de esMayorDeEdad es:",
    esMayorDeEdad,
    "y el valor de esMenorDeEdad es:",
    esMenorDeEdad
);

// Interpolación de datos
// ================================
console.warn("-- Interpolación de Datos --");

console.log(`Hola, ${miNombre} ${misApellidos}, sé que tienes ${miEdad} años; por lo que eres ${esMayorDeEdad ? "mayor" : "menor"} de edad.`);

