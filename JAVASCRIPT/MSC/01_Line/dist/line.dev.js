"use strict";

//функция запускающая другие функции на html странице. Встроена в параметры body. Параметр, body может запускать только одну функцию, и эта функция создана что-бы обойти это ограничение.
function out() {
  out2();
  out3();
  out4(); //   out5 ();
} //Простые функции


var x = 7;
var y = 9;

function sum(x, y) {
  return x + y;
}

var asum = sum(x, y);

function out2() {
  var p;
  p = document.getElementById('out2');
  p.innerHTML = asum;
} //Практика 2


function multiply(x, y) {
  return x * y;
}

var msum = multiply(x, y);

function out3() {
  var p;
  p = document.getElementById('out3');
  p.innerHTML = msum;
} //Строки
//! А. Добавляем html тег <p id="out4">Тестовый текст</p>.
//! Б. Создаём функцию dlinna
//!
//!
//!
//!
//!
//Не получилось

/*function dlinna () {
   var s;
   s = document.getElementById('out4');
   console.log(s.length);
}

//let text1 = dilma();
//console.log(text1.length);



function out4() {
   var p;
   p = document.getElementById('out5');
   p.innerHTML = dlinna ();
}*/


var text = "JavaScript";
console.log(text.length); //Длина строки хранится в свойстве .length

console.log(text.toLowerCase()); //Метод .toLowerCase() конвертирует все буквы в строчные

console.log(text.toUpperCase()); //Метод .toUpperCase() конвертирует все буквы в заглавные

var str = "Nikolaevich";

function getCharCount(str) {
  return str.length;
}

console.log(getCharCount(str)); //! Ура получилось выводить результат функции в консоль.

var lang = "JavaScript";
console.log(lang[0]);
console.log(lang[lang.length - 2]);
var Name = "Roman";

function shoutMyName(Name) {
  return Name.toUpperCase(); //Делает все буквы ЗАГЛАВНЫМИ в переменной
}

function lowKey(Name) {
  return Name.toLowerCase(); //Делает все буквы строчными в переменной
}

function getFirstChar(Name) {
  return Name[0]; //Показывает конкретный символ из переменной
}

console.log(shoutMyName(Name));
console.log(lowKey(Name));
console.log(getFirstChar(Name)); //Метод substring. Позволяет создать подстроку на основании строки. Например, "Arc" является подстрокой строки "Arcteryx".
//Сигнатура метода. str.substring(indexStart, indexEnd)
//Это значит, что при вызове метода substring() нужно передать ему два аргумента — для первого символа, включаемого в подстроку, 
//и последнего, не включаемого в нее.

var goreText = "Огонь любви";
var hellyHansen = "Зов природы";
var theNorthFace = "Эхо причастности";
console.log(goreText.substring(5)); // "TEX"

console.log(hellyHansen.substring(0, 5)); // "Helly"

console.log(theNorthFace.substring(4, 9)); // "North"

console.log("GORE-TEX".substring(5)); // "TEX"

console.log("Helly Hansen".substring(0, 5)); // "Helly"

console.log("The North Face".substring(4, 9)); // "North"
//Практика 8 
//?Напишите функцию skipFirstChar, чтобы она возвращала все символы кроме первого из строки в параметре text.

var text2 = "Коварство технологий";

function skipFirstChar(text2) {
  return text2.substring(1);
}

console.log(skipFirstChar(text2));

function out4() {
  var p;
  p = document.getElementById('out4');
  p.innerHTML = skipFirstChar(text2);
} //! Тут зафигачил вывод данных в HTML
//Оператор (+)


var first = "Gleb";
var second = "Kostin";
var names = first + " " + second; // "Gleb Kostin"

console.log(names);
console.log(1 + 9);
var namess = "Gleb";
namess += " Kostin"; // то же самое, что и name = name + " Kostin"

console.log(namess); //Практика 10

var day = 15;
var month = "july";

function dateConcat(day, month) {
  return day + " " + month;
}

console.log(dateConcat(day, month)); //Практика 11

var texted = "Космо-истории";

function getExcerpt(texted) {
  return texted.substring(0, 10) + "...";
}

console.log(getExcerpt(texted)); //Шаблонные строки

var multiline = "\u042D\u0442\u043E \u043E\u0434\u043D\u0430\n\u0448\u0430\u0431\u043B\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430\n\u0434\u043B\u0438\u043D\u043E\u0439 \u0432 ".concat(1 + 2, " \u0441\u0442\u0440\u043E\u0447\u043A\u0438");
console.log(multiline);
var language = "JavaScript";
console.log("\u042F \u0443\u0447\u0443 ".concat(language)); //!Шаблонные строки создаются с помощью `обратных кавычек`
//Шаблонные строки могут занимать несколько строчек
//!В шаблонных строках возможна интерполяция ${переменных}
//Практика 12
//Напишите функцию sayHello, чтобы она использовала переменную name в строке "Привет X" с помощью интерполяции.

var namies = "Привет";

function sayHello(namies) {
  return "".concat(namies, " X");
}

console.log(sayHello(namies)); //Практика 13
//Напишите функцию getFullName, чтобы она возвращала имя и фамилию с помощью интерполяции.

var firsts = "Roland";
var lasts = "Skrynryk";

function getFullName(firsts, lasts) {
  return "My name is ".concat(firsts, " and my last name ").concat(lasts);
}

console.log(getFullName(firsts, lasts));

function getFullNames(firsts, lasts) {
  return "".concat(firsts, " ").concat(lasts);
}

console.log(getFullNames(firsts, lasts)); //Практика 14
//Напишите функцию spaceOdysseyTagline, чтобы она возвращала строку:
//An epic drama 
//of adventure 
//and exploration

function spaceOdysseyTagline() {
  return "An epic drama \n   of adventure \n   and exploration";
}

console.log(spaceOdysseyTagline()); //Практика 15
//Часто в качестве содержимого строк используется HTML-код. Мы будем активно это применять в главах, посвященных DOM.
//Шаблонные строки идеально подходят для генерации HTML-кода из-за поддержки интерполяции и мультистрок.
//Напишите функцию renderTableRow, чтобы она возвращала такой HTML:
//<tr>
//<td>здесь лейбл</td>
//<td>здесь значение</td>
//</tr>
//Вместо строчек «здесь лейбл» и «здесь значение» должны быть значения, принятые из параметров label и value.

var label = "Focus";
var value = 1090;

function renderTableRow(label, value) {
  return "<tr>\n      <td>".concat(label, "</td>\n      <td>").concat(value, "</td>\n   </tr>");
}

console.log(renderTableRow(label, value)); //Практика 16
//Напишите функцию getCapitalized, чтобы она возвращала принятую в параметре word строку написанную с заглавной буквы.
//То есть превращать "СOZEK" в "Сozek", "сApTeK" в "Сaptek", а "namer" в "Namer".
//В JS отсутствует такой метод «из коробки», так что вам нужно его придумать, используя сочетание уже изученных строчных методов.

var word = "СOZEK";

function getCapitalized(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

console.log(getCapitalized(word));