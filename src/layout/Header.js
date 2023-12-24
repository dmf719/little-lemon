import Logo from '../assets/Logo.svg';
import Hamburger from '../assets/hamburgerMenu.svg';
import xCircle from '../assets/xCircle.svg';
import Basket from '../assets/basket .svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [navMenu, setNavMenu] = useState("hide");

  function showHide() {
    document.querySelector("#navbar").classList.toggle("show")
    if (navMenu === "hide") {
      document.querySelector(".menu").src = xCircle
      setNavMenu("show")
    }
    else if (navMenu === "show") {
      document.querySelector(".menu").src = Hamburger
      setNavMenu("hide")
    }
  }

  return (
    <header className='main-header'>
      <div>
        <img className="menu" src={Hamburger} onClick={showHide} alt="Menu" />
        <Link to="/"><img className="logo" src={Logo} alt="Little Lemon Logo" /></Link>
        <img className="basket" src={Basket} alt="Basket" />
      </div>
      <nav id="navbar">
        <ul>
          <li><Link to="/" onClick={showHide}>Home</Link></li>
          <li><Link to="/about" onClick={showHide}>About</Link></li>
          <li><Link to="/" onClick={showHide}>Menu</Link></li>
          <li><Link to="/BookingPage" onClick={showHide}>Reservations</Link></li>
          <li><Link to="/" onClick={showHide}>Order Online</Link></li>
          <li><Link to="/Login" onClick={showHide} style={{ color: "var(--highlight-white)", background: "var(--secondary-salmon)", borderRadius: "16px", padding: "0.25em 0.75em" }}>Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}