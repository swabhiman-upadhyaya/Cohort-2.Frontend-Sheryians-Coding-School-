let img = document.querySelector("img")
let love = document.querySelector("i")

img.addEventListener("dblclick", function () {

    love.style.opacity = "1"
    love.style.transform = `translate(-50%, -50%) scale(1)`

    setTimeout (() => {
        love.style.transform = `translate(-50%, -120%) scale(1)`
        love.style.top = `5%`
    }, 800)

    setTimeout (() => {
        love.style.opacity = "0"
    }, 900)

    setTimeout (() => {
        love.style.transform = `translate(-50%, -50%) scale(0)`
    }, 1200)

    setTimeout (() => {
        love.style.top = `50%`
    }, 1650)
})