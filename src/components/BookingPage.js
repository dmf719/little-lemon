import { useState, useReducer } from "react";
import BookingForm from './BookingForm';

export default function BookingPage() {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();

    // const [state, dispatch] = useReducer(reducer, {
    //     date: '',
    //     time: '',
    //     guests: 1,
    //     occasion: ''
    // })

    // function reducer(state, action) {
    //     switch(action.type) {
    //         case "set_date": {

    //         }
    //     }
    // }

    return (
        <section id="booking">
            <h2>Reserve a Table</h2>
            <BookingForm
                date={date}
                time={time}
                guests={guests}
                occasion={occasion}
            />
        </section>
    )
}