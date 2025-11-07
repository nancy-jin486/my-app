import { initializeTimes, updateTimes } from "./components/Main";

describe("Booking API helpers", () => {
  beforeEach(() => {
    window.fetchAPI = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes returns non-empty times from fetchAPI (today)", () => {
    const mockTimes = ["17:00", "18:30", "19:00"];
    window.fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    expect(window.fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
    expect(result).toEqual(mockTimes);
    expect(result.length).toBeGreaterThan(0);
  });

  test("updateTimes returns times for selected date via fetchAPI", () => {
    const mockTimes = ["18:00", "20:00"];
    window.fetchAPI.mockReturnValue(mockTimes);

    const selected = "2025-11-07"; 
    const result = updateTimes([], { type: "UPDATE_TIMES", payload: selected });

    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
    // 断言把 payload 转成了 Date 传进 API
    const arg = window.fetchAPI.mock.calls[0][0];
    expect(arg).toBeInstanceOf(Date);
    // 可选：再校验这个 Date 的年月日是否与 payload 一致
    expect(arg.toISOString().slice(0, 10)).toBe(selected);

    expect(result).toEqual(mockTimes);
  });

  test("updateTimes returns previous state for unknown action", () => {
    const prev = ["17:00"];
    const result = updateTimes(prev, { type: "UNKNOWN" });
    expect(window.fetchAPI).not.toHaveBeenCalled();
    expect(result).toBe(prev);
  });
});
