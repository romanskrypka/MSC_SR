//!Условия

//Шаблон условия в JavaScript выглядит так:
//if (условие) {
   // действие
//}

//В качестве условия может быть любое сравнение, результат которого может быть представлен в виде true или false.
//При true выполняется код, находящийся в if-блоке (заключенном в фигурные кавычки).

const savage = 22;

if (savage === 21) {
   console.log("Проходной балл");
}

//Еще можно добавить блок else для случаев, когда условие в блоке if не выполняется:
if (savage >= 21) {
   console.log("Проходной балл");
} else {
   console.log("Недобор баллов");
}

//Также можно последовательно проверить несколько условий с помощью else if🦖:
if (savage < 21) {
   console.log("Недобор баллов");
} else if (savage === 21) {
   console.log("Проходной балл");
} else {
   console.log("Перебор баллов");
}

//Practice - 23
//Напишите функцию faceControl, которая будет проверять возраст посетителя.
//Если возраст равен или больше 18, функция должна возвращать строку "Велкам", в остальных случаях строку "Отказ".

let age;
/*function faceControl(age) {
   if (age >= 18) {
      return "Велкам";
   } else {
      return "Отказ";
   }
}

console.log(faceControl(age));*/

//!Вместо else - Instead of else
//Поскольку return прерывает выполнение функции, то часто можно обходиться без else,
//так как после выполнения кода в if-блоке, содержащем return, функция все равно завершится:

/*function faceControl(age) {
   if (age <= 18) {
      return "Welcome";
   }
   return "Failure";
}*/
//В данном случае у нас есть return внутри if-блока, следовательно здесь нет необходимости помещать return "Отказ" 
//в дополнительный else-блок, так как этот код и так может быть выполнен только при несоблюдении if-условия.
//console.log(faceControl(age));
//? чтобы функции не вступали между собой в конфликт деактивировал функции выше. У них есть совпадающие условия, отсюда конфликт


//Если пойти дальше, то можно отказаться и от else if, предусмотрев для каждого условия свой отдельный if-блок,
//а для всех остальных сценариев оставив дефолтный return на самом верхнем уровне функции:
function faceControl(age) {
   if (age === 17) {
      return "Приходи через год";
   }
   if (age >= 18) {
      return "Welcome";
   }
   return "Отказ";
}
console.log(faceControl(age));

//Для проверки на равенство мы использовали тройное равно ===, которое рекомендуем использовать всегда.
//Вам могут встретиться примеры с двойным равно, оно производит нестрогое сравнение и поэтому может быть источником ошибок. 
//Например, выражение 2 == "2" даст true.

//!Project (practice - 24)
//В практике, где мы считали возраст пользователя через год, была одна недоработка. При попытке
//посчитать будущее значение еще не введенного возраста, наша вспомогательная функция getNextAge возвращала NaN.
//Давайте устраним этот баг. Напишите код функции getNextAge, чтобы она не только возвращала текущий возраст пользователя + 1,
//но и в случае, если поле ввода не заполнено (то есть если значение age пустая строка), возвращала ноль.

/*export - деактивировал, потому что не откуда экспортировать*/ function getNextAge(age) {
   if (age > 0) {
      return Number.parseInt(age, 10) + 1;
   }
   return 0;// вводите код задания здесь
}
console.log(getNextAge(age));

//Practice - 25
//Напишите функцию getExcerpt, чтобы она возвращала первые 10 символов из принятой в аргументе строки, сопровождая их многоточием.
//Однако, если длина исходной строки меньше 10 символов, добавлять многоточие не нужно.
let text = "qwertyuioPASDFGH";
function getExcerpt(text) {
   if (text.length >= 10) {
      return text.substring(0, 10) + "...";
   }
   return text;
}

console.log(getExcerpt(text));

//!Возврат true/false - Return true/false
//При возврате логических значений из функции можно не использовать if.
//Рассмотрим функцию, возвращающую true или false в зависимости от того,
//позволяет ли возраст человека относить его к супердолгожителям:
let age2 = 100;
function isSupercentenarian(age2) {
   if (age2 >= 110) {
      return true;
   } else {
      return false;
   }
}
console.log(isSupercentenarian(age2));

//Но выражение age >= 110 и так превращается в true или false в зависимости от возраста.
//А значит, излишне будет обертывать его в if/else. Проведем рефакторинг этой функции, убрав блоки if/else:
function isSupercentenarian2 (age2) {
   return age2 >= 110;
}
//После вызова этой функции JavaScript сначала оценит выражение age >= 110 (оператор сравнения выдает только true или false)
//и только потом вернет его из функции, завершив ее выполнение.
console.log(isSupercentenarian2(age2));

//Это будет работать только с возвратом логических значений из функций. Со всеми другими значениями без if/else не обойтись.


//Если мы хотим получить логическое значение противоположное текущему, можно подставить к нему восклицательный знак !,
//являющийся оператором отрицания (оператор NOT). То есть !true будет ложным, а !false истинным.
//Чтобы переделать наш код с помощью оператора NOT нужно изменить оператор сравнения с >= на <:
function isSupercentenarian3(age2) {
   return !age2 < 110;
}
console.log(isSupercentenarian3(age2));

//Practice - 26
//Напишите функцию canRide, возвращающую true, если рост посетителя аттракциона равен или больше 140см и false
//во всех остальных случаях. Функция не должна содержать if-условия.

let height = 145;
function canRide(height) {
   return height >= 140;
}
console.log(canRide(height));

//!Проверка на четность
//В главе про числа мы узнали про оператор остатка %. На практике, его чаще всего используют для определения
//четных и нечетных чисел делением на 2. При делении чисел на 2 возможно только два исхода.
//Четные числа делятся на 2 без остатка, а после деления нечетных остаток всегда будет равен 1.

// четные числа
4 % 2; // 0
6 % 2; // 0
8 % 2; // 0
10 % 2; // 0
console.log(12 % 2); // 0

// нечетные числа
3 % 2; // 1
5 % 2; // 1
7 % 2; // 1
9 % 2; // 1
console.log(11 % 2); // 1

//Это удобно еще и тем, что 0 всегда конвертируется в логическое значение false, а 1, как и  любое ненулевое значение,
//будет всегда преобразовано в true. Это происходит благодаря скрытой конверсии логических типов.
//Инструкция if всегда ожидает true или false в условии, поэтому даже если использовать другой тип внутри круглых скобок,
//JS преобразует его в логический. И строка "WAGMI", например, превратится в true, а пустая строка "" автоматически превратится в false.
//Помимо пустой строки и нуля в false преобразуются null, undefined и NaN. Все остальные значения преобразуются в true.

//!Practice - 27
//Напишите функцию evenOrOdd, чтобы она возвращала строку "четное", когда принятое в аргументе число является четным, 
//и "нечетное" в остальных случаях.
let number_13 = 10;
function evenOrOdd(number_13) {
   if (number_13 % 2 === 0) {
      return "чётное";
   }
   return "нечётное";
}
console.log(evenOrOdd(number_13));




