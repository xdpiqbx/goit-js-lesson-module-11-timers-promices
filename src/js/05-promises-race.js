console.log("=============== Promises ===============");
//https://youtu.be/lnmaJ4dDMlg?t=3334

const horces = [
    'Secretariat',
    'Eclipse',
    'West Aus',
    'Fly Fox',
    'Seabisc'
];

const getRandomTime = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const run = horse => {
    return new Promise((resolve) => {
        const time = getRandomTime(2000, 3500);
        setTimeout(() => {
            resolve({horse, time})
        }, time)
    })
}

const promises = horces.map(run) // это синхронный код, вернулась пачка промисов которые ожидают выполнения 
//- это то же самое только длиннее
//const promices = horces.map(horse => run(horse))
console.log(promises)

//Promise.all Дождётся пока выполнятся все промисы
//Если хотябы один не выполнится - не выполниться вся операция и отработает catch
Promise.all(promises).then(results => console.log(results)).catch(error => console.log(error))

//Promise.race Дождётся выполнения самого первого промиса
Promise.race(promises).then(results => console.log(results)).catch(error => console.log(error))

//run(horces[0]).then(result => console.log(result))