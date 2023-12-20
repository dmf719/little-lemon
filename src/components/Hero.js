import HeroImage from '../assets/restauranfood.jpg';
import {Link} from 'react-router-dom';

export default function Hero() {
    const greeting = "Little Lemon";

    return (
        <>
            <section className="hero">
                <div className='hero-text'>
                    <h1>{greeting}</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="./BookingPage"><button type="button">Reserve a Table</button></Link>
                </div>
                <div className='hero-photo'>
                    <img src={HeroImage} alt="Great Food at Little Lemon" />
                </div>
            </section>
        </>
    )
}