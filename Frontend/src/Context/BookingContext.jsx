import React from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const bookingDataContext = createContext();
const URL = import.meta.env.VITE_URL;
const BookingContext = ({ children }) => {
  const navigate = useNavigate();
  // const [propertyID, setPropertyID] = useState(0);
  const notify = (result) => {
    result.data === true
      ? toast.success("Booked Successfully")
      : toast.error("Some Error Occured");

    navigate("/");
  };
  const handleBooking = async (propertyID) => {
    try {
      // console.log(propertyID);
      const result = await axios.put(`${URL}/booking/bookingMain`, {
        propertyID,
      });
      // console.log(result);
      notify(result);
    } catch (err) {
      // console.log(err);
    }
  };

  let value = {
    handleBooking,
  };
  return (
    <bookingDataContext.Provider value={value}>
      {children}
    </bookingDataContext.Provider>
  );
};

export default BookingContext;
