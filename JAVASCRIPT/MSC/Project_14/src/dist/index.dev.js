"use strict";

//import { renderTableRow } from "./prices.js"
//import "./styles.css"
var bitcoin = {
  title: "Bitcoin",
  price: 47311
};
var ethereum = {
  title: "Ethereum",
  price: 3407
};

function renderTableRow(details) {
  console.log(details);
  return "<tr>\n      <td>".concat(details.title, "</td>\n      <td>").concat(details.price, "</td>\n   </tr>");
}

var solana = {
  title: "Solana",
  price: 163
};
var tether = {
  title: "Tether",
  price: 1
}; //? Почему для вывода всех значений не потребовалось создавать переменную  details  в  которой есть все пары 
//?ключ значения и применять циклическую функцию?
//? достаточно было написать return и сослаться на ключ значения и JS каким то образом определил, 
//?что нужно взять все переменные какие есть в файле и их вывести?
//в файле index.js у нас 4 раза вызывается функция renderTableRow - поэтому цикл не понадобился 
//Вот он вызов: html += renderTableRow(bitcoin); html += renderTableRow(ethereum); html += renderTableRow(solana); html += renderTableRow(tether);

var html = "";
html += renderTableRow(bitcoin);
html += renderTableRow(ethereum);
html += renderTableRow(solana);
html += renderTableRow(tether);
var tbody = document.querySelector("#prices-table tbody");
tbody.insertAdjacentHTML("beforeend", html);