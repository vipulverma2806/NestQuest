import React from "react";
import v1 from "../assets/v1.jpg";
import v2 from "../assets/v2.jpg";
import v3 from "../assets/v3.jpg";
import Map from "../Component/Map";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { listingDataContext } from "../Context/ListingContext";
import { bookingDataContext } from "../Context/BookingContext";
import { useParams } from "react-router-dom";
const Booking = () => {
  const property = useParams();
  const navigate = useNavigate();
  let {
    title,
    description,
    fimg1,
    fimg2,
    fimg3,
    rent,
    city,
    landmark,
    latitude,
    longitude,
    category,

    setLoading,
    loading,
    allProperties,
    propertyID,
    setPropertyID,
  } = useContext(listingDataContext);

  let { handleBooking } = useContext(bookingDataContext);

  return (
    <div className="flex justify-center">
      <nav className="flex fixed bg-white w-full z-20 justify-between px-10 h-24 py-5">
        <button
          onClick={() => navigate("/")}
          className="rounded-full hover:cursor-pointer hidden sm:block bg-red-500 active:bg-red-700 p-4"
        >
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <h1
          onClick={() => navigate("/")}
          className=" text-red-500 hover:cursor-pointer absolute left-1/2 -translate-x-1/2 h-[55px] font-extrabold text-4xl"
        >
          NestQuest
        </h1>
        <div className="rounded-full text-md font-semibold text-white hidden sm:block bg-red-500 active:bg-red-700 p-4">
          Booking Page
        </div>
      </nav>
      <div className="mt-30 flex flex-col justify-center m-10 shadow-gray-600 shadow-md  p-5 gap-x-10 gap-y-5 border-gray-400 rounded-2xl border-1 flex-wrap bg-blue-100 w-[85%]">
        <h1 className="text-4xl pl-3">{`${landmark} , ${city}`}</h1>
        <div className="h-[408px] border-red-500 border-4 flex w-[1008px]   justify-center  ">
          <div>
            <img
              src={fimg1}
              alt=""
              className="h-[400px] w-[500px] object-cover  "
            />
          </div>
          <div className="flex flex-col border-l-4 border-red-500 h-[400px]">
            <img
              src={fimg2}
              alt=""
              className="object-cover border-b-4 border-red-500 w-[500px] h-1/2"
            />
            <img src={fimg3} alt="" className="object-cover w-[500px] h-1/2" />
          </div>
        </div>
        <p className="text-3xl pl-3">{title} </p>
        <p className="text-2xl pl-3">{description}</p>
        <p className="text-2xl pl-3">{category}</p>
        <p className="text-xl pl-3">Rent : {rent}</p>
        <p className="text-md pl-3"> Map View (Check Accuracy) </p>

        <Map latitude={latitude} longitude={longitude} title={title}></Map>

        <button
          onClick={() => handleBooking(propertyID)}
          className={`rounded-full hover:cursor-pointer text-xl font-semibold text-white  active:bg-red-700 w-1/4 p-4 ${
            loading ? "bg-green-500" : "bg-red-600"
          }`}
        >
          {loading ? "Booking please wait..." : "Book"}
        </button>
      </div>
    </div>
  );
};

export default Booking;
