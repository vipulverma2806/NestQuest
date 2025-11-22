import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { categorySelect } from "../Redux/ListingSlice";
import { useDispatch, useSelector } from "react-redux";
import AddListing from "./AddListing";

const IconStyle = "w-[45px]  h-[45px] text-black";
const IconDiv =
  "flex border-1  gap-y-5  border-gray-500 bg-white p-10 h-48 w-48 rounded-xl hover:border-b-8 hover:cursor-pointer active:bg-green-500 active:text-white shadow-sm shadow-black justify-center items-center flex-col";

const AddListing2 = () => {
  const categories = [
    { id: 1, label: "Villa", icon: GiFamilyHouse },
    { id: 2, label: "Cabin", icon: GiWoodCabin },
    { id: 3, label: "Shops", icon: SiHomeassistantcommunitystore },
    { id: 4, label: "PG", icon: IoBedOutline },
    { id: 5, label: "Farm House", icon: FaTreeCity },
    { id: 6, label: "Flat", icon: BiBuildingHouse },
    { id: 7, label: "Pool House", icon: MdOutlinePool },
    { id: 8, label: "Rooms", icon: MdBedroomParent },
  ];

  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const title = useSelector((state) => state.listing.title);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(categorySelect({ category: category }));
    navigate("/addlisting3");
  };
  useEffect(() => {
    if (!title) return navigate("/addlisting");
  }, [title]);

  return (
    <div className="p-4 flex just h-full bg-gray-300">
      <nav className="flex fixed top-3 shadow-md shadow-black h-40 md:h-24 rounded-3xl bg-white w-[97%] justify-between px-10 py-5 ">
        {" "}
        <button
          onClick={() => navigate("/addlisting")}
          className="rounded-full hidden md:block bg-red-500 active:bg-red-700 p-4"
        >
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <h1
          onClick={() => navigate("/")}
          className=" text-red-500 md:h-[55px]  hover:cursor-pointer bg-white absolute left-1/2 -translate-x-1/2 bg-whit font-extrabold text-4xl"
        >
          NestQuest
        </h1>
        <div
          className={`rounded-full hidden md:block text-md font-semibold text-white
          ${category ? "bg-green-500" : "bg-red-500 active:bg-red-700"} p-4`}
        >
          {category ? `you selected ${category} category` : "Set your category"}
        </div>
        <div className="md:hidden pt-10 flex flex-row justify-around w-full  items-center  ">
          <button
            onClick={() => navigate("/addlisting")}
            className="rounded-full hover:cursor-pointer hidden sm:block  bg-red-500 active:bg-red-700 p-4"
          >
            <FaArrowLeft className="text-2xl text-white" />
          </button>
          <div
            className={`rounded-full text-md font-semibold text-white
          ${category ? "bg-green-500" : "bg-red-500 active:bg-red-700"} p-4`}
          >
            {category ? `Selected: ${category}` : "Set your category"}
          </div>
        </div>
      </nav>

      {/* <div className=" mb-5 rounded-2xl bg-white pt-52 md:pt-28 flex flex-col justify-center items-center  gap-y-5  p-1  mx-10  "> */}
      <div className="pt-20 mt-10 pb-10 flex justify-center   w-full items-center">
        {/* <div className="flex justify-center items-center shadow-gray-600 shadow-md  p-5 gap-x-10 gap-y-10 border-gray-400 rounded-2xl border flex-wrap bg-blue-100 w-[85%]"> */}

        <div className="  pt-15 bg-blue-100 shadow-md shadow-black rounded-3xl flex flex-wrap justify-center items-center gap-x-10 gap-y-10  w-[85%]  p-10 mx-10 ">
          {/* <div className="flex justify-center w-full h-auto flex-wrap gap-x-10 gap-y-10  bg-white pt-3 items-center mx-3 "> */}

          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div onClick={() => setCategory(category.label)} className={IconDiv}>
                <Icon className={IconStyle} />
                <h2>{category.label}</h2>
              </div>
            );
          })}
          {/* <div onClick={() => setCategory("cabin")} className={IconDiv}>
            <GiWoodCabin className={IconStyle} />
            <h2>Cabin</h2>
          </div>
          <div className={IconDiv} onClick={() => setCategory("Shops")}>
            <SiHomeassistantcommunitystore className={IconStyle} />
            <h2>Shops</h2>
          </div>
          <div className={IconDiv} onClick={() => setCategory("PG")}>
            <IoBedOutline className={IconStyle} />
            <h2>PG</h2>
          </div>
          <div className={IconDiv} onClick={() => setCategory("Farm House")}>
            <FaTreeCity className={IconStyle} />
            <h2>Farm House</h2>
          </div>
          <div className={IconDiv} onClick={() => setCategory("Flat")}>
            <BiBuildingHouse className={IconStyle} />
            <h2>Flat</h2>
          </div>
          <div className={IconDiv} onClick={() => setCategory("Pool House")}>
            <MdOutlinePool className={IconStyle} />
            <h2>Pool House</h2>
          </div>
          <div className={IconDiv} onClick={() => setCategory("Rooms")}>
            <MdBedroomParent className={IconStyle} />
            <h2>Rooms</h2>
          </div>
          <div className={IconDiv} onClick={() => setCategory("Villa")}>
            <GiFamilyHouse className={IconStyle} /> <h2>Villa</h2>
          </div> */}
          {/* </div> */}
          <button
            type="submit"
            onClick={category ? (e) => handleSubmit(e) : null}
            className="rounded-full w-full text-md font-semibold text-white bg-red-500 active:bg-red-700 p-4"
          >
            {category ? "Next Page" : "Select your category"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddListing2;
