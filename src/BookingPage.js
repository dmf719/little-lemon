import { useState } from "react";
import BookingForm from './BookingForm';

export default function BookingPage() {

    return (
        <section id="booking">
            <h2>Reserve a Table</h2>
            <BookingForm
                // date={date}
                // time={time}
                // guests={guests}
                // occasion={occasion}
            />
        </section>
    )
}