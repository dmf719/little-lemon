
import { useState } from "react";

export default function BookingForm({ formData, date, time, guests, occasion, onChange, onSubmit }) {

    return (
        <form onSubmit={onSubmit}>
            {/* DATE */}
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    id="res-date"
                    name="date"
                    type="date"
                    onChange={onChange}
                    aria-label="Reservation Date"
                    value={date}
                />
            </div>

            {/* TIME */}
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    name="time"
                    aria-label="Reservation Time"
                    onChange={onChange}
                    value={time}
                >
                    <option value="5">5:00</option>
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
                    name="guests"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    aria-label="Number of Guests"
                    onChange={onChange}
                    value={guests}
                />
            </div>

            {/* OCCASION */}
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    aria-label="Occasion"
                    onChange={onChange}
                >
                    <option name="occasion" value="Birthday">Birthday</option>
                    <option name="occasion" value="Anniversary">Anniversary</option>
                </select>
            </div>

            <input type="submit" value="Make Your Reservation" aria-label="Make Your Reservation" />
        </form>
    )
}