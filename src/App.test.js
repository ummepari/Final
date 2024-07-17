import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, dispatch } from "./pages/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Booking Page");
  expect(headingElement).toBeInTheDocument();
});

describe("initializeTimes", () => {
  test("should return the correct initial times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
  });
});

describe("updateTimes", () => {
  test("should return the same state provided", () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { date: "2024-06-21" };

    const newState = dispatch(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
