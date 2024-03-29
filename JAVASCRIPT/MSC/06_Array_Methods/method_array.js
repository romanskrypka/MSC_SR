//! Метод filter - method filter

//В этой части мы узнаем больше и о колбэках, и о других методах массивов, которые будем использовать на протяжении всего курса. 
//Эти методы особенно полезны, когда используются в отношении массивов объектов 
//– самой распространенной на практике структуры данных, получаемой от API.

//Метод .filter()🦖 возвращает новый массив, содержащий часть элементов оригинального массива, для которого он был вызван. 
//Какие из элементов попадут в новый массив зависит от заданного в фильтре условия.
//Заходит массив - создаётся другой массив, но в котором есть только отфильтрованные элементы

let numbers = [9, 5, 14, 3, 11];

let numbersAboveTen = numbers.filter(function(number) { 
  return number >= 10;
})

console.log(numbersAboveTen); // Выводим новую переменную, в которой есть отфильтрованные значения [14, 11]
//В новый массив numbersAboveTen вошли только числа больше десяти, потому что колбэк-функция внутри .filter() вернула true 
//только после вызова с этими элементами массива (числами 14 и 11), ее вызов с остальными элементами массива (числами 9, 5 и 3), 
//соответственно, вернул false.

//Теперь более подробно. Метод .filter() принимает колбэк первым аргументом. В нашем примере колбэком выступает эта функция:
//function(number) {
//   return number >= 10;
//}

//JavaScript вызовет эту функцию для каждого элемента массива. Массив numbers состоит из 5 элементов, значит, 
//колбэк будет вызван 5 раз.

//При каждом вызове JavaScript назначит значение параметру number внутри колбэка:

//1. При первом вызове значением параметра number будет 9 (первый элемент массива)
//2. При втором вызове JavaScript присвоит number значение 5 (второй элемент массива)
//... и так далее до последнего элемента массива.

//Если колбэк-функция вернет true, тогда элемент будет включен в финальный массив, возвращаемый от .filter(). 
//И наоборот — если колбэк вернет false, то этот элемент не будет включен в финальный массив.

//Чтобы проиллюстрировать важность возвратного значения колбэка и его влияние на результат применения метода .filter(), 
//рассмотрим такой радикальный пример:
numbers.filter(function (number) {
   return true;
})
//Здесь колбэк-функция всегда возвращает true вне зависимости от значения параметра number, поэтому метод .filter() 
//вернет каждый элемент массива, то есть в результате мы просто получим копию исходного массива.

//Именно поэтому в основном примере мы использовали условие number >= 10. Оно возвращает true или false в зависимости от значения 
//number, а это единственная информация, которой руководствуется .filter() для включения элементов из исходного массива 
//в новый массив.

//? Повторим?
//.filter() возвращает новый массив, составленный из элементов исходного массива, соответствующих заданному критерию
//Джаваскрипт вызовет колбэк-функцию для каждого элемента массива
//Если колбэк вернет true, то элемент будет включен в новый массив
//JavaScript автоматически передает значение текущего элемента как первый параметр в колбэк, имя этого параметра не играет роли


//! Practice - 41
//Напишите функцию getAboveZero, чтобы она возвращала массив, содержащий только плюсовые температуры.
const temperatures = [1, -3, -2, 4, 10, -5, 12, 3];

function getAboveZero (temperatures) {
   return temperatures.filter(function(temperature) {
      return temperature >= 0;
   })
}
console.log(getAboveZero (temperatures));
//? Как это работает?
//1. Мы определили = создали массив const temperatures = [1, -3, -2, 4, 10, -5, 12, 3];
//2. Объявили функцию function getAboveZero(), в которой обозначили массив temperatures = function getAboveZero(temperatures)
//3. Сказали, что бы эта функция вернула = return на из массива с помощью метода фильтр = temperatures.filter, 
//   за счёт вложенной колбэк функции function(temperature) те значения которые возвращает функция function(temperature)
//4. функция function(temperature) возвращает все значения перебираемого массива, которые соответствуют условию temperature >= 0;

//! Practice - 42
//Напишите функцию getSubZero, чтобы она возвращала массив, содержащий только отрицательные температуры.
function getSubZero (temperatures) {
   return temperatures.filter(function(temperature) {
      return temperature < 0;
   })
}
console.log(getSubZero (temperatures));

//! Метод find - method find
//Принцип работы метода .find()🦖 похож на ранее изученный .filter().
//В качестве примера создадим массив строк, состоящий из названий тестовых сетей Ethereum:

