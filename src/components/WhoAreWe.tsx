import { AiOutlineArrowRight } from 'react-icons/ai'
import Image from '../images/Image.svg'

const WhoAreWe = () => {
  return (
    <div className=" flex flex-col  p-5 mt-10 lg:flex-row xl:flex-row font-DM xl:gap-60 justify-center lg:justify-between xl:justify-between items-center">
        <img src={Image} alt='Who-are-we' className='  mb-10 w-[60%] xl:w-[40%] h-[480px] object-cover '/>
        <div className='flex flex-col gap-8 '>
            <h1 className='text-5xl font-bold'>Who Are We?</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem amet sed aliquam interdum nibh tincidunt laoreet duis vel. Nisl egestas neque nisl ultricies libero. Integer pellentesque lacus faucibus porttitor sed. Lacus urna viverra cursus ullamcorper amet aliquet elementum sagittis lorem. Id viverra dignissim egestas nam lorem pharetra aliquet pharetra.
              elementum sagittis lorem.</p>
          <button className="bg-red-600 w-[180px] px-6 py-3 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out flex items-center gap-2 ">Know More 
          <AiOutlineArrowRight className=""/>
          </button>
        </div>
    </div>
  )
}

export default WhoAreWe