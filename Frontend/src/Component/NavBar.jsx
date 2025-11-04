import React, { useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../Context/authContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthSlice";

const IconStyle = "w-[35px]  h-[35px] text-black";
const IconDiv = "flex  hover:border-b-2 justify-center items-center flex-col";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.auth.name);
  console.log("vipul", name);
  const [menu, setMenu] = useState(false);
  // let { name } = useContext(authDataContext);

  // useEffect(() => {
  //   // dispatch(getUserData());
  // }, [auth.loading]);

  return (
    <div className="relative z-10">
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

          <div className="">
            {name ? (
              <button
                className="border-2 border-gray-400 h-[55px]  w-[100px] flex justify-between p-4 items-center  rounded-s-full rounded-e-full cursor-pointer"
                onClick={() => setMenu(!menu)}
              >
                <GiHamburgerMenu />
                <div className=" flex justify-center  ml-2 items-center bg-red-500 active:bg-red-700 h-[35px] w-[35px] text-white rounded-full">
                  <h1 className="font-semibold text-2xl text-center relative bottom-1 ">
                    {" "}
                    {name.trim()[0]}
                  </h1>
                </div>

                <div className="relative">
                  <div
                    className={`${
                      menu ? "block" : "hidden"
                    } absolute border-gray-800 border rounded-2xl bg-gray-200 right-1/2 top-7 z-30 w-[180px]`}
                  >
                    <ul className=" flex flex-col text-left  font">
                      <li
                        className="p-2 pt-4 hover:bg-gray-300 rounded-2xl "
                        onClick={() => navigate("/addlisting")}
                      >
                        List your Property
                      </li>
                      <li
                        className="hover:bg-gray-300 p-2"
                        onClick={() => navigate("/mylistings")}
                      >
                        My Listing
                      </li>
                      <li
                        className="hover:bg-gray-300  p-2 "
                        onClick={() => navigate("/mybookings")}
                      >
                        My Booking
                      </li>
                      <li
                        className="hover:bg-red-300 rounded-2xl p-2 pb-4"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                </div>
              </button>
            ) : (
              <button
                className="border-2 border-gray-400 h-[55px]  w-[120px] flex justify-between p-4 items-center  rounded-s-full hover:text-blue-600 rounded-e-full cursor-pointer"
                onClick={() => navigate("/login")}
              >
                <div className="font-semibold ">Login</div>
                <CgProfile className={IconStyle} />
              </button>
            )}
          </div>
        </div>

        {/* select category ------------------------------------ */}
        <div className="flex flex-wrap justify-center h-20 bg-white pt-3 items-center mx-3 gap-x-10">
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
