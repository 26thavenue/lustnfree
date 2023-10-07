import Banner from '../components/Banner'
import Header from '../components/Header'
import Latest from '../components/Latest'
import SecondBanner from '../components/SecondBanner'
import WhoAreWe from '../components/WhoAreWe'

const LandingPage = () => {
  return (
    <div className='container'>
        <Header/>
        <WhoAreWe/>
        <Banner/>
        <Latest/>
        <SecondBanner/>
    </div>
    
  )
}

export default LandingPage