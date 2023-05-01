let buttonPlus = document.querySelector('.plus');
let buttonReset = document.querySelector('.reset');
let counterText = document.querySelector('.counter');
let counter = 0;

buttonPlus.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;
});
buttonReset.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
});