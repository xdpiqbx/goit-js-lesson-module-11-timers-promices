console.log("=============== Interval ===============")
const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`)

// setInterval - повторяет вызов колбека через заданное время
// возвращает идентификатор
//setInterval(logger, 1000, 1000)

// https://youtu.be/G0h9eqxACZA?t=172

let subscriptionCounter = 0;
let hasSubscribed = false;

console.log("Before")
const intervalId = setInterval( () => {
    if (subscriptionCounter === 3 || hasSubscribed){
        console.log("Interval has stopped");
        clearInterval(intervalId);
        return;
    }
    console.log(`Subscribe ${subscriptionCounter}`);
    subscriptionCounter += 1;
    hasSubscribed = true;
}, 1000)
console.log("After")

//Notification in video https://youtu.be/G0h9eqxACZA?t=622
// не забывать чистить таймаут, возможно уже не нужно ждать конца интервала

//https://youtu.be/G0h9eqxACZA?t=1137