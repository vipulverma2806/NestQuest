import React from "react";
import vipul from "../assets/vipul.jpg";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { authDataContext } from "../Context/authContext";
import { useSelector, useDispatch } from "react-redux";
import { productViewPage } from "../Redux/ListingSlice";
const ProductTile = ({ property, previous }) => {
  // let { productViewPage } = useContext(listingDataContext);
  // let { userId } = useContext(authDataContext);
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  // console.log(property);
  const newProperty = { ...property, previous };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/propertyview/${property._id}`);
    dispatch(productViewPage(newProperty));
  };
  return (
    <div className="hover:cursor-pointer relative z-0" onClick={handleClick}>
      {property.booked ? (
        <div className=" z-10 absolute right-5 p-1  rounded-3xl mt-1 mr-1 bg-white">
          <div className=" p-1 rounded-3xl border-2   border-green-600 ">
            <IoIosCheckmarkCircleOutline className="text-green-600  inline text-xl" />
            <span className="text-green-600 inline font-semibold  text-md p-1 ">
              Booked
            </span>
          </div>
        </div>
      ) : null}
      <div className="h-[300px] w-[300px]  rounded-2xl overflow-y-scroll">
        <img
          src={property.img1}
          alt="image not found"
          className="h-[300px] w-[300px] mb-2 rounded-2xl  object-cover"
        />
        <img
          src={property.img2}
          alt="image not found"
          className="h-[300px] w-[300px] mb-2 rounded-2xl  object-cover"
        />
        <img
          src={property.img3}
          alt="image not found"
          className="h-[300px] w-[300px] rounded-2xl  object-cover"
        />
      </div>
      <div className="px-1 py-2">
        <div className="flex justify-between">
          <span className="text-2xl">
            in {property.city}, {property.landmark}
          </span>
          <FaStar className="text-yellow-500" />
        </div>
        <div className="text-xl">{property.title}</div>
        <div className="text-xl">{property.rent} rs./day</div>
      </div>
    </div>
  );
};

export default ProductTile;
