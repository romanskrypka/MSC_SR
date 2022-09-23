//функция запускающая другие функции на html странице. Встроена в параметры body. Параметр, body может запускать только одну функцию, и эта функция создана что-бы обойти это ограничение.
function out() {
   out2 ();
   out3 ();
//   out4 ();
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


