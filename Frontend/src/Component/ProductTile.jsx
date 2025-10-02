import React from "react";
import vipul from "../assets/vipul.jpg";
import { FaStar } from "react-icons/fa6";
const ProductTile = ({ property }) => {
  return (
    <div className="">
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
          <span className="text-2xl">In address</span>
          <FaStar className="text-yellow-500" />
        </div>
        <div className="text-xl">Title</div>
        <div className="text-xl">price</div>
      </div>
    </div>
  );
};

export default ProductTile;
