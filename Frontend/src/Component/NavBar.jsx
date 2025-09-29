import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";

const NavBar = () => {
  const IconStyle = "w-[35px]  h-[35px] text-black";
  const IconDiv = "flex  hover:border-b-2 justify-center items-center flex-col";

  return (
    <div className="">
      <div className="fixed py-4 px-4 bg-white pb-4 w-full">
        <div className="border-b-2 px-4 border-gray-200 pb-4 w-full flex justify-between">
          <h1 className=" text-red-500 h-[55px] font-extrabold text-4xl">
            NestQuest
          </h1>
          <div className="border-2 border-gray-400 h-[55px] md:flex lg:w-[530px] absolute left-1/2 -translate-x-1/2 md:w-[300px]  rounded-s-full  right-10  hidden rounded-e-full ">
            <input type="text" className="w-full outline-0 pl-4 text-md" />
            <div className="flex  items-center ">
              <CiSearch className="p-1  mr-3 bg-red-500 active:bg-red-700 h-[35px] w-[35px] text-white rounded-full" />
            </div>
          </div>
          <div className="border-2 border-gray-400 h-[55px]  w-[100px] flex justify-between p-4 items-center  rounded-s-full rounded-e-full ">
            <GiHamburgerMenu />
            {"user" ? (
              <div className="text-center flex justify-center ml-2 items-center bg-red-500 active:bg-red-700 h-[35px] w-[35px] text-white rounded-full">
                N
              </div>
            ) : (
              <CgProfile className={IconStyle} />
            )}
          </div>
        </div>

        {/* select category ------------------------------------ */}
        <div className="flex flex-wrap justify-center h-18 bg-white pt-3 items-center mx-3 gap-x-10">
          <div className={IconDiv}>
            <MdWhatshot className={IconStyle} />
            <h2>Trending</h2>
          </div>

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
        </div>
      </div>

      {/* select cat end------------------------------------- */}
    </div>
  );
};

export default NavBar;
