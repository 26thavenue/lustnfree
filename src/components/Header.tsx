import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import image from '../images/Header.svg'
const Header = () => {
  return (
    <div 
    className="bgcover bg-center pb-10" 
     style={{ backgroundImage: `url(${image})` }}>
        <Navbar/>
        <HeroSection/>
    </div>
  )
}

export default Header