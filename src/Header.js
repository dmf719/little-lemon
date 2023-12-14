import Logo from './assets/Logo.svg';
import Home from './assets/homeIcon.svg';
import Hamburger from './assets/hamburgerMenu.svg';
import Basket from './assets/basket .svg';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header className='main-header'>
          <div>
            <img className="menu" src={Hamburger} onClick={Nav}/>
            <Link to="/"><img className="logo" src={Logo} alt="Little Lemon Logo" /></Link>
            <img className="basket" src={Basket} />
          </div>
          <nav id="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Menu</Link></li>
              <li><Link to="/BookingPage">Reservations</Link></li>
              <li><Link to="/">Order Online</Link></li>
              <li><Link to="/">Login</Link></li>
            </ul>
          </nav>
      </header>
    )
}