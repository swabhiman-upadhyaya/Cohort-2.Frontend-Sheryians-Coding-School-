let display = document.querySelector (".display");
let increaseButton = document.querySelector (".increase");
let decreaseButton = document.querySelector (".decrease");

let count = 0;

increaseButton.addEventListener ("click", function() {
    count += 1;
    display.textContent = count;
})

decreaseButton.addEventListener ("click", function() {
    count -= 1;
    display.textContent = count;
})