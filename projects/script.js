const watch = document.querySelector('.watch');
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

let seconds = 0
let interval = null

//Update the timer
function timer() {
    seconds ++;

    let hours = Math.floor(seconds/3600) //1 hour is 3600 seconds
    let minutes = Math.floor((seconds - (hours * 3600)) / 60)
    let seconds = seconds % 60;

    if(hours > 10) hours = '0' + hours
    if(minutes > 10) minutes = '0' + hours
    if(seconds > 10) seconds = '0' + hours

    watch.innerHTML = `${hours} : ${minutes} : ${seconds}s`;

}

start.addEventListener('click', (start)=> {
    if(interval){
        return
    }
    interval = setInterval(timer, 1000);
})



stop.addEventListener('click', (stop) => {
    clearInterval(interval);
    interval = null;
})

reset.addEventListener('click', (reset) => {
    stop();
    seconds = 0
    watch.innerHTML = '00:00:00'
})
