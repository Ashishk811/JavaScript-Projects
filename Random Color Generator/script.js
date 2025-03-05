document.querySelector('.box').style.backgroundColor='rgb(255,255,255)';

function randomColourGenerator () {
    let red= Math.floor(Math.random()*256); //256 is highest value
    let blue= Math.floor(Math.random()*256);
    let green= Math.floor(Math.random()*256);
    return `rgb(${red},${blue},${green})`;
}

function displayColour(){
const box = document.querySelector('.box');
let genratedColour = randomColourGenerator();
box.style.backgroundColor=genratedColour;
}

document.querySelector('#btn').addEventListener("click",()=>{
    randomColourGenerator();
    displayColour();
})