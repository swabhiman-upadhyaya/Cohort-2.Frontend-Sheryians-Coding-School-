let box = document.querySelector(".box")
let button = document.querySelector("button")
let body = document.querySelector ("body");
let h3 = document.querySelector ("h3")
let p1 = document.querySelector (".p1")
let p2 = document.querySelector (".p2")

let arr = [
    {
        team: "RCB",
        primaryColor: "red",
        secondaryColor: "black",
        fullName: "Royal Challenger Bangalore",
        captain: "Rajat Patidar"
    },
    {
        team: "MI",
        primaryColor: "#0066ff",
        secondaryColor: "navy",
        fullName: "Mumbai Indians",
        captain: "Hardik Pandya"
    },
    {
        team: "CSK",
        primaryColor: "yellow",
        secondaryColor: "blue",
        fullName: "Chennai Super Kings",
        captain: "Ruturaj Gaikwad"
    },
    {
        team: "PBKS",
        primaryColor: "red",
        secondaryColor: "gray",
        fullName: "Punjab Kings",
        captain: "Shreyas Iyer"
    },
    {
        team: "GT",
        primaryColor: "navy",
        secondaryColor: "gold",
        fullName: "Gujurat Titans",
        captain: "Hardik Pandya"
    },
    {
        team: "DC",
        primaryColor: "blue",
        secondaryColor: "red",
        fullName: "Delhi Capitals",
        captain: "Axar Patel"
    },
    {
        team: "LSG",
        primaryColor: "darkblue",
        secondaryColor: "crimson",
        fullName: "Lucknow Super Gaints",
        captain: "Rishab Pant"
    },
    {
        team: "RR",
        primaryColor: "palevioletred",
        secondaryColor: "blue",
        fullName: "Rajastan Royals",
        captain: "Yashasvi Jaiswal"
    },
    {
        team: "KKR",
        primaryColor: "darkorchid",
        secondaryColor: "gold",
        fullName: "Kolkata Knight Riders",
        captain: "Rinku Singh"
    },
    {
        team: "SRH",
        primaryColor: "orangered",
        secondaryColor: "orange",
        fullName: "Sunrisers Hyderabad",
        captain: "Pat Cummins"
    },

]

button.addEventListener("click", function () {

    let winner = arr[Math.floor(Math.random() * arr.length)];

    let team = winner.team
    let primaryColor = winner.primaryColor
    let secondaryColor = winner.secondaryColor
    let fullName = winner.fullName
    let captain = winner.captain
    
    
    body.style.backgroundColor = `${primaryColor}`
    box.style.backgroundColor = `${secondaryColor}`

    h3.textContent = `Team: ${team}`
    h3.style.color = `${secondaryColor}`

    p1.textContent = `Captain: ${captain}`
    p2.textContent = `Full name: ${fullName}`

})