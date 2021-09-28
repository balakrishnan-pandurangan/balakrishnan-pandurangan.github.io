import { HomePage } from './components/HomePage';
import PageAbout from './components/PageAbout';
import Contact from './components/Contact';
import Interests from './components/Interests';
import { Projects } from './components/Projects'
import { FooterPage } from './components/FooterPage'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div class="theme-red">      
        {/* Back to top button */}
        <div class="btn-back_to_top">
          <span class="ti-arrow-up"></span>
        </div>
        <HomePage />
        <PageAbout />
        <Interests />
        <Projects />
        <Contact />
        <FooterPage />
      </div>  
  );
}

export default App;
