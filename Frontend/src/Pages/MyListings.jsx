import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProductTile from "../Component/ProductTile";
import axios from "axios";
import { authDataContext } from "../Context/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const MyListings = () => {
  // let { listing } = useContext(authDataContext);
  let listing = useSelector((state) => state.auth.listing);
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex fixed bg-white w-full justify-between px-10 h-24 py-5">
        <button
          onClick={() => navigate("/mylistings")}
          className="rounded-full hover:cursor-pointer hidden sm:block  bg-red-500 active:bg-red-700 p-4"
        >
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <h1
          onClick={() => navigate("/")}
          className=" text-red-500 absolute left-1/2 -translate-x-1/2 h-[55px] font-extrabold text-4xl"
        >
          NestQuest
        </h1>
        <div className="rounded-full text-md hidden sm:block font-semibold text-white bg-red-500 active:bg-red-700 p-4">
          My Listings
        </div>
      </nav>
      <div className="md:pt-48 sm:pt-60 pt-80 flex gap-8  w-screen flex-wrap items-center justify-center p-10">
        {listing.map((property, i) => {
          return <ProductTile property={property}></ProductTile>;
        })}
      </div>
    </div>
  );
};

export default MyListings;
