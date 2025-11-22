import React, {  useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
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

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthSlice";
import axios from "axios";
import { setNavigate, resetListing, setSelectCat } from "../Redux/ListingSlice";
import { persistor } from "../Redux/Store";
import { toast } from "react-toastify";

import { productViewPage } from "../Redux/ListingSlice";

const URL = import.meta.env.VITE_URL;

const IconStyle = "w-[35px]  h-[35px] text-black";
const IconDiv =
  "flex  hover:border-b-2 hover:cursor-pointer justify-center items-center flex-col";
const NavBar = () => {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.auth.name);
  // const authState = useSelector((state) => state.auth);
  // console.log({ name: name, auth: authState });
  // const loading = useSelector((state) => state.auth.loading);
  const listing = useSelector((state) => state.listing);

  // console.log("checkAuth Loading", loading);
  const [menu, setMenu] = useState(false);
  const [auth, setAuth] = useState(false);
  const [loadingIcon, setLoadingIcon] = useState(false);
  const [input, setInput] = useState("");
  const [searchArr, setSearchArr] = useState([]);


  const userId = useSelector((state) => state.auth.userId);

  const searchFunction = async (input) => {
    if (!input.trim() || input.length < 3) {
      setSearchArr([])
      return null;
    }

    try {
      const result = await axios.get(
        `${URL}/listingMain/search?query=${input}`
      );
      setSearchArr(result.data);
      console.log("searchresult", result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchFunction(input);
  }, [input]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // console.log("working in useeffect Navbar");
        setLoadingIcon(true);
        const res = await axios.get(`${URL}/auth/checkOnlyAuth`);
        setLoadingIcon(false);
        // console.log("checkAuth", res);
        setAuth(true);
      } catch (err) {
        // console.log("checkAuth catch", err.response.data);
        setAuth(false);
        setLoadingIcon(false);
      }
    };

    const clearListing = () => {
      dispatch(resetListing());
      // console.log("clearlisting ");
    };
    clearListing();
    dispatch(setNavigate(false));
    checkAuth();
  }, [name]);

  const categories = [
    { id: 1, label: "All", icon: MdWhatshot },
    { id: 2, label: "Cabin", icon: GiWoodCabin },
    { id: 3, label: "Shops", icon: SiHomeassistantcommunitystore },
    { id: 4, label: "PG", icon: IoBedOutline },
    { id: 5, label: "Farm House", icon: FaTreeCity },
    { id: 6, label: "Flat", icon: BiBuildingHouse },
    { id: 7, label: "Pool House", icon: MdOutlinePool },
    { id: 8, label: "Rooms", icon: MdBedroomParent },
    { id: 9, label: "Villa", icon: GiFamilyHouse },
  ];

  const handleClick = (property) => {
    // console.log(property.isBooked);
    if (property.isBooked) {
      // console.log("property-isBooked - true" , property.guest);
      if (!(property.guest == userId)) {
        console.log("property.guestId == userId false");
        if (!(property.host == userId)) {
          toast.error("Already Booked");
          return undefined;
        }
      }
    }
    // console.log("property-isBooked", property.isBooked);
    navigate(`/propertyview/${property._id}`);
    const newProperty = { ...property, previous: "home" };
    dispatch(productViewPage(newProperty));
  };

  // console.log(listing);
  return (
    <div className="relative  bg-red-400 z-10">
      <div className="fixed py-4 px-4 shadow-md shadow-black bg-white rounded-3xl pb-4 w-[97%]">
        <div className="border-b-2 px-4 border-gray-200 pb-4 w-full flex justify-between">
          <h1 className=" text-red-500 h-[55px] font-extrabold text-4xl">
            NestQuest
          </h1>

          <div className="border-2 border-gray-400 h-[55px] md:flex lg:w-[530px] absolute left-1/2 -translate-x-1/2 md:w-[300px]  rounded-s-full hidden right-10  rounded-e-full ">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="w-full outline-0 pl-4 text-md"
            />
            <div className="flex  items-center ">
              <CiSearch className="p-1  mr-3 bg-red-500 active:bg-red-700 h-[35px] w-[35px] text-white rounded-full" />
            </div>
          </div>

          <div className="">
            {loadingIcon ? (
              <ClipLoader
                color="#e63946"
                size={40}
                aria-label="Loading Spinner"
              />
            ) : auth ? (
              <button
                className="border-2 border-gray-400 h-[55px]  w-[100px] flex justify-between p-4 items-center  rounded-s-full rounded-e-full cursor-pointer"
                onClick={() => setMenu(!menu)}
              >
                <GiHamburgerMenu />
                <div className=" flex justify-center  ml-2 items-center bg-red-500 active:bg-red-700 h-[35px] w-[35px] text-white rounded-full">
                  <h1 className="font-semibold text-2xl text-center relative bottom-1 ">
                    {" "}
                    {name?.trim()?.[0]}
                    {/* {console.log("name", name)} */}
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
        <div className="flex flex-wrap justify-center h-auto lg:h-24 bg-white pt-3 items-center mx-3 gap-x-10">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                className={IconDiv}
                onClick={() => dispatch(setSelectCat(category.label))}
              >
                <Icon className={IconStyle} />
                <h2>{category.label}</h2>
              </div>
            );
          })}
        </div>
      </div>

      {/* select cat end------------------------------------- */}

      {searchArr?.length > 0 && (
        <div className="w-[1235px] left-20 rounded-full  top-23  flex flex-col gap-5  z-50  fixed    justify-start  items-center ">
          <div
            className="w-[530px] 
              
              overflow-y-scroll fixed
              
               max-h-[300px]   flex flex-col bg-white  rounded-2xl border border-gray-600 cursor-pointer"
          >
            {searchArr.map((property, i) => {
              return (
                <div
                  onClick={
                    auth
                      ? () => handleClick(property)
                      : () => navigate("/login")
                  }
                  className="border-b flex justify-between border-[black] p-[10px]"
                >
                  {console.log(property)}
                  <span className="truncate">
                    {property.title} in {property.landmark}, {property.city}
                  </span>
                  {property.isBooked ? (
                    <span className="bg-green-700 text-white font-semibold px-3 rounded-xl">
                      Booked
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
