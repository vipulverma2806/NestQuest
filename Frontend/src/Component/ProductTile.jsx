import React from "react";
import vipul from "../assets/vipul.jpg";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";


import { useSelector, useDispatch } from "react-redux";
import { productViewPage } from "../Redux/ListingSlice";
import './index.css';
import { toast } from "react-toastify";

const ProductTile = ({ property, previous}) => {


  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  // console.log(property);
  const newProperty = { ...property, previous };
  // console.log(newProperty)
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("onclick true access");
    console.log(userId)
    if (property.isBooked) {
      // console.log("property-isBooked - true" , property.guest);
      if (!(property.guest == userId)) {
        console.log("property.guestId == userId false");
        if (!(property.host == userId)) 
        {
          toast.error("Already Booked")
          return undefined;
        }
          
      }
    }
    // console.log("property-isBooked", property.isBooked);
    navigate(`/propertyview/${property._id}`);
    dispatch(productViewPage(newProperty));
  };

  // console.log(property);
  return (
    <div
      className="hover:cursor-pointer border shadow-2xl shadow-black  rounded-2xl relative z-0"
      onClick={userId ? handleClick :()=> console.log()}

      // onClick={property.guest == userId || property.host == userId ? handleClick :undefined}
    >
      {property.isBooked ? (
        <div className="backdrop-blur-3xl bg-white/30 h-full w-full">
          <div className=" z-10 absolute top-1 right-5 p-1  rounded-3xl mt-1 mr-1 bg-white">
            <div className=" p-1 rounded-3xl border-2   border-green-600 ">
              <IoIosCheckmarkCircleOutline className="text-green-600  inline text-xl" />
              <span className="text-green-600 inline font-semibold  text-md p-1 ">
                Booked
              </span>
            </div>
          </div>
        </div>
      ) : null}
      <div className="h-[300px] w-[300px] no-scrollbar rounded-t-2xl overflow-y-scroll scroll-smooth">
        <img
          src={property.img1}
          alt="image not found"
          className="h-[300px] w-[300px]  mb-2 rounded-t-2xl  object-cover"
        />
        <img
          src={property.img2}
          alt="image not found"
          className="h-[300px] w-[300px] mb-2   object-cover"
        />
        <img
          src={property.img3}
          alt="image not found"
          className="h-[300px] w-[300px] rounded-b-2xl  object-cover"
        />
      </div>
      <div className="rounded-b-2xl w-[300px] h-[110px]  bg-white px-4 py-2">
        <div className="flex justify-between">
          <span className="text-2xl truncate">
            in {property.city}, {property.landmark}
          </span>
          <FaStar className="text-yellow-500" />
        </div>
        <div className="text-xl truncate">{property.title}</div>
        <div className="text-xl truncate">{property.rent} rs./day</div>
      </div>
    </div>
  );
};

export default ProductTile;
