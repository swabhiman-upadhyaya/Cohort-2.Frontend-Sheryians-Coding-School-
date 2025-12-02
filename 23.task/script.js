let p = document.querySelector("p");

document.body.addEventListener("mousemove", (event) => {
    document.body.style.setProperty("--x", event.clientX + "px");
    document.body.style.setProperty("--y", event.clientY + "px");
})


let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let alphabetsArr = alphabets.split("");
let originalPara = p.innerHTML;
let originalParaArr = originalPara.split("");
let intervalId;

let iteration = 0;
p.addEventListener("mouseenter", function () {

    iteration = 0;

    function matrixGen() {

        let suffleStr = originalParaArr.map(function (charAtIdx, index) {

            if (index < iteration) {
                return charAtIdx;
            }

            let randomIdx = Math.floor(Math.random() * alphabetsArr.length);
            return alphabetsArr[randomIdx];

        }).join("")
        console.log(suffleStr);


        iteration += 0.6;
        p.innerHTML = suffleStr;

        if (iteration >= originalParaArr.length) {
            clearInterval(intervalId)
        }
    }

    intervalId = setInterval(matrixGen, 30)

})

p.addEventListener("mouseleave", function () {
    if (iteration >= originalPara.length) {
        clearInterval(intervalId)
    }
})