import { useState } from "react";
import BookingForm from './BookingForm';

export default function BookingPage() {

    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData.occasion, formData.date, formData.time, formData.guests);
    }

    return (
        <section id="booking">
            <h2>Reserve a Table</h2>
            <BookingForm
                date={formData.date}
                time={formData.time}
                guests={formData.guests}
                occasion={formData.occasion}
                onChange={(c) => setFormData({ ...formData, [c.target.name]: c.target.value })}
                onSubmit={handleSubmit}
            />
        </section>
    )
}