// Сначала выполняется синхронный код потом асинхронный

/*
setTimeout() - принимает колбек, таймер и необязательные параметры которые можно передать в колбек
setTimeout() - возвращает свой идентификатор и приэтом продолжает тикать
clearTimeout(timerId) - синхронная операция, принимает идентификатор таймера и очищает его
*/

const log = (one, two, three) => {
    console.log(`After timeout ${one} ${two} ${three}`)
}

console.log("Before")
//setTimeout(log(111, 222, 333), 1000);
setTimeout(log, 1000, 111, 222, 333);
console.log("After")

/* даже если через 0 мс такая же херня
"Before"
"After"
"Timeout 1000"
*/

/*
У каждого таймера есть идентификатор
его нужно получать на случай если timeout нужно очистить
*/
// и этот тож будет запущен и отработает если не очистить
const timerId = setTimeout(log, 1000, 111, 222, 333); 
console.log(timerId)
clearTimeout(timerId)

// https://www.youtube.com/watch?v=G0h9eqxACZA&feature=youtu.be