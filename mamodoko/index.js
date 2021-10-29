function menele() {
  hakaba();
  hakafa();
  gakala();
  hafata();
}
//
function hakaba() {
  let lu = document.querySelectorAll(".cardface");
  lu.forEach(
      function(he){he.addEventListener("click",hokobo)}
    );
}
//
function hakafa() {
  let lu = document.querySelectorAll(".cardback");
  lu.forEach(
      function(he){he.addEventListener("click",hokofo)}
    );
}
//
function gakala() {
  let lu = document.querySelectorAll("button");
  lu.forEach(
      function(he){he.addEventListener("click",gokolo)}
    );
}
//
function hafata() {
  let lu = document.querySelectorAll("input[type='range']");
  lu.forEach(
      function(he){he.addEventListener("input",hofoto)}
    );
}
//
function hokobo(ve) {
  let he = ve.currentTarget;
  let pa = he.parentNode;
  pa.querySelector(".cardface").style.display = "none";
  pa.querySelector(".cardback").style.display = "block";
  pa.querySelector(".pene").style.display = "none";
  pa.querySelector(".nepe").style.visibility = "visible";
  //pa.querySelector(".nepe").style.display = "block";
}
//
function hokofo(ve) {
  let he = ve.currentTarget;
  let pa = he.parentNode;
  pa.querySelector(".cardface").style.display = "block";
  pa.querySelector(".cardback").style.display = "none";
  pa.querySelector(".pene").style.display = "block";
  pa.querySelector(".nepe").style.visibility = "hidden";
  //pa.querySelector(".nepe").style.display = "none";
}
//
function gokolo(ve) {
  let he = ve.currentTarget;
  let deck = document.querySelector(".deck");
  //
  let cards = document.querySelectorAll(".card");
  let lecards = cards.length;
  while(lecards>2) {
    cards = document.querySelectorAll(".card");
    let necard = cards[1];
    necard.remove();
    lecards = cards.length;
  }
  //
  cards = [];
  //
  let rage = document.querySelectorAll("input[type='range']");
  for(let ragehe of rage) {
    //
    let rageheka = ragehe.classList[0];
    let rageheva = ragehe.value;
    //
    if(rageheva != 0) {
      //
      for(let ne=0;ne<rageheva;ne++) {
        //
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add(rageheka);
        //
        let cardback = document.createElement("div");
        cardback.classList.add("cardback");
        cardback.addEventListener("click",hokofo);
        card.append(cardback);
        //
        let cardface = document.createElement("div");
        cardface.classList.add("cardface");
        cardface.style.display = "none";
        cardface.addEventListener("click",hokobo);
        card.append(cardface);
        //
        let nepe = document.createElement("div");
        nepe.classList.add("nepe");
        card.append(nepe);
        //
        let pene = document.createElement("div");
        pene.classList.add("pene");
        pene.style.display = "none";
        card.append(pene);
        //
        cards.push(card);
      }
      //
    }
    //
  }
  //
  cards.sort(() => (Math.random() > .5) ? 1 : -1);
  //
  for(let card of cards) {
    deck.appendChild(card);
  }
  //
}
//
function hofoto(ve) {
  let he = ve.currentTarget;
  let heva = he.value;
  heva = ("0"+heva).slice(-2);
  let pa = he.parentNode;
  pa.querySelector(".ke").innerHTML = heva;
}
//
document.addEventListener("DOMContentLoaded",menele);
