//import { renderTableRow } from "./prices.js"
//import "./styles.css"

const bitcoin = { title: "Bitcoin", price: 47311 };
const ethereum = { title: "Ethereum", price: 3407 };

function renderTableRow(details) {
   console.log(details);
   return `<tr>
      <td>${details.title}</td>
      <td>${details.price}</td>
   </tr>`;
}

const solana = { title: "Solana", price: 163 };
const tether = { title: "Tether", price: 1 };


//? Почему для вывода всех значений не потребовалось создавать переменную  details  в  которой есть все пары 
//?ключ значения и применять циклическую функцию?
//? достаточно было написать return и сослаться на ключ значения и JS каким то образом определил, 
//?что нужно взять все переменные какие есть в файле и их вывести?
//в файле index.js у нас 4 раза вызывается функция renderTableRow - поэтому цикл не понадобился 
//Вот он вызов: html += renderTableRow(bitcoin); html += renderTableRow(ethereum); html += renderTableRow(solana); html += renderTableRow(tether);

let html = ""
html += renderTableRow(bitcoin);
html += renderTableRow(ethereum);
html += renderTableRow(solana);
html += renderTableRow(tether);

const tbody = document.querySelector("#prices-table tbody");
tbody.insertAdjacentHTML("beforeend", html);
