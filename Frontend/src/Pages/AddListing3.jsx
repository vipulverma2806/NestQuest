import React from "react";
import v1 from "../assets/v1.jpg";
import v2 from "../assets/v2.jpg";
import v3 from "../assets/v3.jpg";
import { FaArrowLeft } from "react-icons/fa";
const AddListing3 = () => {
  return (
    <div className="flex justify-center">
      <nav className="flex fixed  bg-white w-full justify-between px-10 py-5">
        <button className="rounded-full bg-red-500 p-4">
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <div className="rounded-full text-md font-semibold text-white bg-red-500 p-4">
          Review
        </div>
      </nav>
      <div className="pt-30 flex flex-col w-[1008px] bg-blue-500 px-10">
        <h1>Address</h1>
        <div className="h-[408px] border-red-500 border-4 flex w-[1008px]  bg-amber-400 justify-center  ">
          <div>
            <img
              src={v1}
              alt=""
              className="h-[400px] w-[500px] object-cover  "
            />
          </div>
          <div className="flex flex-col border-l-4 border-red-500 h-[400px]">
            <img
              src={v2}
              alt=""
              className="object-cover border-b-4 border-red-500 w-[500px] h-1/2"
            />
            <img src={v3} alt="" className="object-cover w-[500px] h-1/2" />
          </div>
        </div>
        <p>title</p>
        <p>description</p>
        <p>Price</p>
        <button>Add Listing</button>
      </div>
    </div>
  );
};

export default AddListing3;
