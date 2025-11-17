import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProductTile from "../Component/ProductTile";
import axios from "axios";
// import { authDataContext } from "../Context/authContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../Redux/AuthSlice";
const MyListings = () => {
  // let { listing } = useContext(authDataContext);
  let listing = useSelector((state) => state.auth.listing);
  // console.log(listing);
  const navigate = useNavigate();

  const loading = useSelector((state) => state.listing.loading);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // if (!listing) {
  //   //   return dispatch(getUserData());
  //   // }
  //   dispatch(getUserData());
  // }, [loading]);

  return (
    <div className="p-4 flex just h-full bg-gray-300">
      <nav className="flex  z-50  bg-white  justify-between px-10  py-5 fixed  shadow-md shadow-black  rounded-3xl pb-4 w-[97%]

      ">
        <button
          onClick={() => navigate("/")}
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
      <div className="md:pt-36 sm:pt-60 pt-80 flex gap-10 h-screen  w-screen flex-wrap items-center justify-center p-5">
        {listing.length > 0 ? (
          listing.map((property, i) => {
            return (
              <ProductTile
                property={property}
                previous={"mylistings"}
              ></ProductTile>
            );
          })
        ) : (
          <div className=" w-full text-xl   font-bold text-center ">
            Not Available
          </div>
        )}

        {/* {listing.map((property, i) => {
          return (
            <ProductTile
              property={property}
              previous={"mylistings"}
            ></ProductTile>
          );
        })} */}
      </div>
    </div>
  );

  // return (
  //   <div className="min-h-screen bg-gray-50">
  //     {/* NAVBAR */}
  //     <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
  //       <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
  //         {/* Back Button */}
  //         <button
  //           onClick={() => navigate("/")}
  //           className="rounded-full hidden sm:flex bg-red-500 hover:bg-red-600 p-3 transition"
  //         >
  //           <FaArrowLeft className="text-2xl text-white" />
  //         </button>

  //         {/* Logo / Title */}
  //         <h1
  //           onClick={() => navigate("/")}
  //           className="text-red-500 font-extrabold text-3xl sm:text-4xl cursor-pointer"
  //         >
  //           NestQuest
  //         </h1>

  //         {/* Right Button */}
  //         <button className="hidden sm:flex bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 px-6 py-3 transition">
  //           My Listings
  //         </button>
  //       </div>
  //     </nav>

  //     {/* CONTENT */}
  //     <div className="pt-36 md:pt-40 lg:pt-44 px-4 md:px-10">
  //       <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
  //         Your Properties
  //       </h2>

  //       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
  //         {listing.map((property, i) => (
  //           <ProductTile key={i} property={property} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default MyListings;
