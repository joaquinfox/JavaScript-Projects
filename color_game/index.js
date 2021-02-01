const gameLength = 6;
let colorArray = [];
let targetColor = '';

const colorGridDisplay= document.querySelectorAll('.oneColor');
const targetColorDisplay = document.querySelector('#targetColorDisplay');
const resetBtn = document.querySelector('#reset');
const userMsg = document.querySelector('#userMsg');
const header = document.querySelector('header');

reset();
resetBtn.addEventListener('click', reset);


function reset(){
  resetBtn.textContent = 'reset';
  userMsg.textContent = '';
  colorArray = [];
  header.style.backgroundColor = '#fff';
  buildColorArray(gameLength);
}

// Game Logic
for(let i = 0; i < colorGridDisplay.length; i++){
colorGridDisplay[i].addEventListener('click', ()=>evaluateClick(colorGridDisplay[i].style.backgroundColor));
}

function evaluateClick(color){
    if(color === targetColor){
    userMsg.textContent = 'You got it!';
    header.style.backgroundColor = targetColor;
    resetBtn.textContent = 'new game?';
  }else{
    userMsg.textContent = 'Try again'
  }
  
}


function generateSingleColor(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let RGB = `rgb(${r}, ${g}, ${b})`;
  return RGB;
}

function buildColorArray(l){
    for(let i = 0; i < l; i++){
      let newColor = generateSingleColor();
      colorArray.push(newColor);
  }
  selectTargetColor();
  applyColors();
  applyTargetColor()
}

function selectTargetColor(){
  let rand = Math.floor(Math.random() *(gameLength));
  targetColor = colorArray[rand];
  return targetColor;
}

function applyColors(){
  for(let i = 0; i < colorArray.length; i++){
    colorGridDisplay[i].style.backgroundColor = colorArray[i];
  }
}

function applyTargetColor(){
  targetColorDisplay.textContent = targetColor;
}

