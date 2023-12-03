 import Logo2 from './assets/logo2.png'

 function Footer(){
    return (
        <footer>
            <img className='logo2' src={Logo2} alt="Little Lemon" />
            <ul>
                <li>NAVIGATION</li>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Make a Reservation</a></li>
            </ul>

            <ul>
                <li>CONTACT</li>
                <li>123 Main St.</li>
                <li>Chicago, IL</li>
                <li>(123) 456-7890</li>
            </ul>

            <ul>
                <li>SOCIAL NETWORK</li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Twitter</a></li>
            </ul>
        </footer>
    )
 }

 export default Footer