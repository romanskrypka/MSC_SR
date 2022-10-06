"use strict";

//import "./styles.css";
var currencies = ["Bitcoin", "Ethereum", "Tether", "Solana"];

function getDropdown(currencies) {
  console.log(currencies);
  var value = '<option value="">Выберите валюту</option>';
  currencies.forEach(function (currency) {
    value += "<option value=\"".concat(currency, "\">").concat(currency, "</option>");
  });
  return value; // Пишите код решения здесь
}

var html = getDropdown(currencies);
var select = document.querySelector("#currency");
select.innerHTML = html;