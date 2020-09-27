console.log("=============== Promices ===============");
//https://youtu.be/lnmaJ4dDMlg?t=1114
/*
Promice имеет два состояния
    Pending — ожидание.
    Settled — выполнен:
        fullfilled — выполнено успешно
        rejected — выполнено с ошибкой.
*/
{
    //Создание промиса
    const promice = new Promise((resolve, reject)=>{ //конструктор промиса получает колбек с двумя параметрами
        const string = "Hello from promice"
        resolve(string)
        //reject(string)
    });

    /*
    resolve, reject - функции при вызове которых Промис переходит в определённое состояние
    у промиса есть 2 внутренних свойства [[PromiseState]] и [[PromiseResult]]
    */

    //console.log(promice) // если НЕ вызвать resolve или reject Promise {<pending>} - ОЖИДАЕТ
    /*
    [[PromiseState]]: "pending"
    [[PromiseResult]]: undefined
    */

    //console.log(promice) //При resolve Promise {<fulfilled>: "Hello from promice"}
    /*
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: "Hello from promice"
    */

    //console.log(promice) //При reject Promise {<rejected>: "Hello from promice"}
    /*
    [[PromiseState]]: "rejected"
    [[PromiseResult]]: "Hello from promice" - значение с которым промис отклонён
    + Ошибка - Uncaught (in promise) Hello from promice
    */
}
{
const promise = new Promise( (resolve, reject) => {
    const sucsess = Math.random() > 0.5;
    setTimeout(() => {
        if(sucsess) {
            resolve("Успех");
        }
        reject("Error");
    }, 500);
});

// в then можно передать колбек который получит результат успешной операции
// вообще он принимает 2 колбека onResolve (если всё хорошо), onReject (если всё плохо) они выполнятся если промис перешел в settled
// это не всегда удобно, в большинстве случаев лучше использовать catch вместо второго колбека

//promise.then(result => console.log(result), error => console.log(error));

console.log("Before")

promise
    .then(result => console.log(result))    
    .catch(error => console.log(error))
    .finally(() => {
        // будет выполнено не зависимо от результатоов того что было выше
    });

console.log("After")
}
{
    /* 
    Цепочки
    asyncFn(...)
    .then(...)
    .then(...)
    .then(...)
    .catch(...); - Всегда один и ставится в самом конце

    */
    const promise = new Promise((resolve)=>{
        resolve(5);
    })

    promise
        .then( x => {
            console.log(`x: ${x}`);
            return x * 2; // так следующий then получит x * 2
        })
        .then( y => { // в "у" пришел x * 2
            console.log(`x: ${y}`);
            return y * 2;
        })
        .then( z => {
            console.log(`x: ${z}`);
            return z * 2;
        })
}
//https://youtu.be/lnmaJ4dDMlg?t=2440