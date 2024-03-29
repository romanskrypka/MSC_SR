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





