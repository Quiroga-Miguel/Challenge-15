// 1-Realizar programa donde el usuario introduce 2 números y el ordenador responde sacando por pantalla la resta de ambos números y también su multiplicación.

// 2-El usuario ingresa nombre y apellido, debemos verificar si los datos ingresados contienen la letra ('a' y 'm'). Mostrar x consola la respuesta (si contiene o no)

// 3-Crear una variable y asignarle el sig. valor : (' Pablito-clavo-un-clavito')

// investigar a través de que método podemos quitar los guiones y reemplazar por espacios.

let num1 = parseInt(prompt("Ingrese primer número"));
let num2 = parseInt(prompt("Ingrese segundo número"));

let ResultadoResta = num1 - num2;
let ResultadoMultiplicacion = num1 * num2;
document.write(`<h2>El primer numero es ${num1}, el segundo numero es ${num2}<br></h2>`);
document.write(`<h3> La resta de los numeros ingresado es ${ResultadoResta}<br></h3>`);
document.write(`<h3>Multiplicación de los numeros ingresado es ${ResultadoMultiplicacion} </h3> <br>`);
