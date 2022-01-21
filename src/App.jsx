
import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Technology from './components/Technology/Technology';
import AboutTimeline from './components/About/AboutTimeline';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="section">
        <Header/>
        <Portfolio/>
        <AboutTimeline/>
        <Skills/>
        <Technology/>
        <Testimonials/>
        <Blog/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