let testnets = ["Ropsten", "Kovan", "Rinkeby", "Goerli"];

let result = testnets.find(function(testnet) {
  return testnet === "Rinkeby";
})

console.log(result); // "Rinkeby"

//При вызове .find() обратно возвращается первый элемент массива, отвечающий условию. 
//В примере мы ищем первый элемент со значением равным "Rinkeby". Если такой элемент не будет найден — вернется undefined.

//Для каждого элемента массива будет срабатывать колбэк до тех пор, пока от одного из колбэков не вернется true. 
//После этого перебор массива закончится и вернется элемент, колбэк которого вернул true.

//В нашем примере колбэком является эта функция:
//function(testnet) {
//   return testnet === "Rinkeby"
//}

//?Какой порядок срабатывания колбэков?
//1️⃣ Параметр testnet = "Ropsten". Проверка testnet === "Ropsten" возвращает false, поэтому .find() вызывает 
//колбэк со следующим элементом.
//2️⃣ Параметр testnet = "Kovan". Проверка testnet === "Kovan" возвращает false, поэтому .find() вызывает 
//колбэк со следующим элементом.
//3️⃣ Параметр testnet = "Rinkeby". Проверка testnet === "Rinkeby" возвращает true, 
//поэтому .find() прекращает вызовы колбэков и возвращает элемент "Rinkeby".

//Рассмотрим другой пример с массивом показаний глюкометра (прибора для измерения уровня сахара в крови):
let checks = [4.7, 6.2, 8.0, 5.5, 7.1]

let firstSpike = checks.find(function(check) {
  return check > 6.5
})
console.log(firstSpike) // 8.0

//Здесь .find() тоже останавливается на первом отвечающем условию элементе массива, несмотря на то, 
//что в массиве есть еще один подходящий элемент.
//Разница между .filter() и .find() в типе возвращаемых данных. Фильтр всегда возвращает массив из всех отвечающих условию 
//элементов, в то время как файнд возвращает только первый совпадающий с условием элемент (или undefined).

//Сравним результаты использования .filter() и .find() на одном и том же массиве и с одинаковыми условиями:
let testnets1 = ["Ropsten", "Kovan", "Rinkeby", "Goerli"]

testnets1.filter(function(testnet1) {
  return testnet1[0] === "R"
}) // ["Ropsten", "Rinkeby"]

testnets1.find(function(testnet1) {
  return testnet1[0] === "R"
}) // "Ropsten"

//Посмотрим, что будет, если ни один из элементов не подойдет под условие:
let testnets2 = ["Ropsten", "Kovan", "Rinkeby", "Goerli"]

testnets2.filter(function(testnet2) {
  return testnet2.length > 10
}) // []

testnets2.find(function(testnet2) {
  return testnet2.length > 10
}) // undefined

//Как видно, в этом случае фильтр вернул пустой массив [], а файнд вернул undefined. 
//Кстати, по этой причине файнд иногда стоит оборачивать в if, чтобы избежать ошибок.

//? Как работает find?
//.find() возвращает первый элемент массива, отвечающий условию
//Колбэк в .find() срабатывает поочередно, пока не вернется true
//.find() возвращает тот элемент, колбэк с которым вернул true
//Если ни один из элементов не будет найден, то вернется undefined
//.filter() всегда возвращает массив, с элементами или пустой

//! Practice - 43
//Напишите функцию getLoot, чтобы она возвращала мешок searchBag из второго параметра, если он присутствует в массиве bags. 
//В противном случае функция должна возвращать undefined.

let bags = [6969, 1, 1337, 420];
function getLoot (bags, searchBag) {
   return bags.find(function(bag) {
      return bag === searchBag;
   })
}
console.log(getLoot (bags, 420));

//! Practice - 44
//Напишите функцию getOddLoot, чтобы она возвращала все мешки с нечетными номерами из полученного параметра bags.
function getOddLoot(bags) {
   return bags.filter(function(bag) {
     return bag % 2 // 0 конвертируется в false
   })
}
console.log(getOddLoot(bags));

//! Map, includes, join
//Метод .map()🦖 возвращает новый массив, созданный на основе исходного.
//Например, с помощью мэпа можно из [1, 2, 3, 4] получить [2, 4, 6, 8], состоящий из удвоенных чисел из первого массива, 
//или превратить ["Zerg", "Protoss", "Terran"] в новый массив ["Z", "P", "T"], содержащий только первые буквы элементов 
//оригинального массива.
//Обратите внимание, что, несмотря на трансформации, количество элементов у исходных массивов и у массивов, 
//приходящих от .map(), совпадают.
//Вот как это работает:

