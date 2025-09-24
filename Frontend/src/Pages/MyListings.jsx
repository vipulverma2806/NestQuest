import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import ProductTile from "../Component/ProductTile";
const MyListings = () => {
  return (
    <div>
      <nav className="flex fixed bg-white w-full justify-between px-10 h-24 py-5">
        <button className="rounded-full hover:cursor-pointer hidden sm:block  bg-red-500 p-4">
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <h1 className=" text-red-500 absolute left-1/2 -translate-x-1/2 h-[55px] font-extrabold text-4xl">
          NestQuest
        </h1>
        <div className="rounded-full text-md hidden sm:block font-semibold text-white bg-red-500 p-4">
          My Listings
        </div>
      </nav>
      <div className="flex flex-wrap p-44">
        <ProductTile></ProductTile>
      </div>
    </div>
  );
};

export default MyListings;
