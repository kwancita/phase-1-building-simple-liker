// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hideError = document.getElementById("modal");
hideError.hidden = true
const heartButton = document.querySelector(".like-glyph")


heartButton.addEventListener('click',() => {
  mimicServerCall()
  .then(like => clickHeart(like))
  .catch(error => {
    if (error){
      hideError.hidden = false
    }setTimeout(() => {hideError.hidden = true}, 3000)
  })
})

function clickHeart(datas){
  datas.forEach(data =>{
    if(data === 'Pretend remote server notified of action!'){
      heartButton.innerHTML = FULL_HEART;
      heartButton.classList = "activated-heart"
    }else{
      heartButton.innerHTML = EMPTY_HEART;
      heartButton.classList.remove();
    }
  }) 
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
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
