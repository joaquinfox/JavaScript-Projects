#Number Guessing Game#
A random number generator is used to build text RGB text strings as in
```
function generateSingleColor(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let RGB = `rgb(${r}, ${g}, ${b})`;
  return RGB;
}

```
Text strings are displayed in html as a clickable palette. A target color  
is picked at random and displayed as text. When the user clicks the color  
that matches the target, they win the game.

##Code Features##
The game has an 'easy' mode which limits the color palette to 3, and a 'hard' mode of length 6.
Two game mode buttons trigger setGameDifficulty()

```
function setGameDifficulty(d){
  if(d === 'EASY'){
    gameLength = 3;
  }else{
    gameLength = 6;
  }
  reset(gameLength);
  console.log(gameLength, colorArray)
}
```
