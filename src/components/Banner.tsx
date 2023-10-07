import { AiOutlineArrowRight } from "react-icons/ai"
import image from '../images/Banner.svg'

const Banner = () => {
  return (
    <div 
    className="grid grid-cols-2 px-10  py-10  bg-blue-100 font-DM lg:grid-cols-3 xl:grid-cols-3 xl:h-[70vh] lg:h-[50vh] mt-10   
    bgcover bg-center " 
    style={{ backgroundImage: `url(${image})` }}>
      <div className="flex flex-col items-start gap-6 justify-center text-white">
        <h1 className=" text-3xl xl:text-4xl lg:text-3xl font-bold">Need a <span className="text-red-700">Friend?</span></h1>
        <p>Connect with friends from around the 
          world who share the same values, inspire
          and uplift you on your journey!  </p>
        <button className="bg-red-600 px-6 py-3 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out flex items-center gap-2 ">Connect 
          <AiOutlineArrowRight className=""/>
          </button>
      </div>
    </div>
  )
}

export default Banner