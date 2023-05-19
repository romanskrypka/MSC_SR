//
//*TODO
//*
//*!
//*?
/* ... */

function sumA(x1, y) {
  return x1 + y;
  console.log(""); // эта часть никогда не будет выполнена так как функция остановится на инструкции на второй строке
}

function multiply(x1, y) {
  return x1 * y;
}

let x1 = 99;
let y = 61;
let z = 9;
let a = 3;

console.log(sumA(x1, y));
console.log(multiply(x1, y));

//? Как создавать простые функции?
// Функция определяется с использованием ключевого слова function.
// Функция вызывается подстановкой круглых скобок к имени функции.
// Ключевое слово return контролирует, какое значение вернёт функция.
// Любая функция что-то возвращает, по дефолту это значение undefined.
// return также прерывает выполнение кода функции и выходит из неё.

//! Practice - 1
// Напишите функцию sum, которая бы возвращала сумму a и x.
let x = z + sumA(x1, y);

function sum1() {
  return a + x;
}

console.log(sum1(a, x));

//! Practice - 2
//Напишите функцию multiply, чтобы она возвращала результат умножения a на b.
function sum2(a, b) {
  return console.log(a * b);
}

//! Строки
// Строки в JS создаются с использованием одиночных или двойных кавычек, между которыми нет никакой разницы: "это строка" 'и это строка'
// У любой строки есть свойство length, возвращающее длину строки. Например, "строка".length вернет 6.

let textA = "7a7b7c7d7e7f7g7h7i7j7k7l";
console.log(textA.length);

//У строк также есть методы, например, .toLowerCase() и .toUpperCase(), возвращающие новые строки,
//состоящие из всех строчных или всех заглавных букв. Исходное значение при этом остается неизменным:
console.log(textA.toUpperCase()); // "javascript"
console.log(textA.toLowerCase());
console.log("JavaScript".toUpperCase()); // "JAVASCRIPT"

//В отличие от свойств, которые являются уже вычисленными заранее значениями, для использования методов,
//выполняющих определенные действия, нужно их применить. Именно поэтому в конце методов мы используем скобки,
//таким образом «вызывая» их, а свойство length используем без скобок.

//? Как работать со строками?
//Строки можно создавать с помощью двойных или одиночных кавычек
//Длина строки хранится в свойстве .length
//Метод .toUpperCase() конвертирует все буквы в заглавные
//Метод .toLowerCase() конвертирует все буквы в строчные
//Для вызова методов нужны скобки, чтобы они могли выполниться
//Для доступа к свойствам скобки не нужны — они заранее известны

//
//*TODO
//*
//*!
//*?
/* ... */

let rqw = 1000;

//! Practice 3
// Напишите функцию getCharCount, чтобы она возвращала количество символов в принятом параметре str.
function getCharCount(str) {
  return str.length;
}

//! Practice 4
// Напишите функцию shoutMyName, чтобы она возвращала значение, переданное в параметре name, капсом.
function shoutMyName(name) {
  return name.toUpperCase;
}

//! Practice 5
// Напишите функцию lowKey, чтобы она возвращала значение, переданное в параметре name, строчными буквами.
function LowKey(name) {
  return name.toLowerCase;
}

//! Получение символов
// Доступ к конкретному символу строки осуществляется через индекс (начиная с 0) внутри квадратных скобок.
// Рассмотрим на примере переменной lang, имеющей значение "JavaScript". Вот как можно получить первый, второй и третий символы:
let lang = "JavaScript";
console.log(lang.length); // 6
console.log(lang[0]); // "J"
console.log(lang[1]); // "a"
console.log(lang[2]); // "V"

// Если напрямую вводить выражение в консоль браузера, то консоль всегда будет показывать нам возвращаемое значение.
// Если это выражение является частью функции или используется в коде страницы,
// то вывести его в консоль можно с помощью метода console.log()(напр.console.log(lang[0])).

// Внутри квадратных скобок может быть динамическое значение с использованием других выражений.
// Чтобы получить второй символ с конца, можно использовать информацию о длине строки:

