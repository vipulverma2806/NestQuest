import React, { useState } from "react";
import { deleteProperty } from "../Redux/ListingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DeleteConfirm = ({ setDeletePopup, PropertyID }) => {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState()
  const deleted = useSelector((state) => state.listing.navigate);
  // const loading = useSelector((state) => state.listing.loading);
  const navigate = useNavigate();
  useEffect(() => {
    if (deleted) return navigate("/");
    return ()=> setLoading(false);
  }, [deleted]);

  return (
    <div className="fixed  z-50  h-full w-full backdrop-blur-sm bg-black/60  flex justify-center items-center py-42 lg:py-48 px-20 sm:px-32 md:px-48 lg:px-80 top-0 ">
      <div className=" w-full h-full rounded-4xl shadow-2xl shadow-red-800 bg-white">
        <div className="w-full h-1/2 text-center text-3xl font-semibold items-center flex justify-center">
          Are you sure?
        </div>
        <div className="flex justify-center flex-col lg:flex-row gap-y-5 items-center  text-white  gap-x-12 text-2xl ">
          <button
          disabled={loading}
            onClick={() =>{ 
              setLoading(true)
              dispatch(deleteProperty(PropertyID))}}
            className={` px-6 py-2 rounded-xl ${
              loading ? "bg-green-500" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "wait..." : "Delete"}
          </button>
          <button
            onClick={() => setDeletePopup(false)}
            className="bg-blue-600 px-6 py-2 rounded-xl hover:bg-blue-700 active:bg-blue-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
