import React from "react";
import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import axios from "axios";
const URL = import.meta.env.VITE_URL;
export const authDataContext = createContext();
import { listingDataContext } from "./ListingContext";
import { toast } from "react-toastify";

const AuthContext = ({ children }) => {
  let { loading, setLoading } = useContext(listingDataContext);
  axios.defaults.withCredentials = true;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [listing, setListing] = useState([]);

  const getUserData = async () => {
    try {
      const userData = await axios.get(`${URL}/auth/getuserdata`);
      console.log(userData.data);
      setName(userData.data.name);
      setListing(userData.data.listing);
    } catch (err) {
      setName("");
      setListing([]);
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      const success = await axios.delete(`${URL}/auth/logout`);
      console.log("logout", success);

      setLoading(false);
      toast.success("Logout Successfull");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, [loading]);

  let value = {
    name,
    setName,
    email,
    setEmail,
    getUserData,
    listing,
    logout,
  };
  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
