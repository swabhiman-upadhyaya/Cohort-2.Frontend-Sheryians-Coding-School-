const Card = (props) => {

  const stats = [
    { value: props.likeCnt, label: "Likes" },
    { value: props.postCnt, label: "Post" },
    { value: props.views, label: "Views" },
  ];

  return (
    <div>

      <div className="card relative p-1 w-65 bg-black rounded-md">

        <div className="imgs p-1 relative">
          <img src={props.backImg} alt="" className="w-65 h-40 object-cover rounded-sm" />
          <img src={props.profilePic} alt="" className="absolute left-[5rem] bottom-[-30px] rounded-full size-20 object-cover" />
        </div>

        <div className="profile flex flex-col items-center mt-6.5">
          <p className="text-[1.4rem] font-bold">{props.name}</p>
          <p className="text-[1rem] text-gray-500 font-bold">{props.designation}</p>
        </div>

        <div className="counts flex gap-8 justify-center font-medium text-[1.1rem]">
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-sm font-black">{item.value}</p>
              <p className="text-[1.2rem]">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="icons text-3xl flex gap-5 justify-center">
          <i class="ri-linkedin-box-fill text-blue-700"></i>
          <i class="ri-github-fill"></i>
          <i class="ri-instagram-line text-pink-700"></i>
        </div>

      </div>

    </div>
  )
}

export default Card