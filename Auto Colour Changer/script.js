const hexColour ='0123456789ABCDEF';
let intervalcode;

function startColouring(){
    if(!intervalcode){
        intervalcode= setInterval(() => {
            let colourCode='#';
            for(let i=0; i<6;i++){
                colourCode += hexColour[Math.floor(Math.random() * 16)] ;
            }
            document.querySelector('body').style.backgroundColor = colourCode;
        },1000);
    }
}

function stopColouring(){
    clearInterval(intervalcode);
    intervalcode=null;
}

document.querySelector('.start').addEventListener("click",startColouring);
document.querySelector('.stop').addEventListener("click", stopColouring);