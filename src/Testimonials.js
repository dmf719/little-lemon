import Mike from './assets/mike.jpg';
import Samantha from './assets/samantha.jpg';
import Julie from './assets/julie.jpg';
import Eric from './assets/eric.jpg';

export default function Testimonials() {
    const reviews = [
        {
            username: "Eric",
            avatar: Eric,
            rating: 5,
            comment: "Loved the Lemon Dessert!",
        },
        {
            username: "Samantha",
            avatar: Samantha,
            rating: 4.5,
            comment: "Everything tasted great!",
        },
        {
            username: "Julie",
            avatar: Julie,
            rating: 4,
            comment: "Very nice restaurant!",
        },
        {
            username: "Mike",
            avatar: Mike,
            rating: 5,
            comment: "Good food, good people!",
        },
    ]
    return(
        <article className="testimonials">
            {reviews.map(review => {
                return (
                    <section>
                        <div>
                            <img src={review.avatar} className='avatar' alt={review.username} />
                        </div>
                        <div>
                            <h4>{review.username}</h4>
                            <p>"{review.comment}"</p>
                        </div>
                    </section>
                )
            })}
        </article>
    )
}