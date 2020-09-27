console.log("=============== Promices ===============");
//https://youtu.be/lnmaJ4dDMlg?t=2440
// Промисы это новый паттерн чтоб избегать колбеков

{
    const fetchUser = userName => {
        const success = Math.random() > 0.4;

        const user = {name: userName, age: 26, posts: 74};
        const error = "Произошла ошибка";

        return success ? user : error;
    }

    console.log(fetchUser("Mango"));
}

{ // Паттерн колбеков (так было до Промисов)
    const fetchUser = (userName, onSuccess, onError) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            
            if(success){
                const user = {name: userName, age: 26, posts: 74};
                onSuccess(user);
                return;
            }
            const error = "Произошла ошибка";
            onError(error);
        }, 1000)
    }

    fetchUser("Mango", onFetchUserSuccess, onFetchUserError);

    function onFetchUserSuccess(user){
        console.log(user);
    }
    function onFetchUserError(error){
        console.log(error)
    }
}

{ // Так это делают на Промисах)
    const fetchUser = (userName) => {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                const success = Math.random() > 0.5;
                if(success){
                    const user = {name: userName, age: 26, posts: 74};
                    resolve(user);
                }
                const error = "Произошла ошибка";
                reject(error);
            }, 2000)
        })
    }

    fetchUser("Mango")
        .then(onFetchUserSuccess)
        .catch(onFetchUserError);

    function onFetchUserSuccess(user){
        console.log(user);
    }
    function onFetchUserError(error){
        console.log(error)
    }
}

{
    const makePromice = delay => {
        return new Promise( (resolve) => {
            setTimeout(() => {
                resolve(delay)
            }, delay)
        } )
    }

    //это просто регистрации
    //очерёдность будет 1 2 3 4 5 сек
    makePromice(2000).then(console.log)
    makePromice(5000).then(console.log)
    makePromice(4000).then(console.log)
    makePromice(3000).then(console.log)
    makePromice(1000).then(console.log)
}