import React from "react";
import { createContext } from "react";
import axios from "axios";
export const bookingDataContext = createContext();
const BookingContext = (children) => {
  // const [propertyID , setPropertyID] = useState(0)
  const handleBooking = async (propertyID) => {
    try {
      const result = await axios.put();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <bookingDataContext.Provider value={value}>
      {children}
    </bookingDataContext.Provider>
  );
};

export default BookingContext;
