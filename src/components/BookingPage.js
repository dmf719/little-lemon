import { useState, useReducer, useEffect } from "react";
import BookingForm from './BookingForm';
import { fetchAPI } from '../MockAPI';
import { useNavigate } from "react-router-dom";


export default function BookingPage() {
    const initialValues = {
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
    }
    const [formData, setFormData] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const redirect = useNavigate();

    const handleChange = (c) => {
        setFormData({ ...formData, [c.target.name]: c.target.value })
    }

    {/********** */ }
    function updateTimes(date) {
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    const [reservationTime, setReservationTime] = useState(
        availableTimes.map((times) => <option>{times}</option>)
    );

    function handleDateChange(d) {
        setFormData({ ...formData, [d.target.name]: d.target.value });
        console.log(formData.date)
        var stringify = formData.date
        const date = new Date(stringify);
        dispatch(date);

        setReservationTime(availableTimes.map((times) => <option>{times}</option>));
    }
    {/********** */ }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validateForm(formData));
        setSubmitted(true);

    }

    useEffect(() => {
        if (Object.keys(formError).length === 0 && submitted) {
            console.log(formData)
            redirect('/Confirmed')
        }
    }, [formError])

    const validateForm = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Please enter your name"
            document.querySelector("#name").classList.add("invalidInput")
        }
        if (!values.email) {
            errors.email = "Please enter an email address"
            document.querySelector("#email").classList.add("invalidInput")
        }
        if (!values.date) {
            errors.date = "Please select a date for your reservation"
            document.querySelector("#date").classList.add("invalidInput")
        }
        if (!values.time) {
            errors.time = "Please choose a time"
            document.querySelector("#time").classList.add("invalidInput")
        }
        if (values.guests < 1) {
            errors.guests = "Reservations must be for one or more guests"
            document.querySelector("#guests").classList.add("invalidInput")
        }
        if (!values.occasion) {
            errors.occasion = "Please choose an occasion"
            document.querySelector("#occasion").classList.add("invalidInput")
        }

        return errors;
    }

    return (
        <section id="booking">
            <h2>Reserve a Table</h2>
            <BookingForm
                name={formData.name}
                email={formData.email}
                date={formData.date}
                update={handleDateChange}
                time={formData.time}
                reservation={reservationTime}
                guests={formData.guests}
                occasion={formData.occasion}
                onChange={handleChange}
                onSubmit={handleSubmit}
                errorName={formError.name}
                errorEmail={formError.email}
                errorDate={formError.date}
                errorTime={formError.time}
                errorGuests={formError.guests}
                errorOccasion={formError.occasion}
            />
        </section>
    )
}