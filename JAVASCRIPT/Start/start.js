'use strict';//обозначает, что мы пишем на стандарте js6.

//alert(1);//при запуске alert все скрипты которые должны отработать останавливаются, пока не закроем модальное окно вызванное даннйо командой
//[0,3].push()

//console.log(leftBorderWidth);
//console.log(second);
//console.log(pi);

//var leftBorderWidth = 1; // переменная существует уже до выполнения скрипта и она видна везде
//console.log(leftBorderWidth);

//let second = 2; // переменная создаваемая через let воспроизводиться, только тогда когда код до неё доходит, в противном случае ошибка
//console.log(second);

//const pi = 3.14; // const создаёт константу, которую почти нельзя поменять, в остальном аналогично let
//console.log(pi);


// это однострочный комментарий

/*это многострочный
комментарий*/

//Типы данных
var namber = 5;//числа могут быть целыми и дробными.
var string = "Hello world";//
var sum = Symbol();//
var boolean = true;//
null;//
undefined;//объект существует, но значения не имеет
var obj = {};//это коллекция данных, это структура которая используется для хранения любых данных.
//он может содержать в себе данные которые уже будут называться свойством объекта или методом.
//методы это функция, т.е. действия которые может совершать объект

//console.log(4/0);
//console.log('string'*9);

//let something;
//console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

//console.log(persone.name);
//console.log(persone["age"]);


//Создаём массив данных. В нём автоматически присваивается порядковый номер
let arr = ['plum.png','orangr.jpg','apple.bmp'];

//console.log(arr[2]);

//confirm("Вы здесь уже были?");

//let answer = confirm("Вы здесь уже были?");

//console.log(answer);//вся инфо от пользователя будет строкой

//let ganswer = prompt("Исполнилось ли вам 18 лет?", "Да");//вся инфо от пользователя будет строкой, даже если он вписал цифру
//let ganswer = +prompt("Исполнилось ли вам 18 лет?", "Да");// знак + перед prompt превратил строку в число.
//console.log(ganswer);

//console.log(typeof(ganswer));

//console.log("arr" + "-object");
//console.log(4 + "-object");

//console.log(4 + "yes");//это будет контотинация. происходит склеивание данных цифр и строки в строку
//console.log(4 - "yes");//подучем значение NoN - Not a Namber. JS говорит, что нельзя выполнить не математическую операцию


//let incr = 10,
//    decr = 10;
//incr++;//прибавляет 1-цу. Это пример префиксной формы.
//decr--;//вычитает 1-цу. Это пример префиксной формы.

//console.log(++incr);//Это пример префиксной формы.
//console.log(--decr);//Это пример префиксной формы.

//console.log(incr++);//Это пример постфиксной формы.
//console.log(decr--);//Это пример постфиксной формы.

//console.log(5%2);//остаток от деления.

//console.log("2"== 2);//сравнение значений, здесь будет "верно или истина"
//console.log("2"=== 2);//сравнение типов данных, здесь будет "ложь"

//let isChecked = false,
//    isClose = false;
//console.log(isChecked && isClose);//Двойной амперсант && логическое значение "И"
//console.log(isChecked || isClose);//Две вертикальные полоски || логическое значение "ИЛИ"
//console.log(isChecked || !isClose);//Две вертикальные полоски || логическое значение "ИЛИ", но знак отрицания "!", меняет значение на противоположное

//Условия
//if (2*6 == 8*1) {
//    console.log('Верно')
//} else {
//    console.log('Не верно')
//}

//let answer = confirm("Вам есть 18 лет?");
//if (answer) {
//    console.log('Проходите')
//} else {
//    console.log('Вам нельзя')
//};


//ПОКА НЕ ПОЛУЧИЛОСЬ
//let answer = prompt("Исполнилось ли вам 18 лет?", "Да")
//if (answer == "Да" || "Yes") {
//    console.log('Проходите, мы вас ждали')
//} else {
//    console.log('Тебе нельзя, малолетка')
//}

/* const num = 50;
if (num < 49) {
    console.log("Неправильно")
} else if (num > 100) {
    console.log('Много')
} else {
    console.log('Верно')
} */

//Циклы 
//Настройка цикла начинается с настройки итератора, например "i" это итератор (он может быть любым). 
//"i = 1" - эта связка будет работать только внутри цикла.
//"i < 8" - наш цикл закончиться тогда, когда i станет больше 8ми.
//"i++" - добавили механизм который увеличивает нашу i на 1-ку. Аналог записи Это аналог записи "i = i + 1"
/* for (let i = 1; i < 8; i++) {
    console.log(i);
} */

//ФУНКЦИИ
//Функцию обязательно нужно как-то назвать, мы назвали её 'logging', перед этим мы объявили что её создаём через "function"
function logging() {
    console.log(222)
} //Здесь мы только описали функцию. Она нигде не работает, не запущена и не вызывается, она просто создалась и существует.

//Здесь созданную функцию мы вызываем, чтобы она начала работать.
logging();
//Внутрь функции можно передавать аргументы.
function argu(a, b) {
    console.log(a + b)
}

argu(3, 5);

var hi = "Привет Мир! / Hello World!";

document.getElementById("d1").innerHTML = hi;

function out () {
    var p;
    p = document.getElementById('out');
    p.innerHTML = "Hello World!";
}

function out2 () {
    var p;
    p = document.getElementById('out2');
    p.innerHTML += "<b> Hello World! </b>";//innerHTML вставляет не только данные, но и меняет разметку HTML
}

//!Аналогично out3
function out3 () {
    var p;
    p = document.getElementById('out3');
    p.innerHTML = p.innerHTML + " Hello World!";
}

function out4 () {
    var p;
    p = document.getElementById('out4');
    p.innerText = p.innerHTML + "<b> Hello World! </b>";//при применении innerText теги не обрабатываются.
}

var drop = "<div id='d2'>";
var drop2 = 13;
var drop3 = 14;
var drop4 = "<div id='d3'>";

function out5 () {
    var p;
    p = document.getElementById('out5');
    //p.innerText = p.innerHTML + "<b> Hello World! </b>";//при применении innerText теги не обрабатываются.
    p.insertAdjacentHTML('beforeBegin', drop);//!Добавляет перед первым тегом
    p.insertAdjacentHTML('afterBegin', drop2);//!Добавляет после первого тега, но перед контентом
    p.insertAdjacentHTML('beforeEnd', drop3);//!Добавляет перед вторым тегом, но после контента
    p.insertAdjacentHTML('afterEnd', drop4);//!Добавляет после второго тега
}

var drop5 = "Hello World Roman!";

function out6 () {
    var p;//добавили переменную p
    p = document.getElementById('out6');//назначили переменную p = id разметки в html
    p.outerHTML = '<div class="one"><p id="out6"></p></div>';//Заменили полностью строку
    document.getElementById("out6").innerHTML = drop5;//добавили в строку переменную
}





