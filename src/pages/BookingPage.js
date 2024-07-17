import React, { useReducer } from "react";
import "../assets/css/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import BookingConfirmed from "../components/BookingConfirmed";
import Alert from "../components/Alert";

const BookingPage = () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const seededRandom = (seed) => {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return () => {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const initializeTimes = fetchAPI(new Date());

  const updateTimes = (state, action) => {
    let times = fetchAPI(new Date(action.date));
    return times;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  const initBookData = {
    date: "",
    time: "",
    guest: 0,
    occasion: "",
    name: "",
    email: "",
    note: "",
    isBooked: false,
  };

  const updateBookData = (state, action) => {
    if (action.type === "update") {
      let newState = { ...action, isBooked: true };
      return newState;
    } else {
      return initBookData;
    }
  };

  const [bookData, setBookData] = useReducer(updateBookData, initBookData);

  const submitAPI = async (val) => {
    await wait(2000);
    return true;
  };

  return (
    <>
      <Header />
      <main>
        {bookData.isBooked ? (
          <BookingConfirmed bookData={bookData} setBookData={setBookData} />
        ) : (
          <BookingForm
            availableTimes={availableTimes}
            submitAPI={submitAPI}
            dispatch={dispatch}
            setBookData={setBookData}
          />
        )}
      </main>
      <Alert />
      <Footer />
    </>
  );
};

export default BookingPage;
