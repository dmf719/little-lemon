import Logo from './assets/Logo.svg';
import Home from './assets/homeIcon.svg';
import Hamburger from './assets/hamburgerMenu.svg';
import Basket from './assets/basket .svg';
import Nav from './Nav'

function Header(){
    return (
        <header>
          <div>
            <img className="menu" src={Hamburger} onClick={Nav}/>
            <img className="logo" src={Logo} alt="Little Lemon Logo" />
            <img className="basket" src={Basket} />
          </div>
          <nav id="navbar">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">Reservations</a></li>
              <li><a href="">Order Online</a></li>
              <li><a href="">Login</a></li>
            </ul>
          </nav>
      </header>
    )
}


export default Header