import React from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
const URL = import.meta.env.VITE_URL
export const authDataContext = createContext();

const authContext = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getName = async() =>{
    try{
      const result = await axios.get(`${URL}/auth/name`)
    }
  catch(err){

  }
  let value = {
    name,
    setName,
    email,
    setEmail,
    getName
  };
  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
};

export default authContext;
