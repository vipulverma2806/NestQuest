import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getAdminData } from "../Redux/AdminSlice";
const URL = import.meta.env.VITE_URL;
const AllListings = () => {
  axios.defaults.withCredentials = true;
  const allListings = useSelector((state) => state.adminData.allListings);
  const allUsers = useSelector((state) => state.adminData.allUsers);
  console.log(allListings[0]);
  const [details, setDetails] = useState(null);
  const dispatch = useDispatch();
  const deleteProperty = async (propertyID) => {
    console.log("inside deleteproperty");
    try {
      console.log("inside deleteproperty try");
      const deleted = await axios.delete(
        `${URL}/adminRoute/deleteByAdmin/${propertyID}`
      );
      dispatch(getAdminData());

      // console.log("deleted", deleted);
    } catch (err) {
      return console.log("Error occured", err);
    }
  };

  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold ml-2 text-gray-800 mb-6">
        {" "}
        AllListings
      </h2>

      {allListings.map((listing, i) => {
        return (
          <div key={i}>
            <div className="h-13 border  grid grid-cols-4 grid-rows-1  rounded-md shadow-2xs pl-5 ">
              <span className="text-left bg-amber-40 py-3 truncate grid ">
                {listing.city}
              </span>
              <span className="bg-red- truncate py-3">{listing.category}</span>
              <span className="bg-blue-40 truncate py-3"> {listing.title}</span>
              <span className=" flex justify-evenly g-blue-500 items-center">
                <button
                  onClick={() => setDetails(details === i ? null : i)}
                  className="bg-blue-600  w-2/5 rounded-xl text-white text-center truncate h-10 "
                >
                  Details
                </button>
                <button
                  onClick={() => deleteProperty(listing._id)}
                  className="bg-red-600 ml-2 w-2/5 rounded-xl text-white text-center truncate h-10"
                >
                  Delete
                </button>
              </span>
            </div>

            <div
              className={`shadow shadow-black grid grid-cols-6 mt-1  p-1 rounded-xl h-53 w-full ${
                details == i ? "block" : "hidden"
              }`}
            >
              <div className="grid grid-cols-3 gap-x-1 col-span-4">
                <img
                  src={listing.img1}
                  alt="image not found"
                  className="h-[200px] w-  rounded-2xl  object-cover"
                />
                <img
                  src={listing.img2}
                  alt="image not found"
                  className="h-[200px] w-auto  rounded-2xl object-cover"
                />
                <img
                  src={listing.img3}
                  alt="image not found"
                  className="h-[200px] w-auto rounded-2xl object-cover"
                />
              </div>
              <div className="rounded-b-2xl  col-span-2  px-4 py-2">
                <div className="flex justify-between">
                  <span className="text-2xl truncate ">in {listing.city}</span>
                  <span
                    className={` w-25 border-3 text-center text-lg rounded-2xl ${
                      listing.isBooked == true
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {listing.isBooked == true ? "Booked" : "Available"}
                  </span>
                </div>
                <div className="text-xl truncate"> near {listing.landmark}</div>
                <div className="text-xl truncate">{listing.title}</div>
                <div className="text-xl truncate">{listing.category} </div>
                <div className="text-xl truncate">{listing.rent} rs./day </div>
                <div className="text-lg truncate">by {listing.host.name}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllListings;
