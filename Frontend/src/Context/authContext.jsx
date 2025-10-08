import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
const URL = import.meta.env.VITE_URL;
export const authDataContext = createContext();

const AuthContext = ({ children }) => {
  axios.defaults.withCredentials = true;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getUserData = async () => {
    try {
      const userData = await axios.get(`${URL}/auth/getuserdata`);
      setName(result.data);
    } catch (err) {}
  };

  useEffect(() => {
    getUserData();
  }, []);

  let value = {
    name,
    setName,
    email,
    setEmail,
    getUserData,
  };
  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
