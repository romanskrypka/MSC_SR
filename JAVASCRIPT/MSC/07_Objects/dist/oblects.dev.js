"use strict";

var _anime;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//! Объекты - objects 
//Объект🦖 — специальный тип данных, позволяющий группировать несколько переменных в одну переменную, 
//состоящую из пар ключей и значений.
//Для создания объекта нам понадобятся фигурные скобки, двоеточия, запятые и данные с Etherscan:
var block = {
  height: 13272801,
  transactions: 452,
  minedBy: "Spark Pool",
  reward: 2.4811,
  stateRoot: "0xaa8f4"
}; //Далее любое из свойств доступно через точку после имени объекта:

console.log(block.transactions); // 452

console.log(block.minedBy); // "Spark Pool"

console.log(block.gasUsed); // undefined
//Значение любого из свойств запросто можно изменить:

block.height = 13272801 + 1;
block.transactions = 0;
block.minedBy = "Hiveon Pool";
console.log(block.height);
console.log(block.transactions);
console.log(block.minedBy); //Переменная block была объявлена с использованием ключевого слова const— это не дает присвоить ей новое значение, 
//но не ограничивает возможность изменять содержимое уже присвоенного объекта.
//? Как работать с объектами?
//Объект — это структура данных, состоящая из ключей и их значений
//Можно думать об объекте как о способе группировать переменные
//Имена объектов длиннее одного слова принято писать кемелКейсом
//Доступ к свойствам осуществляется через точку после имени объекта
//const оставляет возможность редактирования содержимого объекта
//! Practice - 48
//Напишите функцию getAnimeDetails, чтобы она возвращала объект, состоящий из трех свойств: 
//title (строка), episodes (число), ongoing (true/false).

var rarNosty = {
  title: "qwer",
  episodes: 13,
  ongoing: true
};

function getAnimeDetails() {
  return {
    title: rarNosty.title,
    episodes: 24,
    ongoing: false
  };
}

;
console.log(getAnimeDetails()); //! Practice - 49
//Напишите функцию getEpisodes, чтобы она возвращала строку Аниме X включает Y серий, где X заменяется на название аниме, 
//а Y на количество серий. Эти значения находятся в объекте anime.

var anime = (_anime = {
  title: "Code Geass",
  episodes: 25
}, _defineProperty(_anime, "title", "Death Note"), _defineProperty(_anime, "episodes", 37), _anime);

function getEpisodes(anime) {
  return "\u0410\u043D\u0438\u043C\u0435 ".concat(anime.title, " \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 ").concat(anime.episodes, " \u0441\u0435\u0440\u0438\u0439");
}

console.log(getEpisodes(anime)); //? Могут ли в объекте быть одинаковые ключи? если да, то правильно ли я понимаю, что их от туда можно выудить через forEach?
//? Может ли ключ иметь в своих значениях массив? в текущем варианте выводиться исключительно последняя пара ключ - значение.
//ответ: одинаковые ключи нельзя сделать - последняя пара ключ:значение всегда перезапишет предыдущую. 
//поэтому выводится в консоль последнее значение
//ключ может иметь любой тип данных в качестве своего значения. 
//объект - это как хранилище с подписанными полками - ищем по ключу и смотрим, что там на полке лежит.
//через forEach напрямую нельзя выудить - это метод массивов
//перебрать свойства объекта можно через цикл for...in - https://learn.javascript.ru/object#forin 
//! Practice - 50
//Напишите функцию removeOpening, чтобы она возвращала объект episode с ложным значением свойства opening.

var episode = {
  number: 23,
  opening: true
};

function removeOpening(episode) {
  episode.opening = false;
  return episode;
}

console.log(removeOpening(episode)); //! Practice - 51
//Это будет Project_14