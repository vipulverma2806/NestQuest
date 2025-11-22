import React, { useEffect, useState } from "react";
import v1 from "../assets/v1.jpg";
import v2 from "../assets/v2.jpg";
import v3 from "../assets/v3.jpg";
import Map from "../Component/Map";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


import { useSelector, useDispatch } from "react-redux";
import { divIcon } from "leaflet";
import { setLoading } from "../Redux/AuthSlice";
import { handleSubmit } from "../Redux/ListingSlice";
const AddListing3 = () => {

  const {
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
  } = useSelector((state) => state.listing);
  const loading = useSelector((state) => state.auth.loading);
  const uploaded = useSelector((state) => state.listing.navigate);

  // console.log(listing);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!title) return navigate("/addlisting");
    if (uploaded) return navigate("/");
  }, [uploaded]);

  return (
   <div className="p-4 flex just h-full      bg-gray-300">
      {/* Navbar */}
      <nav className="flex fixed top-3 z-50 shadow-md shadow-black h-40 md:h-24 rounded-3xl bg-white w-[97%] items-center justify-between px-10 py-5 ">
        <button
          onClick={() => navigate("/addlisting2")}
          className="rounded-full hidden sm:flex bg-red-500 hover:bg-red-600 p-4 transition"
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>

        <h1
          onClick={() => navigate("/")}
          className="text-red-500 hover:cursor-pointer relative left-16 font-extrabold text-3xl sm:text-4xl"
        >
          NestQuest
        </h1>

        <div className="hidden sm:flex rounded-full text-white bg-red-500 px-5 py-3 font-semibold">
          Review your listing
        </div>
      </nav>

      <div className="pt-20 mt-10 pb-10 flex justify-center   w-full items-center">
        <div className="flex flex-col w-[90%] max-w-5xl shadow-md shadow-black rounded-3xl bg-white  p-6 md:p-8 mb-10">
          <h1 className="text-3xl font-semibold mb-4">{`${landmark}, ${city}`}</h1>

         
          <div className="flex flex-col  md:flex-row gap-4">
            <img
              src={fimg1}
              alt=""
              className="object-cover border shadow-xs shadow-black w-full md:w-[60%] h-84 rounded-lg"
            />

            <div className="flex flex-col w-full md:w-[40%] gap-4">
              <img
                src={fimg2}
                alt=""
                className="object-cover w-full h-40 rounded-lg shadow-xs shadow-black"
              />
              <img
                src={fimg3}
                alt=""
                className="object-cover w-full h-40 rounded-lg shadow-xs shadow-black"
              />
            </div>
          </div>

         
          <div className="mt-6 space-y-3">
            <p className="text-2xl font-bold">{title}</p>
            <p className="text-lg text-gray-700">{description}</p>
            <p className="text-lg font-medium text-gray-800">{category}</p>
            <p className="text-xl font-semibold text-green-600">Rent: {rent}</p>
          </div>

          {/* Map */}
          <p className="text-md mt-6 font-semibold">
            📍 Map View (Check Accuracy)
          </p>
          <div className="w-full h-96 mt-2 rounded-xl overflow-hidden">
            <Map latitude={latitude} longitude={longitude} title={title} />
          </div>

          {/* Button */}
          <button
            onClick={() => dispatch(handleSubmit({ bimg1, bimg2, bimg3 }))}
            className={`rounded-xl mt-8 text-lg md:text-xl font-semibold text-white px-6 py-4 w-full md:w-1/3 mx-auto transition ${
              loading ? "bg-green-500" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "Adding... Please wait" : "Add Listing"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddListing3;
