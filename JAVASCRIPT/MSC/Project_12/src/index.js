
//import "./styles.css";

const currencies = ["Bitcoin", "Ethereum", "Tether", "Solana"];



function getDropdown(currencies) {
   console.log(currencies);
   let value = '<option value="">Выберите валюту</option>';
   currencies.forEach(function(currency) {
      value += `<option value="${currency}">${currency}</option>`;
   })
   return value;// Пишите код решения здесь
}



const html = getDropdown(currencies);

const select = document.querySelector("#currency");

select.innerHTML = html;
