

export default function BookingForm({ name, email, date, update, time, reservation, guests, onChange, onSubmit, errorName, errorEmail, errorDate, errorTime, errorGuests, errorOccasion }) {

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={onChange}
                    aria-label="Your Name"
                    value={name}
                    className={""}
                    placeholder="Contact name"
                    min="2"
                    max="12"
                />
                <span className="invalid">{errorName}</span>
            </div>
            {/* EMAIL */}
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                    aria-label="Email Address"
                />
                <span className="invalid">{errorEmail}</span>
            </div>
            {/* DATE */}
            <div>
                <label htmlFor="date">Choose date</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    onChange={update}
                    aria-label="Reservation Date"
                    value={date}
                />
                <span className="invalid">{errorDate}</span>
            </div>

            {/* TIME */}
            <div>
                <label htmlFor="time">Choose time</label>
                <select
                    id="time"
                    name="time"
                    aria-label="Reservation Time"
                    onChange={onChange}
                    value={time}

                >
                    {reservation}
                    {/* <option>Choose a time</option>
                    <option>5:00</option>
                    <option>6:00</option>
                    <option>7:00</option>
                    <option>8:00</option>
                    <option>9:00</option>
                    <option>10:00</option> */}
                </select>
                <span className="invalid">{errorTime}</span>
            </div>

            {/* GUESTS */}
            <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                    id="guests"
                    name="guests"
                    type="number"
                    placeholder="How many guests?"
                    min="1"
                    max="10"
                    aria-label="Number of Guests"
                    onChange={onChange}
                    value={guests}
                />
                <span className="invalid">{errorGuests}</span>
            </div>

            {/* OCCASION */}
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    placeholder="Special Occasion?"
                    aria-label="Occasion"
                    onChange={onChange}

                >
                    <option name="occasion" value="Birthday">Birthday</option>
                    <option name="occasion" value="Engagement">Engagement</option>
                    <option name="occasion" value="Anniversary">Anniversary</option>
                </select>
                <span className="invalid">{errorOccasion}</span>
            </div>

            <input type="submit" value="Reserve Table" aria-label="Reserve Table" />
        </form>
    )
}