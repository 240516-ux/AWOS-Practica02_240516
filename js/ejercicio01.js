// 1. Declaración de variables utilizando el prefijo VAR

var miNombre = "Alan";
var misApellidos;

// Utilizamos la función console.log para imprimir el valor actual de la variable
console.log("El valor de la variable miNombre es =", miNombre);
console.log("El valor de la variable misApellidos es =", misApellidos);

// Esto arroja un undefined dado que la variable no ha sido inicializada,
// es decir, no se le ha asignado un valor que almacenar

misApellidos = "Cruz Baltazar";

// En este momento la variable ya tiene un valor almacenado,
// por lo que al imprimirlo deberá mostrar dicho dato
console.log("El valor de la variable misApellidos es =", misApellidos);

// Para actualizar el valor de una variable previamente definida
// solo basta con igualar el nuevo valor
miNombre = "Alan";

console.log("Hola,", miNombre, misApellidos);
