import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Service from './component/Service';
import About from './component/About';
import Contact from './component/Contact';
import Why_us from './component/Why_us';
import Stats from './component/Stats';
import Footer from './component/Footer';
import InternationalTours from './component/InternationalTours';
import Reviews from './component/Reviews';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/international-tours" element={<InternationalTours />} />
            <Route 
              path="/" 
              element={
                <>
                  <Home />
                  <Service />
                  <About />
                  <Why_us />
                  <Stats />
                  <Reviews />
                  <Contact />
                </>
              } 
            />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
