//функция запускающая другие функции на html странице. Встроена в параметры body. Параметр, body может запускать только одну функцию, и эта функция создана что-бы обойти это ограничение.
function out() {
   out2 ();
   out3 ();
   out4 ();
//   out5 ();
}


//Простые функции

let x = 7;
let y = 9;

function sum (x, y) {
   return x + y;
}

let asum = sum(x, y);

function out2() {
   var p;
   p = document.getElementById('out2');
   p.innerHTML = asum;
}


//Практика 2
function multiply (x, y) {
   return x * y;
}

let msum = multiply (x, y);

function out3() {
   var p;
   p = document.getElementById('out3');
   p.innerHTML = msum;
}


//Строки

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


let text = "JavaScript";
console.log(text.length); //Длина строки хранится в свойстве .length
console.log(text.toLowerCase()); //Метод .toLowerCase() конвертирует все буквы в строчные
console.log(text.toUpperCase()); //Метод .toUpperCase() конвертирует все буквы в заглавные

let str = "Nikolaevich";
function getCharCount(str) {
  return str.length;
}
console.log(getCharCount(str));//! Ура получилось выводить результат функции в консоль.



let lang = "JavaScript";
console.log(lang[0]);
console.log(lang[lang.length-2]);

let Name = "Roman";
function shoutMyName(Name) {
  return Name.toUpperCase();//Делает все буквы ЗАГЛАВНЫМИ в переменной
}

function lowKey(Name) {
  return Name.toLowerCase();//Делает все буквы строчными в переменной
}


function getFirstChar (Name) {
   return Name[0];//Показывает конкретный символ из переменной
}

console.log(shoutMyName (Name));
console.log(lowKey (Name));
console.log(getFirstChar (Name));


//Метод substring. Позволяет создать подстроку на основании строки. Например, "Arc" является подстрокой строки "Arcteryx".
//Сигнатура метода. str.substring(indexStart, indexEnd)
//Это значит, что при вызове метода substring() нужно передать ему два аргумента — для первого символа, включаемого в подстроку, 
//и последнего, не включаемого в нее.

let goreText = "Огонь любви";
let hellyHansen = "Зов природы";
let theNorthFace = "Эхо причастности";

console.log(goreText.substring(5));// "TEX"
console.log(hellyHansen.substring(0, 5));// "Helly"
console.log(theNorthFace.substring(4, 9));// "North"

console.log("GORE-TEX".substring(5));// "TEX"
console.log("Helly Hansen".substring(0, 5));// "Helly"
console.log("The North Face".substring(4, 9));// "North"


//Практика 8 
//?Напишите функцию skipFirstChar, чтобы она возвращала все символы кроме первого из строки в параметре text.

let text2 = "Коварство технологий";

function skipFirstChar(text2) {
   return text2.substring(1);
}
console.log(skipFirstChar(text2));

function out4() {
   var p;
   p = document.getElementById('out4');
   p.innerHTML = skipFirstChar(text2);
}//! Тут зафигачил вывод данных в HTML


//Оператор (+)

let first = "Gleb";
let second = "Kostin";
let names = first + " " + second; // "Gleb Kostin"
console.log(names);
console.log(1 + 9);

let namess = "Gleb";
namess += " Kostin"; // то же самое, что и name = name + " Kostin"
console.log(namess);

//Практика 10
let day = 15;
let month = "july";

function dateConcat(day, month) {
   return day + " " + month;
}
console.log(dateConcat(day, month));

//Практика 11
let texted = "Космо-истории";
function getExcerpt(texted) {
   return texted.substring(0, 10) + "...";
}
console.log(getExcerpt(texted));

//Шаблонные строки
let multiline = `Это одна
шаблонная строка
длиной в ${1+2} строчки`;
console.log(multiline);

let language = "JavaScript";
console.log(`Я учу ${language}`);
//!Шаблонные строки создаются с помощью `обратных кавычек`
//Шаблонные строки могут занимать несколько строчек
//!В шаблонных строках возможна интерполяция ${переменных}

//Практика 12
//Напишите функцию sayHello, чтобы она использовала переменную name в строке "Привет X" с помощью интерполяции.

let namies = "Привет";
function sayHello(namies) {
   return   `${namies} X`;
}
console.log(sayHello(namies));

//Практика 13
//Напишите функцию getFullName, чтобы она возвращала имя и фамилию с помощью интерполяции.

let firsts = "Roland";
let lasts = "Skrynryk";
function getFullName (firsts, lasts) {
   return `My name is ${firsts} and my last name ${lasts}`;
}
console.log(getFullName (firsts, lasts));

function getFullNames (firsts, lasts) {
   return `${firsts} ${lasts}`;
}
console.log(getFullNames (firsts, lasts));

//Практика 14
//Напишите функцию spaceOdysseyTagline, чтобы она возвращала строку:
//An epic drama 
//of adventure 
//and exploration

function spaceOdysseyTagline () {
   return `An epic drama 
   of adventure 
   and exploration`;
}
console.log(spaceOdysseyTagline ());

//Практика 15
//Часто в качестве содержимого строк используется HTML-код. Мы будем активно это применять в главах, посвященных DOM.
//Шаблонные строки идеально подходят для генерации HTML-кода из-за поддержки интерполяции и мультистрок.
//Напишите функцию renderTableRow, чтобы она возвращала такой HTML:
//<tr>
//<td>здесь лейбл</td>
//<td>здесь значение</td>
//</tr>
//Вместо строчек «здесь лейбл» и «здесь значение» должны быть значения, принятые из параметров label и value.


let label = "Focus";
let value = 1090;
function renderTableRow (label, value) {
   return `<tr>
      <td>${label}</td>
      <td>${value}</td>
   </tr>`;
}
console.log(renderTableRow (label, value));

//Практика 16
//Напишите функцию getCapitalized, чтобы она возвращала принятую в параметре word строку написанную с заглавной буквы.
//То есть превращать "СOZEK" в "Сozek", "сApTeK" в "Сaptek", а "namer" в "Namer".
//В JS отсутствует такой метод «из коробки», так что вам нужно его придумать, используя сочетание уже изученных строчных методов.
let word = "СOZEK";
function getCapitalized (word) {
   return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
console.log(getCapitalized(word));




