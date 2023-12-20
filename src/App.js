import { Routes, Route } from 'react-router-dom';
import './App.css';
import './layout/Header.css';
import './components/Hero.css';
import './components/Specials.css';
import './components/Testimonials.css';
import './components/About.css';
import './layout/Footer.css';
import './components/Booking.css';
import './components/Login.css';
import Header from './layout/Header';
import Home from './components/Home';
import About from './components/About';
import BookingPage from './components/BookingPage';
import Login from './components/Login';
import Footer from './layout/Footer';

function App() {
  return (
    <main>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/BookingPage' element={<BookingPage />} />
            <Route path='/Login' element={<Login />} />
        </Routes>
        <Footer />
    </main>
  );
}

export default App;
