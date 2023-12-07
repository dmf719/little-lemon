 import Logo2 from './assets/logo2.png'

 function Footer(){
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
            <img className='logo2' src={Logo2} alt="Little Lemon" />
            <ul className="footer-nav">
                <li>
                    <h4>NAVIGATION</h4>
                </li>
                <li style={{ marginTop: "1rem" }}><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Make a Reservation</a></li>
            </ul>

            <ul className="contact">
                <li>
                    <h4>CONTACT</h4>
                </li>
                <li style={{ marginTop: "1rem" }}>123 Main St.</li>
                <li>Chicago, IL</li>
                <li style={{ marginTop: "1rem" }}>(123) 456-7890</li>
                <li style={{ marginTop: "1rem" }}><a href=''>info@littlelemon.com</a></li>
            </ul>

            <ul className="social">
                <li>
                    <h4>SOCIAL MEDIA</h4>
                </li>
                <div>
                    {socialMedia.map(social => {
                        return (
                            <li>
                                <a href={social.url} title={social.platform}>
                                    <box-icon color="#495E57" name={social.icon} type="logo"></box-icon>
                                </a>
                            </li>
                        )
                    })}
                </div>
            </ul>
            <p>Copyright &copy; 2023 Little Lemon</p>
        </footer>
    )
 }

 export default Footer