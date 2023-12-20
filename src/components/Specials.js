import GreekSalad from '../assets/greek-salad.jpg';
import Bruschetta from '../assets/bruchetta.svg';
import LemonDessert from '../assets/lemon-dessert.jpg';

export default function Specials() {
    const specials = [
        {
            item: "Greek Salad",
            price: "$12.99",
            description: "The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicago Style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            img: GreekSalad,
        },
        {
            item: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            img: Bruschetta,
        },
        {
            item: "Lemon Dessert",
            price: "$6",
            description: "This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            img: LemonDessert,
        }
    ]
    return (
        <article className='weekly-specials'>
            <header className='specialsHeader'>
                <h3>This Week's Specials!</h3>
                <button type="button">Online Menu</button>
            </header>
            <div className="specials">
                {specials.map(special => {
                    return (
                        <section>
                            <div className='thumbnail'>
                                <img src={special.img} alt={special.item} />
                            </div>
                            <div className='description'>
                                <h3>{special.item}</h3>
                                <span className='price'>{special.price}</span>
                                <p>{special.description}</p>
                                <a href="" className="delivery">Order For Delivery</a>
                            </div>
                        </section>
                    )
                })}
            </div>
        </article>
    )

}