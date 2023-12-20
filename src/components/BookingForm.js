
export default function BookingForm({ setDate, setTime, setGuests, setOccasion }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted");
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* DATE */}
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    id="res-date"
                    type="date"
                    onChange={(e) => e.target.value}
                    aria-label="Reservation Date"
                    value={setDate}
                />
            </div>

            {/* TIME */}
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    onChange={(e) => e.target.value}
                    aria-label="Reservation Time"
                    value={setTime}
                >
                    <option selected>5:00</option>
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
                    id="guests"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    onChange={(e) => e.target.value}
                    aria-label="Number of Guests"
                />
            </div>

            {/* OCCASION */}
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    onChange={(e) => e.target.value}
                    aria-label="Occasion"
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>

            <input type="submit" value="Make Your Reservation" aria-label="Make Your Reservation" />
        </form>
    )
}