import "./styles.css";

// lag event listner og en funksjon som fjerner element fra id  når bruk av knappen. 'remove'
// oppgave 1, ettersom dette ikke er variabel som skal ikke bli gjenbrukt, skriver i const ettersom det er fast handling

// henter id for å fjerne
const fjernTekstenOver = document.getElementById("remove");
// henter id for tilhørende knapp
const fjernBtn = document.getElementById("remove-btn");

// mest praktiske bruk av JS () =>:
// komme med funksjonnavn som innhenter metodene.

const fjernTekst = () => {
  fjernTekstenOver.innerHTML = null;
};

// for at hvert klikke trykk registert , for at fjerntext og btn skal funger
// må det senedes til en event/kunne like gjerne kalt, event.

fjernBtn.addEventListener("click", fjernTekst);

// Oppgave 2 - endre teksten
// innhenter id fra html - deklalerer
const endrePåTekst = document.getElementById("change");
const endreBtn = document.getElementById("change-btn");

// setter deklarte inn i en metode , når man trykker på knappen
const endreTekst = () => {
  endrePåTekst.innerHTML = "Teksten har blitt endret";
  //console.log(endrePåTekst);
};
// dette er  handling det gjør man trykker - aka. responsiv.
endreBtn.addEventListener("click", endreTekst);

// oppgave 3 - skrive ut teksten i inputboksen
const tekstInput = document.getElementById("input-text");
const inputForBoks = document.getElementById("input");

// endrer på settningen
const fjernDefaultTekst = () => {
  tekstInput.innerHTML = null;
};

// bruker eller gir kall
fjernDefaultTekst();

// ene inputForBoks ikke brukt, blir tatt med i under, ettersom HTML struktur vises ikke no

// ettersom man fjerner teksten, men det blir ikke oppdatert
const oppdaterHtml = (event) => {
  // lager var
  let ord = event.key; // tenk på keyboard
  tekstInput.innerHTML += ord;
};
inputForBoks.addEventListener("keyup", oppdaterHtml); //When the user releases the key

// Oppagave 4 -  går igjennom listen myList og skriver ut alle elementene
// siden dette er liste, må vi skrive som  liste elementer ellers er det tomt

const myList = [
  "JS oppgave 0",
  "JS oppgave 1",
  "JS oppgave x",
  "Moderne JS før 31.01.22"
];
//console.log(myList); 4 elementer i liste

// id
const ul = document.getElementById("ul");
const skriveBtn = document.getElementById("write-list");

// bruk li elementer med forEach loop - itterer i lista
const lagLi = () => {
  //myList.forEach((listElement) => (ul.innerHTML += '<li>${listElement}</li> '));
  myList.forEach((listElement) => (ul.innerHTML += `<li>${listElement}</li>`));
};
// funksjonen blir kalt etter event klikk av en bruker  Btn = knapp
skriveBtn.addEventListener("click", lagLi);

// oppgave 5
/*
 Kriterier:
 - gjerne fra en nedtrekkslist 
 - Lag lytterene og funksjonene
 - kan lage et et HTML element og tekst fra inputboksen
*/

const selektere = document.getElementById("select");
const tekst = document.getElementById("text");
const opprettholdeBtn = document.getElementById("create");
const plassholderForHTML = document.getElementById("placeholder");

// lage funksjon for HTML element og tekst fra inputboksen
const lageElement = () => {
  const html_Element = selektere.value;
  const tekst_Element = tekst.value;
  plassholderForHTML.innerHTML += `<${html_Element}>${tekst_Element}</${html_Element}>`;
};

opprettholdeBtn.addEventListener("click", lageElement);

// oppagev 6
/*
 Kriterier:
- funksjonen som gjør at du ved hvert klikk sletter
*/

const foreldreUlNode = document.getElementById("list");
//console.log(foreldreUlNode);
const fjerneLiBtn = document.getElementById("remove-li");

const fjerneLiFraForeldre = () => {
  const uno_El = foreldreUlNode.firstElementChild; // første = uno , første elementet
  if (uno_El) {
    foreldreUlNode.removeChild(uno_El);
  }
};
fjerneLiBtn.addEventListener("click", fjerneLiFraForeldre);

// opggave 7 - En sjekk
/*
 Kriterier:
-  Lag funksjonen som sjekker om ordet er maksimum 4 bokstaver langt
- if test - krysser 4 bokstaver gjør knappen -> else disabelt  eller knappen rød

*/

const navnPåInput = document.getElementById("name");
const orderBtn = document.getElementById("order");

const sjekk = () => {
  const navn = navnPåInput.value;
  if (navn && navn.length >= 4) {
    // mer enn
    orderBtn.disabled = true;
    orderBtn.style = "border: 1px solid red";
  } else {
    orderBtn.disabled = false;
    orderBtn.style = "border: 1px solid black";
  }
};
// lytter knapp
navnPåInput.addEventListener("keyup", sjekk);

// oppagave 8 - her ble  sjekket fra løsningsforslag , forstår ikke hvorfor ikke fungerer
/*
  const p0_Ul = document.querySelector("children"); // p0 = foreldre for ul
const p0_Ul_barn = p0_Ul.querySelectorAll("li");     <---  feilen ligger her
const fargeBtn = document.getElementById("color");

const giKant = () => {
  Array.from(p0_Ul_barn).forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
      li.style = "border: 2px solid pink; ";
    } else {
      li.style = "border: 2px solid green;";
    }
  });
};

fargeBtn.addEventListener('click', giKant);
 */
