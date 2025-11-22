import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProductTile from "../Component/ProductTile";
import axios from "axios";
import {  useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../Redux/AuthSlice";
const MyBookings = () => {
  const navigate = useNavigate();

  let booking = useSelector((state) => state.auth.booking);
  // console.log(booking);

  const loading = useSelector((state) => state.listing.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!booking) {
      return dispatch(getUserData());
    }
  }, [loading]);
  // useMemo(() => {
  //   dispatch(getUserData());
  // }, [loading]);
  return (
    <div className="p-4 flex just h-screen bg-gray-300">
      <nav
        className="flex  z-50  bg-white  justify-between px-10  py-5
      
      
      fixed  shadow-md shadow-black  rounded-3xl pb-4 w-[97%]

      "
      >
        <button
          onClick={() => navigate("/")}
          className="rounded-full hidden sm:block  hover:cursor-pointer bg-red-500 active:bg-red-700 p-4"
        >
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <h1
          onClick={() => navigate("/")}
          className=" text-red-500 absolute left-1/2 -translate-x-1/2 h-[55px] font-extrabold text-4xl"
        >
          NestQuest
        </h1>
        <div className="rounded-full hidden sm:block  text-md font-semibold text-white bg-red-500 active:bg-red-700 p-4">
          My Bookings
        </div>
      </nav>
      <div className="md:pt-36 sm:pt-60 pt-80 flex gap-16  w-screen flex-wrap items-center justify-center p-10">
        {booking.length > 0
          ? booking.map((property, i) => {
              return (
                <ProductTile
                  key={i}
                  property={property}
                  previous={"mybookings"}
                ></ProductTile>
              );
            })
          : "Not Available"}
      </div>
    </div>
  );
};

export default MyBookings;
