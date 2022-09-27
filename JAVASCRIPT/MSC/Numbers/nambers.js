//! Числа и NaN
//Любые целые или дробные числа, положительные или отрицательные относятся к числовому типу в JS. Примеры чисел: 1, -2, 3000, 4.5, -0.34.
//Числа при желании можно конвертировать в строки, используя метод toString()🦖:

let solo = 322;
console.log(solo.toString());

//Операции с числами часто могут выдать значение NaN, что расшифровывается как Not a Number.
//Появление NaN обычно означает, что где-то строчное значение не переведено в числовое 
//или где-то допущена опечатка в названии свойства объекта, приводящая к попыткам использовать undefined там, где ожидается число.
console.log("skr" * 3);// Такое, например, может получиться при попытке умножить число на строку. Будет NaN

//Практика 17 - Practice 17
//Напишите функцию intoString, чтобы она конвертила переданное ей число в строку.

let numberD = 207;

function intoString (numberD) {
   return numberD.toString();
}

console.log(intoString(numberD));
console.log(intoString(numberD) * 3);
console.log(intoString(numberD) + 43); // получил склейку 20743, что корректно.

//!Конвертация строк в числа
//В некоторых сценариях нам требуется преобразовать строки в числа. Для этого используется метод Number.parseInt()🦖.
let satan = "666";
console.log(satan * 2);
console.log(Number.parseInt(satan, 10) * 2);
console.log(satan + 2);//Здесь повело себя правильно, как не преобразованная строка

//метод Number.parseInt() ожидает 2 параметра: Number.parseInt(string, radix)
//Первым параметром выступает сама строка, которую нужно перевести в числовое значение.
//Вторым и необязательным параметром идет формат отображения числа – для обычной десятичной системы это число 10, для двоичной – 2.

let a = 10;
let b = "20";
console.log(a + b); // "1020"

let c = 10;
let d = 20;
console.log(c + d); // 30

//Примечательно, что Number.parseInt() будет пытаться сконвертировать полученную строку в число даже в том случае,
//если помимо числа она будет содержать другие символы, следующие за числом:
console.log(Number.parseInt("123abc", 10)); // 123
console.log(Number.parseInt("4 сыра", 10)); // 4