const numbers3 = [1, 2, 3, 4];
const races = ["Zerg", "Protoss", "Terran"];

const doubled = numbers3.map(function(number) {
  return number * 2;
})

const tags = races.map(function(race) {
  return race[0];
})

console.log(doubled); // [2, 4, 6, 8]
console.log(tags); // ["Z", "P", "T"]

//Если забыть использовать return внутри колбэк-функции, то вернется массив, состоящий из undefined. 
//Например, для примера с расами из StarCraft мы бы получили [undefined, undefined, undefined] — 
//по одному undefined для каждой из трех рас.
//Кстати, чтобы убедиться, содержит ли массив искомый элемент, можно воспользоваться простым методом .includes()🦖:

numbers3.includes(5); // false
doubled.includes(4); // true
races.includes("Orc"); // false
tags.includes("Z"); // true

//Еще одним дежурным методом массивов является .join()🦖. Он склеивает массив в одну строку и использует указанную 
//в аргументе строку для отбивки между элементами массива внутри финальной строки:
races.join(""); // "ZergProtossTerran"
races.join("_"); // "Zerg_Protoss_Terran"
races.join("@@@"); // "Zerg@@@Protoss@@@Terran"

//С помощью джойна можно, например, убирать автоматически подставляемую запятую при рендере массивов в HTML. 
//Запятая появляется из-за того, что в этом случае JS за нас конвертирует массив в строку с помощью .toString().
const ultrasound = [1559, "Ethereum", true, "🦇", "🔊"];
ultrasound.toString(); // "1559,Ethereum,true,🦇,🔊"

//? Как работают дополнительные методы работы с массивом
//.map() создает новый массив, длина которого совпадает с исходным
//Без return внутри колбэка мэп вернет массив из undefined
//.includes() проверяет, является ли элемент частью массива
//.join() конвертирует массив в строку с кастомизацией отбивки
//JS использует .toString() при рендере массивов на веб-странице

//! Practice - 45
//Напишите функцию isTxIncluded, чтобы она возвращала true, если транзакция tx входит в блок транзакций bk, и false, если нет.
const bk = [1, 2, 4, 7, 9];
const tx = [4, 7];

function isTxIncluded(bk, tx) {
  return bk.includes(tx);
}
console.log(isTxIncluded(bk, tx));

//? Каким должен быть второй параметр?
//тут два момента
//1. если мы объявляем функцию с двумя параметрами - то и передавать при вызове должны два параметра - 
//поэтому функция отрабатывает корректно, когда мы ей два параметра передаем
//2. теперь про параметры - по условию задачи функция должна вернуть true  если массив, 
//который ей передан в качестве первого параметра bk, содержит отдельный элемент, который ей передан как второй параметр tx. 
//соотвественно, при вызове функции нам нужно иметь массив и элемент, по которому мы будем искать
//чтобы было более наглядно, я бы называл переменные другим именем, отличным от названий парамететров при объявлении функции
const blockArray = ["0xaea0", "0x8f80", "0xf3ad", "0x17ec"];
const isIncludedElement = "0x17ec";

function isTxIncluded(bk, tx) {
  return bk.includes(tx);
}
console.log(isTxIncluded(blockArray, isIncludedElement));


//! Practice - 46
//Напишите функцию getSizes, чтобы она возвращала массив, состоящий из длин строк для элементов массива words.
const words = ["Ror", "Gor", "For",];
function getSizes (words) {
  return words.map(function(word) {
    return word.length;
  })
}
//console.log(tx.isArray())
console.log(getSizes (words, [0]));
//точно ли тип данных приходит array в функцию - внутри функции лог прописать - console.log(tx.isArray()) и посмотреть. 
//И еще я вижу функция объявлена с двумя параметрами, а вызываем ее с одним


//! Practice - 47
//Напишите функцию getWithSpaces, чтобы она возвращала массив из двух элементов:
//— строки, составленной из слов массива strings, соединенных пробелами;
//— длины этой строки.
const strings = ["Moscow", "Coding", "School"];
function getWithSpaces(strings) {
  const joined = strings.join(" ");
  return [joined, joined.length];
}
console.log(getWithSpaces(strings));



