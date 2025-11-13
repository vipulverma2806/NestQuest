import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const URL = import.meta.env.VITE_URL;
axios.defaults.withCredentials = true;
const BookingForm = ({ setBookingpopup }) => {
  const navigate = useNavigate()
  const listing = useSelector((state) => state.listing);
  const loading = useSelector((state) => state.listing.loading);
  
  const guest = useSelector((state) => state.auth.userId);
  const [minDate, setMinDate] = useState();
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [nights, setNights] = useState(0);
  const [bill, setBill] = useState({ price: 0, GST: 0, platformFee: 0 });
  const [totalRent, setTotalRent] = useState(0);
  const [invalid, setInvalid] = useState(false);
  console.log("bahar", nights);
  const host = listing.hostId;
  const handleBooking = async (propertyID) => {
    try {
      const response = await axios.post(`${URL}/bookingMain/booking/${propertyID}`, {
        host,
        guest,
        checkIn,
        checkOut,
        totalRent,
      });
      console.log("working",response);
      toast.success("Booking successful")
      navigate("/")
      
    } catch (err) {
      console.log("err",err);
    }
  };


 



  useEffect(() => {
    if (checkIn && checkOut) {
      const inDate = new Date(checkIn);
      const outDate = new Date(checkOut);
      const N = (outDate - inDate) / (1000 * 60 * 60 * 24);

      if (N > 0) {
        setNights(N);
        setBill({
          price: parseFloat(listing.rent * N),
          GST: parseFloat(((listing.rent * 7) / 100).toFixed(2)),
          platformFee: parseFloat(((listing.rent * 5) / 100).toFixed(2)),
        });
        setInvalid(false);
      } else {
        setNights(0);
        setBill({
          price: 0,
          GST: 0,
          platformFee: 0,
        });
        setInvalid(true);
      }

      console.log(N);
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    setTotalRent((bill.price + bill.GST + bill.platformFee).toFixed(2));
  }, [bill.price]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);
  return (
    <div className="fixed  z-50  h-full w-full backdrop-blur-sm bg-black/60  flex justify-center gap-x-10 items-center pt-130  overflow-scroll md:overflow-hidden lg:py-28 px-30  flex-col md:flex-row  md:py-50  top-0 ">
      <div className="min-w-[400px] min-h-[500px] mb-10 rounded-4xl border flex-col justify-center items-center p-5 bg-white">
        <h1 className="border-b text-2xl text-center pt-3 pb-5">
          Confirm and Book
        </h1>
        <form action="" className="px-3 gap-y-4 flex-col pt-4 flex">
          <div>
            <h2 className="text-xl pt-3 font-semibold">Your Trip-</h2>
          </div>
          <div className="flex text-xl justify-between items-center ">
            <label htmlFor="" className="text-left">
              CheckIn
            </label>
            <input
              type="date"
              onChange={(e) => setCheckIn(e.target.value)}
              min={minDate}
              className=" border rounded-lg p-2"
            />
          </div>
          <div className="flex text-xl justify-between items-center ">
            <label htmlFor="" className="text-left">
              CheckOut
            </label>
            <input
              type="date"
              onChange={(e) => setCheckOut(e.target.value)}
              min={minDate}
              className=" border rounded-lg p-2"
            />
          </div>

          <div className="h-5">
            {invalid ? (
              <div className="text-red-700">
                *Please select a valid date range
              </div>
            ) : null}
          </div>

          <div className="  h-full pt-2 px-7">
            <button
              type="submit "
              onClick={(e) => {
                e.preventDefault();
                handleBooking(listing.propertyID);
                console.log(listing.propertyID);
              }}
              disabled={loading}
              className={`rounded-xl  text-xl font-semibold text-white px-6 py-4 w-full  mx-auto transition ${
                loading ? "bg-green-500" : "bg-red-600 hover:bg-red-700"
              }`}
            >
              Book now
            </button>
            <button
              type="submit "
              disabled={loading}
              onClick={() => setBookingpopup(false)}
              className={
                "rounded-xl mt-5 text-xl font-semibold text-white px-6 py-4 w-full  mx-auto transition bg-red-600 hover:bg-red-700"
              }
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="min-w-[400px] min-h-[500px] mb-10  rounded-4xl border bg-white p-5">
        <div className="h-[30%] border mb-5 rounded-3xl p-3 flex ">
          <div>
            <img
              src={listing.fimg1}
              alt="not avail"
              className="w-[100px] h-[100px] object-cover rounded-xl"
            />
          </div>
          <div className=" ml-3 text-left ">
            <div>
              in {listing.landmark}, {listing.city}
            </div>
            <div>{listing.title}</div>
            <div>{listing.category}</div>
            <div>star</div>
          </div>
        </div>
        <div className="min-h-[310px] border p-5 gap-y-7 flex flex-col  text-xl rounded-3xl">
          <div className="font-bold">Booking Price</div>
          <div className="w-full   justify-between flex">
            <span>
              {listing.rent} ₹ X {nights} nights
            </span>
            <span className=" ">{bill.price} </span>
          </div>
          <div className="w-full   justify-between flex">
            <span className="">GST</span>
            <span className=" ">{bill.GST}</span>{" "}
          </div>
          <div className="  flex justify-between ">
            <span className="">Platform fee</span>
            <span className=" ">{bill.platformFee}</span>
          </div>
          <div className="  border-t pt-3 flex justify-between ">
            <span className="">Total Price</span>
            <span className=" ">₹ {totalRent}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
