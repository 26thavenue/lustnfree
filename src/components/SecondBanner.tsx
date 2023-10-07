import image from '../images/Banner2_firsthalf.svg'
import photo from '../images/Banner2-secondhalf.svg'
const SecondBanner = () => {
  return (
    <div className="flex px-10  h-[60vh] bg-center bg-cover bg-black font-DM lg:h-[50vh] xl:-[50vh] my-10"
    style={{ backgroundImage: `url(${image})` }}>
      <div className="flex w-1/3 p-3 flex-col items-start gap-6 justify-center text-white">
        <h1 className=" text-2xl lg:text-3xl xl:text-3xl font-bold">Music Just <span className="text-red-700">For You</span></h1>
        <p>We created a playlist just for you! 
            To keep you going and encourage 
            you on your freedom journey.  </p>
      </div>
      <img src={photo} alt='latest' className=' w-2/3 h-full'/>
    </div>  
  )
}

export default SecondBanner