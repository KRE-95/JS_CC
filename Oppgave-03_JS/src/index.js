import "./styles.css";

// TODO: Sett startverdien for de ulike tellerene - deafaulte
let wordCounter = 0;
let positionCounter = 0;
let wrongCounter = 0;

// TODO: Lag en liste med ulike ord
const words = ["cupcakes", "weekends", "is", "diabetes type 2"];

// TODO: Hent ut HTML #id og knappen
const word = document.getElementById("word");
const wrongs = document.getElementById("wrongs");
const letter = document.getElementById("letter");
const button = document.querySelector("button"); // ikke lagret som id

// lager HTML for ord som skal skrives
const setWord = () => {
  // TODO: Skriv ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
  word.innerHTML = words[wordCounter] || "ikke flere ord igjen";
};

const changeWord = () => {
  // TODO: Nullstill posisjonstelleren
  positionCounter = 0;
  // TODO: Oppdater telleren vi bruker for å velge ut ord
  wordCounter++;
  setWord();
};

// TODO: Sjekk vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkPosition = (word, position, letter) => {
  return word[position] === letter; // ===
};

// TODO: Sjekk om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordIsCorrect = (word, position) => {
  return position === word.length;
};

const handleKeyUp = ({ key }) => {
  // TODO: Hent ut ordet vi skal skrive
  const word = words[wordCounter];
  // TODO: Bruk checkPosition() til å sjekke om vi har skrevet rett bokstav
  if (checkPosition(word, positionCounter, key)) {
    // TODO: Øk posisjonstelleren
    positionCounter++;
    // TODO: Bruk wordIsCorrect() til å sjekke om vi er ferdig med ordet
    if (wordIsCorrect(word, positionCounter)) {
      // TODO: Trigg funksjonen som bytter ord
      changeWord();
    }
  } else {
    // TODO: Oppdater telleren for "feil"
    wrongCounter();
  }
  updateUI(key); // oppdaterer interfacet for n-feil og bokstav som blir gjettet på
};

const updateUI = (key) => {
  // TODO: Sjekk om det er flere ord igjen
  if (words[wordCounter]) {
    // TODO: Oppdater HTML for:
    // - antall feil
    wrongs.innerHTML = wrongCounter;
    // - bokstaven vi har skrevet
    letter.innerHTML = key;
    // - stylingen på ordet basert på hvilken posisjon vi er på (hvilken bokstav vi skal skrive)
    // mye_hjelp.js :
    word.innerHTML = `<span class="green">${words[wordCounter].slice(
      0,
      positionCounter
    )}
    </span>${words[wordCounter].slice(positionCounter)}`;
  }
};

// TODO: Lytt til keyup på window
window.addEventListener("keyup", handleKeyUp);
// TODO: Lytt til klikk på knappen
button.addEventListener("click", () => {
  // TODO: Disable knappen etter at vi har trykket på den. Tips: Bruk .disabled = true
  button.disabled = true;
  // TODO: Sett første ord
  setWord();
});
