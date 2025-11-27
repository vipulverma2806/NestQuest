import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import AddListing from "./Pages/AddListing";
import AddListing2 from "./Pages/AddListing2";
import AddListing3 from "./Pages/AddListing3";
import MyListings from "./Pages/MyListings";
import { ToastContainer } from "react-toastify";
import MyBookings from "./Pages/MyBookings";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PropertyView from "./Pages/PropertyView";
import Protected from "./Component/Protected";
import ProtectedLayout from "./Component/ProtectedLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import Summary from "./Pages/Summary"
import Statistics from "./Pages/Statistics"

import AllUsers from "./Pages/AllUsers"
import AllListings from "./Pages/AllListings";
const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/addlisting" element={<AddListing />}></Route>
          <Route path="/addlisting2" element={<AddListing2 />}></Route>
          <Route path="/addlisting3" element={<AddListing3 />}></Route>
          <Route path="/mylistings" element={<MyListings />}></Route>
          <Route path="/mybookings" element={<MyBookings />}></Route>
          <Route path="/propertyview/:id" element={<PropertyView />}></Route>
          {/* adminDashboard---------------------------------- */}
          <Route path="/adminDashboard" element={<AdminDashboard />}>
            <Route index element={<Summary />}></Route>
            
            <Route path="statistics" element={<Statistics />}></Route>
            <Route path="allListings" element={<AllListings />}></Route>
            <Route path="allUsers" element={<AllUsers />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
