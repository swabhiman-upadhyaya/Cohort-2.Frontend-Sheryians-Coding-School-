let body = document.querySelector ("body")
let img = document.querySelector ("img")

body.addEventListener ("mousemove", function(details) {
    img.style.left = `${details.x}px`
    img.style.top = `${details.y}px`
})