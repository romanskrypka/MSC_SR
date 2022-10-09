
//import { renderTableRows } from "./prices.js"
//import "./styles.css"

const data = [
  ["Bitcoin", "47311"],
  ["Ethereum", "3407"],
  ["Solana", "163"],
  ["Tether", "1"]
];

const data1 = [
   ["Bitcoin1", "47311"],
   ["Ethereum1", "3407"],
   ["Solana1", "163"],
   ["Tether1", "1"]
 ];

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
   console.log(rows)
   let xxx = `<tr>
      <td>название криптовалюты здесь</td>
      <td>стоимость криптовалюты здесь</td>
   </tr>`;
   rows.forEach(function(row) {
      console.log(row)
      xxx +=`<tr>
         <td>${row [0]}</td>
         <td>${row [1]}</td>
      </tr>`;
   })
   return xxx;
}

//?Пример из другого проекта
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
const html = renderTableRows(data);
const html1 = renderTableRows(data1);

const tbody = document.querySelector("#prices-table tbody");
tbody.insertAdjacentHTML("beforeend", html);

const tbody1 = document.querySelector("#prices-table tbody");
tbody1.insertAdjacentHTML("beforeend", html1);


