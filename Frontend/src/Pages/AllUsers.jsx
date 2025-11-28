import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getAdminData } from "../Redux/AdminSlice";
const URL = import.meta.env.VITE_URL;
const AllUsers = () => {
  axios.defaults.withCredentials = true;
  const allUsers = useSelector((state) => state.adminData.allUsers);
  const adminInfo = useSelector((state)=>state.adminData.adminInfo)
  
  const [details, setDetails] = useState(null);
  const dispatch = useDispatch();
  
  const removeUser = async (hostId) => {
    console.log("inside deleteproperty");
    try {
      console.log("inside deleteproperty try");
      const deleted = await axios.delete(
        `${URL}/adminRoute/deleteUser/${hostId}`
      );
      dispatch(getAdminData());

      // console.log("deleted", deleted);
    } catch (err) {
      return console.log("Error occured", err);
    }
  };

  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-2xl font-bold ml-2 text-gray-800 mb-1">AllUsers</h2>
      <div className="h-13 w-190 border-2 font-semibold grid grid-cols-4 grid-rows-1  rounded-md  pl-5 ">
        <span className="text-left   py-3 truncate grid">Name</span>
        <span className="text-left truncate py-3">Email</span>
        <span className="bg-blue-40 text-center truncate py-3">Listings</span>
        <span className=" flex justify-center px-2 items-center py-3">Action</span>
      </div>
      {allUsers.map((user, i) => {
        return (
          <div key={i}>
            <div className={`${user._id == adminInfo._id ? "hidden" :"block" } h-14 border w-190    grid grid-cols-4 grid-rows-1  rounded-md shadow-2xs pl-5 `}>
              <span className="text-left  py-3 truncate grid ">
                {user.name}
              </span>
       
              <span className="text-left truncate py-3">{user.email}</span>
              <span className="bg-blue-40 text-center truncate py-3">
                {" "}
                {user.listing?.length}
              </span>
              <div className=" flex   px-2 items-center">
                <button
                  onClick={() => removeUser(user._id)}
                  className="bg-red-600 ml-2 w-full rounded-xl text-white text-center truncate h-10"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllUsers;
