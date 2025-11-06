import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section style={{ textAlign: "center", padding: "40px 0" }}>
      <h1>Reserve a Table</h1>
      <p>Please fill out the form below to make your reservation.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}
