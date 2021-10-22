
import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Technology from './components/Technology/Technology';
import AboutTimeline from './components/About/AboutTimeline';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="section">
        <Header/>
        <Portfolio/>
        <AboutTimeline/>
        <Technology/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
