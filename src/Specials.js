import GreekSalad from './assets/greek-salad.jpg';
import Bruschetta from './assets/bruchetta.svg';
import LemonDessert from './assets/lemon-dessert.jpg';

export default function Specials() {
    return (
        <section>
            <h3>This Week's Specials!</h3>
            <button type="button">Online Menu</button>

            <div className="specials">
                <div>
                    <img src={GreekSalad} alt="" />
                    <h3>Greek Salad</h3>
                    <p>The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicago Style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <p>Order For Delivery</p>
                </div>
                <div>
                    <img src={Bruschetta} alt="" />
                    <h3>Bruschetta</h3>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <p>Order For Delivery</p>
                </div>
                <div>
                    <img src={LemonDessert} alt="" />
                    <h3>Lemon Dessert</h3>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <p>Order For Delivery</p>
                </div>
            </div>
        </section>
    )

}