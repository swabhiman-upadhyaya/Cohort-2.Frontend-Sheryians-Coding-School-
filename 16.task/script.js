let h1 = document.querySelector("h1");
let button = document.querySelector("button");
let inner = document.querySelector(".inner");
let p = document.querySelector("section p");

let num = 0;
let download = "false";

button.addEventListener("click", function () {

    let randNum = 30 + Math.floor(Math.random() * 100);

    button.style.pointerEvents = "none";

    let interval = setInterval(function () {
        num++;
        h1.innerHTML = `${num}%`;
        inner.style.width = `${num}%`;
    }, randNum)

    setTimeout(function () {
        clearInterval(interval)
        button.innerHTML = `Downloaded`
        button.style.opacity = "0.5"
    }, randNum * 100)

    p.innerHTML = 
    `<p>
        <span>song.mp3</span> To be Downloaded in ${randNum} Second...
    </p>`
})

