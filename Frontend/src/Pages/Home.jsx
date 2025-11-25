import React from "react";
import NavBar from "../Component/NavBar";
import ProductTile from "../Component/ProductTile";
import { useEffect } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAll } from "../Redux/ListingSlice";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, setResetId } from "../Redux/AuthSlice";

const Home = () => {
  const dispatch = useDispatch();
  const allProperties = useSelector((state) => state.listing.allProperties);
  const loading = useSelector((state) => state.auth.loading);
  const selectCat = useSelector((state) => state.listing.selectCat);
  const [sorted, setSorted] = useState([]);
  const [auth, setAuth] = useState(false);
  const [online, setOnline] = useState(true);
  const checkAuth = async () => {
    try {
      const res = await axios.get(`${URL}/auth/checkOnlyAuth`);
      // console.log(res);
      setAuth(true);
      // console.log("Auth Success", res);
    } catch (err) {
      console.log("auth", err.response);
      setAuth(false);
    }
  };

  useEffect(() => {
    window.addEventListener("online", dispatch(getUserData()));
    window.addEventListener("offline", dispatch(setResetId()));

    return () => {
      window.removeEventListener("online", () => dispatch(getUserData()));
      window.removeEventListener("offline", () => dispatch(setResetId()));
    };
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAll());
    checkAuth();
    // console.log("getAll");
  }, [loading]);

  useEffect(() => {
    if (selectCat == "All") {
      setSorted(allProperties);
    } else {
      const sorted = allProperties.filter(
        (property) => property.category == selectCat
      );
      setSorted(sorted);
    }
  }, [selectCat, allProperties]);
  // console.log(allProperties[0]);
  return (
    <div className="p-4 flex just h-full bg-gray-300">
      <NavBar setAuth={auth}></NavBar>
      <div className="md:pt-57 sm:pt-70 pt-80 flex gap-8 w-screen flex-wrap items-center justify-center p-10">
        {online ? (
          sorted.length === 0 ? (
            <div className=" w-full h-screen flex-1 text-xl pt-10 font-bold text-center ">
              Not Available
            </div>
          ) : (
            sorted.map((property, i) => {
              return (
                <ProductTile
                  setAuth={auth}
                  property={property}
                  previous={"home"}
                  key={i}
                />
              );
            })
          )
        ) : (
          <div className=" w-full h-screen flex-1 text-xl pt-10 font-bold text-center ">
            Please Connect to Internet
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
