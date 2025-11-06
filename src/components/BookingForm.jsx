// src/components/BookingForm.jsx
import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const newDate = e.target.value;   // "YYYY-MM-DD"
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", payload: newDate }); // ✅ 触发刷新可订时段
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 可选：最小化集成 submitAPI（非必需）
    const formData = { date, time, guests, occasion };
    const ok = window.submitAPI(formData); // 返回 true/false
    console.log("submit result:", ok, formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: 300, gap: 20, margin: "0 auto", padding: 20 }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="" disabled>Select a time</option>
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number" id="guests" min="1" max="10"
        value={guests} onChange={(e) => setGuests(e.target.value)} required
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option value="" disabled>Select an occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

