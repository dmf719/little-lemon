import { Link } from 'react-router-dom';
import Logo2 from '../assets/logo2.png';

function Footer() {
    const socialMedia = [
        {
            platform: "Facebook",
            url: "https://facebook.com",
            icon: "facebook-circle"
        },
        {
            platform: "Instagram",
            url: "https://instagram.com",
            icon: "instagram",
        },
        {
            platform: "TikTok",
            url: "https://tiktok.com",
            icon: "tiktok",
        }
    ]
    return (
        <footer>
            <div>
                <img className='logo2' src={Logo2} alt="Little Lemon" />
                <ul className="footer-nav">
                    <li>
                        <h4>NAVIGATION</h4>
                    </li>
                    <li style={{ marginTop: "1rem" }}><Link to="/">Home</Link></li>
                    <li><Link to="./About">About</Link></li>
                    <li><Link to="">Menu</Link></li>
                    <li><Link to="">Order Online</Link></li>
                    <li><Link to="./BookingPage">Make a Reservation</Link></li>
                </ul>

                <ul className="contact">
                    <li>
                        <h4>CONTACT</h4>
                    </li>
                    <li style={{ marginTop: "1rem" }}>123 Main St.</li>
                    <li>Chicago, IL</li>
                    <li style={{ marginTop: "1rem" }}>(123) 456-7890</li>
                    <li style={{ marginTop: "1rem" }}><Link to='mailto:info@littlelemon.com'>info@littlelemon.com</Link></li>
                </ul>

                <ul className="social">
                    <li>
                        <h4>SOCIAL MEDIA</h4>
                    </li>
                    <div>
                        {socialMedia.map(social => {
                            return (
                                <li>
                                    <Link to={social.url} title={social.platform}>
                                        <box-icon color="#495E57" name={social.icon} type="logo"></box-icon>
                                    </Link>
                                </li>
                            )
                        })}
                    </div>
                </ul>
            </div>
            <p className='copyright'>Copyright &copy; 2023 Little Lemon</p>
        </footer>
    )
}

export default Footer