"use strict"; //обозначает, что мы пишем на стандарте js6.

function sum(x, y) {
  return x + y, console.log(x + y);
}

sum(2, 5);

console.log("строка".length); //Длина строки хранится в свойстве .length

let text = "JavaScript";
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

let first = "Gleb";//Действие оператора + зависит от типа используемых с ним данных
let second = "Kostin";//
let name = first + " " + second;//Помимо сложения чисел + используется для объединения строк
console.log(first, second);//Когда значение добавляется к уже существующему можно использовать оператор +=
console.log(name);//+= также может использоваться как с числами, так и со строками

function dateConcat(day, month) {
  return day + month;
}

function getExcerpt(text) {
  return text.substring(0, 10);
}

let multiline = `Это одна шаблонная 
строка длиной в 
${1+2} строчки`;
console.log(multiline);

let language = "JavaScript";
console.log(`Я учу ${language}`);
//!Шаблонные строки создаются с помощью `обратных кавычек`
//Шаблонные строки могут занимать несколько строчек
//!В шаблонных строках возможна интерполяция ${переменных}

function sayHello(name) {
  return `Привет ${name}`;
}

function getFullName(first, last) {
  return `${first} ${last}`;
}

function spaceOdysseyTagline() {
  return `An epic drama
  of adventure
  and exploration`;
}

function renderTableRow(label, value) {
  return `<tr>
  <td>${label}</td> 
  <td>${value}</td> 
  </tr>`;
}


let word = "namer";

function getCapitalized(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
console.log(getCapitalized(word));

//!ЦИФРЫ
let solo = 322;
solo.toString();//Числа конвертируются в строки вызовом метода .toString()
console.log(solo * 2);

console.log("скр" * 3);//NaN появляется при числовых операциях с нечисловыми типами

let angel = '777';
Number.parseInt(angel, 10);//Number.parseInt(string, radix). Первым параметром выступает сама строка, которую нужно перевести в числовое значение. Вторым и необязательным параметром идет формат отображения числа – для обычной десятичной системы это число 10, для двоичной – 2.
console.log(angel * 2);

let a = 10;
let b = "20";
console.log(a + b);

Number.parseInt("123abc", 10);
console.log(Number.parseInt("123abc", 10));
Number.parseInt("4 сыра", 10);
console.log(Number.parseInt("4 сыра", 10));






