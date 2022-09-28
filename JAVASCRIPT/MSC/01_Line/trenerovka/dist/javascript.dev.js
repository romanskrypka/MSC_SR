"use strict"; //обозначает, что мы пишем на стандарте js6.

var x = 5;
var y = 10; //function sum(x, y) {
//  return x + y, console.log(x + y);
//}

function sum(x, y) {
  return x + y;
}

var z = sum(x, y);

function out2() {
  var p;
  p = document.getElementById('out2');
  p.innerHTML = z;
}

function out3() {
  var p;
  p = document.getElementById('out3');
  p.innerHTML = z;
}

sum(2, 5);
var aa = 15;

function out4() {
  var p;
  p = document.getElementById('out4');
  p.innerHTML = aa;
}

function out() {
  out2();
  out4();
}

console.log("строка".length); //Длина строки хранится в свойстве .length

var text = "JavaScript";
console.log(text.length); //Длина строки хранится в свойстве .length

console.log(text.toLowerCase()); //Метод .toLowerCase() конвертирует все буквы в строчные

console.log(text.toUpperCase()); //Метод .toUpperCase() конвертирует все буквы в заглавные

function getCharCount(str) {
  return str.length;
}

function shoutMyName(name) {
  return name.toUpperCase();
}

function lowKey(name) {
  return name.toLowerCase();
}

console.log(text[0]);
console.log(text[text.length - 2]);

function getFirstChar(name) {
  return name[0];
}

function getLastChar(name) {
  return name[name.lenght - 1];
}

console.log("GORE-TEX".substring(5)); //Подстрока получается с помощью метода .substring()

console.log("Helly Hansen".substring(0, 5)); //У метода подстроки два параметра – начальный и конечный индексы

console.log("The North Face".substring(4, 9)); //Начальный символ включается в подстроку и является обязательным
//Конечный символ не включается в подстроку и является опциональным

function skipFirstChar_1(text1) {
  return text.substring(1, 3);
}

function skipFirstChar_2(text2) {
  return text.substring(1);
}

var first = "Gleb"; //Действие оператора + зависит от типа используемых с ним данных

var second = "Kostin"; //

var name = first + " " + second; //Помимо сложения чисел + используется для объединения строк

console.log(first, second); //Когда значение добавляется к уже существующему можно использовать оператор +=

console.log(name); //+= также может использоваться как с числами, так и со строками

function dateConcat(day, month) {
  return day + month;
}

function getExcerpt(text) {
  return text.substring(0, 10);
}

var multiline = "\u042D\u0442\u043E \u043E\u0434\u043D\u0430 \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u0430\u044F \n\u0441\u0442\u0440\u043E\u043A\u0430 \u0434\u043B\u0438\u043D\u043E\u0439 \u0432 \n".concat(1 + 2, " \u0441\u0442\u0440\u043E\u0447\u043A\u0438");
console.log(multiline);
var language = "JavaScript";
console.log("\u042F \u0443\u0447\u0443 ".concat(language)); //!Шаблонные строки создаются с помощью `обратных кавычек`
//Шаблонные строки могут занимать несколько строчек
//!В шаблонных строках возможна интерполяция ${переменных}

function sayHello(name) {
  return "\u041F\u0440\u0438\u0432\u0435\u0442 ".concat(name);
}

function getFullName(first, last) {
  return "".concat(first, " ").concat(last);
}

function spaceOdysseyTagline() {
  return "An epic drama\n  of adventure\n  and exploration";
}

function renderTableRow(label, value) {
  return "<tr>\n  <td>".concat(label, "</td> \n  <td>").concat(value, "</td> \n  </tr>");
}

var word = "namer";

function getCapitalized(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

console.log(getCapitalized(word)); //!ЦИФРЫ

var solo = 322;
solo.toString(); //Числа конвертируются в строки вызовом метода .toString()

console.log(solo * 2);
console.log("скр" * 3); //NaN появляется при числовых операциях с нечисловыми типами

var angel = '777';
Number.parseInt(angel, 10); //Number.parseInt(string, radix). Первым параметром выступает сама строка, которую нужно перевести в числовое значение. Вторым и необязательным параметром идет формат отображения числа – для обычной десятичной системы это число 10, для двоичной – 2.

console.log(angel * 2);
var a = 10;
var b = "20";
console.log(a + b);
Number.parseInt("123abc", 10);
console.log(Number.parseInt("123abc", 10));
Number.parseInt("4 сыра", 10);
console.log(Number.parseInt("4 сыра", 10));