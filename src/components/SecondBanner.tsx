import { AiOutlineArrowRight } from "react-icons/ai"


const SecondBanner = () => {
  return (
    <div className="grid grid-cols-3 px-10  bg-blue-100 font-DM h-[50vh] mt-10">
      <div className="flex flex-col items-start gap-6 bg-red-100 justify-center">
        <h1 className="text-3xl font-bold">Music Just <span className="text-red-700">For You</span></h1>
        <p>We created a playlist just for you! 
            To keep you going and encourage 
            you on your freedom journey.  </p>
      </div>
    </div>  
  )
}

export default SecondBanner