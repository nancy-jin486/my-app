import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm validation", () => {
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // === Step 1: HTML5 attributes ===
  test("applies correct HTML5 validation attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    // date field
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");

    // time select
    expect(timeSelect).toHaveAttribute("required");

    // guests field
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");

    // occasion select
    expect(occasionSelect).toHaveAttribute("required");
  });

  // === Step 2: React validation ===
  test("disables submit button when form is invalid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    const submitBtn = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    // 初始时 isValid = false
    expect(submitBtn).toBeDisabled();

    // 填完整表单后启用按钮
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-11-10" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "3" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    expect(submitBtn).not.toBeDisabled();
  });

  test("does not call submitForm when form is invalid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    const form = screen.getByText(/make your reservation/i).closest("form");
    fireEvent.submit(form);

    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test("calls submitForm with correct data when form is valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-11-10" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Anniversary" },
    });

    fireEvent.submit(
      screen.getByText(/make your reservation/i).closest("form")
    );

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      date: "2025-11-10",
      time: "18:00",
      guests: "2",
      occasion: "Anniversary",
    });
  });
});
