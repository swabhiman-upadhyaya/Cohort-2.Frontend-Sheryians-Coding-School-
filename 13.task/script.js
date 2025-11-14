let box = document.querySelector (".box");
let button = document.querySelector ("button");

button.addEventListener ("click", function() {

    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    box.textContent = `rgb(${red}, ${green}, ${blue})`;
})