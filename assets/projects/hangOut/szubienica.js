const passwords = [
  "Bez pracy nie ma kolaczy",
  "Nie od razu Krakow zbudowano",
  "Apetyt rosnie w miare jedzenia",
  "Co dwie glowy to nie jedna",
  "Lepszy wrobel w garsci niz golab na dachu",
  "Trening czyni mistrza",
];

const letters = [
  "A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż",
];

let password = "";
let passwordMask = "";
let badStrikes = 0;
let lastPasswordIndex = -1;

const yes = new Audio("yes.wav");
const no = new Audio("no.wav");

function normalizePassword(value) {
  return value
    .toUpperCase()
    .replaceAll("Ą", "A")
    .replaceAll("Ć", "C")
    .replaceAll("Ę", "E")
    .replaceAll("Ł", "L")
    .replaceAll("Ń", "N")
    .replaceAll("Ó", "O")
    .replaceAll("Ś", "S")
    .replaceAll("Ź", "Z")
    .replaceAll("Ż", "Z");
}

function choosePasswordIndex() {
  if (passwords.length === 1) {
    return 0;
  }

  let nextIndex = Math.floor(Math.random() * passwords.length);
  while (nextIndex === lastPasswordIndex) {
    nextIndex = Math.floor(Math.random() * passwords.length);
  }

  return nextIndex;
}

function buildMask(value) {
  return value
    .split("")
    .map((char) => (char === " " ? " " : "-"))
    .join("");
}

function writePassword() {
  document.getElementById("board").textContent = passwordMask;
}

function renderAlphabet() {
  let content = "";

  letters.forEach((letter, index) => {
    content += `<button class="letter" type="button" onclick="check(${index})" id="let${index}">${letter}</button>`;
    if ((index + 1) % 7 === 0) {
      content += '<div class="letter-break"></div>';
    }
  });

  document.getElementById("alphabet").innerHTML = content;
}

function renderActions() {
  document.getElementById("hangman-actions").innerHTML = '<button class="reset" type="button" onclick="changePassword()">Zmień hasło</button>';
}

function start() {
  const index = choosePasswordIndex();
  lastPasswordIndex = index;
  password = normalizePassword(passwords[index]);
  passwordMask = buildMask(password);
  badStrikes = 0;

  document.getElementById("gallows").innerHTML = '<img src="img/s0.jpg" alt="Wisielec: 0 błędów">';
  renderAlphabet();
  renderActions();
  writePassword();
}

function setChar(value, position, char) {
  if (position > value.length - 1) {
    return value;
  }

  return value.slice(0, position) + char + value.slice(position + 1);
}

function markLetter(index, found) {
  const element = document.getElementById(`let${index}`);
  element.classList.add(found ? "letter--good" : "letter--bad");
  element.disabled = true;
  element.removeAttribute("onclick");
}

function finishGame(message) {
  document.getElementById("alphabet").innerHTML = message;
  renderActions();
}

function check(index) {
  let strike = false;

  for (let i = 0; i < password.length; i += 1) {
    if (password.charAt(i) === letters[index]) {
      passwordMask = setChar(passwordMask, i, letters[index]);
      strike = true;
    }
  }

  if (strike) {
    yes.currentTime = 0;
    yes.play();
    markLetter(index, true);
    writePassword();
  } else {
    no.currentTime = 0;
    no.play();
    markLetter(index, false);
    badStrikes += 1;
    document.getElementById("gallows").innerHTML = `<img src="img/s${badStrikes}.jpg" alt="Wisielec: ${badStrikes} błędów">`;
  }

  if (password === passwordMask) {
    finishGame(`Tak jest, podano prawidłowe hasło: ${password}`);
  }

  if (badStrikes >= 9) {
    finishGame(`Przegrana, prawidłowe hasło: ${password}`);
  }
}

function changePassword() {
  start();
}

window.onload = start;
