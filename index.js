buttons = document.querySelectorAll(".drum");

function animate(elem){
  document.querySelector("."+elem).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+elem).classList.remove("pressed");},100);
}

function playSound(option) {
  switch (option) {
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      break;
    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      break;
    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      break;
    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      break;
    case 'j':
      var audio = new Audio("sounds/snare.mp3");
      break;
    case 'k':
      var audio = new Audio("sounds/kick-bass.mp3");
      break;
    case 'l':
      var audio = new Audio("sounds/crash.mp3");
      break;
  }
  audio.play();
}

var option;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    option = this.innerHTML;
    playSound(option);
    animate(option);
  });
}

document.addEventListener('keydown', function(event) {
  option = event.key;
  playSound(option);
  animate(option);
});
