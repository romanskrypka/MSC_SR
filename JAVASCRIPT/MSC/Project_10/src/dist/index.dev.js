"use strict";

var _age = require("./age.js");

var age = document.querySelector("#age");
var nextAge = document.querySelector("#next");
age.addEventListener("input", function () {
  nextAge.textContent = (0, _age.getNextAge)(age.value);
});