 function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //stop function from running
  if(!audio) return;
  //rewind to start of track so it cn be played continueously
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
 }
function removeTransition(e){
  //skips anything that is not transform
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

const keys = document.querySelectorAll ('.key');
keys.forEach (key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);