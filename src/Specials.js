import GreekSalad from './assets/greek-salad.jpg';
import Bruschetta from './assets/bruchetta.svg';
import LemonDessert from './assets/lemon-dessert.jpg';

export default function Specials() {
    const specials = [
        {
            item: "Greek Salad",
            price: "$12.99",
            description: "The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicago Style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        },
        {
            item: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        },
        {
            item: "Lemon Dessert",
            price: "$6",
            description: "This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        }
    ]
    return (
        <article>
            <header className='specialsHeader'>
                <h3>This Week's Specials!</h3>
                <button type="button">Online Menu</button>
            </header>
            <div className="specials">
                <section>
                    <div className='thumbnail'>
                        <img src={GreekSalad} alt="" />
                    </div>
                    <div className='description'>
                        <h3>Greek Salad</h3>
                        <span className='price'>$12.99</span>
                        <p>The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicago Style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <a href="" className="delivery">Order For Delivery</a>
                    </div>
                </section>
                <section>
                    <div className='thumbnail'>
                        <img src={Bruschetta} alt="" />
                    </div>
                    <div className='description'>
                        <h3>Bruschetta</h3>
                        <span className='price'>$5.99</span>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <a href="" className="delivery">Order For Delivery</a>
                    </div>
                </section>
                <section>
                    <div className='thumbnail'>
                        <img src={LemonDessert} alt="" />
                    </div>
                    <div className='description'>
                        <h3>Lemon Dessert</h3>
                        <span className='price'>$6</span>
                        <p>This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a href="" className="delivery">Order For Delivery</a>
                    </div>
                </section>
            </div>
        </article>
    )

}