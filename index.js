var numberOfDrumButtons = document.querySelectorAll('.drum').length;

var tom1 = new Audio('sounds/tom-1.mp3')
for (let index = 0; index < numberOfDrumButtons; index++) {
    document.querySelectorAll('button')[index].addEventListener('click', function () {
        tom1.play();
    });
}