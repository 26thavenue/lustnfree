// import {Link} from 'react-router-dom'
import {useState} from 'react'
import{AiFillInstagram,AiFillFacebook,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const[open, setOpen] = useState(false)

  return (
    <div>
        <div className=" text-white flex  text-center lg:flex xl:flex justify-between w-[100vw]  p-10">
        <p className="text-[22px] font-DM font-bold">LUST&<span className="text-red-600"> FREE</span></p>
        <div className=' hidden items-center font-DM gap-4  lg:flex xl:flex '>
                <p className=' transition ease-in-out duration-300 hover:text-red-700 cursor-pointer'>Home</p>
                <p className='transition ease-in-out duration-300 hover:text-red-700 cursor-pointer'>About</p>
                <p className='transition ease-in-out duration-300 hover:text-red-700 cursor-pointer'>Blog</p>
                <p className='transition ease-in-out duration-300 hover:text-red-700 cursor-pointer'>Contact</p>
                <p className='transition ease-in-out duration-300 hover:text-white  text-red-500 text-xl'><AiFillInstagram/></p>
                <p className=' transition ease-in-out duration-300 hover:text-white text-red-500 text-xl'><AiFillFacebook/></p>
                
        </div>
        <div className='text-red-500 text-xl lg:hidden xl:hidden '
              onClick={() =>setOpen(!open)}>
              <AiOutlineMenu  />
          {open ? (
            <div className="origin-top-right absolute flex flex-col items-center justify-center right-0 mt-2 w-48 bg-white border text-center border-gray-300 rounded-lg shadow-lg z-10 lg:hidden xl:hidden">
            <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog </li>
            <li className="px-8 py-2 hover:bg-gray-100 cursor-pointer text-red-500 text-xl"><AiFillInstagram/> </li>
            <li className="px-8 py-2 hover:bg-gray-100 cursor-pointer text-red-500 text-xl"><AiFillFacebook/></li>       
          </ul>
  </div>
          ) : ''}
        </div>
    </div>
    </div>
    
  )
}

export default Navbar