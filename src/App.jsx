import logo from './logo.svg';
import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio';
import Works from './components/Works/Works';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="section">
        <Header/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
