import "./styles.css";

/*
Kriterie: 

Oppgaven er å finne det lengste ordet i en statisk tekst.

I denne oppgaven får du øvd på:

- bruk av for-løkke (eller forEach) x
- bruk av array x
- bruk av conditionals (if / else) x

*/

// lage en const tekst ha string av info - dummy
const dummyTekst =
  "Cupcake ipsum dolor sit amet icing lollipop biscuit candy. Icing pastry I love lollipop croissant jelly-o. I love lollipop I love marshmallow brownie carrot cake toffee. I love croissant cheesecake candy toffee chocolate cake candy bonbon. Sweet danish cake cotton candy I love. Dessert sesame snaps caramels danish marzipan. ";

// gi noe funsjonaliteter f.eks. split eller itterere ved hjelp av foreach løkke
// etter kritere må vi finne det lengste ordet og ikke teksten.
const finnLengsteOrd = () => {
  // vi må dele opp teksten i mindre ord men i en liste. slikt vi kan indeksere.
  const tekstSomArray = dummyTekst.split(" "); // detter er for hver mellomrom i teksten.

  // sammenliigne de splittet ord med hverandre ved hjelp av let aka var.
  let finnLengsteOrd = tekstSomArray[0]; // ser etter lengste ord og starte fra indeks null slikt har noe å sammeneligne med ,samt som den "arver" egenskapene .

  // men siden vi har instansiert for at første ordet er lengst, (som i noen tilfeller ikke være) dermed må vi innføre foreach loop
  // pluss det må oppdateres. for hver indekserte.
  tekstSomArray.forEach((ord) => {
    // itterer mellom hvert ord i tekseten deretter sammenligner og gjør vurdering.
    if (ord.length > finnLengsteOrd.length) {
      finnLengsteOrd = ord; // det retunerer en verdi
    }
  });
  return finnLengsteOrd; // marshmallow
};

//console.log(dummyTekst);

console.log(finnLengsteOrd());
