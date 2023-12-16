import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Header.css';
import './Hero.css';
import './Specials.css';
import './Testimonials.css';
import './About.css';
import './Footer.css';
import './Booking.css';
import Header from './Header';
import Home from './Home';
import Testimonials from './Testimonials';
import About from './About';
import BookingPage from './BookingPage';
import Footer from './Footer';

function App() {
  return (
    <>
        {/* */}
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Testimonials' element={<Testimonials />} />
            <Route path='/About' element={<About />} />
            <Route path='/BookingPage' element={<BookingPage />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
