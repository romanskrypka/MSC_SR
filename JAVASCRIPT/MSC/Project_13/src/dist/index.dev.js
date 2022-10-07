"use strict";

//import { renderTableRows } from "./prices.js"
//import "./styles.css"
var data = [["Bitcoin", "47311"], ["Ethereum", "3407"], ["Solana", "163"], ["Tether", "1"]];
/* Для каждого ряда, полученного в параметре rows, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 
*/

function renderTableRows(rows) {
  console.log(rows);
  var xxx = "<tr>\n      <td>\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B \u0437\u0434\u0435\u0441\u044C</td>\n      <td>\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B \u0437\u0434\u0435\u0441\u044C</td>\n   </tr>";
  rows.forEach(function (row) {
    xxx += "<tr>\n         <td>".concat(data[0 + 1][0], "</td>\n         <td>").concat(data[0 + 1][1], "</td>\n      </tr>");
  }); //нужно создать массив row?

  return xxx; // Пишите код решения здесь
}

function getDropdown(currencies) {
  console.log(currencies);
  var value = '<option value="">Выберите валюту</option>';
  currencies.forEach(function (currency) {
    value += "<option value=\"".concat(currency, "\">").concat(currency, "</option>");
  });
  return value; // Пишите код решения здесь
}

var html = renderTableRows(data);
var tbody = document.querySelector("#prices-table tbody");
tbody.insertAdjacentHTML("beforeend", html);