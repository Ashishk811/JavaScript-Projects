let countdownInterval;
let totalSeconds;


function totalSecondsCalculate(){
	const hours = parseInt(document.getElementById('hours').value) || 0;
	const minutes = parseInt(document.getElementById('minutes').value) || 0;
	const seconds = parseInt(document.getElementById('seconds').value) || 0;
	return (hours * 3600) + (minutes * 60) + seconds;
}

function displayCountdown(){
	const display = document.getElementById('countdown');
	
	let hrs = Math.floor(totalSeconds / 3600);
	let mins = Math.floor((totalSeconds % 3600) / 60);
	let secs = Math.floor(totalSeconds % 60);

	hrs = hrs < 10 ? "0" + hrs : hrs;
	mins = mins < 10 ? "0" + mins : mins;
	secs = secs < 10 ? "0" + secs : secs;

	display.innerText = hrs + ":" + mins + ":" + secs;	  
}

function startCountdown() {
	if(!countdownInterval){
		totalSeconds = totalSecondsCalculate();
      	countdownInterval = setInterval(()=>{
			if (totalSeconds >= 0) {
				displayCountdown();
				totalSeconds--;
			} else {
				clearInterval(countdownInterval);
				countdownInterval=null;
				inputValueToNull();
			}
		}, 1000);
	}
}

function pauseCountdown() {
    clearInterval(countdownInterval);
	countdownInterval=null;
}

function resumeCountdown() {
      if (!countdownInterval) {
        countdownInterval = setInterval(function () {
          if (totalSeconds >= 0) {
            displayCountdown();
            totalSeconds--;
          } else {
            clearInterval(countdownInterval);
			countdownInterval=null;
			inputValueToNull();
          }
        }, 1000);
      }
}


function inputValueToNull(){
	document.getElementById('hours').value=null;
	document.getElementById('minutes').value=null;
	document.getElementById('seconds').value=null;
}