import image from '../images/Latest.svg'
const Latest = () => {
  return (
    <div className="font-DM my-20">
        <h1 className="font-bold text-5xl text-center mb-20">Latest From <span className='text-red-700'>Our Blog</span></h1>
        <div className="grid  lg:grid-cols-3 xl:grid-cols-3 gap-10 px-10 ">
            {/* FIRST COLUMN */}
            <div className="flex flex-col gap-6  justify-center shadow-lg p-3 hover:shadow-md ">
            <img src={image} alt='latest' className=""/>
            <h1 className="font-bold ">06 Ways Your Friends Influence Your Sexual Orientation.</h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. In urna integer justo rhoncus cursus. Vitae vitae convallis tempus tellus.</p>
            <p className="text-red-700 cursor-pointer  hover:underline transition-all ease-in duration-500">Read More</p>
            </div>
            {/* // SECOND COLUMN */}
            <div className="flex flex-col gap-6  justify-center shadow-lg hover:shadow-md p-3">
            <img src={image} alt='latest' className=""/>
            <h1 className="font-bold ">06 Ways Your Friends Influence Your Sexual Orientation.</h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. In urna integer justo rhoncus cursus. Vitae vitae convallis tempus tellus.</p>
            <p className="text-red-700 cursor-pointer  hover:underline transition-all ease-in duration-500">Read More</p>
            </div>
            {/* // THIRD COLUMN */}
            <div className="flex flex-col gap-6 utems-center justify-center shadow-lg hover:shadow-md p-3">
            <img src={image} alt='latest' className=""/>
            <h1 className="font-bold ">06 Ways Your Friends Influence Your Sexual Orientation.</h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. In urna integer justo rhoncus cursus. Vitae vitae convallis tempus tellus.</p>
            <p className="text-red-700 cursor-pointer  hover:underline transition-all ease-in duration-500">Read More</p>
            </div>
        </div>
        
    </div>
  )
}

export default Latest