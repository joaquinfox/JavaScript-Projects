const pElements = document.querySelectorAll('p');
const ulEl = document.querySelector('ul');
let showDescription = false;
const data = [
  {
  title:'number guessing game',
  desc: 'A user guesses at a randomly generated number, and game logic evaluates user responses and provides user feedback.',
  },
  {
  title:'color picker game',
  desc:'This game uses random number generation and packages these as an RGB text string to arrive at a random color pattern. User is presented with a color pallete and instructed to click the color that matches a target color.',
  },
  {
  title:'Local Storage API Demo',
  desc:'A demonstration of local storage. User inputs for font and color schemes are stored in local storage and retrieved on page refresh. The documentation provides a discussion of session storage mechanics.',
  },
  ];
  
// Render data
data.forEach(i=>{
  let liEl = document.createElement('li');
  
  liEl.innerHTML =` <h4>${i.title}</h4>
  <p class='hidePara'>${i.desc}</p>
  <button class='showHide'> read more </button>`;
ulEl.appendChild(liEl);
});

// Capture buttons
let showHideBtns = document.querySelectorAll('.showHide');
showHideBtns.forEach(button=>{
  button.addEventListener('click',()=>{
    (button.previousElementSibling.classList.toggle('hidePara'));
    if(button.previousElementSibling.getAttribute('class')){
       button.textContent = 'read more';
    }else{
           button.textContent='read less';

    }
  });
});
