// 1. Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion" con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// 3. Agrega a la lista "lenguagesDeProgramacion" los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

function AddPush(lista, elemento) {
  lista[lista.length] = elemento;
}

AddPush(lenguagesDeProgramacion, "Java");
AddPush(lenguagesDeProgramacion, "Ruby");
AddPush(lenguagesDeProgramacion, "GoLang");

console.log(lenguagesDeProgramacion);

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion".

function mostrarLenguajes(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}

mostrarLenguajes(lenguagesDeProgramacion);

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" en orden inverso.

function mostrarLenguajesInverso(lista) {
  for (let i = lista.length - 1; i >= 0; i--) {
    console.log(lista[i]);
  }
}

mostrarLenguajesInverso(lenguagesDeProgramacion);

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.

function calcularPromedio(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calcularPromedio(numeros));

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function mostrarMaxMin(lista) {
  let max = lista[0];
  let min = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > max) {
      max = lista[i];
    }
    if (lista[i] < min) {
      min = lista[i];
    }
  }

  console.log("Max:", max);
  console.log("Min:", min);
}

// Ejemplo de uso:
mostrarMaxMin(numeros); // Salida: Max: 10, Min: 0

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.

function sumarElementos(lista) {
  let suma = 0;
  for (let index = 0; index < lista.length; index++) {
    suma += lista[index];
  }
  return suma;
}

// Ejemplo de uso:
console.log(sumarElementos(numeros)); // Salida: 55

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarPosicion(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i;
    }
  }
  return -1;
}

// Ejemplo de uso:
console.log(encontrarPosicion(lenguagesDeProgramacion, "Python")); // Salida: 4
console.log(encontrarPosicion(lenguagesDeProgramacion, "Scala")); // Salida: -1

// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
  if (lista1.length !== lista2.length) {
    throw new Error("Las listas deben tener el mismo tamaño.");
  }

  let sumaLista = [];
  for (let i = 0; i < lista1.length; i++) {
    sumaLista[i] = lista1[i] + lista2[i];
  }

  return sumaLista;
}

// Ejemplo de uso:
let lista1 = [1, 2, 3];
let lista2 = [4, 5, 6];
console.log(sumarListas(lista1, lista2)); // Salida: [5, 7, 9]

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoLista(lista) {
  let cuadrado = [];
  for (let i = 0; i < lista.length; i++) {
    cuadrado[i] = lista[i] * lista[i];
  }
  return cuadrado;
}

// Ejemplo de uso:
console.log(cuadradoLista(numeros)); // Salida: [1, 4, 9, 16, 25]
