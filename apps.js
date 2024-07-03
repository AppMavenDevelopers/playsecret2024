const diff = 20;
const minRange = 1;
const maxRange = 100;
let secretNumber = 0;
let attempts = 0;
const maxAttempts = 5;
let pair = {};
let listNumer = [];

// funcion para generar un aleatorio en un rango dado

function getRandomPairWithDifference(diff, minRange, maxRange) {
  //generar el valor de min dentro del rango permitido
  const min =
    Math.floor(Math.random() * (maxRange - minRange - diff + 1)) + minRange;
  const max = min + diff;

  return { min, max };
}

// Desencadena una acción
function verifyAttempt() {
  attempts++;
  const userNumber = parseInt(document.getElementById("numberUser").value, 10);
  if (userNumber === secretNumber) {
    const message = attempts === 1 ? "" : "s";
    displayMessage(
      `p`,
      `¡Acertaste el número ${secretNumber} en ${attempts} intento${message}!`
    );
    toggleButton("restart", true);
    toggleButton("newStart", false);
    toggleButton("numberUser", false);
  } else {
    const hint = userNumber > secretNumber ? "menor" : "mayor";
    displayMessage(
      `p`,
      `¡El número secreto es ${hint} que ${userNumber}. Intentos: ${
        maxAttempts - attempts
      }, [${pair.min}-${pair.max}]!`
    );
    clearInput();
  }

  if (attempts === maxAttempts) {
    toggleButton("newStart", false);
    toggleButton("restart", true);
    toggleButton("numberUser", false);
    displayMessage(`p`, `¡El número secreto era ${secretNumber}!`);
  }
}

// Recibe el elemento y el texto a asignar
function displayMessage(element, text) {
  document.querySelector(element).innerHTML = text;
}

// Limpiar caja
function clearInput() {
  document.getElementById("numberUser").value = "";
}

// Activar/desactivar botón
function toggleButton(elementId, enable) {
  const button = document.getElementById(elementId);
  button.disabled = !enable;
}

function startNewGame() {
  clearInput();
  setInitialConditions();
  toggleButton("restart", false);
  toggleButton("newStart", true);
  toggleButton("numberUser", true);
}

// Número aleatorio
function generateRandomNumber() {
  do {
    numerGenerated =
      Math.floor(Math.random() * (pair.max - pair.min + 1)) + pair.min;
  } while (listNumer.includes(numerGenerated));

  //Si el numero generado esta incluido en la lista
  listNumer.push(numerGenerated);
  console.log(numerGenerated);
  console.log(listNumer);
  return numerGenerated;
}

function setInitialConditions() {
  pair = getRandomPairWithDifference(diff, minRange, maxRange);
  secretNumber = generateRandomNumber();
  displayMessage("p", `Indica un número del [${pair.min}-${pair.max}]`);
  displayMessage("h1", "JG GAME");
  attempts = 0;
}

// Inicializar condiciones
setInitialConditions();
