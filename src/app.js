/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let valor = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let valorRandom = Math.floor(Math.random() * valor.length);
  let resultado = valor[valorRandom];
  document.querySelector("p").innerHTML = resultado;

  let pica = ["♦", "♥", "♠", "♣"];
  let picaRandom = Math.floor(Math.random() * pica.length);
  let resultado2 = pica[picaRandom];
  let arriba = document.querySelector("#pica");
  if (resultado2 == "♦" || resultado2 == "♥") {
    arriba.style.color = "red";
  }
  arriba.innerHTML = resultado2;
  let abajo = document.querySelector("#pica2");
  if (resultado2 == "♦" || resultado2 == "♥") {
    abajo.style.color = "red";
  }
  abajo.innerHTML = resultado2;

  console.log("Hello Rigo from the console!");
};
