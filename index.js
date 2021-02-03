// Reveal a substring of project descriptors with an option to reveal
// capture the p elements
const pElements = document.querySelectorAll('p');
const pContent = [];
let showDescription = false;

setText();
function setText(){
for(let i = 0; i < pElements.length; i++){
  let content = pElements[i].textContent;
  pElements[i].innerHTML = showDescription ?`${content}  <button class='readMore'> ...read less </button>`:`${content.substring(0,50)}  <button class='readMore'> ...read more </button>`;
}}

const buttonElements = document.querySelectorAll('.readMore');

for(let i = 0; i < buttonElements.length; i++){
  buttonElements[i].addEventListener('click', toggleDescriptionDisplay);
}

function toggleDescriptionDisplay(){
  // let content = pContent.filter(i=>i.index === this.parentNode.key)
  // this.parentNode.innerHTML = `${content}  <button class='readMore'> ...read less </button>`;
  // console.log()
  showDescription = !showDescription;
  console.log(showDescription)
  setText();
}
