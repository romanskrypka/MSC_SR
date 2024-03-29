"use strict";

//import { renderTableRows } from "./prices.js"
//import "./styles.css"
var data = [["Bitcoin", "47311"], ["Ethereum", "3407"], ["Solana", "163"], ["Tether", "1"]];
var data1 = [["Bitcoin1", "47311"], ["Ethereum1", "3407"], ["Solana1", "163"], ["Tether1", "1"]];
/* Для каждого ряда, полученного в параметре rows, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 
*/
//? как функция rows узнала, что брать данные нужно из массива data?
//Мы передаем массив data в функцию в файле index.js. А rows при объявлении функции - это просто абстракция - условный х, 
//на место которого можно передать что угодно. При объявлении функции мы просто сообщаем ей, 
//когда пишем function renderDataRows(rows), что ей должен прийти в круглые скобки аргумент. 
//И она его ждет при вызове. Если ничего не передать - будет выброшена ошибка.

function renderTableRows(rows) {
  console.log(rows);
  var xxx = "<tr>\n      <td>\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B \u0437\u0434\u0435\u0441\u044C</td>\n      <td>\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B \u0437\u0434\u0435\u0441\u044C</td>\n   </tr>";
  rows.forEach(function (row) {
    console.log(row);
    xxx += "<tr>\n         <td>".concat(row[0], "</td>\n         <td>").concat(row[1], "</td>\n      </tr>");
  });
  return xxx;
} //?Пример из другого проекта

/*function getDropdown(currencies) {
   console.log(currencies);
   let value = '<option value="">Выберите валюту</option>';
   currencies.forEach(function(currency) {
      value += `<option value="${currency}">${currency}</option>`;
   })
   return value;// Пишите код решения здесь
}*/
//?Почему ниже отработали оба вывода в html?
//Потому, что наша колбэк функция function renderTableRows(rows) обрабатывает все поступающие ранее массивы data и data1
//А потом при объявлении html переменной мы указываем что она равна, этой самой колбэк функции


var html = renderTableRows(data);
var html1 = renderTableRows(data1);
var tbody = document.querySelector("#prices-table tbody");
tbody.insertAdjacentHTML("beforeend", html);
var tbody1 = document.querySelector("#prices-table tbody");
tbody1.insertAdjacentHTML("beforeend", html1);