console.log(lang[lang.length - 1]);
console.log(lang[lang.length - 2]);
// Обратите внимание, что lang[lang.length] выдал бы undefined,
// потому что индексы начинаются с нуля, и у строки из 10 символов позицией последнего символа будет 9.

//? Как работать с индексами?
// Номер индекса в квадратных скобках выдает символ из этой позиции
// Индексы начинаются с нулевого значения; у первого символа индекс 0
// Внутри квадратных скобок можно использовать динамические значения

//! Practice 6
// Напишите функцию getFirstChar, чтобы она возвращала первый символ строки, передаваемой в параметре name.
function getFirstChar(name) {
  return name[0];
}

//! Practice 7
// Напишите функцию getLastChar, чтобы она возвращала последний символ строки, передаваемой в параметре name.
function getLastChar(nama) {
  return name[name.length - 1];
}

//! Метод substring()
// В программировании часть строки называется подстрокой. Например, "Arc" является подстрокой строки "Arcteryx",
// потому что одну можно получить из другой, отбросив последние 5 символов.

// При работе со строками нам часто требуется получить только часть символов строки, а не всю строку целиком.
// Для этого используется метод substring().

// У каждого метода есть своя сигнатура, показывающая, какие параметры может принимать данный метод.
//*TODO Сигнатура метода подстроки выглядит так: str.substring(indexStart, indexEnd)

// Это значит, что при вызове метода substring() нужно передать ему два аргумента — для первого символа,
// включаемого в подстроку, и последнего, не включаемого в нее.

console.log("GORE-TEX".substring(5)); // "TEX"
console.log("Helly Hansen".substring(0, 5)); // "Helly"
console.log("The North Face".substring(4, 9)); // "North"

// В первом примере использован только один аргумент indexStart. Второй параметр является необязательным и,
// если его не указывать, будет использовано дефолтное значение равное длине строки (в нашем случае это число 8).

//? Как работать с Методом substring()?
// Подстрокой называется любая часть исходной строки
// Подстрока получается с помощью метода .substring()
// У метода подстроки два параметра – начальный и конечный индексы
// Начальный символ включается в подстроку и является обязательным
// Конечный символ не включается в подстроку и является опциональным

//! Practice 8
// Напишите функцию skipFirstChar, чтобы она возвращала все символы кроме первого из строки в параметре text.

//! Practice 9
// Этот челлендж для разнообразия нужно будет выполнить в онлайн-песочнице codesandbox, где сразу можно видеть результат.

// Мы приготовили проект, содержащий несколько файлов, в числе которых файл helper.js, экспортирующий вспомогательную функцию,
// которую вам и предстоит дописать так, чтобы она возвращала 10 первых символов строки, переданной в параметре функции.

// Проверьте сами себя, попробовав вбить текст в поле.

// P.S. Не переживайте, если код внутри index.js покажется непонятным. Вы поймете его чуть позже, когда пройдете методы DOM.

function getFirstTen(text) {
  return console.log(text.substring(0, 11)); // введите что-нибудь в браузере и проверьте консоль
}

//! Оператор +
// Оператор + ведет себя по-разному в зависимости от того, в сочетании с какими типами данных используется.
// С числами плюс работает как оператор сложения, например, 1 + 3 вернет число 4.

// Также с помощью плюса можно объединять строки. Процесс склейки нескольких строк в одну называется конкатенацией.
// Например, "Hello" + "World" в результате вернет "HelloWorld".

let first12 = "Gleb12";
let second12 = "Kostin12";
let nameA = first12 + " " + second12; // "Gleb12 Kostin12"
console.log(nameA);

// Бывает, что нужно слепить строку на основе уже имеющейся.
// В этом случае можно использовать оператор += для более короткой записи:

console.log((nameA += " Nikolaevich"));

//? Как работать с Оператором +
// Действие оператора + зависит от типа используемых с ним данных
// Помимо сложения чисел + используется для объединения строк
// Когда значение добавляется к уже существующему можно использовать оператор +=
// += также может использоваться как с числами, так и со строками

