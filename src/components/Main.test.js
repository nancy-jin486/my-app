import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns expected initial times", () => {
  const result = initializeTimes();
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes returns the same state when type is not UPDATE_TIMES", () => {
  const initialState = ["17:00"];
  const result = updateTimes(initialState, { type: "UNKNOWN" });
  expect(result).toBe(initialState);
});

test("updateTimes returns new times when type is UPDATE_TIMES", () => {
  const initialState = ["17:00"];
  const result = updateTimes(initialState, { type: "UPDATE_TIMES" });
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});