const videos = [
    {
        id: 1,
        userName: "Hardik Highlights",
        caption: "Hardik’s explosive batting moments.",
        video: "./videos/vid1.mp4",
        userProfile: "https://i.pravatar.cc/150?img=11",
        isLiked: true,
        likeCount: 1200,
        commentCount: 85,
        shareCount: 40,
        isDisliked: false,
        isFollowed: true
    },
    {
        id: 2,
        userName: "Tech Explorer",
        caption: "Learning different tech topics made simple.",
        video: "./videos/vid2.mp4",
        userProfile: "https://i.pravatar.cc/150?img=18",
        isLiked: false,
        likeCount: 900,
        commentCount: 60,
        shareCount: 35,
        isDisliked: true,
        isFollowed: false
    },
    {
        id: 3,
        userName: "Tech Insight",
        caption: "One of the best tech explanation videos.",
        video: "./videos/vid3.mp4",
        userProfile: "https://i.pravatar.cc/150?img=29",
        isLiked: true,
        likeCount: 1400,
        commentCount: 110,
        shareCount: 50,
        isDisliked: false,
        isFollowed: true
    },
    {
        id: 4,
        userName: "Team India Official",
        caption: "Team India’s proud moments.",
        video: "./videos/vid4.mp4",
        userProfile: "https://i.pravatar.cc/150?img=22",
        isLiked: false,
        likeCount: 2000,
        commentCount: 150,
        shareCount: 70,
        isDisliked: true,
        isFollowed: false
    },
    {
        id: 5,
        userName: "Discipline Mastery",
        caption: "Build discipline through small steps.",
        video: "./videos/vid5.mp4",
        userProfile: "https://i.pravatar.cc/150?img=34",
        isLiked: true,
        likeCount: 800,
        commentCount: 40,
        shareCount: 20,
        isDisliked: false,
        isFollowed: true
    },
    {
        id: 6,
        userName: "Finance Mindset",
        caption: "Learn financial habits for long-term growth.",
        video: "./videos/vid6.mp4",
        userProfile: "https://i.pravatar.cc/150?img=45",
        isLiked: false,
        likeCount: 1100,
        commentCount: 75,
        shareCount: 32,
        isDisliked: true,
        isFollowed: false
    },
    {
        id: 7,
        userName: "Hustle Stories",
        caption: "Keep pushing. Your dreams matter.",
        video: "./videos/vid7.mp4",
        userProfile: "https://i.pravatar.cc/150?img=55",
        isLiked: true,
        likeCount: 950,
        commentCount: 48,
        shareCount: 27,
        isDisliked: false,
        isFollowed: true
    },
    {
        id: 8,
        userName: "Virat Times",
        caption: "Virat Kohli’s iconic knocks.",
        video: "./videos/vid8.mp4",
        userProfile: "https://i.pravatar.cc/150?img=14",
        isLiked: false,
        likeCount: 2500,
        commentCount: 220,
        shareCount: 100,
        isDisliked: true,
        isFollowed: false
    },
    {
        id: 9,
        userName: "Portfolio Builder",
        caption: "Tips to make your portfolio stand out.",
        video: "./videos/vid9.mp4",
        userProfile: "https://i.pravatar.cc/150?img=61",
        isLiked: true,
        likeCount: 780,
        commentCount: 32,
        shareCount: 18,
        isDisliked: false,
        isFollowed: true
    },
    {
        id: 10,
        userName: "Pure Grind",
        caption: "Discipline + Hustle = Results.",
        video: "./videos/vid10.mp4",
        userProfile: "https://i.pravatar.cc/150?img=69",
        isLiked: true,
        likeCount: 1600,
        commentCount: 95,
        shareCount: 45,
        isDisliked: false,
        isFollowed: true
    }
];

let allReels = document.querySelector(".allReels")

sum = ''

videos.forEach(function (arrOfObj) {
sum = sum +
`
<section class="reel">
    <video controls src="${arrOfObj.video}"></video>

    <div class="right">
        <div class="icon">
            <h3> ${(arrOfObj.isLiked) 
                ? '<i class="ri-thumb-up-fill"></i>' 
                : '<i class="ri-thumb-up-line"></i>'} 
            </h3>
            <p>${arrOfObj.likeCount}</p>
        </div>
        <div class="icon">
            <h3> ${(arrOfObj.isDisliked) 
                ? '<i class="ri-thumb-down-fill"></i>' 
                : '<i class="ri-thumb-down-line"></i>'} 
            </h3>
            <p>Dislike</p>
        </div>
        <div class="icon">
            <h3><i class="ri-message-2-line"></i></h3>
            <p>${arrOfObj.commentCount}</p>
        </div>
        <div class="icon">
            <h3><i class="ri-share-forward-line"></i></h3>
            <p>Share</p>
        </div>
        <div class="icon">
            <h3><i class="ri-loop-right-ai-line"></i></h3>
            <p>22</p>
        </div>
    </div>

    <div class="bottom">
        <div class="upper">
            <img src="${arrOfObj.userProfile}" alt="">
            <h4>${arrOfObj.userName}</h4>
            <button>${(arrOfObj.isFollowed) ? "Unfollow" : "Follow" }</button>
        </div>
        <div class="lower">
            <p>${arrOfObj.caption}</p>
        </div>
    </div>
</section>
`
})



allReels.innerHTML = sum