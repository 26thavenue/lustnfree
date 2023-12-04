import Banner from '../components/Banner'
import Header from '../components/Header'
import Latest from '../components/Latest'
import SecondBanner from '../components/SecondBanner'
import WhoAreWe from '../components/WhoAreWe'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className='container'>
        <Header/>
        <WhoAreWe/>
        <Banner/>
        <Latest/>
        <SecondBanner/>
        <ContactForm/>
        <Footer/>
    </div>
    
  )
}

export default LandingPage