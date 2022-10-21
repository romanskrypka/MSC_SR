//import { getDropdown } from "./currencies.js"
//import "./styles.css"

/*

Используя стрелочный синтаксис, напишите функцию getDropdown.

Она должна возвращать HTML, который вставится как содержимое внутрь элемента <option></option>, находящегося в index.html.

Возвращаемый из getDropdown HTML-код должен:
1. Начинаться с <option value="">Выберите валюту</option>
2. Далее, для каждой криптовалюты в массиве currencies должен рендериться элемент <option>. 
Например, для "Ethereum" должно возвращаться <option value="ethereum">Ethereum</option>.

*/

const getDropdown = (currencies) => {
   console.log(currencies)
   let value = '<option value="">Выберите валюту</option>';
   currencies.forEach(currency => {
      value += `<option value="${currency}">${currency}</option>`;
   })
   return value;// Пишите код решения здесь
}

/*
const getDropdown = (currencies) => {
   console.log(currencies)
   let value = '<option value="">Выберите валюту</option>';
   currencies.forEach(function(currency) {
      value += `<option value="${currency}">${currency}</option>`;
   })
   return value;// Пишите код решения здесь
}
*/

const currencies = ["Bitcoin", "Ethereum", "Tether", "Solana"];

const html = getDropdown(currencies);

const select = document.querySelector("#currency");

select.innerHTML = html;