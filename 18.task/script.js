let main = document.querySelector("main");

const users = [
    {
        profileImg: "img1.jpg",
        name: "Aisha Verma",
        profession: "Web Developer",
        bio: "Loves building user-friendly and responsive websites."
    },
    {
        profileImg: "img2.jpg",
        name: "Sara Patel",
        profession: "Graphic Designer",
        bio: "Passionate about visual storytelling through design."
    },
    {
        profileImg: "img3.jpg",
        name: "Riya Sharma",
        profession: "Software Engineer",
        bio: "Enjoys solving real-world problems with clean code."
    },
    {
        profileImg: "img4.jpg",
        name: "Emily Carter",
        profession: "Digital Marketer",
        bio: "Helps brands grow through creative digital strategies."
    }
];


let sum = ""


users.forEach(function (arrOfObj) {
    sum = sum +
`
<section>
    <div class="top">
        <img src = ${arrOfObj.profileImg} alt="">
    </div>

    <div class="bottom">
        <h2>${arrOfObj.name}</h2>
        <h3>${arrOfObj.profession}</h3>
        <p>${arrOfObj.bio}</p>
    </div>
</section>
`


})
main.innerHTML = sum;