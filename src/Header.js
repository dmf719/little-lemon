import Logo from './assets/Logo.svg';

function Header(){
    return (
        <header>
          <img className="logo" src={Logo} alt="Little Lemon Logo" />
          <nav>
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