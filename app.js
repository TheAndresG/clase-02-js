//Es navidad y Andres hizo una fiesta para celebrarlo
//invito a todos sus amigos.
let arrayDeAmigos = ["Juan", "Ramiro", "Mateo", "Ale", "Matias", "Agustin"];
//`~~~~~Variable que contiene un array~~~~~

console.log(arrayDeAmigos);

//a Ale le dio sueño y se fue.
arrayDeAmigos.splice(3, 1);

//~~~~~Splice, se coloco en la posicion 3, y elimino 1 elemento empezando desde esa posicion.~~~~~

console.log("Ale se fue de la fiesta:", arrayDeAmigos);

//Cuando estaban jugando a las cartas, Agustin se dio cuenta que faltaba comida
console.log(arrayDeAmigos.pop(), "se fue de la casa");
//~~~~Pop elimina y retorna el ultimo elemento del array.~~~~~
console.log("Ahora solo estan:", arrayDeAmigos);

//Al perder la partida de truco, con tal de no pagar, Juan salio a fumar y no volviio
console.log(arrayDeAmigos.shift(), "salio a fumar");
//~~~~shift elimina y retorna el primer elemento del array.~~~~~
console.log("En la sala estan:", arrayDeAmigos);

//Ale volvio a la fiesta y se sento en el lugar de Juan.
console.log(
  "Ahora volvieron a ser ",
  arrayDeAmigos.unshift("Ale"),
  arrayDeAmigos
);

//~~~~shift agrega un primer elemento al array, y retorna la cantidad de elementos actual del mismo.~~~~~

//Agustin volvio con la comida!
arrayDeAmigos.push("Agustin");
//~~~~push agrega un elemento al final del array, y retorna la cantidad de elementos actual del mismo.~~~~~
console.log("ahora hay comida para todos", arrayDeAmigos);

//Hey! No me estan contando.
arrayDeAmigos.push("Andres");
console.log("Andres entro al Array! ", arrayDeAmigos);

//No quiero estar Ultimo ! >:/ Dame el lugar de Mateo.
let mateoIndex = arrayDeAmigos.findIndex((e) => e == "Mateo");
// findIndex encuentra la ubicacion (index) de un elemento.
let mateo = "Mateo";
arrayDeAmigos[mateoIndex] = "Andres";
arrayDeAmigos[arrayDeAmigos.length - 1] = mateo;

console.log("Andres cambia de lugar con Mateo", arrayDeAmigos);
//Ahora si!

//Juguemos a las cartas!
//repartamos 3 para cada uno.

let arrayCartas = [
  {
    jugador: "Agustin",
    cartas: [1, 2, 3],
  },
  {
    jugador: "Ramiro",
    cartas: [7, 5, 3],
  },
  {
    jugador: "Andres",
    cartas: [8, 4, 3],
  },
  {
    jugador: "Ale",
    cartas: [6, 2, 7],
  },
  {
    jugador: "Matias",
    cartas: [1, 9, 1],
  },
  {
    jugador: "Mateo",
    cartas: [1, 9, 1],
  },
];

//Sumemos sus cartas y mostremos el resultado
arrayCartas.map((e) => {
  e.total = e.cartas.reduce((a, b) => a + b, 0);
});

//~~~~~~~Map es el metodo de array que sirve para evitar el uso de fors/whiles
//de forma resumida, se le puede aplicar algo a cada elemento de forma individual.~~~~
//~~~~~~~~~~reduce agarra 2 elementos consecutivos y le realiza una accion, en este caso sumar ambos~~~~

console.log(arrayCartas);

//Ahora deberiamos ver quien es el ganador!

let ganador = "";
let aux = 0;
let empate = false;

//con for
for (let i = 0; arrayCartas.length > i; i++) {
  if (arrayCartas[i].total == aux) {
    ganador = `${ganador}, ${arrayCartas[i].jugador}`;
    empate = true;
  } else if (arrayCartas[i].total > aux) {
    aux = arrayCartas[i].total;
    ganador = arrayCartas[i].jugador;
    empate = false;
  }
}

//con .map
// arrayCartas.map((e) => {
//   if (e.total == aux) {
//     ganador = `${ganador}, ${e.jugador}`;
//     empate = true;
//   } else if (e.total > aux) {
//     aux = e.total;
//     ganador = e.jugador;
//     empate = false;
//   }
// });

empate
  ? console.log("Los ganadores son: ", ganador)
  : console.log("El ganador fue: ", ganador);

//Vamos a ver que cartas tenia Matias

let jugador = arrayCartas.find((e) => e.jugador == "Matias");
console.log("Las cartas de Matias eran", jugador.cartas);
//~~~~~~Find encuentra el primer elemeneto que cumpla una condicion, y lo retorna~~~~~~~

//para la siguiente ronda eliminemos a todos los que tengan menos de 10 puntos.
arrayFiltre = arrayCartas.filter((jugadores) => jugadores.total > 10);

//Filter retorna un NUEVO array, dejando solamente los elementos que cumplan la condicion.

console.log(arrayFiltre);

//////////////////////////////////////////////////////////////////////

// Otros metodos de array interesantes:
//concat: Concatena 2 arrays
//Every: devuelve true si todos los elementos cumplen una condicion.// Some: Lo mismo pero si un elemento la cumple
// includes: retorna true, si se incluye X elemento en el array.
//Join: une todos los elementos de un array en un string. Recibe un parametro que va a ser el element de union
//ej: .join("-") => 1-2-3-4 .join(".") => 1.2.3.4
//reverse: Invierte el array

//from. Crea un array nuevo desde un objeto iterable.
//ej
// let objeto = "Hola";
// let arraynuevo = Array.from(objeto);
// ====> ["H","o","l","a"]

// nota:
// para copiar arrays, se realiza con "spread operator"=>

// let array1 = [1,2]
// XXXXX let array2 = array2  XXXXXX
// let array2 = [...array1]
