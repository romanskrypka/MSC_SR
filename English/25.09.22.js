//функция запускающая другие функции на html странице. Встроена в параметры body. Параметр, body может запускать только одну функцию, и эта функция создана что-бы обойти это ограничение.
function out() {
   trPh_ru ();
   trSe_ru ();
}

//Перевести фразы
let trPh_ru01 = "Зарабатывать токены";
let trPh_en_I_01 = "Earn tokens";
let trPh_en_01 = "Earn tokens";

let trPh_ru02 = "Получить приглашение";
let trPh_en_I_02 = "Get invitation";
let trPh_en_02 = "Get Invitation";

let trPh_ru03 = "Запустить приложение";
let trPh_en_I_03 = "Launch application";
let trPh_en_03 = "Run the application";

let trPh_ru04 = "Принять вызов";
let trPh_en_I_04 = "Take challenge";
let trPh_en_04 = "Take the Challenge";

let trPh_ru05 = "Часть вопроса";
let trPh_en_I_05 = "Part of the question";//Кого чего? Родительный падеж.
let trPh_en_05 = "Part of the question";

let trPh_ru06 = "Приобрести дом";
let trPh_en_I_06 = "Buy a house";
let trPh_en_06 = "Buy a house";

let trPh_ru07 = "Встроенный шкаф";
let trPh_en_I_07 = "Built-in closet";//Тупо скопировал
let trPh_en_07 = "Built-in closet";

let trPh_ru08 = "Валюта а также прочие активы";
let trPh_en_I_08 = "Currency as well other assets";
let trPh_en_08 = "Currency as well others assets";

//Перевести предложения
let trSe_ru09 = "Будет дождь.";
let trSe_en_I_09 = "It will to rain";
let trSe_en_09 = "It's going to rain.";

let trSe_ru10 = "Плохо не знать, как работает машина.";
let trSe_en_I_10 = "It is bad to not know, how a car work.";
let trSe_en_10 = "It's bad to not know how a machine works.";

let trSe_ru11 = "Солнечно.";
let trSe_en_I_11 = "It is sunny.";
let trSe_en_11 = "Sunny.";

let trSe_ru12 = "Здесь всегда прохладно в январе.";
let trSe_en_I_12 = "It is here always chilly in January.";//! не правильно употребил слово here
let trSe_en_12 = "It's always chilly here in January.";

let trSe_ru13 = "На вечеринке было весело.";
let trSe_en_I_13 = "It was fun on the party.";
let trSe_en_13 = "It was fun at the party.";

let trSe_ru14 = "Трудно покидать свою страну.";
let trSe_en_I_14 = "It is difficult to leave your country.";
let trSe_en_14 = "It's hard to leave your country.";

let trSe_ru15 = "Становится темно.";
let trSe_en_I_15 = "It is getting dark.";
let trSe_en_15 = "It is getting dark.";

let trSe_ru16 = "Сейчас 12 часов.";
let trSe_en_I_16 = "It's now 12 o'clock.";
let trSe_en_16 = "It's now 12 o'clock.";

let trSe_ru17 = "Будет сложно запустить этот проект.";
let trSe_en_I_17 = "It will be launch difficult this project.";
let trSe_en_17 = "It's going to be hard to get this project up and running.";

let trSe_ru18 = "Важно помнить эти правила.";
let trSe_en_I_18 = "It is important to remember these rules.";
let trSe_en_18 = "It is important to remember these rules.";

let trSe_ru19 = "Пора делать домашнюю работу.";
let trSe_en_I_19 = "It's time to do your homework.";
let trSe_en_19 = "It's time to do your homework.";

let trSe_ru20 = "На прошлой неделе шел сильный снег.";
let trSe_en_I_20 = "It snowed heavily last week.";
let trSe_en_20 = "It snowed heavily last week.";

let trSe_ru21 = "Уже утро.";
let trSe_en_I_21 = "It is morning already.";
let trSe_en_21 = "It's morning already.";

let trSe_ru22 = "Эту статью легко читать.";
let trSe_en_I_22 = "There article easy to read.";
let trSe_en_22 = "This article is easy to read.";

let trSe_ru23 = "Невозможно в это поверить!";
let trSe_en_I_23 = "This it is not to believe!";
let trSe_en_23 = "Impossible this believe it!";

function trPh_ru () {
   var p;
   p = document.getElementById('ru01');
   p.innerHTML = trPh_ru01;
   p = document.getElementById('en_I_01');
   p.innerHTML = "Roman:" + " " + trPh_en_I_01;
   p = document.getElementById('en_01');
   p.innerHTML = trPh_en_01;

   p = document.getElementById('ru02');
   p.innerHTML = trPh_ru02;
   p = document.getElementById('en_I_02');
   p.innerHTML = "Roman:" + " " + trPh_en_I_02;
   p = document.getElementById('en_02');
   p.innerHTML = trPh_en_02;

   p = document.getElementById('ru03');
   p.innerHTML = trPh_ru03;
   p = document.getElementById('en_I_03');
   p.innerHTML = "Roman:" + " " + trPh_en_I_03;
   p = document.getElementById('en_03');
   p.innerHTML = trPh_en_03;

   p = document.getElementById('ru04');
   p.innerHTML = trPh_ru04;
   p = document.getElementById('en_I_04');
   p.innerHTML = "Roman:" + " " + trPh_en_I_04;
   p = document.getElementById('en_04');
   p.innerHTML = trPh_en_04;

   p = document.getElementById('ru05');
   p.innerHTML = trPh_ru05;
   p = document.getElementById('en_I_05');
   p.innerHTML = "Roman:" + " " + trPh_en_I_05;
   p = document.getElementById('en_05');
   p.innerHTML = trPh_en_05;

   p = document.getElementById('ru06');
   p.innerHTML = trPh_ru06;
   p = document.getElementById('en_I_06');
   p.innerHTML = "Roman:" + " " + trPh_en_I_06;
   p = document.getElementById('en_06');
   p.innerHTML = trPh_en_06;

   p = document.getElementById('ru07');
   p.innerHTML = trPh_ru07;
   p = document.getElementById('en_I_07');
   p.innerHTML = "Roman:" + " " + trPh_en_I_07;
   p = document.getElementById('en_07');
   p.innerHTML = trPh_en_07;

   p = document.getElementById('ru08');
   p.innerHTML = trPh_ru08;
   p = document.getElementById('en_I_08');
   p.innerHTML = "Roman:" + " " + trPh_en_I_08;
   p = document.getElementById('en_08');
   p.innerHTML = trPh_en_08;
}

