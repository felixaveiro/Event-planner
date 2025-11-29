import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Promise from './components/Promise';
import Partners from './components/Partners';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Promise />
      <Partners />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;