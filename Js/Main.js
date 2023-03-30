// 1-Realizar programa donde el usuario introduce 2 números y el ordenador responde sacando por pantalla la resta de ambos números y también su multiplicación.

// 2-El usuario ingresa nombre y apellido, debemos verificar si los datos ingresados contienen la letra ('a' y 'm'). Mostrar x consola la respuesta (si contiene o no)

// 3-Crear una variable y asignarle el sig. valor : (' Pablito-clavo-un-clavito')

// investigar a través de que método podemos quitar los guiones y reemplazar por espacios.

//Ejercicio 1
let num1 = parseInt(prompt("Ingrese primer número"));
let num2 = parseInt(prompt("Ingrese segundo número"));

let ResultadoResta = num1 - num2;
let ResultadoMultiplicacion = num1 * num2;
document.write(`<h2>El primer numero es ${num1}, el segundo numero es ${num2}.<br></h2>`);
document.write(`<h3>La resta de los numeros ingresado es ${ResultadoResta}</h3>.`);
document.write(`<h3>Multiplicación de los numeros ingresado es ${ResultadoMultiplicacion}.<br></h3>`);

//Ejercicio 2
let apellidoYnombre = prompt(`Ingrese tu nombres y apellido `);
document.write(`<br><br>el nombre y apellido es ${apellidoYnombre} `);
if(apellidoYnombre.includes(`a`) && apellidoYnombre.includes(`m`)){
    console.log(`El nombres y apellido posee letra a y m `);
    document.write(`<br>El nombres y apellido posee letra a y m `)
} else{
    console.log(`El nombres NO posee letra a y m`);
    document.write(`<br>El nombres NO posee letra a y m`)
}
// console.log(`el apellido posee letra a o m `, apellido.includes(`a`) || apellido.includes(`m`));
// console.log(`el nombre posee letra a o m `, nombre.includes(`a`) || nombre.includes(`m`));

//Ejercicio 3 
let pablitoGuiones = ('<br><br>Pablito-clavo-un-clavito');
let pablitoEspcaio = pablitoGuiones.replace(/-/g,' ');
document.write(pablitoEspcaio);
