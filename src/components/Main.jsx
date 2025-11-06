import { useEffect, useReducer } from "react";
import BookingPage from "./BookingPage";

const reducer = (state, action) =>
  action.type === "UPDATE_TIMES"
    ? window.fetchAPI(new Date(action.payload))
    : state;

export default function Main() {
  const [availableTimes, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({
      type: "UPDATE_TIMES",
      payload: new Date().toISOString().slice(0, 10),
    });
  }, []);

  return (
    <main>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}