//! Practice 10
// Напишите функцию dateConcat, чтобы она возвращала строку, состоящую из числа и названия месяца.
function dateConcat(day, month) {
  return day + month;
}

//! Practice 11
// Напишите функцию getExcerpt, чтобы она возвращала первые 10 символов из переданной ей строки с многоточием в конце.
function getExcerpt(text) {
  return text.substring(0, 10) += "...";
}

//! Шаблонные строки
// У строк, создаваемых с помощью двойных или одинарных кавычек, есть один недостаток —
// они не поддерживают интерполяцию, то есть в них нельзя вставлять динамические значения.

// Но есть другой, более современный способ создавать строки — с помощью `обратных кавычек`,
// находящихся слева от кнопки шифт или сверху от таба.

// Такие строки называются шаблонными (template string или template literal).
// Они поддерживают интерполяцию и могут растягиваться на несколько строчек.

// Для интерполяции нужно заключить выражение или переменную в фигурные скобки со знаком доллара ${...}.

let multiline = `Это одна
шаблонная строка
длинной в ${1 + 2} строчки`;

console.log(multiline);
// Здесь в первую очередь выполнится выражение в фигурных скобках и только потом строка,
// содержащая посчитанное значение, присвоится переменной multiline.

let language = "JavaScript"
console.log(`Я учу ${language}`); // "Я учу JavaScript"

// Здесь тоже в строку сначала подставится значение из переменной language и только затем выполнится сама строка,
// которую и вернет интерпретатор.

// Интерполяция работает только внутри строк с обратными кавычками.
// Если возникла проблема, в первую очередь нужно убедиться, что используются обратные кавычки, а не одинарные/двойные.

//? Как работать с Шаблонными строками?
// Шаблонные строки создаются с помощью `обратных кавычек`
// Шаблонные строки могут занимать несколько строчек
// В шаблонных строках возможна интерполяция ${переменных}

//! Practice 12
// Напишите функцию sayHello, чтобы она использовала переменную name в строке "Привет X" с помощью интерполяции.
function sayHello(name) {
  return `Привет ${name}`;
}

//! Practice 13
// Напишите функцию getFullName, чтобы она возвращала имя и фамилию с помощью интерполяции.
function getFullName(first, last) {
  return `${first} ${last}`;
}

//! Practice 14
// Напишите функцию spaceOdysseyTagline, чтобы она возвращала строку:
// An epic drama
// of adventure
// and exploration

function spaceOdysseyTagline() {
  return `An epic drama 
of adventure 
and exploration`;
}

//! Practice 15
// Часто в качестве содержимого строк используется HTML-код. Мы будем активно это применять в главах, посвященных DOM.
// Шаблонные строки идеально подходят для генерации HTML-кода из-за поддержки интерполяции и мультистрок.

// Напишите функцию renderTableRow, чтобы она возвращала такой HTML:
// <tr>
//   <td>здесь лейбл</td>
//   <td>здесь значение</td>
// </tr>

// Вместо строчек «здесь лейбл» и «здесь значение» должны быть значения, принятые из параметров label и value.

function renderTableRow(label, value) {
  return `<tr>
  <td>${label}</td>
  <td>${value}</td>
</tr>`;
}

//! Practice 16
// Напишите функцию getCapitalized, чтобы она возвращала принятую в параметре word строку написанную с заглавной буквы.
// То есть превращать "СOZEK" в "Сozek", "сApTeK" в "Сaptek", а "namer" в "Namer".

