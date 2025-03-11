let startTime, updatedTime, stopTime = 0, interval;
let flag = false;

const display = document.querySelector('.display');
const toggleBtn = document.getElementById('toggleBtn');
const laps = document.querySelector('.laps');


let intervalId;
let hours=0, mins=0, secs=0, ms=0;
function startStopwatch() {
    if(!intervalId){
        toggleBtn.innerText="Pause";
        flag= false;
        intervalId= setInterval(() => {
            displayItems(hours,mins,secs,ms);
            if (ms==1000){
                secs++;
                ms =0;
                if (secs ==60){
                    mins++;
                    secs=0;
                    if (mins==60){
                        hours++;
                        mins=0;
                    }
                }
            }
            ms +=10;
        }, 10);
    }
}

function displayItems(hours,minutes,seconds,milliseconds){
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds/10 < 10 ? "0" + milliseconds/10 : milliseconds/10;
    return display.innerText = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function recordLap(hours,minutes,seconds,milliseconds) {
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds/10 < 10 ? "0" + milliseconds/10 : milliseconds/10;

    const lapElement = document.createElement('div');
    lapElement.textContent = `Lap ${hours}:${minutes}:${seconds}.${milliseconds}`;
    laps.appendChild(lapElement);
}



function pauseResume(){
    if(!flag){
        if(intervalId){
            clearInterval(intervalId);
            intervalId=null;
            toggleBtn.innerText="Resume";
            flag= true;
        }
    }
    else{
        startStopwatch();
        flag= false;
    }
}

function resetBtn(){
    hours=0, mins=0, secs=0, ms=0;
    clearInterval(intervalId);
    intervalId =null;
    displayItems(hours,mins,secs,ms);
    laps.innerHTML = '';
    flag = false;
    toggleBtn.innerText="Pause";
}



// function updateDisplay(time) {
//     const date = new Date(time);
//     const hours = String(date.getUTCHours()).padStart(2, '0');
//     const minutes = String(date.getUTCMinutes()).padStart(2, '0');
//     const seconds = String(date.getUTCSeconds()).padStart(2, '0');
//     const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
//     display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
// }

// function startStopwatch() {
//     startTime = new Date() - stopTime;
//     interval = setInterval(() => {
//         updatedTime = new Date() - startTime;
//         updateDisplay(updatedTime);
//     }, 10);
// }

// function stopStopwatch() {
//     clearInterval(interval);
//     stopTime = updatedTime;
// }

// function resetStopwatch() {
//     clearInterval(interval);
//     stopTime = 0;
//     updateDisplay(0);
//     laps.innerHTML = '';
//     lapTimes = [];
// }

// function recordLap() {
//     const currentTime = updatedTime;
//     const lapTime = lapTimes.length > 0 ? currentTime - lapTimes[lapTimes.length - 1] : currentTime;
//     lapTimes.push(currentTime);
    
//     const lapElement = document.createElement('div');
//     lapElement.textContent = `Lap ${lapTimes.length}: ${formatTime(lapTime)}`;
//     laps.appendChild(lapElement);
// }

// function formatTime(time) {
//     const date = new Date(time);
//     const minutes = String(date.getUTCMinutes()).padStart(2, '0');
//     const seconds = String(date.getUTCSeconds()).padStart(2, '0');
//     const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
//     return `${minutes}:${seconds}.${milliseconds}`;
// }

// startStopBtn.addEventListener('click', () => {
//     if (running) {
//         stopStopwatch();
//         startStopBtn.textContent = 'Start';
//     } else {
//         startStopwatch();
//         startStopBtn.textContent = 'Stop';
//     }
//     running = !running;
// });

// stopBtn.addEventListener('click', () => {
//     if (running) {
//         recordLap();
//     }
// });

// resetBtn.addEventListener('click', resetStopwatch);
