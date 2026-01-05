import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';
import ParticlesBg from './components/ParticlesBg';
import SocialLinks from './components/SocialLinks';
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#000000]'>
        <div >
          <ParticlesBg />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Experience />
        <Tech />
        <Feedbacks />
        <Contact />
      </div>
      <SocialLinks />
    </BrowserRouter>
  )
}

export default App;
