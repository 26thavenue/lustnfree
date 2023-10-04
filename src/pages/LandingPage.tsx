import Banner from '../components/Banner'
import HeroSection from '../components/HeroSection'
import Latest from '../components/Latest'
import Navbar from '../components/Navbar'
import SecondBanner from '../components/SecondBanner'
import WhoAreWe from '../components/WhoAreWe'

const LandingPage = () => {
  return (
    <div className='container'>
        <Navbar/>
        <HeroSection/>
        <WhoAreWe/>
        <Banner/>
        <Latest/>
        <SecondBanner/>
    </div>
    
  )
}

export default LandingPage