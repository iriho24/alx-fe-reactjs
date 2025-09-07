import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer'; // optional

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer /> {/* remove if you don't want the optional footer */}
      </div>
    </Router>
  );
}

export default App;
