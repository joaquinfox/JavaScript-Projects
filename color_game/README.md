**Purpose**
- Given a color display and an rgb value, select the color that matches the given value.
*html/CSS*
 - Display a grid of 6 colors and a text box with an rgb value. The value displayed, or target display, is one of the displayed values slected at random.
 - Game logic evaluates a user click. If user clicks the correct value, she wins, else
    - User plays again, or
    - User resets the board, which renders new colors and a new target color
*Problem Statement*
- Build a game board and logic that lets a user pick colors from a grid, in order to match a target color.
*I/O Data Types*
- An RGB target color will be displayed as text.
- A display grid of RGB colors, where the background color will be the color itself. Each square will be clickable and the game logic will listen for clicks.
- User feed back will include text messaging and game board style alterations

*Function Example*
 ```
 function generateRandomColors(gameLength){
   // Use Math.random to generate RGB values and make into a RGB text object.\
   // Build out an array of colors
   // Select one of these at random and make it the color target
   // Display the target color
 }
 
 function evaluateUserClick(){
   //When user clicks evaluate that color against target
 }
 
 function gameReset(){
   //Provide a reset button which generates new colors and targets and resets all messaging and logic
 }
 
 ```
 
 *Function Template*
  ```
// Generate a random number between 0 and 266, use this to build an RGB string
function rand(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let RBB = `rgb(${r}, ${g}, ${b})`;
  colorArray.push(RGB)
 
  
}
 function generateRandomColors(gameLength){
   // Use Math.random to generate RGB values and make into a RGB text object.\
   // Build out an array of colors
   // Select one of these at random and make it the color target
   // Display the target color
 }
 
 function evaluateUserClick(){
   //When user clicks evaluate that color against target
 }
 
 function gameReset(){
   //Provide a reset button which generates new colors and targets and resets all messaging and logic
 }
 
 ```
