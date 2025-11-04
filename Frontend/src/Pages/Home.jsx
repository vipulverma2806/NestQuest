import React from "react";
import NavBar from "../Component/NavBar";
import ProductTile from "../Component/ProductTile";
import { useEffect } from "react";
import { listingDataContext } from "../Context/ListingContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../Context/authContext";
import { getAll } from "../Redux/ListingSlice";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  // let { getAll, allProperties } = useContext(listingDataContext);
  const dispatch = useDispatch();
  const allProperties = useSelector((state) => state.listing.allProperties);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAll());
    console.log("getAll");
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <div className="md:pt-48 sm:pt-60 pt-80 flex gap-8  w-screen flex-wrap items-center justify-center p-10">
        {allProperties.map((property, i) => {
          return <ProductTile property={property} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
