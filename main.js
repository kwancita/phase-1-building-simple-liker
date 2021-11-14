// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const allHeartButton = document.querySelectorAll(".like-glyph")
const modal = document.getElementById("modal");
const modalP = document.getElementById("modal-message");

modal.className = "hidden";

let callServerandCatch = (event) =>{
  mimicServerCall()
  .then(() => handleClick(event))
  .catch(error => handleError(error))
}
let handleError =(errorMsg) => {
  modal.classList.remove('hidden')
  modalP.textContent = errorMsg
  setTimeout(() => {
    modal.classList.add('hidden')
    modalP.textContent = ''
  }, 3000)
}
let handleClick = (event) => {
  if( event.target.textContent === EMPTY_HEART){
      event.target.classList.add("activated-heart")
      event.target.textContent = FULL_HEART;
  }else{
      event.target.classList.remove('activated-heart');
      event.target.textContent = EMPTY_HEART;   
  } 
}
  
for (let i = 0; i < allHeartButton.length; i++){
  allHeartButton[i].addEventListener('click',callServerandCatch)
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  console.log("clicked")
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}








