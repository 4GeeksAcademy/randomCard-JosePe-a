import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["hearts", "diamonds", "spades", "clubs"];
const suitSymbols = { spades: '\u2660', hearts: '\u2665', diamonds: '\u2666', clubs: '\u2663' };
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const topLeft = document.querySelector(".top-left");
const bottomRight = document.querySelector(".bottom-right");
const center = document.querySelector(".center");
const cardFront = document.querySelector(".card");

const button = document.getElementById("draw-card");

function getRandomCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    
    topLeft.textContent = rank + suitSymbols[suit];
    center.textContent = suitSymbols[suit];
    bottomRight.textContent = rank + suitSymbols[suit];
    
    const color = (suit === "hearts" || suit === "diamonds") ? "red" : "black";
    topLeft.style.color = color;
    center.style.color = color;
    bottomRight.style.color = color;
}

button.addEventListener("click", getRandomCard);

// Initial card draw
getRandomCard();    


