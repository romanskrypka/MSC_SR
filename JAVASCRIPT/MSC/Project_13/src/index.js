
//import { renderTableRows } from "./prices.js"
//import "./styles.css"

const data = [
  ["Bitcoin", "47311"],
  ["Ethereum", "3407"],
  ["Solana", "163"],
  ["Tether", "1"]
]

/* Для каждого ряда, полученного в параметре rows, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 
*/

function renderTableRows(rows) {
   console.log(rows)
   let xxx = `<tr>
      <td>название криптовалюты здесь</td>
      <td>стоимость криптовалюты здесь</td>
   </tr>`;
   rows.forEach(function(row) {
      xxx +=`<tr>
         <td>${data [0+1][0]}</td>
         <td>${data [0+1][1]}</td>
      </tr>`;
   })//нужно создать массив row?
   return xxx;
   
   // Пишите код решения здесь
 }


 function getDropdown(currencies) {
   console.log(currencies);
   let value = '<option value="">Выберите валюту</option>';
   currencies.forEach(function(currency) {
      value += `<option value="${currency}">${currency}</option>`;
   })
   return value;// Пишите код решения здесь
}



const html = renderTableRows(data)

const tbody = document.querySelector("#prices-table tbody")
tbody.insertAdjacentHTML("beforeend", html)


