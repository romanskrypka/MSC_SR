"use strict";

var _helper = require("./helper.js");

var input = document.querySelector("#input");
var output = document.querySelector("#output");
input.addEventListener("input", function (event) {
  output.textContent = (0, _helper.getFirstTen)(event.currentTarget.value);
});