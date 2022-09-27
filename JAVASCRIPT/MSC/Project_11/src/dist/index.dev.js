"use strict";

var _measure = require("./measure.js");

var element1 = document.querySelector("#element1");
var element2 = document.querySelector("#element2");
var element1Value = getComputedStyle(element1).width;
var element2Value = getComputedStyle(element2).width;
console.log("Ширина первого элемента", (0, _measure.getElementWidth)(element1Value));
console.log("Ширина второго элемента", (0, _measure.getElementWidth)(element2Value));