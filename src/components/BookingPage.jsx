import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page">
      <header className="page-header">
        <h1>Reserve a Table</h1>
        <p>Please fill out the form below to make your reservation.</p>
      </header>

      <div className="form-card">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}
