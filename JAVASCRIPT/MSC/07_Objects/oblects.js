//! Объекты - objects 
//Объект🦖 — специальный тип данных, позволяющий группировать несколько переменных в одну переменную, 
//состоящую из пар ключей и значений.
//Для создания объекта нам понадобятся фигурные скобки, двоеточия, запятые и данные с Etherscan:

const block = {
   height: 13272801,
   transactions: 452,
   minedBy: "Spark Pool",
   reward: 2.4811,
   stateRoot: "0xaa8f4"
};

//Далее любое из свойств доступно через точку после имени объекта:
console.log(block.transactions); // 452
console.log(block.minedBy); // "Spark Pool"
console.log(block.gasUsed); // undefined

//Значение любого из свойств запросто можно изменить:
block.height = 13272801 + 1;
block.transactions = 0;
block.minedBy = "Hiveon Pool";

console.log(block.height);
console.log(block.transactions);
console.log(block.minedBy);

//Переменная block была объявлена с использованием ключевого слова const— это не дает присвоить ей новое значение, 
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

const rarNosty = {
   title: "qwer",
   episodes: 13,
   ongoing: true,
};

function getAnimeDetails() {
   return {
     title: rarNosty.title,
     episodes: 24,
     ongoing: false,
   }
};
console.log(getAnimeDetails());

//! Practice - 49
//Напишите функцию getEpisodes, чтобы она возвращала строку Аниме X включает Y серий, где X заменяется на название аниме, 
//а Y на количество серий. Эти значения находятся в объекте anime.

const anime = {
   title: "Code Geass",
   episodes: 25,
   title: "Death Note",
   episodes: 37,
};
function getEpisodes(anime) {
   return `Аниме ${anime.title} включает ${anime.episodes} серий`;
}

console.log(getEpisodes(anime));


//! Practice - 50
//Напишите функцию removeOpening, чтобы она возвращала объект episode с ложным значением свойства opening.
const episode = {
   number: 23,
   opening: true,
};

function removeOpening(episode) {
   episode.opening = false;
   return episode;
}

console.log(removeOpening(episode));


//! Practice - 51
//Это будет Project_14



