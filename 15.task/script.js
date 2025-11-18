let button = document.querySelector("button");
let main = document.querySelector("main");

let arr = [
    "Consistency is the key to get Succcess",
    "Pratice makes a man Perfect",
    "Displine makes a man Strong",
    "Work hard and believe on god's plan",
    "Remember this! it's not over until you win"
]

button.addEventListener("click", () => {

    let randomX = Math.floor(Math.random() * 80);
    let randomY = Math.floor(Math.random() * 80);
    let randomText = Math.floor(Math.random() * arr.length);
    let randomRot = Math.floor(Math.random() * 361)
    let randomScale = (0.5 + Math.random() * 2)

    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    let p = document.createElement("p");

    p.style.color = `rgb(${c1},${c2},${c3})`;
    p.style.position = "absolute";
    p.style.left = `${randomX}%`;
    p.style.top = `${randomY}%`;
    p.style.rotate = `${randomRot}deg`;
    p.style.scale = `${randomScale}`;
    
    // transition
    p.style.transition = "opacity 2s ease";
    p.style.opacity = "1";

    p.innerHTML = arr[randomText];
    main.appendChild(p);




    // fade-out after 2 seconds
    setTimeout(() => {
        p.style.opacity = "0";

        // remove completely after fade-out
        setTimeout(() => {
            p.remove();
        }, 2000);

    }, 3000); // visible for 2 seconds

});
