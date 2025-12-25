const Card = () => {
  return (
    <div className="p-3 flex gap-6 flex-wrap justify-center">
      <div className="card relative h-90 p-1 w-65 bg-gray-400 rounded-md">
        
        <div className="imgs p-1 relative">
          <img src="./src/assets/img.png" alt="" className="w-65 object-cover rounded-sm"/>
          <img src="./src/assets/img.png" alt="" className="absolute left-[5rem] bottom-[-30px] rounded-full size-20"/>
        </div>
        
        <div className="profile flex flex-col items-center mt-7">
          <p className="text-[1.6rem] font-normal">Priya Sharma</p>
          <p className="text-lg font-">Content Creator</p>
        </div>
        
        <div className="counts flex gap-10 justify-center font-medium text-[1.1rem] mt-4">
          <div className="likes text-center">
            <p className="text-sm">55.1k</p>
            <p className="text-[1.3rem]">Likes</p>
          </div>
          <div className="posts text-center">
            <p className="text-sm">400</p>
            <p className="text-[1.3rem]">Post</p>
          </div>
          <div className="views text-center">
            <p className="text-sm">480k</p>
            <p className="text-[1.3rem]">views</p>
          </div>
        </div>

        <div className="icons text-3xl flex gap-7 mt-4 justify-center">
          <i class="ri-linkedin-box-fill text-blue-700"></i>
          <i class="ri-github-fill text-black"></i>
          <i class="ri-instagram-line text-pink-700"></i>
        </div>

      </div>

      <div className="card relative h-90 p-1 w-65 bg-gray-400 rounded-md">
        
        <div className="imgs p-1 relative">
          <img src="./src/assets/img.png" alt="" className="w-65 object-cover rounded-sm"/>
          <img src="./src/assets/img.png" alt="" className="absolute left-[5rem] bottom-[-30px] rounded-full size-20"/>
        </div>
        
        <div className="profile flex flex-col items-center mt-7">
          <p className="text-[1.6rem] font-normal">Priya Sharma</p>
          <p className="text-lg font-">Content Creator</p>
        </div>
        
        <div className="counts flex gap-10 justify-center font-medium text-[1.1rem] mt-4">
          <div className="likes text-center">
            <p className="text-sm">55.1k</p>
            <p className="text-[1.3rem]">Likes</p>
          </div>
          <div className="posts text-center">
            <p className="text-sm">400</p>
            <p className="text-[1.3rem]">Post</p>
          </div>
          <div className="views text-center">
            <p className="text-sm">480k</p>
            <p className="text-[1.3rem]">views</p>
          </div>
        </div>

        <div className="icons text-3xl flex gap-7 mt-4 justify-center">
          <i class="ri-linkedin-box-fill text-blue-700"></i>
          <i class="ri-github-fill text-black"></i>
          <i class="ri-instagram-line text-pink-700"></i>
        </div>
        
      </div>
    </div>
  )
}

export default Card