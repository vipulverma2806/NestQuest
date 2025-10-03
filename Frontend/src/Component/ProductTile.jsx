import React from "react";
import vipul from "../assets/vipul.jpg";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";
import { useContext } from "react";
const ProductTile = ({ property }) => {
  let { bookPage } = useContext(listingDataContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/booking/${property._id}`);
    bookPage(property);
  };
  return (
    <div className="hover:cursor-pointer" onClick={handleClick}>
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
