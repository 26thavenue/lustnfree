import {AiOutlineArrowRight} from 'react-icons/ai'

const HeroSection = () => {
  return (
    <div className="mt-40 bg-blue-100">
        <div className=" font-DM flex flex-col justify-center items-center gap-6 ">
            <h1 className="text-5xl  font-bold">Welcome To Lust & Free!</h1>
            <p className="w-[50%] text-center">We have the best perspective on sex and we aim to 
                help you and others struggling with sexual vices
                walk in complete freedom. </p>
            <button className="bg-red-600 px-6 py-3 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out flex items-center gap-2 ">Get Started 
            <AiOutlineArrowRight className=""/>
            </button>
    </div>
    </div>
  )
}


 {/* <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/k4zcvlaygo-3%3A51?alt=media&token=1d02831f-dd0f-41ad-8eb0-9893605ebe9b"
        alt="Not Found"
        className=" absolute w-[100%] h-[100vh] object-cover"
      /> */}
export default HeroSection