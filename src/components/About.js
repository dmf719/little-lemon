import MarioAndAdrian from '../assets/MarioandAdrian.jpg';
import Adrian from '../assets/adrian.jpg';

export default function About() {
    return (
        <section id="about">
            <h2 className='about-header'>About Little Lemon</h2>
            <div className='about-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien erat, posuere ut nisi ac, finibus facilisis urna. Praesent a est nec lacus ultrices varius ut vel mauris.</p>
                <p>Quisque mattis lacus et magna facilisis, nec posuere neque venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien erat, posuere ut nisi ac, finibus facilisis urna. Praesent a est nec lacus ultrices varius ut vel mauris.</p>
                <p>Quisque mattis lacus et magna facilisis, nec posuere neque venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='about-photo'>
                <img id="about1" src={Adrian} alt="Adrian of Little Lemon" />
                <img id="about2" src={MarioAndAdrian} alt="Mario and Adrian of Little Lemon" />
            </div>
        </section>
    )
}