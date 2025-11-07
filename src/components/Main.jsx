import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";

// ==== add for unit tests ====
export const initializeTimes = () => window.fetchAPI(new Date());
export const updateTimes = (state, action) =>
  action.type === "UPDATE_TIMES"
    ? window.fetchAPI(new Date(action.payload))
    : state;
// ============================

const reducer = (state, action) =>
  action.type === "UPDATE_TIMES"
    ? window.fetchAPI(new Date(action.payload))
    : state;

export default function Main() {
  const [availableTimes, dispatch] = useReducer(reducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "UPDATE_TIMES",
      payload: new Date().toISOString().slice(0, 10),
    });
  }, []);

  // 表单提交：调用 submitAPI 成功则跳到结果页
  const submitForm = (formData) => {
    const ok = window.submitAPI(formData);
    if (ok) navigate("/booking/confirmed", { state: { booking: formData } });
  };

  return (
    <main>
      <BookingPage
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}