function trSe_ru () {
   var s;
   s = document.getElementById('ru09');
   s.innerHTML = trSe_ru09;
   s = document.getElementById('en_I_09');
   s.innerHTML = "Roman:" + " " + trSe_en_I_09;
   s = document.getElementById('en_09');
   s.innerHTML = trSe_en_09;

   s = document.getElementById('ru10');
   s.innerHTML = trSe_ru10;
   s = document.getElementById('en_I_10');
   s.innerHTML = "Roman:" + " " + trSe_en_I_10;
   s = document.getElementById('en_10');
   s.innerHTML = trSe_en_10;

   s = document.getElementById('ru11');
   s.innerHTML = trSe_ru11;
   s = document.getElementById('en_I_11');
   s.innerHTML = "Roman:" + " " + trSe_en_I_11;
   s = document.getElementById('en_11');
   s.innerHTML = trSe_en_11;

   s = document.getElementById('ru12');
   s.innerHTML = trSe_ru12;
   s = document.getElementById('en_I_12');
   s.innerHTML = "Roman:" + " " + trSe_en_I_12;
   s = document.getElementById('en_12');
   s.innerHTML = trSe_en_12;

   s = document.getElementById('ru13');
   s.innerHTML = trSe_ru13;
   s = document.getElementById('en_I_13');
   s.innerHTML = "Roman:" + " " + trSe_en_I_13;
   s = document.getElementById('en_13');
   s.innerHTML = trSe_en_13;

   s = document.getElementById('ru14');
   s.innerHTML = trSe_ru14;
   s = document.getElementById('en_I_14');
   s.innerHTML = "Roman:" + " " + trSe_en_I_14;
   s = document.getElementById('en_14');
   s.innerHTML = trSe_en_14;

   s = document.getElementById('ru15');
   s.innerHTML = trSe_ru15;
   s = document.getElementById('en_I_15');
   s.innerHTML = "Roman:" + " " + trSe_en_I_15;
   s = document.getElementById('en_15');
   s.innerHTML = trSe_en_15;

   s = document.getElementById('ru16');
   s.innerHTML = trSe_ru16;
   s = document.getElementById('en_I_16');
   s.innerHTML = "Roman:" + " " + trSe_en_I_16;
   s = document.getElementById('en_16');
   s.innerHTML = trSe_en_16;

   s = document.getElementById('ru17');
   s.innerHTML = trSe_ru17;
   s = document.getElementById('en_I_17');
   s.innerHTML = "Roman:" + " " + trSe_en_I_17;
   s = document.getElementById('en_17');
   s.innerHTML = trSe_en_17;

   s = document.getElementById('ru18');
   s.innerHTML = trSe_ru18;
   s = document.getElementById('en_I_18');
   s.innerHTML = "Roman:" + " " + trSe_en_I_18;
   s = document.getElementById('en_18');
   s.innerHTML = trSe_en_18;

   s = document.getElementById('ru19');
   s.innerHTML = trSe_ru19;
   s = document.getElementById('en_I_19');
   s.innerHTML = "Roman:" + " " + trSe_en_I_19;
   s = document.getElementById('en_19');
   s.innerHTML = trSe_en_19;

   s = document.getElementById('ru20');
   s.innerHTML = trSe_ru20;
   s = document.getElementById('en_I_20');
   s.innerHTML = "Roman:" + " " + trSe_en_I_20;
   s = document.getElementById('en_20');
   s.innerHTML = trSe_en_20;

   s = document.getElementById('ru21');
   s.innerHTML = trSe_ru21;
   s = document.getElementById('en_I_21');
   s.innerHTML = "Roman:" + " " + trSe_en_I_21;
   s = document.getElementById('en_21');
   s.innerHTML = trSe_en_21;

   s = document.getElementById('ru22');
   s.innerHTML = trSe_ru22;
   s = document.getElementById('en_I_22');
   s.innerHTML = "Roman:" + " " + trSe_en_I_22;
   s = document.getElementById('en_22');
   s.innerHTML = trSe_en_22;

   s = document.getElementById('ru23');
   s.innerHTML = trSe_ru23;
   s = document.getElementById('en_I_23');
   s.innerHTML = "Roman:" + " " + trSe_en_I_23;
   s = document.getElementById('en_23');
   s.innerHTML = trSe_en_23;
}










