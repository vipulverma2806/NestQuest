import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
const AddListing2 = () => {
  const IconStyle = "w-[45px]  h-[45px] text-black";
  const IconDiv =
    "flex border-1  gap-y-5  border-gray-500 p-10 h-48 w-48 rounded-xl hover:border-b-8 hover:cursor-pointer  justify-center items-center flex-col";
  return (
    <div>
      <nav className="flex fixed  bg-white w-full justify-between px-10 py-5">
        <button className="rounded-full bg-red-500 p-4">
          {" "}
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <div className="rounded-full text-md font-semibold text-white bg-red-500 p-4">
          Set your category
        </div>
      </nav>
      <div className=" rounded-2xl bg-white pt-28 flex flex-col justify-center items-center  gap-y-5  p-10  mx-10  ">
        <div className="flex justify-center items-center shadow-gray-600 shadow-md  p-5 gap-x-10 gap-y-10 border-gray-400 rounded-2xl border-1 flex-wrap bg-white w-[85%]">
          {/* <div className="flex justify-center w-full h-auto flex-wrap gap-x-10 gap-y-10  bg-white pt-3 items-center mx-3 "> */}
          <div className={IconDiv}>
            <GiWoodCabin className={IconStyle} />
            <h2>Cabin</h2>
          </div>
          <div className={IconDiv}>
            <SiHomeassistantcommunitystore className={IconStyle} />
            <h2>Shops</h2>
          </div>
          <div className={IconDiv}>
            <IoBedOutline className={IconStyle} />
            <h2>PG</h2>
          </div>
          <div className={IconDiv}>
            <FaTreeCity className={IconStyle} />
            <h2>Farm House</h2>
          </div>
          <div className={IconDiv}>
            <BiBuildingHouse className={IconStyle} />
            <h2>Flat</h2>
          </div>
          <div className={IconDiv}>
            <MdOutlinePool className={IconStyle} />
            <h2>Pool House</h2>
          </div>
          <div className={IconDiv}>
            <MdBedroomParent className={IconStyle} />
            <h2>Rooms</h2>
          </div>
          <div className={IconDiv}>
            <GiFamilyHouse className={IconStyle} /> <h2>Villa</h2>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddListing2;
