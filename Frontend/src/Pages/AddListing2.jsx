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
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../Context/ListingContext";
import { useContext } from "react";

const IconStyle = "w-[45px]  h-[45px] text-black";
const IconDiv =
  "flex border-1  gap-y-5  border-gray-500 bg-white p-10 h-48 w-48 rounded-xl hover:border-b-8 hover:cursor-pointer active:bg-green-500 active:text-white justify-center items-center flex-col";

const AddListing2 = () => {
  let { category, setCategory } = useContext(listingDataContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/addlisting3");
  };

  return (
    <div>
      <nav className="flex  fixed bg-white w-full justify-between px-10 md:h-24 h-48 py-5">
        {" "}
        <button
          onClick={() => navigate("/addlisting")}
          className="rounded-full hidden md:block bg-red-500 active:bg-red-700 p-4"
        >
          <FaArrowLeft className="text-2xl text-white" />
        </button>
        <h1
          onClick={() => navigate("/")}
          className=" text-red-500 h-[55px] hover:cursor-pointer  absolute left-1/2 -translate-x-1/2 bg-white font-extrabold text-4xl"
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
            className="rounded-full bg-red-500 active:bg-red-700 p-4"
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

      <div className=" mb-5 rounded-2xl bg-white pt-52 md:pt-28 flex flex-col justify-center items-center  gap-y-5  p-1  mx-10  ">
        <div className="flex justify-center items-center shadow-gray-600 shadow-md  p-5 gap-x-10 gap-y-10 border-gray-400 rounded-2xl border-1 flex-wrap bg-blue-100 w-[85%]">
          {/* <div className="flex justify-center w-full h-auto flex-wrap gap-x-10 gap-y-10  bg-white pt-3 items-center mx-3 "> */}
          <div onClick={() => setCategory("cabin")} className={IconDiv}>
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
          </div>
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

{
  /* <div className="flex justify-center">
  <div className="w-3xs">X</div>
  <div>Y</div>
  <div className="w-3xl">Z</div>
</div>; */
}
