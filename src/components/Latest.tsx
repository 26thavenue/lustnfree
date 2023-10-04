
const Latest = () => {
  return (
    <div className="font-DM my-20">
        <h1 className="font-bold text-5xl text-center mb-20">Latest From <span className='text-red-700'>Our Blog</span></h1>
        <div className="grid grid-cols-3 gap-10 px-10 bg-green-100">
            {/* FIRST COLUMN */}
            <div className="flex flex-col gap-6  justify-center shadow-lg p-3">
            <h1 className="font-bold ">06 Ways Your Friends Influence Your Sexual Orientation.</h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. In urna integer justo rhoncus cursus. Vitae vitae convallis tempus tellus.</p>
            <p className="text-red-700 underline">Read More</p>
            </div>
            {/* // SECOND COLUMN */}
            <div className="flex flex-col gap-3  justify-center shadow-lg">
            <h1 className="font-bold ">06 Ways Your Friends Influence Your Sexual Orientation.</h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. In urna integer justo rhoncus cursus. Vitae vitae convallis tempus tellus.</p>
            <p className="text-red-700 underline">Read More</p>
            </div>
            {/* // THIRD COLUMN */}
            <div className="flex flex-col gap-3 utems-center justify-center shadow-lg">
            <h1 className="font-bold ">06 Ways Your Friends Influence Your Sexual Orientation.</h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. In urna integer justo rhoncus cursus. Vitae vitae convallis tempus tellus.</p>
            <p className="text-red-700 underline">Read More</p>
            </div>
        </div>
        
    </div>
  )
}

export default Latest