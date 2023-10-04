// import {Link} from 'react-router-dom'
import{AiFillInstagram,AiFillFacebook,AiOutlineMenu} from 'react-icons/ai'


// const activeClass =() => {}
 
const Navbar = () => {
  return (
    <div>
        <div className=" flex  text-center lg:flex justify-between w-[100vw] bg-blue-100 p-6">
        <p className="text-[22px] font-DM font-bold">LUST&<span className="text-red-600"> FREE</span></p>
        <div className=' hidden items-center font-DM gap-4  lg:flex'>
                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
                <p className='text-red-500 text-xl'><AiFillInstagram/></p>
                <p className='text-red-500 text-xl'><AiFillFacebook/></p>
                
        </div>
        <p className='text-red-500 text-xl lg:hidden'><AiOutlineMenu/></p>
    </div>
    </div>
    
  )
}

export default Navbar