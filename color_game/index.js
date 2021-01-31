const gameLength = 6;
const colorArray = [];
let targetColor = '';

buildColorArray(gameLength);



// Generate a random number between 0 and 266, use this to build an RGB string
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
}
function selectTargetColor(){
  let rand = Math.floor(Math.random() *(gameLength));
  console.log(rand);
  targetColor = colorArray[rand];
  return targetColor;
}

// console.log('target color',targetColor, colorArray);