// В JS отсутствует такой метод «из коробки», так что вам нужно его придумать,
// используя сочетание уже изученных строчных методов.
let word12 = "СOZEK";
function getCapitalized(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

console.log(getCapitalized(word12));

//! Числа и NaN
// Любые целые или дробные числа, положительные или отрицательные относятся к числовому типу в JS.
// Примеры чисел: 1, -2, 3000, 4.5, -0.34.
// Числа при желании можно конвертировать в строки, используя метод toString()🦖:

let solo = 322;
solo.toString(); // "322"

// На курсе вам и дальше будет встречаться эмодзи динозаврика 🦖, символизирующего логотип Mozilla Developer Network
// (или попросту MDN) — авторитетного ресурса, содержащего JavaScript-документацию.

// Например, ссылка выше вела на страницу о String.prototype.toString(). Мы разберем, что значит prototype чуть позже,
// пока же просто имейте в виду, что это нечто, что можно вызывать как метод строки.

// Информация на MDN предназначена для профессионалов, а не для новичков.
// На курсе мы постарались объяснить все концепции доступным языком,
// но если вы готовы копнуть глубже – мы снабдили вас ссылками на документацию.

// Операции с числами часто могут выдать значение NaN, что расшифровывается как Not a Number.
// Такое, например, может получиться при попытке умножить число на строку.

console.log("скр" * 3); // NaN

// Появление NaN обычно означает, что где-то строчное значение не переведено в числовое или где-то допущена опечатка в
// названии свойства объекта, приводящая к попыткам использовать undefined там, где ожидается число.

//? Как работать с Числами и NaN?
// Числа конвертируются в строки вызовом метода .toString()
// MDN – самый авторитетный ресурс с JavaScript-документацией
// NaN появляется при числовых операциях с нечисловыми типами

//! Practice 17
// Напишите функцию intoString, чтобы она конвертила переданное ей число в строку.
function intoString(number) {
  return number.toString();
}

console.log(intoString(376006)); // "376006"

//! Конвертация строк в числа
// В некоторых сценариях нам требуется преобразовать строки в числа. Для этого используется метод Number.parseInt()🦖.

let satan = "666";
console.log(Number.parseInt(satan, 10)); // 666

// Давайте разберемся, что за чертовщина здесь происходит. Во-первых, нужно вызывать функцию, используя полное название,
// включая приставку Number — глобальный объект, которому принадлежит метод parseInt().

//*TODO Number.parseInt(string, radix) ожидает 2 параметра: string, radix
//* Первым параметром выступает сама строка, которую нужно перевести в числовое значение.
//* Вторым и необязательным параметром идет формат отображения числа – для обычной десятичной системы это число 10, для двоичной – 2.

// Чаще всего конверсия из строки в число применяется для данных, вводимых пользователем в текстовых полях.
// Даже если пользователь вбивает только цифры, эти данные все равно имеют строчный тип.

// Если забыть сконвертить строку в число, то сложение сработает как конкатенация (склеивание строк):

let aq = 10;
let b = "20";
console.log(aq + b); // "1020"

// Примечательно, что Number.parseInt() будет пытаться сконвертировать полученную строку в число даже в том случае,
// если помимо числа она будет содержать другие символы, следующие за числом:

console.log(Number.parseInt("123abc", 10)); // 123
console.log(Number.parseInt("4 сыра", 10)); // 4

//? Как работать с Конвертацией строк в числа
// Перевести строку в число: Number.parseInt(строка, 10)
// Не рекомендуется использоваться просто метод parseInt()
// Вторым аргументом функции передается основание (обычно 10)
// Если не указать основание, можно нарваться на неприятные сюрпризы

//! Practice 18
// Ознакомьтесь с кодом страницы, где пользователь указывает свой возраст и узнает, сколько лет ему стукнет через год.

// Возраст сохраняется в переменной age напрямую из текстового поля.
// Пока не переживайте, если поймаете NaN при незаполненном поле.

// Вам нужно написать код внутри вспомогательной функции getNextAge внутри файла age.js,
// чтобы она возвращала возраст пользователя в следующем году.

// Проверьте правильность кода, заполнив поле с возрастом в браузерной вкладке.

function getNextAge(age) {
  return Number.parseInt(age, 10) + 1;// введите код здесь
}

//! Practice 19
// Откройте код программы на codesandbox и допишите код вспомогательной функции getElementWidth,
// находящейся в файле measure.js, чтобы она возвращала ширину элемента (как число) из полученной в параметре строки.

// Обратите внимание, что строки будут выглядеть как 200px или 150px, то есть один в один как они указываются в CSS.
// Функция должна трансформировать эти значения в числа.

// Результат выполнения задания проверьте в консоли, расположенной в нижней части правой панели.

function getElementWidth(value) {
  return Number.parseInt(value, 10);// напишите свой код здесь и проверьте результат в консоли слева внизу
}

//! Операции
// JS поддерживает все стандартные арифметические операции с числами.
// Для умножения, как вы уже видели, используется оператор звездочка *, а для деления слэш /.

// Возможно новым для вас будет оператор %🦖, возвращающий остаток от деления.
// Остатком от деления 8 на 2 будет 0, потому что 8 делится на 2 без остатка.

// Остатком от деления 7 на 3 будет 1, так как 7 не делится на 3, но ближайшим числом меньше 7,
// которое делится на 3, является 6 (7 - 6 = 1).

8 % 2 // 0
7 % 3 // 1
-12 % 5 // -2
console.log(225 % 78);

// Помимо операторов, остается еще несколько методов, которые можно вызывать с числами, но они не так популярны.
// Напротив, очень популярными являются методы, принадлежащие объекту Math, и их мы рассмотрим отдельно в будущих уроках.

//? Как работать с оператором остатка от деления %?
// Все базовые арифметические операторы поддерживаются в JS
// Оператор остатка % возвращает остаток от деления двух чисел
// Math содержит много полезных методов для работы с числами

//! Practice 20
// Напишите функцию getRemainder, чтобы она возвращала остаток деления принятых в параметрах числа и делителя.
function getRemainder(number, divider) {
  return number % divider;
}

//! Переменные
// В современном джаваскрипте переменные (иногда называемые привязками) создаются двумя способами – с помощью let или const.
// Этими ключевыми словами нужно сопровождать только первое появление переменной в программе.

let artist = "Boulevard Depo";
console.log(artist); // "Boulevard Depo"

// Это определит переменную под названием artist со значением "Boulevard Depo". Теперь, когда она нам понадобится,
// достаточно будет одного имени переменной (приставка let нужна только в момент объявления привязки).

// Переменным, созданным с помощью let (в отличие от const), могут быть переназначены другие значения:
let game = "StarCraft";
game = "Axie Infinity";
console.log(game); // "Axie Infinity"

// То же самое с числами:
let sum = 0
sum += 1
console.log(sum); // 1

// Возможность перезадавать значение дает возможность создавать переменные, выполняющие роль счетчика,
// которые могут увеличиваться или уменьшаться в зависимости от заданных условий.

// Другая разновидность переменных, создаваемых с помощью const, не может быть перезадана.
// Однажды объявив их, дальше нигде в коде программы нельзя использовать оператор = после их имени.
// Попытка это сделать приведет к сообщению об ошибке.

// Ключевое слово const может ввести в заблуждение. Но создается именно переменная, а не константа.
// Да, мы не можем ее переназначать, но уже присвоенное значение (содержимое объекта или массив) может изменяться.

// Всегда в первую очередь используйте const и только по необходимости заменяйте const на let.
// Со временем круг таких случаев, когда требуется let, будет вам хорошо знаком (например, переменные-счетчики).

// Преимущество const в том, что, например, если переменной присвоен массив, ее значением всегда будет массив
// (даже не смотря на то, что элементы этого массива могут меняться).
// Это позволяет использовать с этой переменной методы массивов, будучи уверенными в неизменности её типа.

//? Как работать с переменными?
// При первом появлении переменной в программе ее нужно объявить с помощью let или const
// let используется для переменных, которые будут переназначаться
// const позволяет только однократное присвоение значения переменной
// Переменные, созданные с помощью const, не являются константами

//! Practice 21
// Задайте переменную count с исходным значением 0.
// На следующей строчке увеличьте его на 1.
let count = 0;
count += 1; // то же самое, что и count = count + 1

//! Practice 22
// Определите переменную stableCoin со значением "$1".
// Сделайте так, чтобы ей нельзя было переназначить другое значение.
const stableCoin = "$1";

//! Условия
// Шаблон условия в JavaScript выглядит так:
// if (условие) {
   // действие
// }

// В качестве условия может быть любое сравнение, результат которого может быть представлен в виде true или false.
// При true выполняется код, находящийся в if-блоке (заключенном в фигурные кавычки).

//Проиллюстрируем на примере:
const savage12 = 22;

if (savage12 === 21) {
  console.log("Проходной балл"); // выполнится
}

// Еще можно добавить блок else для случаев, когда условие в блоке if не выполняется:

if (savage12 >= 21) {
  console.log("Проходной балл");
} else {
  console.log("Недобор баллов"); // выполнится
}

// Также можно последовательно проверить несколько условий с помощью else if🦖:
if (savage12 < 21) {
  console.log("Недобор баллов")
} else if (savage12 === 21) {
  console.log("Проходной балл")
} else {
  console.log("Перебор баллов") // выполнится
}

//? Как работать с условиями?
// if-условие позволяет запускать код, когда условие в скобках true
// Код внутри фигурных скобок {} выполняется при истинности условия
// В блоке else находится код, выполняемый при несоблюдении условия
// Конструкция else if позволяет задавать многоступенчатые условия

//! Practice 23
// Напишите функцию faceControl, которая будет проверять возраст посетителя.
// Если возраст равен или больше 18, функция должна возвращать строку "Велкам", в остальных случаях строку "Отказ".

function faceControl(age) {
  if (age >= 18) {
    return "Велкам";
  } else {
    return "Отказ";
  }
}

console.log(faceControl(18));// "Велкам"
console.log(faceControl(16)); // "Отказ"

//! Вместо else
// Поскольку return прерывает выполнение функции, то часто можно обходиться без else,
// так как после выполнения кода в if-блоке, содержащем return, функция все равно завершится:

function faceControlA(age) {
  if (age >= 18) {
    return "Велкам";
  }
  return "Отказ";
}

// В данном случае у нас есть return внутри if-блока, следовательно здесь нет необходимости помещать return "Отказ"
// в дополнительный else-блок, так как этот код и так может быть выполнен только при несоблюдении if-условия.

// Если пойти дальше, то можно отказаться и от else if, предусмотрев для каждого условия свой отдельный if-блок,
// а для всех остальных сценариев оставив дефолтный return на самом верхнем уровне функции:

function faceControlB(age) {
  if (age === 17) {
    return "Приходи через год";
  }
  if (age >= 18) {
    return "Велкам";
  }
  return "Отказ";
}

// Для проверки на равенство мы использовали тройное равно ===, которое рекомендуем использовать всегда.
// Вам могут встретиться примеры с двойным равно, оно производит нестрогое сравнение и поэтому может быть источником ошибок.
// Например, выражение 2 == "2" даст true.

//? Как работать без else?
// При использовании return в теле if-блока можно опустить опцию else
// Можно ограничиться дополнительными ифами вместо блоков else if
// Двойное равно пытается сделать преобразование при сравнении разных типов данных
// Всегда используйте тройное равно, проверяющее на строгое соответствие

//! Practice 24
// В практике, где мы считали возраст пользователя через год, была одна недоработка.
// При попытке посчитать будущее значение еще не введенного возраста, наша вспомогательная функция getNextAge возвращала NaN.

// Давайте устраним этот баг. Напишите код функции getNextAge, чтобы она не только возвращала текущий возраст пользователя + 1,
// но и в случае, если поле ввода не заполнено (то есть если значение age пустая строка), возвращала ноль.

// Воспользуйтесь исходным кодом на codesandbox.
function getNextAge(age) {
  if (age < 1) {
    return 0;
  }
  return Number.parseInt(age, 10) + 1;
}

//! Practice 25
// Напишите функцию getExcerpt, чтобы она возвращала первые 10 символов из принятой в аргументе строки, сопровождая их многоточием.
// Однако, если длина исходной строки меньше 10 символов, добавлять многоточие не нужно.

function getExcerpt(text) {
  if (text.length >= 10) {
    return text.substring(0, 10) + "...";
  } if (text.length < 10) {
    return text;
  }
}

console.log(getExcerpt("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"));



