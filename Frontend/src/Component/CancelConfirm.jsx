import React from "react";
import { cancelProperty } from "../Redux/ListingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CancelConfirm = ({ setCancelPopup, PropertyID }) => {
  const dispatch = useDispatch();
  const canceled = useSelector((state) => state.listing.navigate);
  const loading = useSelector((state) => state.listing.loading);
  const navigate = useNavigate();
  useEffect(() => {
    if (canceled) return navigate("/");
  }, [canceled]);

  return (
    <div className="fixed  z-50  h-full w-full backdrop-blur-sm bg-black/60  flex justify-center items-center py-42 lg:py-48 px-20 sm:px-32 md:px-48 lg:px-80 top-0 ">
      <div className=" w-full h-full rounded-4xl shadow-2xl shadow-red-800 bg-white">
        <div className="w-full md:h-[35%] lg:h-1/2 h-2/5 text-center text-3xl font-semibold bg-geen-500 items-center flex justify-center">
          Are you sure?
        </div>
        <div className="flex justify-center flex-col lg:flex-row gap-y-5 items-center  text-white  gap-x-12 text-2xl ">
          <button
            onClick={() => dispatch(cancelProperty(PropertyID))}
            className={`bg-red-600 lg:w-[35%]  hover:bg-red-700  px-6 py-2 rounded-xl ${
              loading ? "bg-green-500" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "wait..." : "Cancel booking"}
          </button>
          <button
            onClick={() => setCancelPopup(false)}
            className="bg-blue-600 px-6 py-2 rounded-xl hover:bg-blue-700 lg:w-[35%] active:bg-blue-800"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelConfirm;
