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
        <Route path="/addlisting" element={<AddListing />}></Route>
        <Route path="/addlisting2" element={<AddListing2 />}></Route>
        <Route path="/addlisting3" element={<AddListing3 />}></Route>
        <Route path="/mylistings" element={<MyListings />}></Route>
        <Route path="/mybookings" element={<MyBookings />}></Route>
        <Route path="/propertyview/:id" element={<PropertyView />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
