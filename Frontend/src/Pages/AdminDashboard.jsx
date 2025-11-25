import React, { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import NavBar from "../Component/NavBar";
import { getAdminData } from "../Redux/AdminSlice";
import { useDispatch, useSelector } from "react-redux";
const AdminDashboard = () => {
  
  return (
    <div className="p-4 flex just h-screen bg-gray-600">
      {/* Main Layout */}
      <div className="fixed py-4 px-4 flex gap-x-5 shadow-md shadow-black bg-gray-300 rounded-3xl pb-4 w-[97%] h-[95%]">
        {/* Sidebar */}
        <div className="w-60  shadow-xl rounded-xl p-6 bg-gray-100 h-full">
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

          <nav className="flex flex-col gap-4">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `p-2 rounded-md ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              Summary
            </NavLink>

            <NavLink
              to="statistics"
              className={({ isActive }) =>
                `p-2 rounded-md ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              Statistics
            </NavLink>

            <NavLink
              to="allListings"
              className={({ isActive }) =>
                `p-2 rounded-md ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              All Listings
            </NavLink>

            <NavLink
              to="allUsers"
              className={({ isActive }) =>
                `p-2 rounded-md ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              All Users
            </NavLink>
            <NavLink
              to="exportToCsv"
              className={({ isActive }) =>
                `p-2 rounded-md ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              Export CSV
            </NavLink>
          </nav>
        </div>

        {/* Content Area (Children Pages) */}
        <div className="flex-1 bg-gray-100 rounded-xl shadow-xl p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
("w-60  shadow-xl rounded-xl p-6 bg-gray-100 h-full");
