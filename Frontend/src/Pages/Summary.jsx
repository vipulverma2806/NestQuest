import React from "react";
import { useEffect } from "react";
import { getAdminData } from "../Redux/AdminSlice";
import { useDispatch, useSelector } from "react-redux";
import AdminMap from "../Component/AdminMap";
const Summary = () => {
  const dispatch = useDispatch();
  const allListings = useSelector((state) => state.adminData.allListings);
  const allReviews = useSelector((state) => state.adminData.allReviews);
  const allUsers = useSelector((state) => state.adminData.allUsers);
  const allBookings = useSelector((state) => state.adminData.allBookings);
  console.log(allListings);
  console.log(allUsers);
  console.log(allReviews);
  console.log(allBookings);
  useEffect(() => {
    dispatch(getAdminData());
    console.log("useeffect admindashboard");
  }, []);
  const divStyle = "bg-gray-100 shadow-lg border rounded-lg py-4 px-6 ";
  const hStyle = "text-lg font-bold";
  const p = "text-3xl font-semibold mt-1"
  return (
    <div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-3">
        <div className={divStyle}>
          <h3 className={hStyle}>Total Listings</h3>
          <p className={p}>{allListings.length}</p>
        </div>

        <div className={divStyle}>
          <h3 className={hStyle}>Total Users</h3>
          <p className={p}>{allUsers.length}</p>
        </div>

        <div className={divStyle}>
          <h3 className={hStyle}>Total Booked</h3>
          <p className={p}>{allBookings.length}</p>
        </div>
         <div className={divStyle}>
          <h3 className={hStyle}> Pendings for Approval:</h3>
          <p className={p}>{allBookings.length}</p>
        </div>
      </div>
      
      <AdminMap allListings={allListings}></AdminMap>
    </div>
  );
};

export default Summary;
