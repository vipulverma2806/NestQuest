import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const Protected = ({ children }) => {
  const URL = import.meta.env.VITE_URL;
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  //----------checkauth--------
  const checkAuth = async () => {
    try {
      const res = await axios.get(`${URL}/auth/checkOnlyAuth`);
      // console.log(res);
      setAuth(true);
      setLoading(false);
      // console.log("Auth Success", res);
    } catch (err) {
      console.log("auth", err.response);
      setAuth(false);
      navigate("/");
    }
  };
  if (loading) return <div>loading</div>;
  return children;
};

export default Protected;
