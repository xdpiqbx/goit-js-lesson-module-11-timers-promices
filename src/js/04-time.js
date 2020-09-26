console.log("=============== Date ===============");
//https://youtu.be/G0h9eqxACZA?t=1137

const date = new Date(); // вернёт объект
const dateNow = Date.now(); // вернёт число (статический метод), миллисекунды с 1970

//console.dir(date.getTime()); // получить колличество миллисекунд
//console.dir(date);

// https://momentjs.com/
// https://date-fns.org/

/*
<div class="timer">
    <p class="clockface js-clockface"></p>
    <div class="actions">
        <button class="timer-btn" data-action-stop>Stop</button>
        <button class="timer-btn" data-action-start>Start</button>
    </div>
</div>
*/

const refs = {
    startBth: document.querySelector("button[data-action-start]"),
    stoptBth: document.querySelector("button[data-action-stop]"),
    clockface: document.querySelector(".js-clockface")
}


const timer = {
    intervalId: null,
    isActive: false,

    start (){
        
        if(this.isActive){
            return;
        }

        this.isActive = true;
        const startTime = Date.now();

        updateClockface(0)

        this.intervalId = setInterval(()=>{
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            updateClockface(deltaTime);
        }, 1000);
    },

    stop (){
        this.isActive = false;
        clearInterval(this.intervalId)
        this.intervalId = null;
        updateClockface(0)
    }
    
}

//https://youtu.be/G0h9eqxACZA?t=1901

function updateClockface(time){
    const hour  = pad( Math.floor( (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ) );
    const min   = pad( Math.floor( (time % (1000 * 60 * 60)) / (1000 * 60) ) );
    const sec   = pad( Math.floor( (time % (1000 * 60)) / 1000 ) );
    refs.clockface.textContent = `${hour}:${min}:${sec}`;
    //console.log(`${hour}:${min}:${sec}`);
}

refs.startBth.addEventListener("click", timer.start.bind(timer)); // без bind в this лежит refs.startBth
refs.stoptBth.addEventListener("click", timer.stop.bind(timer));

function pad (value){
    return String(value).padStart(2, "0");
}