import { useState } from "react";

export default function BookingForm() {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted");
        console.log(date)
        console.log(time)
        console.log(guests)
        console.log(occasion)
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* DATE */}
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            {/* TIME */}
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option>5:00</option>
                    <option>6:00</option>
                    <option>7:00</option>
                    <option>8:00</option>
                    <option>9:00</option>
                    <option>10:00</option>
                </select>
            </div>

            {/* GUESTS */}
            <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    onChange={(e) => setGuests(e.target.value)}
                />
            </div>

            {/* OCCASION */}
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>

            <input type="submit" value="Make Your Reservation" />
        </form>
    )
}