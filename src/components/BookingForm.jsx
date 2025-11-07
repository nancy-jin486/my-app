import { useMemo, useState } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // HTML5: 设定不能选今天之前
  const todayStr = useMemo(() => new Date().toISOString().slice(0, 10), []);

  // React 侧的轻量校验（配合 HTML5 原生 required / min / max）
  const isValid =
    date &&
    time &&
    Number(guests) >= 1 &&
    Number(guests) <= 10 &&
    occasion;

  const handleDateChange = (e) => {
    const newDate = e.target.value; // "YYYY-MM-DD"
    setDate(newDate);
    dispatch({ type: "UPDATE_TIMES", payload: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return; // 兜底：React 侧再拦一次
    submitForm({ date, time, guests, occasion });
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit} noValidate>
      {/* 日期 */}
      <div className="field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
          min={todayStr}                 // HTML5: 不允许选择今天之前
          aria-invalid={date ? "false" : "true"}
          aria-describedby="dateHelp"
        />
        <small id="dateHelp" className="help-text">
          Please choose a date (no earlier than today).
        </small>
      </div>

      {/* 时间 */}
      <div className="field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          disabled={(availableTimes || []).length === 0}  // 没有可选时段就禁用
          aria-invalid={time ? "false" : "true"}
          aria-describedby="timeHelp"
        >
          <option value="" disabled>
            Select a time
          </option>
          {(availableTimes || []).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <small id="timeHelp" className="help-text">
          Select an available time slot for your booking.
        </small>
      </div>

      {/* 人数 */}
      <div className="field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min={1}                         // HTML5: 下限
          max={10}                        // HTML5: 上限
          value={guests}
          inputMode="numeric"
          onChange={(e) => setGuests(e.target.value)}
          required
          aria-invalid={
            Number(guests) >= 1 && Number(guests) <= 10 ? "false" : "true"
          }
          aria-describedby="guestsHelp"
        />
        <small id="guestsHelp" className="help-text">
          Guests must be between 1 and 10.
        </small>
      </div>

      {/* 场合 */}
      <div className="field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-invalid={occasion ? "false" : "true"}
          aria-describedby="occasionHelp"
        >
          <option value="" disabled>
            Select an occasion
          </option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        <small id="occasionHelp" className="help-text">
          Please select an occasion.
        </small>
      </div>

      {/* 操作 */}
      <div className="form-actions">
        <button className="btn" type="submit" disabled={!isValid} aria-label="On Click - Make Your Reservation">
          Make Your Reservation
        </button>
      </div>
    </form>
  );
}




